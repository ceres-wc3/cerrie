import Handle from "./handle"
import Player from "./player"
import Rect from "./rect"
import Vector2 from "../vecmath/vec2"

let targetCollection: Unit[]
const collectIntoTarget = Filter(
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    () => (targetCollection[targetCollection.length] = Unit.of(GetFilterUnit()))
)

class Unit extends Handle<junit> {
    private static dummyGroup = util.contextFn("Player/dummy", () => CreateGroup())

    get id(): number {
        return GetUnitTypeId(this.handle)
    }

    get isHero(): boolean {
        return IsHeroUnitId(GetUnitTypeId(this.handle))
    }

    get name(): string {
        return GetUnitName(this.handle)
    }

    set name(v: string) {
        BlzSetUnitName(this.handle, v)
    }

    get maxHealth(): number {
        return BlzGetUnitMaxHP(this.handle)
    }

    set maxHealth(v: number) {
        BlzSetUnitMaxHP(this.handle, v)
    }

    get maxMana(): number {
        return BlzGetUnitMaxMana(this.handle)
    }

    set maxMana(v: number) {
        BlzSetUnitMaxMana(this.handle, v)
    }

    get health(): number {
        return GetUnitState(this.handle, UNIT_STATE_LIFE)
    }

    set health(v: number) {
        SetUnitState(this.handle, UNIT_STATE_LIFE, v)
    }

    get mana(): number {
        return GetUnitState(this.handle, UNIT_STATE_MANA)
    }

    set mana(v: number) {
        SetUnitState(this.handle, UNIT_STATE_MANA, v)
    }

    explode(): void {
        SetUnitExploded(this.handle, true)
        KillUnit(this.handle)
    }

    kill(): void {
        KillUnit(this.handle)
    }

    remove(): void {
        RemoveUnit(this.handle)
    }

    revive(pos: Vector2, doEffect: boolean): void {
        ReviveHero(this.handle, pos.x, pos.y, doEffect)
    }

    static create(owner: Player, id: string | number, x: number, y: number, facing: number): Unit {
        const handle = CreateUnit(owner.handle, util.s2id(id), x, y, facing)
        return Unit.of(handle)
    }

    static of(handle: junit): Unit {
        return Unit.getForHandle(handle)
    }

    static getAll(): Unit[] {
        targetCollection = []
        for (const player of Player.all) {
            GroupEnumUnitsOfPlayer(this.dummyGroup, player.handle, collectIntoTarget)
        }
        return targetCollection
    }

    static getOwnedBy(player: Player): Unit[] {
        targetCollection = []
        GroupEnumUnitsOfPlayer(this.dummyGroup, player.handle, collectIntoTarget)
        return targetCollection
    }

    static getInRect(rect: Rect): Unit[] {
        targetCollection = []
        GroupEnumUnitsInRect(this.dummyGroup, rect.handle, collectIntoTarget)
        return targetCollection
    }

    static getInRange(pos: Vector2, range: number): Unit[] {
        targetCollection = []
        GroupEnumUnitsInRange(this.dummyGroup, pos.x, pos.y, range, collectIntoTarget)
        return targetCollection
    }

    static getSelectionOf(player: Player): Unit[] {
        targetCollection = []
        GroupEnumUnitsSelected(this.dummyGroup, player.handle, collectIntoTarget)
        return targetCollection
    }
}

Unit.init()

export default Unit
