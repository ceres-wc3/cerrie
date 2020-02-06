import Player from "./types/player"
import Unit from "./types/unit"
import Item from "./types/item"
import Destructable from "./types/destructable"
import { Event, AnyEventCallback, OnRegister } from "./event"
import { wholeRegion } from "./mapbounds"

/** @tuplereturn */
type Collector<C extends AnyEventCallback> = () => Parameters<C>
/** @tuplereturn */
type Tupler = (...arg: any[]) => any[]

enum EventType {
    UNIT,
    PLAYER
}

const context = util.context("war3event", {
    collectors: new Map<jeventid, Collector<AnyEventCallback>>(),
    activatedHandlers: new Map<jeventid, jtrigger>()
})

class War3Event<C extends AnyEventCallback> extends Event<C> {
    private _type: EventType
    private _warEventId: jeventid

    constructor(id: string, type: EventType, eventId: jeventid, collector: Collector<C>) {
        super(id)

        context.collectors.set(eventId, collector)

        this._warEventId = eventId
        this._type = type
    }
}

function activateUnitEvent<C extends AnyEventCallback>(e: War3Event<C>): void {
    const eventId = (e as any)._warEventId
    if (context.activatedHandlers.has(eventId)) {
        return
    }

    const trigger = CreateTrigger()
    const collector = context.collectors.get(eventId)! as Collector<C>
    TriggerAddAction(trigger, () => {
        Event.call(e, ...collector())
    })

    TriggerRegisterAnyUnitEventBJ(trigger, eventId as jplayerunitevent)
    context.activatedHandlers.set(eventId, trigger)
}

OnRegister.register(e => {
    if (e instanceof War3Event) {
        if ((e as any)._type == EventType.UNIT) {
            activateUnitEvent(e)
        }
    }
})

function u<C extends AnyEventCallback>(arg: {
    id: string
    eid: jplayerunitevent
    c?: Collector<C>
}): Event<C> {
    return new War3Event<C>(arg.id, EventType.UNIT, arg.eid, arg.c!)
}

export namespace U {
    type UnitCallback = (unit: Unit) => void

    export const Created = new Event<UnitCallback>("u/created")
    export const Removed = new Event<UnitCallback>("u/removed")

    /* Death */
    type DeathCallback = (dying: Unit, killer: Unit) => void
    export const Death = u<DeathCallback>({
        id: "u/death",
        eid: EVENT_PLAYER_UNIT_DEATH,
        c: () => [Unit.of(GetDyingUnit()), Unit.of(GetKillingUnit())]
    })
    export const Decay = u<UnitCallback>({
        id: "u/decay",
        eid: EVENT_PLAYER_UNIT_DECAY,
        c: () => [Unit.of(GetDecayingUnit())]
    })

    /* Detection */
    type DetectedCallback = (detected: Unit, detector: Player) => void
    export const Detect = u<DetectedCallback>({
        id: "u/detected",
        eid: EVENT_PLAYER_UNIT_DETECTED,
        c: () => [Unit.of(GetDetectedUnit()), Player.of(GetEventDetectingPlayer())]
    })
    export const Hide = u<UnitCallback>({
        id: "u/hidden",
        eid: EVENT_PLAYER_UNIT_HIDDEN,
        c: () => [Unit.of(GetTriggerUnit())]
    })

    /* Selection */
    type SelectCallback = (selected: Unit, selector: Player) => void
    export const Select = u<SelectCallback>({
        id: "u/selected",
        eid: EVENT_PLAYER_UNIT_SELECTED,
        c: () => [Unit.of(GetTriggerUnit()), Player.of(GetTriggerPlayer())]
    })
    export const Deselect = u<SelectCallback>({
        id: "u/deselected",
        eid: EVENT_PLAYER_UNIT_DESELECTED,
        c: () => [Unit.of(GetTriggerUnit()), Player.of(GetTriggerPlayer())]
    })

    /* Constructing */
    type ConstructCallback = (builder: Unit, constructed: Unit) => void
    export const ConstructStart = u<ConstructCallback>({
        id: "u/constructStart",
        eid: EVENT_PLAYER_UNIT_CONSTRUCT_START,
        c: () => [Unit.of(GetTriggerUnit()), Unit.of(GetConstructingStructure())]
    })
    export const ConstructCancel = u<ConstructCallback>({
        id: "u/constructCancel",
        eid: EVENT_PLAYER_UNIT_CONSTRUCT_CANCEL,
        c: () => [Unit.of(GetTriggerUnit()), Unit.of(GetCancelledStructure())]
    })
    export const ConstructFinish = u<ConstructCallback>({
        id: "u/constructFinish",
        eid: EVENT_PLAYER_UNIT_CONSTRUCT_CANCEL,
        c: () => [Unit.of(GetTriggerUnit()), Unit.of(GetConstructedStructure())]
    })

    /* Upgrading */
    export const UpgradeStart = u<UnitCallback>({
        id: "u/upgradeStart",
        eid: EVENT_PLAYER_UNIT_UPGRADE_START,
        c: () => [Unit.of(GetTriggerUnit())]
    })
    export const UpgradeCancel = u<UnitCallback>({
        id: "u/upgradeCancel",
        eid: EVENT_PLAYER_UNIT_UPGRADE_CANCEL,
        c: () => [Unit.of(GetTriggerUnit())]
    })
    export const UpgradeFinish = u<UnitCallback>({
        id: "u/upgradeFinish",
        eid: EVENT_PLAYER_UNIT_UPGRADE_FINISH,
        c: () => [Unit.of(GetTriggerUnit())]
    })

    /* Training */
    type TrainProgressCallback = (trainer: Unit, trainedId: string) => void
    type TrainFinishCallback = (trainer: Unit, trained: Unit) => void
    export const TrainStart = u<TrainProgressCallback>({
        id: "u/trainStart",
        eid: EVENT_PLAYER_UNIT_TRAIN_START,
        c: () => [Unit.of(GetTriggerUnit()), util.id2s(GetTrainedUnitType())]
    })
    export const TrainCancel = u<TrainProgressCallback>({
        id: "u/trainCancel",
        eid: EVENT_PLAYER_UNIT_TRAIN_CANCEL,
        c: () => [Unit.of(GetTriggerUnit()), util.id2s(GetTrainedUnitType())]
    })
    export const TrainFinish = u<TrainFinishCallback>({
        id: "u/trainFinish",
        eid: EVENT_PLAYER_UNIT_TRAIN_FINISH,
        c: () => [Unit.of(GetTriggerUnit()), Unit.of(GetTrainedUnit())]
    })

    /* Research */
    type ResearchCallback = (researcher: Unit, researchId: string) => void
    export const ResearchStart = u<ResearchCallback>({
        id: "u/researchStart",
        eid: EVENT_PLAYER_UNIT_RESEARCH_START,
        c: () => [Unit.of(GetTriggerUnit()), util.id2s(GetResearched())]
    })
    export const ResearchCancel = u<ResearchCallback>({
        id: "u/researchCancel",
        eid: EVENT_PLAYER_UNIT_RESEARCH_CANCEL,
        c: () => [Unit.of(GetTriggerUnit()), util.id2s(GetResearched())]
    })
    export const ResearchFinish = u<ResearchCallback>({
        id: "u/researchFinish",
        eid: EVENT_PLAYER_UNIT_RESEARCH_FINISH,
        c: () => [Unit.of(GetTriggerUnit()), util.id2s(GetResearched())]
    })

    /* Orders */
    function dispatchTarget(): Unit | Item | Destructable {
        const unit = GetSpellTargetUnit()
        if (unit != null) {
            return Unit.of(unit)
        }
        const item = GetSpellTargetItem()
        if (item != null) {
            return Item.of(item)
        }
        const destructable = GetSpellTargetDestructable()
        return Destructable.of(destructable)
    }
    type SelfOrderCallback = (ordered: Unit, orderId: number) => void
    type PointOrderCallback = (ordered: Unit, orderId: number, x: number, y: number) => void
    type TargetOrderCallback = (
        ordered: Unit,
        orderId: number,
        target: Unit | Item | Destructable
    ) => void
    export const OrderSelf = u<SelfOrderCallback>({
        id: "u/orderSelf",
        eid: EVENT_PLAYER_UNIT_ISSUED_ORDER,
        c: () => [Unit.of(GetTriggerUnit()), GetIssuedOrderId()]
    })
    export const OrderPoint = u<PointOrderCallback>({
        id: "u/orderPoint",
        eid: EVENT_PLAYER_UNIT_ISSUED_POINT_ORDER,
        c: () => [
            Unit.of(GetTriggerUnit()),
            GetIssuedOrderId(),
            GetSpellTargetX(),
            GetSpellTargetY()
        ]
    })
    export const OrderTarget = u<TargetOrderCallback>({
        id: "u/orderTarget",
        eid: EVENT_PLAYER_UNIT_ISSUED_TARGET_ORDER,
        c: () => [Unit.of(GetTriggerUnit()), GetIssuedOrderId(), dispatchTarget()]
    })

    /* Leveling / Skill Learning */
    export const LevelUp = u<UnitCallback>({
        id: "u/levelUp",
        eid: EVENT_PLAYER_HERO_LEVEL,
        c: () => [Unit.of(GetTriggerUnit())]
    })
    type LearnSkilLCallback = (learner: Unit, skillId: string, skillLevel: number) => void
    export const LearnSkill = u<LearnSkilLCallback>({
        id: "u/learnSkill",
        eid: EVENT_PLAYER_HERO_SKILL,
        c: () => [Unit.of(GetTriggerUnit()), util.id2s(GetLearnedSkill()), GetLearnedSkillLevel()]
    })

    /* Reviving */
    type RevivingCallback = (reviver: Unit, reviving: Unit) => void
    export const RevivableDeath = u<UnitCallback>({
        id: "u/reviveDeath",
        eid: EVENT_PLAYER_HERO_REVIVABLE,
        c: () => [Unit.of(GetTriggerUnit())]
    })
    export const ReviveStart = u<RevivingCallback>({
        id: "u/reviveStart",
        eid: EVENT_PLAYER_HERO_REVIVE_START,
        c: () => [Unit.of(GetTriggerUnit()), Unit.of(GetRevivingUnit())]
    })
    export const ReviveCancel = u<RevivingCallback>({
        id: "u/reviveCancel",
        eid: EVENT_PLAYER_HERO_REVIVE_CANCEL,
        c: () => [Unit.of(GetTriggerUnit()), Unit.of(GetRevivingUnit())]
    })
    export const ReviveFinish = u<RevivingCallback>({
        id: "u/reviveFinish",
        eid: EVENT_PLAYER_HERO_REVIVE_FINISH,
        c: () => [Unit.of(GetTriggerUnit()), Unit.of(GetRevivingUnit())]
    })

    /* Summoning */
    type SummonCallback = (summoner: Unit, summoned: Unit) => void
    export const Summon = u<SummonCallback>({
        id: "u/summon",
        eid: EVENT_PLAYER_UNIT_SUMMON,
        c: () => [Unit.of(GetTriggerUnit()), Unit.of(GetSummonedUnit())]
    })

    /* Item manipulation */
    // TODO: Verify these are correct
    type ItemCallback = (manipulator: Unit, item: Item) => void
    export const DropItem = u<ItemCallback>({
        id: "u/dropItem",
        eid: EVENT_PLAYER_UNIT_DROP_ITEM,
        c: () => [Unit.of(GetTriggerUnit()), Item.of(GetManipulatedItem())]
    })
    export const PickupItem = u<ItemCallback>({
        id: "u/pickupItem",
        eid: EVENT_PLAYER_UNIT_PICKUP_ITEM,
        c: () => [Unit.of(GetTriggerUnit()), Item.of(GetManipulatedItem())]
    })
    export const UseItem = u<ItemCallback>({
        id: "u/useItem",
        eid: EVENT_PLAYER_UNIT_USE_ITEM,
        c: () => [Unit.of(GetTriggerUnit()), Item.of(GetManipulatedItem())]
    })
    export const SellItem = u<ItemCallback>({
        id: "u/sellItem",
        eid: EVENT_PLAYER_UNIT_SELL_ITEM,
        c: () => [Unit.of(GetTriggerUnit()), Item.of(GetManipulatedItem())]
    })
    export const PawnItem = u<ItemCallback>({
        id: "u/pawnItem",
        eid: EVENT_PLAYER_UNIT_PAWN_ITEM,
        c: () => [Unit.of(GetTriggerUnit()), Item.of(GetManipulatedItem())]
    })

    type LoadCallback = (loader: Unit, loaded: Unit) => void
    export const Load = u<LoadCallback>({
        id: "u/load",
        eid: EVENT_PLAYER_UNIT_LOADED,
        c: () => [Unit.of(GetTriggerUnit()), Unit.of(GetLoadedUnit())]
    })

    /* Attacks and damage */
    type AttackCallback = (attacked: Unit, attacker: Unit) => void
    export const Attack = u<AttackCallback>({
        id: "u/attack",
        eid: EVENT_PLAYER_UNIT_ATTACKED,
        c: () => [Unit.of(GetTriggerUnit()), Unit.of(GetAttacker())]
    })
    // TODO: Add proper damage support
    export const Damage = u<UnitCallback>({
        id: "u/damage",
        eid: EVENT_PLAYER_UNIT_DAMAGED,
        c: () => [Unit.of(GetTriggerUnit())]
    })
    export const Damaging = u<UnitCallback>({
        id: "u/damaging",
        eid: EVENT_PLAYER_UNIT_DAMAGING,
        c: () => [Unit.of(GetTriggerUnit())]
    })

    /* Selling / ownership changes */
    type SellCallback = (seller: Unit, sold: Unit, buyer: Unit) => void
    type OwnerChangeCallback = (changer: Unit, previousOwner: Player) => void
    export const Rescue = u<UnitCallback>({
        id: "u/rescued",
        eid: EVENT_PLAYER_UNIT_RESCUED,
        c: () => [Unit.of(GetTriggerUnit())]
    })
    export const Sell = u<SellCallback>({
        id: "u/sell",
        eid: EVENT_PLAYER_UNIT_SELL,
        c: () => [Unit.of(GetSellingUnit()), Unit.of(GetSoldUnit()), Unit.of(GetBuyingUnit())]
    })
    export const OwnerChange = u<OwnerChangeCallback>({
        id: "u/ownerChange",
        eid: EVENT_PLAYER_UNIT_CHANGE_OWNER,
        c: () => [Unit.of(GetTriggerUnit()), Player.of(GetChangingUnitPrevOwner())]
    })

    /* Spell casting */
    // TODO: Add spell dispatch
    export const SpellChannel = u<UnitCallback>({
        id: "u/spellChannel",
        eid: EVENT_PLAYER_UNIT_SPELL_CHANNEL,
        c: () => [Unit.of(GetTriggerUnit())]
    })
    export const SpellCast = u<UnitCallback>({
        id: "u/spellCast",
        eid: EVENT_PLAYER_UNIT_SPELL_CAST,
        c: () => [Unit.of(GetTriggerUnit())]
    })
    export const SpellEffect = u<UnitCallback>({
        id: "u/spellEffect",
        eid: EVENT_PLAYER_UNIT_SPELL_EFFECT,
        c: () => [Unit.of(GetTriggerUnit())]
    })
    export const SpellFinish = u<UnitCallback>({
        id: "u/spellFinish",
        eid: EVENT_PLAYER_UNIT_SPELL_FINISH,
        c: () => [Unit.of(GetTriggerUnit())]
    })
    export const SpellEndCast = u<UnitCallback>({
        id: "u/spellEndCast",
        eid: EVENT_PLAYER_UNIT_SPELL_ENDCAST,
        c: () => [Unit.of(GetTriggerUnit())]
    })
}

{
    /* U.Created / U.Removed support */
    const UNDEFEND_ORDER_ID = 852056

    const ABILITY_ID = compiletime(() => {
        const abilityId = util.idgen.abil()

        if (currentMap != undefined) {
            const defendClone = (currentMap.objects.ability["Adef"] as WarObject).clone()
            defendClone.acat = ""
            defendClone.aart = ""
            currentMap.objects.ability[abilityId] = defendClone
        }

        return util.s2id(abilityId)
    })

    function processUnit(unit: Unit): void {
        UnitAddAbility(unit.handle, ABILITY_ID)
        Event.call(U.Created, unit)
    }

    util.runOnce(() => {
        for (const p of Player.all) {
            SetPlayerAbilityAvailable(p.handle, ABILITY_ID, false)
        }
    })

    wholeRegion().registerEnter(processUnit)

    U.OrderSelf.register((ordered, orderId) => {
        if (GetUnitAbilityLevel(ordered.handle, ABILITY_ID) == 0 && orderId == UNDEFEND_ORDER_ID) {
            Event.call(U.Removed, ordered)
            // call lifecycle cleanups etc.
            ordered.destroy()
        }
    })
}

const chatEvents: jtrigger[] = util.context("chatevent", [])

export function registerChatEvent(
    pattern: string,
    exactMatch: boolean,
    callback: (player: Player, message: string) => void
): void {
    const trigger = CreateTrigger()
    for (const player of Player.all) {
        TriggerRegisterPlayerChatEvent(trigger, player.handle, pattern, exactMatch)
    }
    TriggerAddAction(
        trigger,
        ceres.wrapSafeCall(() => {
            callback(Player.of(GetTriggerPlayer()), GetEventPlayerChatString())
        })
    )
    chatEvents[chatEvents.length] = trigger
}

ceres.addHook("reload::before", () => {
    for (const event of chatEvents) {
        DestroyTrigger(event)
    }
})
