/** @noSelfInFile */

declare interface jhandle {
    __jhandle: never
}
declare interface jagent extends jhandle {
    __jagent: never
}
declare interface jevent extends jagent {
    __jevent: never
}
declare interface jplayer extends jagent {
    __jplayer: never
}
declare interface jwidget extends jagent {
    __jwidget: never
}
declare interface junit extends jwidget {
    __junit: never
}
declare interface jdestructable extends jwidget {
    __jdestructable: never
}
declare interface jitem extends jwidget {
    __jitem: never
}
declare interface jability extends jagent {
    __jability: never
}
declare interface jbuff extends jability {
    __jbuff: never
}
declare interface jforce extends jagent {
    __jforce: never
}
declare interface jgroup extends jagent {
    __jgroup: never
}
declare interface jtrigger extends jagent {
    __jtrigger: never
}
declare interface jtriggercondition extends jagent {
    __jtriggercondition: never
}
declare interface jtriggeraction extends jhandle {
    __jtriggeraction: never
}
declare interface jtimer extends jagent {
    __jtimer: never
}
declare interface jlocation extends jagent {
    __jlocation: never
}
declare interface jregion extends jagent {
    __jregion: never
}
declare interface jrect extends jagent {
    __jrect: never
}
declare interface jboolexpr extends jagent {
    __jboolexpr: never
}
declare interface jsound extends jagent {
    __jsound: never
}
declare interface jconditionfunc extends jboolexpr {
    __jconditionfunc: never
}
declare interface jfilterfunc extends jboolexpr {
    __jfilterfunc: never
}
declare interface junitpool extends jhandle {
    __junitpool: never
}
declare interface jitempool extends jhandle {
    __jitempool: never
}
declare interface jrace extends jhandle {
    __jrace: never
}
declare interface jalliancetype extends jhandle {
    __jalliancetype: never
}
declare interface jracepreference extends jhandle {
    __jracepreference: never
}
declare interface jgamestate extends jhandle {
    __jgamestate: never
}
declare interface jigamestate extends jgamestate {
    __jigamestate: never
}
declare interface jfgamestate extends jgamestate {
    __jfgamestate: never
}
declare interface jplayerstate extends jhandle {
    __jplayerstate: never
}
declare interface jplayerscore extends jhandle {
    __jplayerscore: never
}
declare interface jplayergameresult extends jhandle {
    __jplayergameresult: never
}
declare interface junitstate extends jhandle {
    __junitstate: never
}
declare interface jaidifficulty extends jhandle {
    __jaidifficulty: never
}
declare interface jeventid extends jhandle {
    __jeventid: never
}
declare interface jgameevent extends jeventid {
    __jgameevent: never
}
declare interface jplayerevent extends jeventid {
    __jplayerevent: never
}
declare interface jplayerunitevent extends jeventid {
    __jplayerunitevent: never
}
declare interface junitevent extends jeventid {
    __junitevent: never
}
declare interface jlimitop extends jeventid {
    __jlimitop: never
}
declare interface jwidgetevent extends jeventid {
    __jwidgetevent: never
}
declare interface jdialogevent extends jeventid {
    __jdialogevent: never
}
declare interface junittype extends jhandle {
    __junittype: never
}
declare interface jgamespeed extends jhandle {
    __jgamespeed: never
}
declare interface jgamedifficulty extends jhandle {
    __jgamedifficulty: never
}
declare interface jgametype extends jhandle {
    __jgametype: never
}
declare interface jmapflag extends jhandle {
    __jmapflag: never
}
declare interface jmapvisibility extends jhandle {
    __jmapvisibility: never
}
declare interface jmapsetting extends jhandle {
    __jmapsetting: never
}
declare interface jmapdensity extends jhandle {
    __jmapdensity: never
}
declare interface jmapcontrol extends jhandle {
    __jmapcontrol: never
}
declare interface jminimapicon extends jhandle {
    __jminimapicon: never
}
declare interface jplayerslotstate extends jhandle {
    __jplayerslotstate: never
}
declare interface jvolumegroup extends jhandle {
    __jvolumegroup: never
}
declare interface jcamerafield extends jhandle {
    __jcamerafield: never
}
declare interface jcamerasetup extends jhandle {
    __jcamerasetup: never
}
declare interface jplayercolor extends jhandle {
    __jplayercolor: never
}
declare interface jplacement extends jhandle {
    __jplacement: never
}
declare interface jstartlocprio extends jhandle {
    __jstartlocprio: never
}
declare interface jraritycontrol extends jhandle {
    __jraritycontrol: never
}
declare interface jblendmode extends jhandle {
    __jblendmode: never
}
declare interface jtexmapflags extends jhandle {
    __jtexmapflags: never
}
declare interface jeffect extends jagent {
    __jeffect: never
}
declare interface jeffecttype extends jhandle {
    __jeffecttype: never
}
declare interface jweathereffect extends jhandle {
    __jweathereffect: never
}
declare interface jterraindeformation extends jhandle {
    __jterraindeformation: never
}
declare interface jfogstate extends jhandle {
    __jfogstate: never
}
declare interface jfogmodifier extends jagent {
    __jfogmodifier: never
}
declare interface jdialog extends jagent {
    __jdialog: never
}
declare interface jbutton extends jagent {
    __jbutton: never
}
declare interface jquest extends jagent {
    __jquest: never
}
declare interface jquestitem extends jagent {
    __jquestitem: never
}
declare interface jdefeatcondition extends jagent {
    __jdefeatcondition: never
}
declare interface jtimerdialog extends jagent {
    __jtimerdialog: never
}
declare interface jleaderboard extends jagent {
    __jleaderboard: never
}
declare interface jmultiboard extends jagent {
    __jmultiboard: never
}
declare interface jmultiboarditem extends jagent {
    __jmultiboarditem: never
}
declare interface jtrackable extends jagent {
    __jtrackable: never
}
declare interface jgamecache extends jagent {
    __jgamecache: never
}
declare interface jversion extends jhandle {
    __jversion: never
}
declare interface jitemtype extends jhandle {
    __jitemtype: never
}
declare interface jtexttag extends jhandle {
    __jtexttag: never
}
declare interface jattacktype extends jhandle {
    __jattacktype: never
}
declare interface jdamagetype extends jhandle {
    __jdamagetype: never
}
declare interface jweapontype extends jhandle {
    __jweapontype: never
}
declare interface jsoundtype extends jhandle {
    __jsoundtype: never
}
declare interface jlightning extends jhandle {
    __jlightning: never
}
declare interface jpathingtype extends jhandle {
    __jpathingtype: never
}
declare interface jmousebuttontype extends jhandle {
    __jmousebuttontype: never
}
declare interface janimtype extends jhandle {
    __janimtype: never
}
declare interface jsubanimtype extends jhandle {
    __jsubanimtype: never
}
declare interface jimage extends jhandle {
    __jimage: never
}
declare interface jubersplat extends jhandle {
    __jubersplat: never
}
declare interface jhashtable extends jagent {
    __jhashtable: never
}
declare interface jframehandle extends jhandle {
    __jframehandle: never
}
declare interface joriginframetype extends jhandle {
    __joriginframetype: never
}
declare interface jframepointtype extends jhandle {
    __jframepointtype: never
}
declare interface jtextaligntype extends jhandle {
    __jtextaligntype: never
}
declare interface jframeeventtype extends jhandle {
    __jframeeventtype: never
}
declare interface joskeytype extends jhandle {
    __joskeytype: never
}
declare interface jabilityintegerfield extends jhandle {
    __jabilityintegerfield: never
}
declare interface jabilityrealfield extends jhandle {
    __jabilityrealfield: never
}
declare interface jabilitybooleanfield extends jhandle {
    __jabilitybooleanfield: never
}
declare interface jabilitystringfield extends jhandle {
    __jabilitystringfield: never
}
declare interface jabilityintegerlevelfield extends jhandle {
    __jabilityintegerlevelfield: never
}
declare interface jabilityreallevelfield extends jhandle {
    __jabilityreallevelfield: never
}
declare interface jabilitybooleanlevelfield extends jhandle {
    __jabilitybooleanlevelfield: never
}
declare interface jabilitystringlevelfield extends jhandle {
    __jabilitystringlevelfield: never
}
declare interface jabilityintegerlevelarrayfield extends jhandle {
    __jabilityintegerlevelarrayfield: never
}
declare interface jabilityreallevelarrayfield extends jhandle {
    __jabilityreallevelarrayfield: never
}
declare interface jabilitybooleanlevelarrayfield extends jhandle {
    __jabilitybooleanlevelarrayfield: never
}
declare interface jabilitystringlevelarrayfield extends jhandle {
    __jabilitystringlevelarrayfield: never
}
declare interface junitintegerfield extends jhandle {
    __junitintegerfield: never
}
declare interface junitrealfield extends jhandle {
    __junitrealfield: never
}
declare interface junitbooleanfield extends jhandle {
    __junitbooleanfield: never
}
declare interface junitstringfield extends jhandle {
    __junitstringfield: never
}
declare interface junitweaponintegerfield extends jhandle {
    __junitweaponintegerfield: never
}
declare interface junitweaponrealfield extends jhandle {
    __junitweaponrealfield: never
}
declare interface junitweaponbooleanfield extends jhandle {
    __junitweaponbooleanfield: never
}
declare interface junitweaponstringfield extends jhandle {
    __junitweaponstringfield: never
}
declare interface jitemintegerfield extends jhandle {
    __jitemintegerfield: never
}
declare interface jitemrealfield extends jhandle {
    __jitemrealfield: never
}
declare interface jitembooleanfield extends jhandle {
    __jitembooleanfield: never
}
declare interface jitemstringfield extends jhandle {
    __jitemstringfield: never
}
declare interface jmovetype extends jhandle {
    __jmovetype: never
}
declare interface jtargetflag extends jhandle {
    __jtargetflag: never
}
declare interface jarmortype extends jhandle {
    __jarmortype: never
}
declare interface jheroattribute extends jhandle {
    __jheroattribute: never
}
declare interface jdefensetype extends jhandle {
    __jdefensetype: never
}
declare interface jregentype extends jhandle {
    __jregentype: never
}
declare interface junitcategory extends jhandle {
    __junitcategory: never
}
declare interface jpathingflag extends jhandle {
    __jpathingflag: never
}
declare interface jcommandbuttoneffect extends jhandle {
    __jcommandbuttoneffect: never
}
declare function ConvertRace(i: number): jrace
declare function ConvertAllianceType(i: number): jalliancetype
declare function ConvertRacePref(i: number): jracepreference
declare function ConvertIGameState(i: number): jigamestate
declare function ConvertFGameState(i: number): jfgamestate
declare function ConvertPlayerState(i: number): jplayerstate
declare function ConvertPlayerScore(i: number): jplayerscore
declare function ConvertPlayerGameResult(i: number): jplayergameresult
declare function ConvertUnitState(i: number): junitstate
declare function ConvertAIDifficulty(i: number): jaidifficulty
declare function ConvertGameEvent(i: number): jgameevent
declare function ConvertPlayerEvent(i: number): jplayerevent
declare function ConvertPlayerUnitEvent(i: number): jplayerunitevent
declare function ConvertWidgetEvent(i: number): jwidgetevent
declare function ConvertDialogEvent(i: number): jdialogevent
declare function ConvertUnitEvent(i: number): junitevent
declare function ConvertLimitOp(i: number): jlimitop
declare function ConvertUnitType(i: number): junittype
declare function ConvertGameSpeed(i: number): jgamespeed
declare function ConvertPlacement(i: number): jplacement
declare function ConvertStartLocPrio(i: number): jstartlocprio
declare function ConvertGameDifficulty(i: number): jgamedifficulty
declare function ConvertGameType(i: number): jgametype
declare function ConvertMapFlag(i: number): jmapflag
declare function ConvertMapVisibility(i: number): jmapvisibility
declare function ConvertMapSetting(i: number): jmapsetting
declare function ConvertMapDensity(i: number): jmapdensity
declare function ConvertMapControl(i: number): jmapcontrol
declare function ConvertPlayerColor(i: number): jplayercolor
declare function ConvertPlayerSlotState(i: number): jplayerslotstate
declare function ConvertVolumeGroup(i: number): jvolumegroup
declare function ConvertCameraField(i: number): jcamerafield
declare function ConvertBlendMode(i: number): jblendmode
declare function ConvertRarityControl(i: number): jraritycontrol
declare function ConvertTexMapFlags(i: number): jtexmapflags
declare function ConvertFogState(i: number): jfogstate
declare function ConvertEffectType(i: number): jeffecttype
declare function ConvertVersion(i: number): jversion
declare function ConvertItemType(i: number): jitemtype
declare function ConvertAttackType(i: number): jattacktype
declare function ConvertDamageType(i: number): jdamagetype
declare function ConvertWeaponType(i: number): jweapontype
declare function ConvertSoundType(i: number): jsoundtype
declare function ConvertPathingType(i: number): jpathingtype
declare function ConvertMouseButtonType(i: number): jmousebuttontype
declare function ConvertAnimType(i: number): janimtype
declare function ConvertSubAnimType(i: number): jsubanimtype
declare function ConvertOriginFrameType(i: number): joriginframetype
declare function ConvertFramePointType(i: number): jframepointtype
declare function ConvertTextAlignType(i: number): jtextaligntype
declare function ConvertFrameEventType(i: number): jframeeventtype
declare function ConvertOsKeyType(i: number): joskeytype
declare function ConvertAbilityIntegerField(i: number): jabilityintegerfield
declare function ConvertAbilityRealField(i: number): jabilityrealfield
declare function ConvertAbilityBooleanField(i: number): jabilitybooleanfield
declare function ConvertAbilityStringField(i: number): jabilitystringfield
declare function ConvertAbilityIntegerLevelField(i: number): jabilityintegerlevelfield
declare function ConvertAbilityRealLevelField(i: number): jabilityreallevelfield
declare function ConvertAbilityBooleanLevelField(i: number): jabilitybooleanlevelfield
declare function ConvertAbilityStringLevelField(i: number): jabilitystringlevelfield
declare function ConvertAbilityIntegerLevelArrayField(i: number): jabilityintegerlevelarrayfield
declare function ConvertAbilityRealLevelArrayField(i: number): jabilityreallevelarrayfield
declare function ConvertAbilityBooleanLevelArrayField(i: number): jabilitybooleanlevelarrayfield
declare function ConvertAbilityStringLevelArrayField(i: number): jabilitystringlevelarrayfield
declare function ConvertUnitIntegerField(i: number): junitintegerfield
declare function ConvertUnitRealField(i: number): junitrealfield
declare function ConvertUnitBooleanField(i: number): junitbooleanfield
declare function ConvertUnitStringField(i: number): junitstringfield
declare function ConvertUnitWeaponIntegerField(i: number): junitweaponintegerfield
declare function ConvertUnitWeaponRealField(i: number): junitweaponrealfield
declare function ConvertUnitWeaponBooleanField(i: number): junitweaponbooleanfield
declare function ConvertUnitWeaponStringField(i: number): junitweaponstringfield
declare function ConvertItemIntegerField(i: number): jitemintegerfield
declare function ConvertItemRealField(i: number): jitemrealfield
declare function ConvertItemBooleanField(i: number): jitembooleanfield
declare function ConvertItemStringField(i: number): jitemstringfield
declare function ConvertMoveType(i: number): jmovetype
declare function ConvertTargetFlag(i: number): jtargetflag
declare function ConvertArmorType(i: number): jarmortype
declare function ConvertHeroAttribute(i: number): jheroattribute
declare function ConvertDefenseType(i: number): jdefensetype
declare function ConvertRegenType(i: number): jregentype
declare function ConvertUnitCategory(i: number): junitcategory
declare function ConvertPathingFlag(i: number): jpathingflag
declare function OrderId(orderIdString: string): number
declare function OrderId2String(orderId: number): string
declare function UnitId(unitIdString: string): number
declare function UnitId2String(unitId: number): string
declare function AbilityId(abilityIdString: string): number
declare function AbilityId2String(abilityId: number): string
declare function GetObjectName(objectId: number): string
declare function GetBJMaxPlayers(): number
declare function GetBJPlayerNeutralVictim(): number
declare function GetBJPlayerNeutralExtra(): number
declare function GetBJMaxPlayerSlots(): number
declare function GetPlayerNeutralPassive(): number
declare function GetPlayerNeutralAggressive(): number
declare const FALSE: boolean
declare const TRUE: boolean
declare const JASS_MAX_ARRAY_SIZE: number
declare const PLAYER_NEUTRAL_PASSIVE: number
declare const PLAYER_NEUTRAL_AGGRESSIVE: number
declare const PLAYER_COLOR_RED: jplayercolor
declare const PLAYER_COLOR_BLUE: jplayercolor
declare const PLAYER_COLOR_CYAN: jplayercolor
declare const PLAYER_COLOR_PURPLE: jplayercolor
declare const PLAYER_COLOR_YELLOW: jplayercolor
declare const PLAYER_COLOR_ORANGE: jplayercolor
declare const PLAYER_COLOR_GREEN: jplayercolor
declare const PLAYER_COLOR_PINK: jplayercolor
declare const PLAYER_COLOR_LIGHT_GRAY: jplayercolor
declare const PLAYER_COLOR_LIGHT_BLUE: jplayercolor
declare const PLAYER_COLOR_AQUA: jplayercolor
declare const PLAYER_COLOR_BROWN: jplayercolor
declare const PLAYER_COLOR_MAROON: jplayercolor
declare const PLAYER_COLOR_NAVY: jplayercolor
declare const PLAYER_COLOR_TURQUOISE: jplayercolor
declare const PLAYER_COLOR_VIOLET: jplayercolor
declare const PLAYER_COLOR_WHEAT: jplayercolor
declare const PLAYER_COLOR_PEACH: jplayercolor
declare const PLAYER_COLOR_MINT: jplayercolor
declare const PLAYER_COLOR_LAVENDER: jplayercolor
declare const PLAYER_COLOR_COAL: jplayercolor
declare const PLAYER_COLOR_SNOW: jplayercolor
declare const PLAYER_COLOR_EMERALD: jplayercolor
declare const PLAYER_COLOR_PEANUT: jplayercolor
declare const RACE_HUMAN: jrace
declare const RACE_ORC: jrace
declare const RACE_UNDEAD: jrace
declare const RACE_NIGHTELF: jrace
declare const RACE_DEMON: jrace
declare const RACE_OTHER: jrace
declare const PLAYER_GAME_RESULT_VICTORY: jplayergameresult
declare const PLAYER_GAME_RESULT_DEFEAT: jplayergameresult
declare const PLAYER_GAME_RESULT_TIE: jplayergameresult
declare const PLAYER_GAME_RESULT_NEUTRAL: jplayergameresult
declare const ALLIANCE_PASSIVE: jalliancetype
declare const ALLIANCE_HELP_REQUEST: jalliancetype
declare const ALLIANCE_HELP_RESPONSE: jalliancetype
declare const ALLIANCE_SHARED_XP: jalliancetype
declare const ALLIANCE_SHARED_SPELLS: jalliancetype
declare const ALLIANCE_SHARED_VISION: jalliancetype
declare const ALLIANCE_SHARED_CONTROL: jalliancetype
declare const ALLIANCE_SHARED_ADVANCED_CONTROL: jalliancetype
declare const ALLIANCE_RESCUABLE: jalliancetype
declare const ALLIANCE_SHARED_VISION_FORCED: jalliancetype
declare const VERSION_REIGN_OF_CHAOS: jversion
declare const VERSION_FROZEN_THRONE: jversion
declare const ATTACK_TYPE_NORMAL: jattacktype
declare const ATTACK_TYPE_MELEE: jattacktype
declare const ATTACK_TYPE_PIERCE: jattacktype
declare const ATTACK_TYPE_SIEGE: jattacktype
declare const ATTACK_TYPE_MAGIC: jattacktype
declare const ATTACK_TYPE_CHAOS: jattacktype
declare const ATTACK_TYPE_HERO: jattacktype
declare const DAMAGE_TYPE_UNKNOWN: jdamagetype
declare const DAMAGE_TYPE_NORMAL: jdamagetype
declare const DAMAGE_TYPE_ENHANCED: jdamagetype
declare const DAMAGE_TYPE_FIRE: jdamagetype
declare const DAMAGE_TYPE_COLD: jdamagetype
declare const DAMAGE_TYPE_LIGHTNING: jdamagetype
declare const DAMAGE_TYPE_POISON: jdamagetype
declare const DAMAGE_TYPE_DISEASE: jdamagetype
declare const DAMAGE_TYPE_DIVINE: jdamagetype
declare const DAMAGE_TYPE_MAGIC: jdamagetype
declare const DAMAGE_TYPE_SONIC: jdamagetype
declare const DAMAGE_TYPE_ACID: jdamagetype
declare const DAMAGE_TYPE_FORCE: jdamagetype
declare const DAMAGE_TYPE_DEATH: jdamagetype
declare const DAMAGE_TYPE_MIND: jdamagetype
declare const DAMAGE_TYPE_PLANT: jdamagetype
declare const DAMAGE_TYPE_DEFENSIVE: jdamagetype
declare const DAMAGE_TYPE_DEMOLITION: jdamagetype
declare const DAMAGE_TYPE_SLOW_POISON: jdamagetype
declare const DAMAGE_TYPE_SPIRIT_LINK: jdamagetype
declare const DAMAGE_TYPE_SHADOW_STRIKE: jdamagetype
declare const DAMAGE_TYPE_UNIVERSAL: jdamagetype
declare const WEAPON_TYPE_WHOKNOWS: jweapontype
declare const WEAPON_TYPE_METAL_LIGHT_CHOP: jweapontype
declare const WEAPON_TYPE_METAL_MEDIUM_CHOP: jweapontype
declare const WEAPON_TYPE_METAL_HEAVY_CHOP: jweapontype
declare const WEAPON_TYPE_METAL_LIGHT_SLICE: jweapontype
declare const WEAPON_TYPE_METAL_MEDIUM_SLICE: jweapontype
declare const WEAPON_TYPE_METAL_HEAVY_SLICE: jweapontype
declare const WEAPON_TYPE_METAL_MEDIUM_BASH: jweapontype
declare const WEAPON_TYPE_METAL_HEAVY_BASH: jweapontype
declare const WEAPON_TYPE_METAL_MEDIUM_STAB: jweapontype
declare const WEAPON_TYPE_METAL_HEAVY_STAB: jweapontype
declare const WEAPON_TYPE_WOOD_LIGHT_SLICE: jweapontype
declare const WEAPON_TYPE_WOOD_MEDIUM_SLICE: jweapontype
declare const WEAPON_TYPE_WOOD_HEAVY_SLICE: jweapontype
declare const WEAPON_TYPE_WOOD_LIGHT_BASH: jweapontype
declare const WEAPON_TYPE_WOOD_MEDIUM_BASH: jweapontype
declare const WEAPON_TYPE_WOOD_HEAVY_BASH: jweapontype
declare const WEAPON_TYPE_WOOD_LIGHT_STAB: jweapontype
declare const WEAPON_TYPE_WOOD_MEDIUM_STAB: jweapontype
declare const WEAPON_TYPE_CLAW_LIGHT_SLICE: jweapontype
declare const WEAPON_TYPE_CLAW_MEDIUM_SLICE: jweapontype
declare const WEAPON_TYPE_CLAW_HEAVY_SLICE: jweapontype
declare const WEAPON_TYPE_AXE_MEDIUM_CHOP: jweapontype
declare const WEAPON_TYPE_ROCK_HEAVY_BASH: jweapontype
declare const PATHING_TYPE_ANY: jpathingtype
declare const PATHING_TYPE_WALKABILITY: jpathingtype
declare const PATHING_TYPE_FLYABILITY: jpathingtype
declare const PATHING_TYPE_BUILDABILITY: jpathingtype
declare const PATHING_TYPE_PEONHARVESTPATHING: jpathingtype
declare const PATHING_TYPE_BLIGHTPATHING: jpathingtype
declare const PATHING_TYPE_FLOATABILITY: jpathingtype
declare const PATHING_TYPE_AMPHIBIOUSPATHING: jpathingtype
declare const MOUSE_BUTTON_TYPE_LEFT: jmousebuttontype
declare const MOUSE_BUTTON_TYPE_MIDDLE: jmousebuttontype
declare const MOUSE_BUTTON_TYPE_RIGHT: jmousebuttontype
declare const ANIM_TYPE_BIRTH: janimtype
declare const ANIM_TYPE_DEATH: janimtype
declare const ANIM_TYPE_DECAY: janimtype
declare const ANIM_TYPE_DISSIPATE: janimtype
declare const ANIM_TYPE_STAND: janimtype
declare const ANIM_TYPE_WALK: janimtype
declare const ANIM_TYPE_ATTACK: janimtype
declare const ANIM_TYPE_MORPH: janimtype
declare const ANIM_TYPE_SLEEP: janimtype
declare const ANIM_TYPE_SPELL: janimtype
declare const ANIM_TYPE_PORTRAIT: janimtype
declare const SUBANIM_TYPE_ROOTED: jsubanimtype
declare const SUBANIM_TYPE_ALTERNATE_EX: jsubanimtype
declare const SUBANIM_TYPE_LOOPING: jsubanimtype
declare const SUBANIM_TYPE_SLAM: jsubanimtype
declare const SUBANIM_TYPE_THROW: jsubanimtype
declare const SUBANIM_TYPE_SPIKED: jsubanimtype
declare const SUBANIM_TYPE_FAST: jsubanimtype
declare const SUBANIM_TYPE_SPIN: jsubanimtype
declare const SUBANIM_TYPE_READY: jsubanimtype
declare const SUBANIM_TYPE_CHANNEL: jsubanimtype
declare const SUBANIM_TYPE_DEFEND: jsubanimtype
declare const SUBANIM_TYPE_VICTORY: jsubanimtype
declare const SUBANIM_TYPE_TURN: jsubanimtype
declare const SUBANIM_TYPE_LEFT: jsubanimtype
declare const SUBANIM_TYPE_RIGHT: jsubanimtype
declare const SUBANIM_TYPE_FIRE: jsubanimtype
declare const SUBANIM_TYPE_FLESH: jsubanimtype
declare const SUBANIM_TYPE_HIT: jsubanimtype
declare const SUBANIM_TYPE_WOUNDED: jsubanimtype
declare const SUBANIM_TYPE_LIGHT: jsubanimtype
declare const SUBANIM_TYPE_MODERATE: jsubanimtype
declare const SUBANIM_TYPE_SEVERE: jsubanimtype
declare const SUBANIM_TYPE_CRITICAL: jsubanimtype
declare const SUBANIM_TYPE_COMPLETE: jsubanimtype
declare const SUBANIM_TYPE_GOLD: jsubanimtype
declare const SUBANIM_TYPE_LUMBER: jsubanimtype
declare const SUBANIM_TYPE_WORK: jsubanimtype
declare const SUBANIM_TYPE_TALK: jsubanimtype
declare const SUBANIM_TYPE_FIRST: jsubanimtype
declare const SUBANIM_TYPE_SECOND: jsubanimtype
declare const SUBANIM_TYPE_THIRD: jsubanimtype
declare const SUBANIM_TYPE_FOURTH: jsubanimtype
declare const SUBANIM_TYPE_FIFTH: jsubanimtype
declare const SUBANIM_TYPE_ONE: jsubanimtype
declare const SUBANIM_TYPE_TWO: jsubanimtype
declare const SUBANIM_TYPE_THREE: jsubanimtype
declare const SUBANIM_TYPE_FOUR: jsubanimtype
declare const SUBANIM_TYPE_FIVE: jsubanimtype
declare const SUBANIM_TYPE_SMALL: jsubanimtype
declare const SUBANIM_TYPE_MEDIUM: jsubanimtype
declare const SUBANIM_TYPE_LARGE: jsubanimtype
declare const SUBANIM_TYPE_UPGRADE: jsubanimtype
declare const SUBANIM_TYPE_DRAIN: jsubanimtype
declare const SUBANIM_TYPE_FILL: jsubanimtype
declare const SUBANIM_TYPE_CHAINLIGHTNING: jsubanimtype
declare const SUBANIM_TYPE_EATTREE: jsubanimtype
declare const SUBANIM_TYPE_PUKE: jsubanimtype
declare const SUBANIM_TYPE_FLAIL: jsubanimtype
declare const SUBANIM_TYPE_OFF: jsubanimtype
declare const SUBANIM_TYPE_SWIM: jsubanimtype
declare const SUBANIM_TYPE_ENTANGLE: jsubanimtype
declare const SUBANIM_TYPE_BERSERK: jsubanimtype
declare const RACE_PREF_HUMAN: jracepreference
declare const RACE_PREF_ORC: jracepreference
declare const RACE_PREF_NIGHTELF: jracepreference
declare const RACE_PREF_UNDEAD: jracepreference
declare const RACE_PREF_DEMON: jracepreference
declare const RACE_PREF_RANDOM: jracepreference
declare const RACE_PREF_USER_SELECTABLE: jracepreference
declare const MAP_CONTROL_USER: jmapcontrol
declare const MAP_CONTROL_COMPUTER: jmapcontrol
declare const MAP_CONTROL_RESCUABLE: jmapcontrol
declare const MAP_CONTROL_NEUTRAL: jmapcontrol
declare const MAP_CONTROL_CREEP: jmapcontrol
declare const MAP_CONTROL_NONE: jmapcontrol
declare const GAME_TYPE_MELEE: jgametype
declare const GAME_TYPE_FFA: jgametype
declare const GAME_TYPE_USE_MAP_SETTINGS: jgametype
declare const GAME_TYPE_BLIZ: jgametype
declare const GAME_TYPE_ONE_ON_ONE: jgametype
declare const GAME_TYPE_TWO_TEAM_PLAY: jgametype
declare const GAME_TYPE_THREE_TEAM_PLAY: jgametype
declare const GAME_TYPE_FOUR_TEAM_PLAY: jgametype
declare const MAP_FOG_HIDE_TERRAIN: jmapflag
declare const MAP_FOG_MAP_EXPLORED: jmapflag
declare const MAP_FOG_ALWAYS_VISIBLE: jmapflag
declare const MAP_USE_HANDICAPS: jmapflag
declare const MAP_OBSERVERS: jmapflag
declare const MAP_OBSERVERS_ON_DEATH: jmapflag
declare const MAP_FIXED_COLORS: jmapflag
declare const MAP_LOCK_RESOURCE_TRADING: jmapflag
declare const MAP_RESOURCE_TRADING_ALLIES_ONLY: jmapflag
declare const MAP_LOCK_ALLIANCE_CHANGES: jmapflag
declare const MAP_ALLIANCE_CHANGES_HIDDEN: jmapflag
declare const MAP_CHEATS: jmapflag
declare const MAP_CHEATS_HIDDEN: jmapflag
declare const MAP_LOCK_SPEED: jmapflag
declare const MAP_LOCK_RANDOM_SEED: jmapflag
declare const MAP_SHARED_ADVANCED_CONTROL: jmapflag
declare const MAP_RANDOM_HERO: jmapflag
declare const MAP_RANDOM_RACES: jmapflag
declare const MAP_RELOADED: jmapflag
declare const MAP_PLACEMENT_RANDOM: jplacement
declare const MAP_PLACEMENT_FIXED: jplacement
declare const MAP_PLACEMENT_USE_MAP_SETTINGS: jplacement
declare const MAP_PLACEMENT_TEAMS_TOGETHER: jplacement
declare const MAP_LOC_PRIO_LOW: jstartlocprio
declare const MAP_LOC_PRIO_HIGH: jstartlocprio
declare const MAP_LOC_PRIO_NOT: jstartlocprio
declare const MAP_DENSITY_NONE: jmapdensity
declare const MAP_DENSITY_LIGHT: jmapdensity
declare const MAP_DENSITY_MEDIUM: jmapdensity
declare const MAP_DENSITY_HEAVY: jmapdensity
declare const MAP_DIFFICULTY_EASY: jgamedifficulty
declare const MAP_DIFFICULTY_NORMAL: jgamedifficulty
declare const MAP_DIFFICULTY_HARD: jgamedifficulty
declare const MAP_DIFFICULTY_INSANE: jgamedifficulty
declare const MAP_SPEED_SLOWEST: jgamespeed
declare const MAP_SPEED_SLOW: jgamespeed
declare const MAP_SPEED_NORMAL: jgamespeed
declare const MAP_SPEED_FAST: jgamespeed
declare const MAP_SPEED_FASTEST: jgamespeed
declare const PLAYER_SLOT_STATE_EMPTY: jplayerslotstate
declare const PLAYER_SLOT_STATE_PLAYING: jplayerslotstate
declare const PLAYER_SLOT_STATE_LEFT: jplayerslotstate
declare const SOUND_VOLUMEGROUP_UNITMOVEMENT: jvolumegroup
declare const SOUND_VOLUMEGROUP_UNITSOUNDS: jvolumegroup
declare const SOUND_VOLUMEGROUP_COMBAT: jvolumegroup
declare const SOUND_VOLUMEGROUP_SPELLS: jvolumegroup
declare const SOUND_VOLUMEGROUP_UI: jvolumegroup
declare const SOUND_VOLUMEGROUP_MUSIC: jvolumegroup
declare const SOUND_VOLUMEGROUP_AMBIENTSOUNDS: jvolumegroup
declare const SOUND_VOLUMEGROUP_FIRE: jvolumegroup
declare const GAME_STATE_DIVINE_INTERVENTION: jigamestate
declare const GAME_STATE_DISCONNECTED: jigamestate
declare const GAME_STATE_TIME_OF_DAY: jfgamestate
declare const PLAYER_STATE_GAME_RESULT: jplayerstate
declare const PLAYER_STATE_RESOURCE_GOLD: jplayerstate
declare const PLAYER_STATE_RESOURCE_LUMBER: jplayerstate
declare const PLAYER_STATE_RESOURCE_HERO_TOKENS: jplayerstate
declare const PLAYER_STATE_RESOURCE_FOOD_CAP: jplayerstate
declare const PLAYER_STATE_RESOURCE_FOOD_USED: jplayerstate
declare const PLAYER_STATE_FOOD_CAP_CEILING: jplayerstate
declare const PLAYER_STATE_GIVES_BOUNTY: jplayerstate
declare const PLAYER_STATE_ALLIED_VICTORY: jplayerstate
declare const PLAYER_STATE_PLACED: jplayerstate
declare const PLAYER_STATE_OBSERVER_ON_DEATH: jplayerstate
declare const PLAYER_STATE_OBSERVER: jplayerstate
declare const PLAYER_STATE_UNFOLLOWABLE: jplayerstate
declare const PLAYER_STATE_GOLD_UPKEEP_RATE: jplayerstate
declare const PLAYER_STATE_LUMBER_UPKEEP_RATE: jplayerstate
declare const PLAYER_STATE_GOLD_GATHERED: jplayerstate
declare const PLAYER_STATE_LUMBER_GATHERED: jplayerstate
declare const PLAYER_STATE_NO_CREEP_SLEEP: jplayerstate
declare const UNIT_STATE_LIFE: junitstate
declare const UNIT_STATE_MAX_LIFE: junitstate
declare const UNIT_STATE_MANA: junitstate
declare const UNIT_STATE_MAX_MANA: junitstate
declare const AI_DIFFICULTY_NEWBIE: jaidifficulty
declare const AI_DIFFICULTY_NORMAL: jaidifficulty
declare const AI_DIFFICULTY_INSANE: jaidifficulty
declare const PLAYER_SCORE_UNITS_TRAINED: jplayerscore
declare const PLAYER_SCORE_UNITS_KILLED: jplayerscore
declare const PLAYER_SCORE_STRUCT_BUILT: jplayerscore
declare const PLAYER_SCORE_STRUCT_RAZED: jplayerscore
declare const PLAYER_SCORE_TECH_PERCENT: jplayerscore
declare const PLAYER_SCORE_FOOD_MAXPROD: jplayerscore
declare const PLAYER_SCORE_FOOD_MAXUSED: jplayerscore
declare const PLAYER_SCORE_HEROES_KILLED: jplayerscore
declare const PLAYER_SCORE_ITEMS_GAINED: jplayerscore
declare const PLAYER_SCORE_MERCS_HIRED: jplayerscore
declare const PLAYER_SCORE_GOLD_MINED_TOTAL: jplayerscore
declare const PLAYER_SCORE_GOLD_MINED_UPKEEP: jplayerscore
declare const PLAYER_SCORE_GOLD_LOST_UPKEEP: jplayerscore
declare const PLAYER_SCORE_GOLD_LOST_TAX: jplayerscore
declare const PLAYER_SCORE_GOLD_GIVEN: jplayerscore
declare const PLAYER_SCORE_GOLD_RECEIVED: jplayerscore
declare const PLAYER_SCORE_LUMBER_TOTAL: jplayerscore
declare const PLAYER_SCORE_LUMBER_LOST_UPKEEP: jplayerscore
declare const PLAYER_SCORE_LUMBER_LOST_TAX: jplayerscore
declare const PLAYER_SCORE_LUMBER_GIVEN: jplayerscore
declare const PLAYER_SCORE_LUMBER_RECEIVED: jplayerscore
declare const PLAYER_SCORE_UNIT_TOTAL: jplayerscore
declare const PLAYER_SCORE_HERO_TOTAL: jplayerscore
declare const PLAYER_SCORE_RESOURCE_TOTAL: jplayerscore
declare const PLAYER_SCORE_TOTAL: jplayerscore
declare const EVENT_GAME_VICTORY: jgameevent
declare const EVENT_GAME_END_LEVEL: jgameevent
declare const EVENT_GAME_VARIABLE_LIMIT: jgameevent
declare const EVENT_GAME_STATE_LIMIT: jgameevent
declare const EVENT_GAME_TIMER_EXPIRED: jgameevent
declare const EVENT_GAME_ENTER_REGION: jgameevent
declare const EVENT_GAME_LEAVE_REGION: jgameevent
declare const EVENT_GAME_TRACKABLE_HIT: jgameevent
declare const EVENT_GAME_TRACKABLE_TRACK: jgameevent
declare const EVENT_GAME_SHOW_SKILL: jgameevent
declare const EVENT_GAME_BUILD_SUBMENU: jgameevent
declare const EVENT_PLAYER_STATE_LIMIT: jplayerevent
declare const EVENT_PLAYER_ALLIANCE_CHANGED: jplayerevent
declare const EVENT_PLAYER_DEFEAT: jplayerevent
declare const EVENT_PLAYER_VICTORY: jplayerevent
declare const EVENT_PLAYER_LEAVE: jplayerevent
declare const EVENT_PLAYER_CHAT: jplayerevent
declare const EVENT_PLAYER_END_CINEMATIC: jplayerevent
declare const EVENT_PLAYER_UNIT_ATTACKED: jplayerunitevent
declare const EVENT_PLAYER_UNIT_RESCUED: jplayerunitevent
declare const EVENT_PLAYER_UNIT_DEATH: jplayerunitevent
declare const EVENT_PLAYER_UNIT_DECAY: jplayerunitevent
declare const EVENT_PLAYER_UNIT_DETECTED: jplayerunitevent
declare const EVENT_PLAYER_UNIT_HIDDEN: jplayerunitevent
declare const EVENT_PLAYER_UNIT_SELECTED: jplayerunitevent
declare const EVENT_PLAYER_UNIT_DESELECTED: jplayerunitevent
declare const EVENT_PLAYER_UNIT_CONSTRUCT_START: jplayerunitevent
declare const EVENT_PLAYER_UNIT_CONSTRUCT_CANCEL: jplayerunitevent
declare const EVENT_PLAYER_UNIT_CONSTRUCT_FINISH: jplayerunitevent
declare const EVENT_PLAYER_UNIT_UPGRADE_START: jplayerunitevent
declare const EVENT_PLAYER_UNIT_UPGRADE_CANCEL: jplayerunitevent
declare const EVENT_PLAYER_UNIT_UPGRADE_FINISH: jplayerunitevent
declare const EVENT_PLAYER_UNIT_TRAIN_START: jplayerunitevent
declare const EVENT_PLAYER_UNIT_TRAIN_CANCEL: jplayerunitevent
declare const EVENT_PLAYER_UNIT_TRAIN_FINISH: jplayerunitevent
declare const EVENT_PLAYER_UNIT_RESEARCH_START: jplayerunitevent
declare const EVENT_PLAYER_UNIT_RESEARCH_CANCEL: jplayerunitevent
declare const EVENT_PLAYER_UNIT_RESEARCH_FINISH: jplayerunitevent
declare const EVENT_PLAYER_UNIT_ISSUED_ORDER: jplayerunitevent
declare const EVENT_PLAYER_UNIT_ISSUED_POINT_ORDER: jplayerunitevent
declare const EVENT_PLAYER_UNIT_ISSUED_TARGET_ORDER: jplayerunitevent
declare const EVENT_PLAYER_UNIT_ISSUED_UNIT_ORDER: jplayerunitevent
declare const EVENT_PLAYER_HERO_LEVEL: jplayerunitevent
declare const EVENT_PLAYER_HERO_SKILL: jplayerunitevent
declare const EVENT_PLAYER_HERO_REVIVABLE: jplayerunitevent
declare const EVENT_PLAYER_HERO_REVIVE_START: jplayerunitevent
declare const EVENT_PLAYER_HERO_REVIVE_CANCEL: jplayerunitevent
declare const EVENT_PLAYER_HERO_REVIVE_FINISH: jplayerunitevent
declare const EVENT_PLAYER_UNIT_SUMMON: jplayerunitevent
declare const EVENT_PLAYER_UNIT_DROP_ITEM: jplayerunitevent
declare const EVENT_PLAYER_UNIT_PICKUP_ITEM: jplayerunitevent
declare const EVENT_PLAYER_UNIT_USE_ITEM: jplayerunitevent
declare const EVENT_PLAYER_UNIT_LOADED: jplayerunitevent
declare const EVENT_PLAYER_UNIT_DAMAGED: jplayerunitevent
declare const EVENT_PLAYER_UNIT_DAMAGING: jplayerunitevent
declare const EVENT_UNIT_DAMAGED: junitevent
declare const EVENT_UNIT_DAMAGING: junitevent
declare const EVENT_UNIT_DEATH: junitevent
declare const EVENT_UNIT_DECAY: junitevent
declare const EVENT_UNIT_DETECTED: junitevent
declare const EVENT_UNIT_HIDDEN: junitevent
declare const EVENT_UNIT_SELECTED: junitevent
declare const EVENT_UNIT_DESELECTED: junitevent
declare const EVENT_UNIT_STATE_LIMIT: junitevent
declare const EVENT_UNIT_ACQUIRED_TARGET: junitevent
declare const EVENT_UNIT_TARGET_IN_RANGE: junitevent
declare const EVENT_UNIT_ATTACKED: junitevent
declare const EVENT_UNIT_RESCUED: junitevent
declare const EVENT_UNIT_CONSTRUCT_CANCEL: junitevent
declare const EVENT_UNIT_CONSTRUCT_FINISH: junitevent
declare const EVENT_UNIT_UPGRADE_START: junitevent
declare const EVENT_UNIT_UPGRADE_CANCEL: junitevent
declare const EVENT_UNIT_UPGRADE_FINISH: junitevent
declare const EVENT_UNIT_TRAIN_START: junitevent
declare const EVENT_UNIT_TRAIN_CANCEL: junitevent
declare const EVENT_UNIT_TRAIN_FINISH: junitevent
declare const EVENT_UNIT_RESEARCH_START: junitevent
declare const EVENT_UNIT_RESEARCH_CANCEL: junitevent
declare const EVENT_UNIT_RESEARCH_FINISH: junitevent
declare const EVENT_UNIT_ISSUED_ORDER: junitevent
declare const EVENT_UNIT_ISSUED_POINT_ORDER: junitevent
declare const EVENT_UNIT_ISSUED_TARGET_ORDER: junitevent
declare const EVENT_UNIT_HERO_LEVEL: junitevent
declare const EVENT_UNIT_HERO_SKILL: junitevent
declare const EVENT_UNIT_HERO_REVIVABLE: junitevent
declare const EVENT_UNIT_HERO_REVIVE_START: junitevent
declare const EVENT_UNIT_HERO_REVIVE_CANCEL: junitevent
declare const EVENT_UNIT_HERO_REVIVE_FINISH: junitevent
declare const EVENT_UNIT_SUMMON: junitevent
declare const EVENT_UNIT_DROP_ITEM: junitevent
declare const EVENT_UNIT_PICKUP_ITEM: junitevent
declare const EVENT_UNIT_USE_ITEM: junitevent
declare const EVENT_UNIT_LOADED: junitevent
declare const EVENT_WIDGET_DEATH: jwidgetevent
declare const EVENT_DIALOG_BUTTON_CLICK: jdialogevent
declare const EVENT_DIALOG_CLICK: jdialogevent
declare const EVENT_GAME_LOADED: jgameevent
declare const EVENT_GAME_TOURNAMENT_FINISH_SOON: jgameevent
declare const EVENT_GAME_TOURNAMENT_FINISH_NOW: jgameevent
declare const EVENT_GAME_SAVE: jgameevent
declare const EVENT_GAME_CUSTOM_UI_FRAME: jgameevent
declare const EVENT_PLAYER_ARROW_LEFT_DOWN: jplayerevent
declare const EVENT_PLAYER_ARROW_LEFT_UP: jplayerevent
declare const EVENT_PLAYER_ARROW_RIGHT_DOWN: jplayerevent
declare const EVENT_PLAYER_ARROW_RIGHT_UP: jplayerevent
declare const EVENT_PLAYER_ARROW_DOWN_DOWN: jplayerevent
declare const EVENT_PLAYER_ARROW_DOWN_UP: jplayerevent
declare const EVENT_PLAYER_ARROW_UP_DOWN: jplayerevent
declare const EVENT_PLAYER_ARROW_UP_UP: jplayerevent
declare const EVENT_PLAYER_MOUSE_DOWN: jplayerevent
declare const EVENT_PLAYER_MOUSE_UP: jplayerevent
declare const EVENT_PLAYER_MOUSE_MOVE: jplayerevent
declare const EVENT_PLAYER_SYNC_DATA: jplayerevent
declare const EVENT_PLAYER_KEY: jplayerevent
declare const EVENT_PLAYER_KEY_DOWN: jplayerevent
declare const EVENT_PLAYER_KEY_UP: jplayerevent
declare const EVENT_PLAYER_UNIT_SELL: jplayerunitevent
declare const EVENT_PLAYER_UNIT_CHANGE_OWNER: jplayerunitevent
declare const EVENT_PLAYER_UNIT_SELL_ITEM: jplayerunitevent
declare const EVENT_PLAYER_UNIT_SPELL_CHANNEL: jplayerunitevent
declare const EVENT_PLAYER_UNIT_SPELL_CAST: jplayerunitevent
declare const EVENT_PLAYER_UNIT_SPELL_EFFECT: jplayerunitevent
declare const EVENT_PLAYER_UNIT_SPELL_FINISH: jplayerunitevent
declare const EVENT_PLAYER_UNIT_SPELL_ENDCAST: jplayerunitevent
declare const EVENT_PLAYER_UNIT_PAWN_ITEM: jplayerunitevent
declare const EVENT_UNIT_SELL: junitevent
declare const EVENT_UNIT_CHANGE_OWNER: junitevent
declare const EVENT_UNIT_SELL_ITEM: junitevent
declare const EVENT_UNIT_SPELL_CHANNEL: junitevent
declare const EVENT_UNIT_SPELL_CAST: junitevent
declare const EVENT_UNIT_SPELL_EFFECT: junitevent
declare const EVENT_UNIT_SPELL_FINISH: junitevent
declare const EVENT_UNIT_SPELL_ENDCAST: junitevent
declare const EVENT_UNIT_PAWN_ITEM: junitevent
declare const LESS_THAN: jlimitop
declare const LESS_THAN_OR_EQUAL: jlimitop
declare const EQUAL: jlimitop
declare const GREATER_THAN_OR_EQUAL: jlimitop
declare const GREATER_THAN: jlimitop
declare const NOT_EQUAL: jlimitop
declare const UNIT_TYPE_HERO: junittype
declare const UNIT_TYPE_DEAD: junittype
declare const UNIT_TYPE_STRUCTURE: junittype
declare const UNIT_TYPE_FLYING: junittype
declare const UNIT_TYPE_GROUND: junittype
declare const UNIT_TYPE_ATTACKS_FLYING: junittype
declare const UNIT_TYPE_ATTACKS_GROUND: junittype
declare const UNIT_TYPE_MELEE_ATTACKER: junittype
declare const UNIT_TYPE_RANGED_ATTACKER: junittype
declare const UNIT_TYPE_GIANT: junittype
declare const UNIT_TYPE_SUMMONED: junittype
declare const UNIT_TYPE_STUNNED: junittype
declare const UNIT_TYPE_PLAGUED: junittype
declare const UNIT_TYPE_SNARED: junittype
declare const UNIT_TYPE_UNDEAD: junittype
declare const UNIT_TYPE_MECHANICAL: junittype
declare const UNIT_TYPE_PEON: junittype
declare const UNIT_TYPE_SAPPER: junittype
declare const UNIT_TYPE_TOWNHALL: junittype
declare const UNIT_TYPE_ANCIENT: junittype
declare const UNIT_TYPE_TAUREN: junittype
declare const UNIT_TYPE_POISONED: junittype
declare const UNIT_TYPE_POLYMORPHED: junittype
declare const UNIT_TYPE_SLEEPING: junittype
declare const UNIT_TYPE_RESISTANT: junittype
declare const UNIT_TYPE_ETHEREAL: junittype
declare const UNIT_TYPE_MAGIC_IMMUNE: junittype
declare const ITEM_TYPE_PERMANENT: jitemtype
declare const ITEM_TYPE_CHARGED: jitemtype
declare const ITEM_TYPE_POWERUP: jitemtype
declare const ITEM_TYPE_ARTIFACT: jitemtype
declare const ITEM_TYPE_PURCHASABLE: jitemtype
declare const ITEM_TYPE_CAMPAIGN: jitemtype
declare const ITEM_TYPE_MISCELLANEOUS: jitemtype
declare const ITEM_TYPE_UNKNOWN: jitemtype
declare const ITEM_TYPE_ANY: jitemtype
declare const ITEM_TYPE_TOME: jitemtype
declare const CAMERA_FIELD_TARGET_DISTANCE: jcamerafield
declare const CAMERA_FIELD_FARZ: jcamerafield
declare const CAMERA_FIELD_ANGLE_OF_ATTACK: jcamerafield
declare const CAMERA_FIELD_FIELD_OF_VIEW: jcamerafield
declare const CAMERA_FIELD_ROLL: jcamerafield
declare const CAMERA_FIELD_ROTATION: jcamerafield
declare const CAMERA_FIELD_ZOFFSET: jcamerafield
declare const CAMERA_FIELD_NEARZ: jcamerafield
declare const CAMERA_FIELD_LOCAL_PITCH: jcamerafield
declare const CAMERA_FIELD_LOCAL_YAW: jcamerafield
declare const CAMERA_FIELD_LOCAL_ROLL: jcamerafield
declare const BLEND_MODE_NONE: jblendmode
declare const BLEND_MODE_DONT_CARE: jblendmode
declare const BLEND_MODE_KEYALPHA: jblendmode
declare const BLEND_MODE_BLEND: jblendmode
declare const BLEND_MODE_ADDITIVE: jblendmode
declare const BLEND_MODE_MODULATE: jblendmode
declare const BLEND_MODE_MODULATE_2X: jblendmode
declare const RARITY_FREQUENT: jraritycontrol
declare const RARITY_RARE: jraritycontrol
declare const TEXMAP_FLAG_NONE: jtexmapflags
declare const TEXMAP_FLAG_WRAP_U: jtexmapflags
declare const TEXMAP_FLAG_WRAP_V: jtexmapflags
declare const TEXMAP_FLAG_WRAP_UV: jtexmapflags
declare const FOG_OF_WAR_MASKED: jfogstate
declare const FOG_OF_WAR_FOGGED: jfogstate
declare const FOG_OF_WAR_VISIBLE: jfogstate
declare const CAMERA_MARGIN_LEFT: number
declare const CAMERA_MARGIN_RIGHT: number
declare const CAMERA_MARGIN_TOP: number
declare const CAMERA_MARGIN_BOTTOM: number
declare const EFFECT_TYPE_EFFECT: jeffecttype
declare const EFFECT_TYPE_TARGET: jeffecttype
declare const EFFECT_TYPE_CASTER: jeffecttype
declare const EFFECT_TYPE_SPECIAL: jeffecttype
declare const EFFECT_TYPE_AREA_EFFECT: jeffecttype
declare const EFFECT_TYPE_MISSILE: jeffecttype
declare const EFFECT_TYPE_LIGHTNING: jeffecttype
declare const SOUND_TYPE_EFFECT: jsoundtype
declare const SOUND_TYPE_EFFECT_LOOPED: jsoundtype
declare const ORIGIN_FRAME_GAME_UI: joriginframetype
declare const ORIGIN_FRAME_COMMAND_BUTTON: joriginframetype
declare const ORIGIN_FRAME_HERO_BAR: joriginframetype
declare const ORIGIN_FRAME_HERO_BUTTON: joriginframetype
declare const ORIGIN_FRAME_HERO_HP_BAR: joriginframetype
declare const ORIGIN_FRAME_HERO_MANA_BAR: joriginframetype
declare const ORIGIN_FRAME_HERO_BUTTON_INDICATOR: joriginframetype
declare const ORIGIN_FRAME_ITEM_BUTTON: joriginframetype
declare const ORIGIN_FRAME_MINIMAP: joriginframetype
declare const ORIGIN_FRAME_MINIMAP_BUTTON: joriginframetype
declare const ORIGIN_FRAME_SYSTEM_BUTTON: joriginframetype
declare const ORIGIN_FRAME_TOOLTIP: joriginframetype
declare const ORIGIN_FRAME_UBERTOOLTIP: joriginframetype
declare const ORIGIN_FRAME_CHAT_MSG: joriginframetype
declare const ORIGIN_FRAME_UNIT_MSG: joriginframetype
declare const ORIGIN_FRAME_TOP_MSG: joriginframetype
declare const ORIGIN_FRAME_PORTRAIT: joriginframetype
declare const ORIGIN_FRAME_WORLD_FRAME: joriginframetype
declare const ORIGIN_FRAME_SIMPLE_UI_PARENT: joriginframetype
declare const ORIGIN_FRAME_PORTRAIT_HP_TEXT: joriginframetype
declare const ORIGIN_FRAME_PORTRAIT_MANA_TEXT: joriginframetype
declare const ORIGIN_FRAME_UNIT_PANEL_BUFF_BAR: joriginframetype
declare const ORIGIN_FRAME_UNIT_PANEL_BUFF_BAR_LABEL: joriginframetype
declare const FRAMEPOINT_TOPLEFT: jframepointtype
declare const FRAMEPOINT_TOP: jframepointtype
declare const FRAMEPOINT_TOPRIGHT: jframepointtype
declare const FRAMEPOINT_LEFT: jframepointtype
declare const FRAMEPOINT_CENTER: jframepointtype
declare const FRAMEPOINT_RIGHT: jframepointtype
declare const FRAMEPOINT_BOTTOMLEFT: jframepointtype
declare const FRAMEPOINT_BOTTOM: jframepointtype
declare const FRAMEPOINT_BOTTOMRIGHT: jframepointtype
declare const TEXT_JUSTIFY_TOP: jtextaligntype
declare const TEXT_JUSTIFY_MIDDLE: jtextaligntype
declare const TEXT_JUSTIFY_BOTTOM: jtextaligntype
declare const TEXT_JUSTIFY_LEFT: jtextaligntype
declare const TEXT_JUSTIFY_CENTER: jtextaligntype
declare const TEXT_JUSTIFY_RIGHT: jtextaligntype
declare const FRAMEEVENT_CONTROL_CLICK: jframeeventtype
declare const FRAMEEVENT_MOUSE_ENTER: jframeeventtype
declare const FRAMEEVENT_MOUSE_LEAVE: jframeeventtype
declare const FRAMEEVENT_MOUSE_UP: jframeeventtype
declare const FRAMEEVENT_MOUSE_DOWN: jframeeventtype
declare const FRAMEEVENT_MOUSE_WHEEL: jframeeventtype
declare const FRAMEEVENT_CHECKBOX_CHECKED: jframeeventtype
declare const FRAMEEVENT_CHECKBOX_UNCHECKED: jframeeventtype
declare const FRAMEEVENT_EDITBOX_TEXT_CHANGED: jframeeventtype
declare const FRAMEEVENT_POPUPMENU_ITEM_CHANGED: jframeeventtype
declare const FRAMEEVENT_MOUSE_DOUBLECLICK: jframeeventtype
declare const FRAMEEVENT_SPRITE_ANIM_UPDATE: jframeeventtype
declare const FRAMEEVENT_SLIDER_VALUE_CHANGED: jframeeventtype
declare const FRAMEEVENT_DIALOG_CANCEL: jframeeventtype
declare const FRAMEEVENT_DIALOG_ACCEPT: jframeeventtype
declare const FRAMEEVENT_EDITBOX_ENTER: jframeeventtype
declare const OSKEY_BACKSPACE: joskeytype
declare const OSKEY_TAB: joskeytype
declare const OSKEY_CLEAR: joskeytype
declare const OSKEY_RETURN: joskeytype
declare const OSKEY_SHIFT: joskeytype
declare const OSKEY_CONTROL: joskeytype
declare const OSKEY_ALT: joskeytype
declare const OSKEY_PAUSE: joskeytype
declare const OSKEY_CAPSLOCK: joskeytype
declare const OSKEY_KANA: joskeytype
declare const OSKEY_HANGUL: joskeytype
declare const OSKEY_JUNJA: joskeytype
declare const OSKEY_FINAL: joskeytype
declare const OSKEY_HANJA: joskeytype
declare const OSKEY_KANJI: joskeytype
declare const OSKEY_ESCAPE: joskeytype
declare const OSKEY_CONVERT: joskeytype
declare const OSKEY_NONCONVERT: joskeytype
declare const OSKEY_ACCEPT: joskeytype
declare const OSKEY_MODECHANGE: joskeytype
declare const OSKEY_SPACE: joskeytype
declare const OSKEY_PAGEUP: joskeytype
declare const OSKEY_PAGEDOWN: joskeytype
declare const OSKEY_END: joskeytype
declare const OSKEY_HOME: joskeytype
declare const OSKEY_LEFT: joskeytype
declare const OSKEY_UP: joskeytype
declare const OSKEY_RIGHT: joskeytype
declare const OSKEY_DOWN: joskeytype
declare const OSKEY_SELECT: joskeytype
declare const OSKEY_PRINT: joskeytype
declare const OSKEY_EXECUTE: joskeytype
declare const OSKEY_PRINTSCREEN: joskeytype
declare const OSKEY_INSERT: joskeytype
declare const OSKEY_DELETE: joskeytype
declare const OSKEY_HELP: joskeytype
declare const OSKEY_0: joskeytype
declare const OSKEY_1: joskeytype
declare const OSKEY_2: joskeytype
declare const OSKEY_3: joskeytype
declare const OSKEY_4: joskeytype
declare const OSKEY_5: joskeytype
declare const OSKEY_6: joskeytype
declare const OSKEY_7: joskeytype
declare const OSKEY_8: joskeytype
declare const OSKEY_9: joskeytype
declare const OSKEY_A: joskeytype
declare const OSKEY_B: joskeytype
declare const OSKEY_C: joskeytype
declare const OSKEY_D: joskeytype
declare const OSKEY_E: joskeytype
declare const OSKEY_F: joskeytype
declare const OSKEY_G: joskeytype
declare const OSKEY_H: joskeytype
declare const OSKEY_I: joskeytype
declare const OSKEY_J: joskeytype
declare const OSKEY_K: joskeytype
declare const OSKEY_L: joskeytype
declare const OSKEY_M: joskeytype
declare const OSKEY_N: joskeytype
declare const OSKEY_O: joskeytype
declare const OSKEY_P: joskeytype
declare const OSKEY_Q: joskeytype
declare const OSKEY_R: joskeytype
declare const OSKEY_S: joskeytype
declare const OSKEY_T: joskeytype
declare const OSKEY_U: joskeytype
declare const OSKEY_V: joskeytype
declare const OSKEY_W: joskeytype
declare const OSKEY_X: joskeytype
declare const OSKEY_Y: joskeytype
declare const OSKEY_Z: joskeytype
declare const OSKEY_LMETA: joskeytype
declare const OSKEY_RMETA: joskeytype
declare const OSKEY_APPS: joskeytype
declare const OSKEY_SLEEP: joskeytype
declare const OSKEY_NUMPAD0: joskeytype
declare const OSKEY_NUMPAD1: joskeytype
declare const OSKEY_NUMPAD2: joskeytype
declare const OSKEY_NUMPAD3: joskeytype
declare const OSKEY_NUMPAD4: joskeytype
declare const OSKEY_NUMPAD5: joskeytype
declare const OSKEY_NUMPAD6: joskeytype
declare const OSKEY_NUMPAD7: joskeytype
declare const OSKEY_NUMPAD8: joskeytype
declare const OSKEY_NUMPAD9: joskeytype
declare const OSKEY_MULTIPLY: joskeytype
declare const OSKEY_ADD: joskeytype
declare const OSKEY_SEPARATOR: joskeytype
declare const OSKEY_SUBTRACT: joskeytype
declare const OSKEY_DECIMAL: joskeytype
declare const OSKEY_DIVIDE: joskeytype
declare const OSKEY_F1: joskeytype
declare const OSKEY_F2: joskeytype
declare const OSKEY_F3: joskeytype
declare const OSKEY_F4: joskeytype
declare const OSKEY_F5: joskeytype
declare const OSKEY_F6: joskeytype
declare const OSKEY_F7: joskeytype
declare const OSKEY_F8: joskeytype
declare const OSKEY_F9: joskeytype
declare const OSKEY_F10: joskeytype
declare const OSKEY_F11: joskeytype
declare const OSKEY_F12: joskeytype
declare const OSKEY_F13: joskeytype
declare const OSKEY_F14: joskeytype
declare const OSKEY_F15: joskeytype
declare const OSKEY_F16: joskeytype
declare const OSKEY_F17: joskeytype
declare const OSKEY_F18: joskeytype
declare const OSKEY_F19: joskeytype
declare const OSKEY_F20: joskeytype
declare const OSKEY_F21: joskeytype
declare const OSKEY_F22: joskeytype
declare const OSKEY_F23: joskeytype
declare const OSKEY_F24: joskeytype
declare const OSKEY_NUMLOCK: joskeytype
declare const OSKEY_SCROLLLOCK: joskeytype
declare const OSKEY_OEM_NEC_EQUAL: joskeytype
declare const OSKEY_OEM_FJ_JISHO: joskeytype
declare const OSKEY_OEM_FJ_MASSHOU: joskeytype
declare const OSKEY_OEM_FJ_TOUROKU: joskeytype
declare const OSKEY_OEM_FJ_LOYA: joskeytype
declare const OSKEY_OEM_FJ_ROYA: joskeytype
declare const OSKEY_LSHIFT: joskeytype
declare const OSKEY_RSHIFT: joskeytype
declare const OSKEY_LCONTROL: joskeytype
declare const OSKEY_RCONTROL: joskeytype
declare const OSKEY_LALT: joskeytype
declare const OSKEY_RALT: joskeytype
declare const OSKEY_BROWSER_BACK: joskeytype
declare const OSKEY_BROWSER_FORWARD: joskeytype
declare const OSKEY_BROWSER_REFRESH: joskeytype
declare const OSKEY_BROWSER_STOP: joskeytype
declare const OSKEY_BROWSER_SEARCH: joskeytype
declare const OSKEY_BROWSER_FAVORITES: joskeytype
declare const OSKEY_BROWSER_HOME: joskeytype
declare const OSKEY_VOLUME_MUTE: joskeytype
declare const OSKEY_VOLUME_DOWN: joskeytype
declare const OSKEY_VOLUME_UP: joskeytype
declare const OSKEY_MEDIA_NEXT_TRACK: joskeytype
declare const OSKEY_MEDIA_PREV_TRACK: joskeytype
declare const OSKEY_MEDIA_STOP: joskeytype
declare const OSKEY_MEDIA_PLAY_PAUSE: joskeytype
declare const OSKEY_LAUNCH_MAIL: joskeytype
declare const OSKEY_LAUNCH_MEDIA_SELECT: joskeytype
declare const OSKEY_LAUNCH_APP1: joskeytype
declare const OSKEY_LAUNCH_APP2: joskeytype
declare const OSKEY_OEM_1: joskeytype
declare const OSKEY_OEM_PLUS: joskeytype
declare const OSKEY_OEM_COMMA: joskeytype
declare const OSKEY_OEM_MINUS: joskeytype
declare const OSKEY_OEM_PERIOD: joskeytype
declare const OSKEY_OEM_2: joskeytype
declare const OSKEY_OEM_3: joskeytype
declare const OSKEY_OEM_4: joskeytype
declare const OSKEY_OEM_5: joskeytype
declare const OSKEY_OEM_6: joskeytype
declare const OSKEY_OEM_7: joskeytype
declare const OSKEY_OEM_8: joskeytype
declare const OSKEY_OEM_AX: joskeytype
declare const OSKEY_OEM_102: joskeytype
declare const OSKEY_ICO_HELP: joskeytype
declare const OSKEY_ICO_00: joskeytype
declare const OSKEY_PROCESSKEY: joskeytype
declare const OSKEY_ICO_CLEAR: joskeytype
declare const OSKEY_PACKET: joskeytype
declare const OSKEY_OEM_RESET: joskeytype
declare const OSKEY_OEM_JUMP: joskeytype
declare const OSKEY_OEM_PA1: joskeytype
declare const OSKEY_OEM_PA2: joskeytype
declare const OSKEY_OEM_PA3: joskeytype
declare const OSKEY_OEM_WSCTRL: joskeytype
declare const OSKEY_OEM_CUSEL: joskeytype
declare const OSKEY_OEM_ATTN: joskeytype
declare const OSKEY_OEM_FINISH: joskeytype
declare const OSKEY_OEM_COPY: joskeytype
declare const OSKEY_OEM_AUTO: joskeytype
declare const OSKEY_OEM_ENLW: joskeytype
declare const OSKEY_OEM_BACKTAB: joskeytype
declare const OSKEY_ATTN: joskeytype
declare const OSKEY_CRSEL: joskeytype
declare const OSKEY_EXSEL: joskeytype
declare const OSKEY_EREOF: joskeytype
declare const OSKEY_PLAY: joskeytype
declare const OSKEY_ZOOM: joskeytype
declare const OSKEY_NONAME: joskeytype
declare const OSKEY_PA1: joskeytype
declare const OSKEY_OEM_CLEAR: joskeytype
declare const ABILITY_IF_BUTTON_POSITION_NORMAL_X: jabilityintegerfield
declare const ABILITY_IF_BUTTON_POSITION_NORMAL_Y: jabilityintegerfield
declare const ABILITY_IF_BUTTON_POSITION_ACTIVATED_X: jabilityintegerfield
declare const ABILITY_IF_BUTTON_POSITION_ACTIVATED_Y: jabilityintegerfield
declare const ABILITY_IF_BUTTON_POSITION_RESEARCH_X: jabilityintegerfield
declare const ABILITY_IF_BUTTON_POSITION_RESEARCH_Y: jabilityintegerfield
declare const ABILITY_IF_MISSILE_SPEED: jabilityintegerfield
declare const ABILITY_IF_TARGET_ATTACHMENTS: jabilityintegerfield
declare const ABILITY_IF_CASTER_ATTACHMENTS: jabilityintegerfield
declare const ABILITY_IF_PRIORITY: jabilityintegerfield
declare const ABILITY_IF_LEVELS: jabilityintegerfield
declare const ABILITY_IF_REQUIRED_LEVEL: jabilityintegerfield
declare const ABILITY_IF_LEVEL_SKIP_REQUIREMENT: jabilityintegerfield
declare const ABILITY_BF_HERO_ABILITY: jabilitybooleanfield
declare const ABILITY_BF_ITEM_ABILITY: jabilitybooleanfield
declare const ABILITY_BF_CHECK_DEPENDENCIES: jabilitybooleanfield
declare const ABILITY_RF_ARF_MISSILE_ARC: jabilityrealfield
declare const ABILITY_SF_NAME: jabilitystringfield
declare const ABILITY_SF_ICON_ACTIVATED: jabilitystringfield
declare const ABILITY_SF_ICON_RESEARCH: jabilitystringfield
declare const ABILITY_SF_EFFECT_SOUND: jabilitystringfield
declare const ABILITY_SF_EFFECT_SOUND_LOOPING: jabilitystringfield
declare const ABILITY_ILF_MANA_COST: jabilityintegerlevelfield
declare const ABILITY_ILF_NUMBER_OF_WAVES: jabilityintegerlevelfield
declare const ABILITY_ILF_NUMBER_OF_SHARDS: jabilityintegerlevelfield
declare const ABILITY_ILF_NUMBER_OF_UNITS_TELEPORTED: jabilityintegerlevelfield
declare const ABILITY_ILF_SUMMONED_UNIT_COUNT_HWE2: jabilityintegerlevelfield
declare const ABILITY_ILF_NUMBER_OF_IMAGES: jabilityintegerlevelfield
declare const ABILITY_ILF_NUMBER_OF_CORPSES_RAISED_UAN1: jabilityintegerlevelfield
declare const ABILITY_ILF_MORPHING_FLAGS: jabilityintegerlevelfield
declare const ABILITY_ILF_STRENGTH_BONUS_NRG5: jabilityintegerlevelfield
declare const ABILITY_ILF_DEFENSE_BONUS_NRG6: jabilityintegerlevelfield
declare const ABILITY_ILF_NUMBER_OF_TARGETS_HIT: jabilityintegerlevelfield
declare const ABILITY_ILF_DETECTION_TYPE_OFS1: jabilityintegerlevelfield
declare const ABILITY_ILF_NUMBER_OF_SUMMONED_UNITS_OSF2: jabilityintegerlevelfield
declare const ABILITY_ILF_NUMBER_OF_SUMMONED_UNITS_EFN1: jabilityintegerlevelfield
declare const ABILITY_ILF_NUMBER_OF_CORPSES_RAISED_HRE1: jabilityintegerlevelfield
declare const ABILITY_ILF_STACK_FLAGS: jabilityintegerlevelfield
declare const ABILITY_ILF_MINIMUM_NUMBER_OF_UNITS: jabilityintegerlevelfield
declare const ABILITY_ILF_MAXIMUM_NUMBER_OF_UNITS_NDP3: jabilityintegerlevelfield
declare const ABILITY_ILF_NUMBER_OF_UNITS_CREATED_NRC2: jabilityintegerlevelfield
declare const ABILITY_ILF_SHIELD_LIFE: jabilityintegerlevelfield
declare const ABILITY_ILF_MANA_LOSS_AMS4: jabilityintegerlevelfield
declare const ABILITY_ILF_GOLD_PER_INTERVAL_BGM1: jabilityintegerlevelfield
declare const ABILITY_ILF_MAX_NUMBER_OF_MINERS: jabilityintegerlevelfield
declare const ABILITY_ILF_CARGO_CAPACITY: jabilityintegerlevelfield
declare const ABILITY_ILF_MAXIMUM_CREEP_LEVEL_DEV3: jabilityintegerlevelfield
declare const ABILITY_ILF_MAX_CREEP_LEVEL_DEV1: jabilityintegerlevelfield
declare const ABILITY_ILF_GOLD_PER_INTERVAL_EGM1: jabilityintegerlevelfield
declare const ABILITY_ILF_DEFENSE_REDUCTION: jabilityintegerlevelfield
declare const ABILITY_ILF_DETECTION_TYPE_FLA1: jabilityintegerlevelfield
declare const ABILITY_ILF_FLARE_COUNT: jabilityintegerlevelfield
declare const ABILITY_ILF_MAX_GOLD: jabilityintegerlevelfield
declare const ABILITY_ILF_MINING_CAPACITY: jabilityintegerlevelfield
declare const ABILITY_ILF_MAXIMUM_NUMBER_OF_CORPSES_GYD1: jabilityintegerlevelfield
declare const ABILITY_ILF_DAMAGE_TO_TREE: jabilityintegerlevelfield
declare const ABILITY_ILF_LUMBER_CAPACITY: jabilityintegerlevelfield
declare const ABILITY_ILF_GOLD_CAPACITY: jabilityintegerlevelfield
declare const ABILITY_ILF_DEFENSE_INCREASE_INF2: jabilityintegerlevelfield
declare const ABILITY_ILF_INTERACTION_TYPE: jabilityintegerlevelfield
declare const ABILITY_ILF_GOLD_COST_NDT1: jabilityintegerlevelfield
declare const ABILITY_ILF_LUMBER_COST_NDT2: jabilityintegerlevelfield
declare const ABILITY_ILF_DETECTION_TYPE_NDT3: jabilityintegerlevelfield
declare const ABILITY_ILF_STACKING_TYPE_POI4: jabilityintegerlevelfield
declare const ABILITY_ILF_STACKING_TYPE_POA5: jabilityintegerlevelfield
declare const ABILITY_ILF_MAXIMUM_CREEP_LEVEL_PLY1: jabilityintegerlevelfield
declare const ABILITY_ILF_MAXIMUM_CREEP_LEVEL_POS1: jabilityintegerlevelfield
declare const ABILITY_ILF_MOVEMENT_UPDATE_FREQUENCY_PRG1: jabilityintegerlevelfield
declare const ABILITY_ILF_ATTACK_UPDATE_FREQUENCY_PRG2: jabilityintegerlevelfield
declare const ABILITY_ILF_MANA_LOSS_PRG6: jabilityintegerlevelfield
declare const ABILITY_ILF_UNITS_SUMMONED_TYPE_ONE: jabilityintegerlevelfield
declare const ABILITY_ILF_UNITS_SUMMONED_TYPE_TWO: jabilityintegerlevelfield
declare const ABILITY_ILF_MAX_UNITS_SUMMONED: jabilityintegerlevelfield
declare const ABILITY_ILF_ALLOW_WHEN_FULL_REJ3: jabilityintegerlevelfield
declare const ABILITY_ILF_MAXIMUM_UNITS_CHARGED_TO_CASTER: jabilityintegerlevelfield
declare const ABILITY_ILF_MAXIMUM_UNITS_AFFECTED: jabilityintegerlevelfield
declare const ABILITY_ILF_DEFENSE_INCREASE_ROA2: jabilityintegerlevelfield
declare const ABILITY_ILF_MAX_UNITS_ROA7: jabilityintegerlevelfield
declare const ABILITY_ILF_ROOTED_WEAPONS: jabilityintegerlevelfield
declare const ABILITY_ILF_UPROOTED_WEAPONS: jabilityintegerlevelfield
declare const ABILITY_ILF_UPROOTED_DEFENSE_TYPE: jabilityintegerlevelfield
declare const ABILITY_ILF_ACCUMULATION_STEP: jabilityintegerlevelfield
declare const ABILITY_ILF_NUMBER_OF_OWLS: jabilityintegerlevelfield
declare const ABILITY_ILF_STACKING_TYPE_SPO4: jabilityintegerlevelfield
declare const ABILITY_ILF_NUMBER_OF_UNITS: jabilityintegerlevelfield
declare const ABILITY_ILF_SPIDER_CAPACITY: jabilityintegerlevelfield
declare const ABILITY_ILF_INTERVALS_BEFORE_CHANGING_TREES: jabilityintegerlevelfield
declare const ABILITY_ILF_AGILITY_BONUS: jabilityintegerlevelfield
declare const ABILITY_ILF_INTELLIGENCE_BONUS: jabilityintegerlevelfield
declare const ABILITY_ILF_STRENGTH_BONUS_ISTR: jabilityintegerlevelfield
declare const ABILITY_ILF_ATTACK_BONUS: jabilityintegerlevelfield
declare const ABILITY_ILF_DEFENSE_BONUS_IDEF: jabilityintegerlevelfield
declare const ABILITY_ILF_SUMMON_1_AMOUNT: jabilityintegerlevelfield
declare const ABILITY_ILF_SUMMON_2_AMOUNT: jabilityintegerlevelfield
declare const ABILITY_ILF_EXPERIENCE_GAINED: jabilityintegerlevelfield
declare const ABILITY_ILF_HIT_POINTS_GAINED_IHPG: jabilityintegerlevelfield
declare const ABILITY_ILF_MANA_POINTS_GAINED_IMPG: jabilityintegerlevelfield
declare const ABILITY_ILF_HIT_POINTS_GAINED_IHP2: jabilityintegerlevelfield
declare const ABILITY_ILF_MANA_POINTS_GAINED_IMP2: jabilityintegerlevelfield
declare const ABILITY_ILF_DAMAGE_BONUS_DICE: jabilityintegerlevelfield
declare const ABILITY_ILF_ARMOR_PENALTY_IARP: jabilityintegerlevelfield
declare const ABILITY_ILF_ENABLED_ATTACK_INDEX_IOB5: jabilityintegerlevelfield
declare const ABILITY_ILF_LEVELS_GAINED: jabilityintegerlevelfield
declare const ABILITY_ILF_MAX_LIFE_GAINED: jabilityintegerlevelfield
declare const ABILITY_ILF_MAX_MANA_GAINED: jabilityintegerlevelfield
declare const ABILITY_ILF_GOLD_GIVEN: jabilityintegerlevelfield
declare const ABILITY_ILF_LUMBER_GIVEN: jabilityintegerlevelfield
declare const ABILITY_ILF_DETECTION_TYPE_IFA1: jabilityintegerlevelfield
declare const ABILITY_ILF_MAXIMUM_CREEP_LEVEL_ICRE: jabilityintegerlevelfield
declare const ABILITY_ILF_MOVEMENT_SPEED_BONUS: jabilityintegerlevelfield
declare const ABILITY_ILF_HIT_POINTS_REGENERATED_PER_SECOND: jabilityintegerlevelfield
declare const ABILITY_ILF_SIGHT_RANGE_BONUS: jabilityintegerlevelfield
declare const ABILITY_ILF_DAMAGE_PER_DURATION: jabilityintegerlevelfield
declare const ABILITY_ILF_MANA_USED_PER_SECOND: jabilityintegerlevelfield
declare const ABILITY_ILF_EXTRA_MANA_REQUIRED: jabilityintegerlevelfield
declare const ABILITY_ILF_DETECTION_RADIUS_IDET: jabilityintegerlevelfield
declare const ABILITY_ILF_MANA_LOSS_PER_UNIT_IDIM: jabilityintegerlevelfield
declare const ABILITY_ILF_DAMAGE_TO_SUMMONED_UNITS_IDID: jabilityintegerlevelfield
declare const ABILITY_ILF_MAXIMUM_NUMBER_OF_UNITS_IREC: jabilityintegerlevelfield
declare const ABILITY_ILF_DELAY_AFTER_DEATH_SECONDS: jabilityintegerlevelfield
declare const ABILITY_ILF_RESTORED_LIFE: jabilityintegerlevelfield
declare const ABILITY_ILF_RESTORED_MANA__1_FOR_CURRENT: jabilityintegerlevelfield
declare const ABILITY_ILF_HIT_POINTS_RESTORED: jabilityintegerlevelfield
declare const ABILITY_ILF_MANA_POINTS_RESTORED: jabilityintegerlevelfield
declare const ABILITY_ILF_MAXIMUM_NUMBER_OF_UNITS_ITPM: jabilityintegerlevelfield
declare const ABILITY_ILF_NUMBER_OF_CORPSES_RAISED_CAD1: jabilityintegerlevelfield
declare const ABILITY_ILF_TERRAIN_DEFORMATION_DURATION_MS: jabilityintegerlevelfield
declare const ABILITY_ILF_MAXIMUM_UNITS: jabilityintegerlevelfield
declare const ABILITY_ILF_DETECTION_TYPE_DET1: jabilityintegerlevelfield
declare const ABILITY_ILF_GOLD_COST_PER_STRUCTURE: jabilityintegerlevelfield
declare const ABILITY_ILF_LUMBER_COST_PER_USE: jabilityintegerlevelfield
declare const ABILITY_ILF_DETECTION_TYPE_NSP3: jabilityintegerlevelfield
declare const ABILITY_ILF_NUMBER_OF_SWARM_UNITS: jabilityintegerlevelfield
declare const ABILITY_ILF_MAX_SWARM_UNITS_PER_TARGET: jabilityintegerlevelfield
declare const ABILITY_ILF_NUMBER_OF_SUMMONED_UNITS_NBA2: jabilityintegerlevelfield
declare const ABILITY_ILF_MAXIMUM_CREEP_LEVEL_NCH1: jabilityintegerlevelfield
declare const ABILITY_ILF_ATTACKS_PREVENTED: jabilityintegerlevelfield
declare const ABILITY_ILF_MAXIMUM_NUMBER_OF_TARGETS_EFK3: jabilityintegerlevelfield
declare const ABILITY_ILF_NUMBER_OF_SUMMONED_UNITS_ESV1: jabilityintegerlevelfield
declare const ABILITY_ILF_MAXIMUM_NUMBER_OF_CORPSES_EXH1: jabilityintegerlevelfield
declare const ABILITY_ILF_ITEM_CAPACITY: jabilityintegerlevelfield
declare const ABILITY_ILF_MAXIMUM_NUMBER_OF_TARGETS_SPL2: jabilityintegerlevelfield
declare const ABILITY_ILF_ALLOW_WHEN_FULL_IRL3: jabilityintegerlevelfield
declare const ABILITY_ILF_MAXIMUM_DISPELLED_UNITS: jabilityintegerlevelfield
declare const ABILITY_ILF_NUMBER_OF_LURES: jabilityintegerlevelfield
declare const ABILITY_ILF_NEW_TIME_OF_DAY_HOUR: jabilityintegerlevelfield
declare const ABILITY_ILF_NEW_TIME_OF_DAY_MINUTE: jabilityintegerlevelfield
declare const ABILITY_ILF_NUMBER_OF_UNITS_CREATED_MEC1: jabilityintegerlevelfield
declare const ABILITY_ILF_MINIMUM_SPELLS: jabilityintegerlevelfield
declare const ABILITY_ILF_MAXIMUM_SPELLS: jabilityintegerlevelfield
declare const ABILITY_ILF_DISABLED_ATTACK_INDEX: jabilityintegerlevelfield
declare const ABILITY_ILF_ENABLED_ATTACK_INDEX_GRA4: jabilityintegerlevelfield
declare const ABILITY_ILF_MAXIMUM_ATTACKS: jabilityintegerlevelfield
declare const ABILITY_ILF_BUILDING_TYPES_ALLOWED_NPR1: jabilityintegerlevelfield
declare const ABILITY_ILF_BUILDING_TYPES_ALLOWED_NSA1: jabilityintegerlevelfield
declare const ABILITY_ILF_ATTACK_MODIFICATION: jabilityintegerlevelfield
declare const ABILITY_ILF_SUMMONED_UNIT_COUNT_NPA5: jabilityintegerlevelfield
declare const ABILITY_ILF_UPGRADE_LEVELS: jabilityintegerlevelfield
declare const ABILITY_ILF_NUMBER_OF_SUMMONED_UNITS_NDO2: jabilityintegerlevelfield
declare const ABILITY_ILF_BEASTS_PER_SECOND: jabilityintegerlevelfield
declare const ABILITY_ILF_TARGET_TYPE: jabilityintegerlevelfield
declare const ABILITY_ILF_OPTIONS: jabilityintegerlevelfield
declare const ABILITY_ILF_ARMOR_PENALTY_NAB3: jabilityintegerlevelfield
declare const ABILITY_ILF_WAVE_COUNT_NHS6: jabilityintegerlevelfield
declare const ABILITY_ILF_MAX_CREEP_LEVEL_NTM3: jabilityintegerlevelfield
declare const ABILITY_ILF_MISSILE_COUNT: jabilityintegerlevelfield
declare const ABILITY_ILF_SPLIT_ATTACK_COUNT: jabilityintegerlevelfield
declare const ABILITY_ILF_GENERATION_COUNT: jabilityintegerlevelfield
declare const ABILITY_ILF_ROCK_RING_COUNT: jabilityintegerlevelfield
declare const ABILITY_ILF_WAVE_COUNT_NVC2: jabilityintegerlevelfield
declare const ABILITY_ILF_PREFER_HOSTILES_TAU1: jabilityintegerlevelfield
declare const ABILITY_ILF_PREFER_FRIENDLIES_TAU2: jabilityintegerlevelfield
declare const ABILITY_ILF_MAX_UNITS_TAU3: jabilityintegerlevelfield
declare const ABILITY_ILF_NUMBER_OF_PULSES: jabilityintegerlevelfield
declare const ABILITY_ILF_SUMMONED_UNIT_TYPE_HWE1: jabilityintegerlevelfield
declare const ABILITY_ILF_SUMMONED_UNIT_UIN4: jabilityintegerlevelfield
declare const ABILITY_ILF_SUMMONED_UNIT_OSF1: jabilityintegerlevelfield
declare const ABILITY_ILF_SUMMONED_UNIT_TYPE_EFNU: jabilityintegerlevelfield
declare const ABILITY_ILF_SUMMONED_UNIT_TYPE_NBAU: jabilityintegerlevelfield
declare const ABILITY_ILF_SUMMONED_UNIT_TYPE_NTOU: jabilityintegerlevelfield
declare const ABILITY_ILF_SUMMONED_UNIT_TYPE_ESVU: jabilityintegerlevelfield
declare const ABILITY_ILF_SUMMONED_UNIT_TYPES: jabilityintegerlevelfield
declare const ABILITY_ILF_SUMMONED_UNIT_TYPE_NDOU: jabilityintegerlevelfield
declare const ABILITY_ILF_ALTERNATE_FORM_UNIT_EMEU: jabilityintegerlevelfield
declare const ABILITY_ILF_PLAGUE_WARD_UNIT_TYPE: jabilityintegerlevelfield
declare const ABILITY_ILF_ALLOWED_UNIT_TYPE_BTL1: jabilityintegerlevelfield
declare const ABILITY_ILF_NEW_UNIT_TYPE: jabilityintegerlevelfield
declare const ABILITY_ILF_RESULTING_UNIT_TYPE_ENT1: jabilityintegerlevelfield
declare const ABILITY_ILF_CORPSE_UNIT_TYPE: jabilityintegerlevelfield
declare const ABILITY_ILF_ALLOWED_UNIT_TYPE_LOA1: jabilityintegerlevelfield
declare const ABILITY_ILF_UNIT_TYPE_FOR_LIMIT_CHECK: jabilityintegerlevelfield
declare const ABILITY_ILF_WARD_UNIT_TYPE_STAU: jabilityintegerlevelfield
declare const ABILITY_ILF_EFFECT_ABILITY: jabilityintegerlevelfield
declare const ABILITY_ILF_CONVERSION_UNIT: jabilityintegerlevelfield
declare const ABILITY_ILF_UNIT_TO_PRESERVE: jabilityintegerlevelfield
declare const ABILITY_ILF_UNIT_TYPE_ALLOWED: jabilityintegerlevelfield
declare const ABILITY_ILF_SWARM_UNIT_TYPE: jabilityintegerlevelfield
declare const ABILITY_ILF_RESULTING_UNIT_TYPE_COAU: jabilityintegerlevelfield
declare const ABILITY_ILF_UNIT_TYPE_EXHU: jabilityintegerlevelfield
declare const ABILITY_ILF_WARD_UNIT_TYPE_HWDU: jabilityintegerlevelfield
declare const ABILITY_ILF_LURE_UNIT_TYPE: jabilityintegerlevelfield
declare const ABILITY_ILF_UNIT_TYPE_IPMU: jabilityintegerlevelfield
declare const ABILITY_ILF_FACTORY_UNIT_ID: jabilityintegerlevelfield
declare const ABILITY_ILF_SPAWN_UNIT_ID_NFYU: jabilityintegerlevelfield
declare const ABILITY_ILF_DESTRUCTIBLE_ID: jabilityintegerlevelfield
declare const ABILITY_ILF_UPGRADE_TYPE: jabilityintegerlevelfield
declare const ABILITY_RLF_CASTING_TIME: jabilityreallevelfield
declare const ABILITY_RLF_DURATION_NORMAL: jabilityreallevelfield
declare const ABILITY_RLF_DURATION_HERO: jabilityreallevelfield
declare const ABILITY_RLF_COOLDOWN: jabilityreallevelfield
declare const ABILITY_RLF_AREA_OF_EFFECT: jabilityreallevelfield
declare const ABILITY_RLF_CAST_RANGE: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_HBZ2: jabilityreallevelfield
declare const ABILITY_RLF_BUILDING_REDUCTION_HBZ4: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_PER_SECOND_HBZ5: jabilityreallevelfield
declare const ABILITY_RLF_MAXIMUM_DAMAGE_PER_WAVE: jabilityreallevelfield
declare const ABILITY_RLF_MANA_REGENERATION_INCREASE: jabilityreallevelfield
declare const ABILITY_RLF_CASTING_DELAY: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_PER_SECOND_OWW1: jabilityreallevelfield
declare const ABILITY_RLF_MAGIC_DAMAGE_REDUCTION_OWW2: jabilityreallevelfield
declare const ABILITY_RLF_CHANCE_TO_CRITICAL_STRIKE: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_MULTIPLIER_OCR2: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_BONUS_OCR3: jabilityreallevelfield
declare const ABILITY_RLF_CHANCE_TO_EVADE_OCR4: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_DEALT_PERCENT_OMI2: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_TAKEN_PERCENT_OMI3: jabilityreallevelfield
declare const ABILITY_RLF_ANIMATION_DELAY: jabilityreallevelfield
declare const ABILITY_RLF_TRANSITION_TIME: jabilityreallevelfield
declare const ABILITY_RLF_MOVEMENT_SPEED_INCREASE_PERCENT_OWK2: jabilityreallevelfield
declare const ABILITY_RLF_BACKSTAB_DAMAGE: jabilityreallevelfield
declare const ABILITY_RLF_AMOUNT_HEALED_DAMAGED_UDC1: jabilityreallevelfield
declare const ABILITY_RLF_LIFE_CONVERTED_TO_MANA: jabilityreallevelfield
declare const ABILITY_RLF_LIFE_CONVERTED_TO_LIFE: jabilityreallevelfield
declare const ABILITY_RLF_MOVEMENT_SPEED_INCREASE_PERCENT_UAU1: jabilityreallevelfield
declare const ABILITY_RLF_LIFE_REGENERATION_INCREASE_PERCENT: jabilityreallevelfield
declare const ABILITY_RLF_CHANCE_TO_EVADE_EEV1: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_PER_INTERVAL: jabilityreallevelfield
declare const ABILITY_RLF_MANA_DRAINED_PER_SECOND_EIM2: jabilityreallevelfield
declare const ABILITY_RLF_BUFFER_MANA_REQUIRED: jabilityreallevelfield
declare const ABILITY_RLF_MAX_MANA_DRAINED: jabilityreallevelfield
declare const ABILITY_RLF_BOLT_DELAY: jabilityreallevelfield
declare const ABILITY_RLF_BOLT_LIFETIME: jabilityreallevelfield
declare const ABILITY_RLF_ALTITUDE_ADJUSTMENT_DURATION: jabilityreallevelfield
declare const ABILITY_RLF_LANDING_DELAY_TIME: jabilityreallevelfield
declare const ABILITY_RLF_ALTERNATE_FORM_HIT_POINT_BONUS: jabilityreallevelfield
declare const ABILITY_RLF_MOVE_SPEED_BONUS_INFO_PANEL_ONLY: jabilityreallevelfield
declare const ABILITY_RLF_ATTACK_SPEED_BONUS_INFO_PANEL_ONLY: jabilityreallevelfield
declare const ABILITY_RLF_LIFE_REGENERATION_RATE_PER_SECOND: jabilityreallevelfield
declare const ABILITY_RLF_STUN_DURATION_USL1: jabilityreallevelfield
declare const ABILITY_RLF_ATTACK_DAMAGE_STOLEN_PERCENT: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_UCS1: jabilityreallevelfield
declare const ABILITY_RLF_MAX_DAMAGE_UCS2: jabilityreallevelfield
declare const ABILITY_RLF_DISTANCE_UCS3: jabilityreallevelfield
declare const ABILITY_RLF_FINAL_AREA_UCS4: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_UIN1: jabilityreallevelfield
declare const ABILITY_RLF_DURATION: jabilityreallevelfield
declare const ABILITY_RLF_IMPACT_DELAY: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_PER_TARGET_OCL1: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_REDUCTION_PER_TARGET: jabilityreallevelfield
declare const ABILITY_RLF_EFFECT_DELAY_OEQ1: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_PER_SECOND_TO_BUILDINGS: jabilityreallevelfield
declare const ABILITY_RLF_UNITS_SLOWED_PERCENT: jabilityreallevelfield
declare const ABILITY_RLF_FINAL_AREA_OEQ4: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_PER_SECOND_EER1: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_DEALT_TO_ATTACKERS: jabilityreallevelfield
declare const ABILITY_RLF_LIFE_HEALED: jabilityreallevelfield
declare const ABILITY_RLF_HEAL_INTERVAL: jabilityreallevelfield
declare const ABILITY_RLF_BUILDING_REDUCTION_ETQ3: jabilityreallevelfield
declare const ABILITY_RLF_INITIAL_IMMUNITY_DURATION: jabilityreallevelfield
declare const ABILITY_RLF_MAX_LIFE_DRAINED_PER_SECOND_PERCENT: jabilityreallevelfield
declare const ABILITY_RLF_BUILDING_REDUCTION_UDD2: jabilityreallevelfield
declare const ABILITY_RLF_ARMOR_DURATION: jabilityreallevelfield
declare const ABILITY_RLF_ARMOR_BONUS_UFA2: jabilityreallevelfield
declare const ABILITY_RLF_AREA_OF_EFFECT_DAMAGE: jabilityreallevelfield
declare const ABILITY_RLF_SPECIFIC_TARGET_DAMAGE_UFN2: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_BONUS_HFA1: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_DEALT_ESF1: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_INTERVAL_ESF2: jabilityreallevelfield
declare const ABILITY_RLF_BUILDING_REDUCTION_ESF3: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_BONUS_PERCENT: jabilityreallevelfield
declare const ABILITY_RLF_DEFENSE_BONUS_HAV1: jabilityreallevelfield
declare const ABILITY_RLF_HIT_POINT_BONUS: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_BONUS_HAV3: jabilityreallevelfield
declare const ABILITY_RLF_MAGIC_DAMAGE_REDUCTION_HAV4: jabilityreallevelfield
declare const ABILITY_RLF_CHANCE_TO_BASH: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_MULTIPLIER_HBH2: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_BONUS_HBH3: jabilityreallevelfield
declare const ABILITY_RLF_CHANCE_TO_MISS_HBH4: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_HTB1: jabilityreallevelfield
declare const ABILITY_RLF_AOE_DAMAGE: jabilityreallevelfield
declare const ABILITY_RLF_SPECIFIC_TARGET_DAMAGE_HTC2: jabilityreallevelfield
declare const ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_PERCENT_HTC3: jabilityreallevelfield
declare const ABILITY_RLF_ATTACK_SPEED_REDUCTION_PERCENT_HTC4: jabilityreallevelfield
declare const ABILITY_RLF_ARMOR_BONUS_HAD1: jabilityreallevelfield
declare const ABILITY_RLF_AMOUNT_HEALED_DAMAGED_HHB1: jabilityreallevelfield
declare const ABILITY_RLF_EXTRA_DAMAGE_HCA1: jabilityreallevelfield
declare const ABILITY_RLF_MOVEMENT_SPEED_FACTOR_HCA2: jabilityreallevelfield
declare const ABILITY_RLF_ATTACK_SPEED_FACTOR_HCA3: jabilityreallevelfield
declare const ABILITY_RLF_MOVEMENT_SPEED_INCREASE_PERCENT_OAE1: jabilityreallevelfield
declare const ABILITY_RLF_ATTACK_SPEED_INCREASE_PERCENT_OAE2: jabilityreallevelfield
declare const ABILITY_RLF_REINCARNATION_DELAY: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_OSH1: jabilityreallevelfield
declare const ABILITY_RLF_MAXIMUM_DAMAGE_OSH2: jabilityreallevelfield
declare const ABILITY_RLF_DISTANCE_OSH3: jabilityreallevelfield
declare const ABILITY_RLF_FINAL_AREA_OSH4: jabilityreallevelfield
declare const ABILITY_RLF_GRAPHIC_DELAY_NFD1: jabilityreallevelfield
declare const ABILITY_RLF_GRAPHIC_DURATION_NFD2: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_NFD3: jabilityreallevelfield
declare const ABILITY_RLF_SUMMONED_UNIT_DAMAGE_AMS1: jabilityreallevelfield
declare const ABILITY_RLF_MAGIC_DAMAGE_REDUCTION_AMS2: jabilityreallevelfield
declare const ABILITY_RLF_AURA_DURATION: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_PER_SECOND_APL2: jabilityreallevelfield
declare const ABILITY_RLF_DURATION_OF_PLAGUE_WARD: jabilityreallevelfield
declare const ABILITY_RLF_AMOUNT_OF_HIT_POINTS_REGENERATED: jabilityreallevelfield
declare const ABILITY_RLF_ATTACK_DAMAGE_INCREASE_AKB1: jabilityreallevelfield
declare const ABILITY_RLF_MANA_LOSS_ADM1: jabilityreallevelfield
declare const ABILITY_RLF_SUMMONED_UNIT_DAMAGE_ADM2: jabilityreallevelfield
declare const ABILITY_RLF_EXPANSION_AMOUNT: jabilityreallevelfield
declare const ABILITY_RLF_INTERVAL_DURATION_BGM2: jabilityreallevelfield
declare const ABILITY_RLF_RADIUS_OF_MINING_RING: jabilityreallevelfield
declare const ABILITY_RLF_ATTACK_SPEED_INCREASE_PERCENT_BLO1: jabilityreallevelfield
declare const ABILITY_RLF_MOVEMENT_SPEED_INCREASE_PERCENT_BLO2: jabilityreallevelfield
declare const ABILITY_RLF_SCALING_FACTOR: jabilityreallevelfield
declare const ABILITY_RLF_HIT_POINTS_PER_SECOND_CAN1: jabilityreallevelfield
declare const ABILITY_RLF_MAX_HIT_POINTS: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_PER_SECOND_DEV2: jabilityreallevelfield
declare const ABILITY_RLF_MOVEMENT_UPDATE_FREQUENCY_CHD1: jabilityreallevelfield
declare const ABILITY_RLF_ATTACK_UPDATE_FREQUENCY_CHD2: jabilityreallevelfield
declare const ABILITY_RLF_SUMMONED_UNIT_DAMAGE_CHD3: jabilityreallevelfield
declare const ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_PERCENT_CRI1: jabilityreallevelfield
declare const ABILITY_RLF_ATTACK_SPEED_REDUCTION_PERCENT_CRI2: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_REDUCTION_CRI3: jabilityreallevelfield
declare const ABILITY_RLF_CHANCE_TO_MISS_CRS: jabilityreallevelfield
declare const ABILITY_RLF_FULL_DAMAGE_RADIUS_DDA1: jabilityreallevelfield
declare const ABILITY_RLF_FULL_DAMAGE_AMOUNT_DDA2: jabilityreallevelfield
declare const ABILITY_RLF_PARTIAL_DAMAGE_RADIUS: jabilityreallevelfield
declare const ABILITY_RLF_PARTIAL_DAMAGE_AMOUNT: jabilityreallevelfield
declare const ABILITY_RLF_BUILDING_DAMAGE_FACTOR_SDS1: jabilityreallevelfield
declare const ABILITY_RLF_MAX_DAMAGE_UCO5: jabilityreallevelfield
declare const ABILITY_RLF_MOVE_SPEED_BONUS_UCO6: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_TAKEN_PERCENT_DEF1: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_DEALT_PERCENT_DEF2: jabilityreallevelfield
declare const ABILITY_RLF_MOVEMENT_SPEED_FACTOR_DEF3: jabilityreallevelfield
declare const ABILITY_RLF_ATTACK_SPEED_FACTOR_DEF4: jabilityreallevelfield
declare const ABILITY_RLF_MAGIC_DAMAGE_REDUCTION_DEF5: jabilityreallevelfield
declare const ABILITY_RLF_CHANCE_TO_DEFLECT: jabilityreallevelfield
declare const ABILITY_RLF_DEFLECT_DAMAGE_TAKEN_PIERCING: jabilityreallevelfield
declare const ABILITY_RLF_DEFLECT_DAMAGE_TAKEN_SPELLS: jabilityreallevelfield
declare const ABILITY_RLF_RIP_DELAY: jabilityreallevelfield
declare const ABILITY_RLF_EAT_DELAY: jabilityreallevelfield
declare const ABILITY_RLF_HIT_POINTS_GAINED_EAT3: jabilityreallevelfield
declare const ABILITY_RLF_AIR_UNIT_LOWER_DURATION: jabilityreallevelfield
declare const ABILITY_RLF_AIR_UNIT_HEIGHT: jabilityreallevelfield
declare const ABILITY_RLF_MELEE_ATTACK_RANGE: jabilityreallevelfield
declare const ABILITY_RLF_INTERVAL_DURATION_EGM2: jabilityreallevelfield
declare const ABILITY_RLF_EFFECT_DELAY_FLA2: jabilityreallevelfield
declare const ABILITY_RLF_MINING_DURATION: jabilityreallevelfield
declare const ABILITY_RLF_RADIUS_OF_GRAVESTONES: jabilityreallevelfield
declare const ABILITY_RLF_RADIUS_OF_CORPSES: jabilityreallevelfield
declare const ABILITY_RLF_HIT_POINTS_GAINED_HEA1: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_INCREASE_PERCENT_INF1: jabilityreallevelfield
declare const ABILITY_RLF_AUTOCAST_RANGE: jabilityreallevelfield
declare const ABILITY_RLF_LIFE_REGEN_RATE: jabilityreallevelfield
declare const ABILITY_RLF_GRAPHIC_DELAY_LIT1: jabilityreallevelfield
declare const ABILITY_RLF_GRAPHIC_DURATION_LIT2: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_PER_SECOND_LSH1: jabilityreallevelfield
declare const ABILITY_RLF_MANA_GAINED: jabilityreallevelfield
declare const ABILITY_RLF_HIT_POINTS_GAINED_MBT2: jabilityreallevelfield
declare const ABILITY_RLF_AUTOCAST_REQUIREMENT: jabilityreallevelfield
declare const ABILITY_RLF_WATER_HEIGHT: jabilityreallevelfield
declare const ABILITY_RLF_ACTIVATION_DELAY_MIN1: jabilityreallevelfield
declare const ABILITY_RLF_INVISIBILITY_TRANSITION_TIME: jabilityreallevelfield
declare const ABILITY_RLF_ACTIVATION_RADIUS: jabilityreallevelfield
declare const ABILITY_RLF_AMOUNT_REGENERATED: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_PER_SECOND_POI1: jabilityreallevelfield
declare const ABILITY_RLF_ATTACK_SPEED_FACTOR_POI2: jabilityreallevelfield
declare const ABILITY_RLF_MOVEMENT_SPEED_FACTOR_POI3: jabilityreallevelfield
declare const ABILITY_RLF_EXTRA_DAMAGE_POA1: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_PER_SECOND_POA2: jabilityreallevelfield
declare const ABILITY_RLF_ATTACK_SPEED_FACTOR_POA3: jabilityreallevelfield
declare const ABILITY_RLF_MOVEMENT_SPEED_FACTOR_POA4: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_AMPLIFICATION: jabilityreallevelfield
declare const ABILITY_RLF_CHANCE_TO_STOMP_PERCENT: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_DEALT_WAR2: jabilityreallevelfield
declare const ABILITY_RLF_FULL_DAMAGE_RADIUS_WAR3: jabilityreallevelfield
declare const ABILITY_RLF_HALF_DAMAGE_RADIUS_WAR4: jabilityreallevelfield
declare const ABILITY_RLF_SUMMONED_UNIT_DAMAGE_PRG3: jabilityreallevelfield
declare const ABILITY_RLF_UNIT_PAUSE_DURATION: jabilityreallevelfield
declare const ABILITY_RLF_HERO_PAUSE_DURATION: jabilityreallevelfield
declare const ABILITY_RLF_HIT_POINTS_GAINED_REJ1: jabilityreallevelfield
declare const ABILITY_RLF_MANA_POINTS_GAINED_REJ2: jabilityreallevelfield
declare const ABILITY_RLF_MINIMUM_LIFE_REQUIRED: jabilityreallevelfield
declare const ABILITY_RLF_MINIMUM_MANA_REQUIRED: jabilityreallevelfield
declare const ABILITY_RLF_REPAIR_COST_RATIO: jabilityreallevelfield
declare const ABILITY_RLF_REPAIR_TIME_RATIO: jabilityreallevelfield
declare const ABILITY_RLF_POWERBUILD_COST: jabilityreallevelfield
declare const ABILITY_RLF_POWERBUILD_RATE: jabilityreallevelfield
declare const ABILITY_RLF_NAVAL_RANGE_BONUS: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_INCREASE_PERCENT_ROA1: jabilityreallevelfield
declare const ABILITY_RLF_LIFE_REGENERATION_RATE: jabilityreallevelfield
declare const ABILITY_RLF_MANA_REGEN: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_INCREASE: jabilityreallevelfield
declare const ABILITY_RLF_SALVAGE_COST_RATIO: jabilityreallevelfield
declare const ABILITY_RLF_IN_FLIGHT_SIGHT_RADIUS: jabilityreallevelfield
declare const ABILITY_RLF_HOVERING_SIGHT_RADIUS: jabilityreallevelfield
declare const ABILITY_RLF_HOVERING_HEIGHT: jabilityreallevelfield
declare const ABILITY_RLF_DURATION_OF_OWLS: jabilityreallevelfield
declare const ABILITY_RLF_FADE_DURATION: jabilityreallevelfield
declare const ABILITY_RLF_DAY_NIGHT_DURATION: jabilityreallevelfield
declare const ABILITY_RLF_ACTION_DURATION: jabilityreallevelfield
declare const ABILITY_RLF_MOVEMENT_SPEED_FACTOR_SLO1: jabilityreallevelfield
declare const ABILITY_RLF_ATTACK_SPEED_FACTOR_SLO2: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_PER_SECOND_SPO1: jabilityreallevelfield
declare const ABILITY_RLF_MOVEMENT_SPEED_FACTOR_SPO2: jabilityreallevelfield
declare const ABILITY_RLF_ATTACK_SPEED_FACTOR_SPO3: jabilityreallevelfield
declare const ABILITY_RLF_ACTIVATION_DELAY_STA1: jabilityreallevelfield
declare const ABILITY_RLF_DETECTION_RADIUS_STA2: jabilityreallevelfield
declare const ABILITY_RLF_DETONATION_RADIUS: jabilityreallevelfield
declare const ABILITY_RLF_STUN_DURATION_STA4: jabilityreallevelfield
declare const ABILITY_RLF_ATTACK_SPEED_BONUS_PERCENT: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_PER_SECOND_UHF2: jabilityreallevelfield
declare const ABILITY_RLF_LUMBER_PER_INTERVAL: jabilityreallevelfield
declare const ABILITY_RLF_ART_ATTACHMENT_HEIGHT: jabilityreallevelfield
declare const ABILITY_RLF_TELEPORT_AREA_WIDTH: jabilityreallevelfield
declare const ABILITY_RLF_TELEPORT_AREA_HEIGHT: jabilityreallevelfield
declare const ABILITY_RLF_LIFE_STOLEN_PER_ATTACK: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_BONUS_IDAM: jabilityreallevelfield
declare const ABILITY_RLF_CHANCE_TO_HIT_UNITS_PERCENT: jabilityreallevelfield
declare const ABILITY_RLF_CHANCE_TO_HIT_HEROS_PERCENT: jabilityreallevelfield
declare const ABILITY_RLF_CHANCE_TO_HIT_SUMMONS_PERCENT: jabilityreallevelfield
declare const ABILITY_RLF_DELAY_FOR_TARGET_EFFECT: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_DEALT_PERCENT_OF_NORMAL: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_RECEIVED_MULTIPLIER: jabilityreallevelfield
declare const ABILITY_RLF_MANA_REGENERATION_BONUS_AS_FRACTION_OF_NORMAL: jabilityreallevelfield
declare const ABILITY_RLF_MOVEMENT_SPEED_INCREASE_ISPI: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_PER_SECOND_IDPS: jabilityreallevelfield
declare const ABILITY_RLF_ATTACK_DAMAGE_INCREASE_CAC1: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_PER_SECOND_COR1: jabilityreallevelfield
declare const ABILITY_RLF_ATTACK_SPEED_INCREASE_ISX1: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_WRS1: jabilityreallevelfield
declare const ABILITY_RLF_TERRAIN_DEFORMATION_AMPLITUDE: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_CTC1: jabilityreallevelfield
declare const ABILITY_RLF_EXTRA_DAMAGE_TO_TARGET: jabilityreallevelfield
declare const ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_CTC3: jabilityreallevelfield
declare const ABILITY_RLF_ATTACK_SPEED_REDUCTION_CTC4: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_CTB1: jabilityreallevelfield
declare const ABILITY_RLF_CASTING_DELAY_SECONDS: jabilityreallevelfield
declare const ABILITY_RLF_MANA_LOSS_PER_UNIT_DTN1: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_TO_SUMMONED_UNITS_DTN2: jabilityreallevelfield
declare const ABILITY_RLF_TRANSITION_TIME_SECONDS: jabilityreallevelfield
declare const ABILITY_RLF_MANA_DRAINED_PER_SECOND_NMR1: jabilityreallevelfield
declare const ABILITY_RLF_CHANCE_TO_REDUCE_DAMAGE_PERCENT: jabilityreallevelfield
declare const ABILITY_RLF_MINIMUM_DAMAGE: jabilityreallevelfield
declare const ABILITY_RLF_IGNORED_DAMAGE: jabilityreallevelfield
declare const ABILITY_RLF_FULL_DAMAGE_DEALT: jabilityreallevelfield
declare const ABILITY_RLF_FULL_DAMAGE_INTERVAL: jabilityreallevelfield
declare const ABILITY_RLF_HALF_DAMAGE_DEALT: jabilityreallevelfield
declare const ABILITY_RLF_HALF_DAMAGE_INTERVAL: jabilityreallevelfield
declare const ABILITY_RLF_BUILDING_REDUCTION_HFS5: jabilityreallevelfield
declare const ABILITY_RLF_MAXIMUM_DAMAGE_HFS6: jabilityreallevelfield
declare const ABILITY_RLF_MANA_PER_HIT_POINT: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_ABSORBED_PERCENT: jabilityreallevelfield
declare const ABILITY_RLF_WAVE_DISTANCE: jabilityreallevelfield
declare const ABILITY_RLF_WAVE_TIME_SECONDS: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_DEALT_UIM3: jabilityreallevelfield
declare const ABILITY_RLF_AIR_TIME_SECONDS_UIM4: jabilityreallevelfield
declare const ABILITY_RLF_UNIT_RELEASE_INTERVAL_SECONDS: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_RETURN_FACTOR: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_RETURN_THRESHOLD: jabilityreallevelfield
declare const ABILITY_RLF_RETURNED_DAMAGE_FACTOR: jabilityreallevelfield
declare const ABILITY_RLF_RECEIVED_DAMAGE_FACTOR: jabilityreallevelfield
declare const ABILITY_RLF_DEFENSE_BONUS_UTS3: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_BONUS_NBA1: jabilityreallevelfield
declare const ABILITY_RLF_SUMMONED_UNIT_DURATION_SECONDS_NBA3: jabilityreallevelfield
declare const ABILITY_RLF_MANA_PER_SUMMONED_HITPOINT: jabilityreallevelfield
declare const ABILITY_RLF_CHARGE_FOR_CURRENT_LIFE: jabilityreallevelfield
declare const ABILITY_RLF_HIT_POINTS_DRAINED: jabilityreallevelfield
declare const ABILITY_RLF_MANA_POINTS_DRAINED: jabilityreallevelfield
declare const ABILITY_RLF_DRAIN_INTERVAL_SECONDS: jabilityreallevelfield
declare const ABILITY_RLF_LIFE_TRANSFERRED_PER_SECOND: jabilityreallevelfield
declare const ABILITY_RLF_MANA_TRANSFERRED_PER_SECOND: jabilityreallevelfield
declare const ABILITY_RLF_BONUS_LIFE_FACTOR: jabilityreallevelfield
declare const ABILITY_RLF_BONUS_LIFE_DECAY: jabilityreallevelfield
declare const ABILITY_RLF_BONUS_MANA_FACTOR: jabilityreallevelfield
declare const ABILITY_RLF_BONUS_MANA_DECAY: jabilityreallevelfield
declare const ABILITY_RLF_CHANCE_TO_MISS_PERCENT: jabilityreallevelfield
declare const ABILITY_RLF_MOVEMENT_SPEED_MODIFIER: jabilityreallevelfield
declare const ABILITY_RLF_ATTACK_SPEED_MODIFIER: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_PER_SECOND_TDG1: jabilityreallevelfield
declare const ABILITY_RLF_MEDIUM_DAMAGE_RADIUS_TDG2: jabilityreallevelfield
declare const ABILITY_RLF_MEDIUM_DAMAGE_PER_SECOND: jabilityreallevelfield
declare const ABILITY_RLF_SMALL_DAMAGE_RADIUS_TDG4: jabilityreallevelfield
declare const ABILITY_RLF_SMALL_DAMAGE_PER_SECOND: jabilityreallevelfield
declare const ABILITY_RLF_AIR_TIME_SECONDS_TSP1: jabilityreallevelfield
declare const ABILITY_RLF_MINIMUM_HIT_INTERVAL_SECONDS: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_PER_SECOND_NBF5: jabilityreallevelfield
declare const ABILITY_RLF_MAXIMUM_RANGE: jabilityreallevelfield
declare const ABILITY_RLF_MINIMUM_RANGE: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_PER_TARGET_EFK1: jabilityreallevelfield
declare const ABILITY_RLF_MAXIMUM_TOTAL_DAMAGE: jabilityreallevelfield
declare const ABILITY_RLF_MAXIMUM_SPEED_ADJUSTMENT: jabilityreallevelfield
declare const ABILITY_RLF_DECAYING_DAMAGE: jabilityreallevelfield
declare const ABILITY_RLF_MOVEMENT_SPEED_FACTOR_ESH2: jabilityreallevelfield
declare const ABILITY_RLF_ATTACK_SPEED_FACTOR_ESH3: jabilityreallevelfield
declare const ABILITY_RLF_DECAY_POWER: jabilityreallevelfield
declare const ABILITY_RLF_INITIAL_DAMAGE_ESH5: jabilityreallevelfield
declare const ABILITY_RLF_MAXIMUM_LIFE_ABSORBED: jabilityreallevelfield
declare const ABILITY_RLF_MAXIMUM_MANA_ABSORBED: jabilityreallevelfield
declare const ABILITY_RLF_MOVEMENT_SPEED_INCREASE_BSK1: jabilityreallevelfield
declare const ABILITY_RLF_ATTACK_SPEED_INCREASE_BSK2: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_TAKEN_INCREASE: jabilityreallevelfield
declare const ABILITY_RLF_LIFE_PER_UNIT: jabilityreallevelfield
declare const ABILITY_RLF_MANA_PER_UNIT: jabilityreallevelfield
declare const ABILITY_RLF_LIFE_PER_BUFF: jabilityreallevelfield
declare const ABILITY_RLF_MANA_PER_BUFF: jabilityreallevelfield
declare const ABILITY_RLF_SUMMONED_UNIT_DAMAGE_DVM5: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_BONUS_FAK1: jabilityreallevelfield
declare const ABILITY_RLF_MEDIUM_DAMAGE_FACTOR_FAK2: jabilityreallevelfield
declare const ABILITY_RLF_SMALL_DAMAGE_FACTOR_FAK3: jabilityreallevelfield
declare const ABILITY_RLF_FULL_DAMAGE_RADIUS_FAK4: jabilityreallevelfield
declare const ABILITY_RLF_HALF_DAMAGE_RADIUS_FAK5: jabilityreallevelfield
declare const ABILITY_RLF_EXTRA_DAMAGE_PER_SECOND: jabilityreallevelfield
declare const ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_LIQ2: jabilityreallevelfield
declare const ABILITY_RLF_ATTACK_SPEED_REDUCTION_LIQ3: jabilityreallevelfield
declare const ABILITY_RLF_MAGIC_DAMAGE_FACTOR: jabilityreallevelfield
declare const ABILITY_RLF_UNIT_DAMAGE_PER_MANA_POINT: jabilityreallevelfield
declare const ABILITY_RLF_HERO_DAMAGE_PER_MANA_POINT: jabilityreallevelfield
declare const ABILITY_RLF_UNIT_MAXIMUM_DAMAGE: jabilityreallevelfield
declare const ABILITY_RLF_HERO_MAXIMUM_DAMAGE: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_COOLDOWN: jabilityreallevelfield
declare const ABILITY_RLF_DISTRIBUTED_DAMAGE_FACTOR_SPL1: jabilityreallevelfield
declare const ABILITY_RLF_LIFE_REGENERATED: jabilityreallevelfield
declare const ABILITY_RLF_MANA_REGENERATED: jabilityreallevelfield
declare const ABILITY_RLF_MANA_LOSS_PER_UNIT_IDC1: jabilityreallevelfield
declare const ABILITY_RLF_SUMMONED_UNIT_DAMAGE_IDC2: jabilityreallevelfield
declare const ABILITY_RLF_ACTIVATION_DELAY_IMO2: jabilityreallevelfield
declare const ABILITY_RLF_LURE_INTERVAL_SECONDS: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_BONUS_ISR1: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_REDUCTION_ISR2: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_BONUS_IPV1: jabilityreallevelfield
declare const ABILITY_RLF_LIFE_STEAL_AMOUNT: jabilityreallevelfield
declare const ABILITY_RLF_LIFE_RESTORED_FACTOR: jabilityreallevelfield
declare const ABILITY_RLF_MANA_RESTORED_FACTOR: jabilityreallevelfield
declare const ABILITY_RLF_ATTACH_DELAY: jabilityreallevelfield
declare const ABILITY_RLF_REMOVE_DELAY: jabilityreallevelfield
declare const ABILITY_RLF_HERO_REGENERATION_DELAY: jabilityreallevelfield
declare const ABILITY_RLF_UNIT_REGENERATION_DELAY: jabilityreallevelfield
declare const ABILITY_RLF_MAGIC_DAMAGE_REDUCTION_NSA4: jabilityreallevelfield
declare const ABILITY_RLF_HIT_POINTS_PER_SECOND_NSA5: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_TO_SUMMONED_UNITS_IXS1: jabilityreallevelfield
declare const ABILITY_RLF_MAGIC_DAMAGE_REDUCTION_IXS2: jabilityreallevelfield
declare const ABILITY_RLF_SUMMONED_UNIT_DURATION: jabilityreallevelfield
declare const ABILITY_RLF_SHIELD_COOLDOWN_TIME: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_PER_SECOND_NDO1: jabilityreallevelfield
declare const ABILITY_RLF_SUMMONED_UNIT_DURATION_SECONDS_NDO3: jabilityreallevelfield
declare const ABILITY_RLF_MEDIUM_DAMAGE_RADIUS_FLK1: jabilityreallevelfield
declare const ABILITY_RLF_SMALL_DAMAGE_RADIUS_FLK2: jabilityreallevelfield
declare const ABILITY_RLF_FULL_DAMAGE_AMOUNT_FLK3: jabilityreallevelfield
declare const ABILITY_RLF_MEDIUM_DAMAGE_AMOUNT: jabilityreallevelfield
declare const ABILITY_RLF_SMALL_DAMAGE_AMOUNT: jabilityreallevelfield
declare const ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_PERCENT_HBN1: jabilityreallevelfield
declare const ABILITY_RLF_ATTACK_SPEED_REDUCTION_PERCENT_HBN2: jabilityreallevelfield
declare const ABILITY_RLF_MAX_MANA_DRAINED_UNITS: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_RATIO_UNITS_PERCENT: jabilityreallevelfield
declare const ABILITY_RLF_MAX_MANA_DRAINED_HEROS: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_RATIO_HEROS_PERCENT: jabilityreallevelfield
declare const ABILITY_RLF_SUMMONED_DAMAGE: jabilityreallevelfield
declare const ABILITY_RLF_DISTRIBUTED_DAMAGE_FACTOR_NCA1: jabilityreallevelfield
declare const ABILITY_RLF_INITIAL_DAMAGE_PXF1: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_PER_SECOND_PXF2: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_PER_SECOND_MLS1: jabilityreallevelfield
declare const ABILITY_RLF_BEAST_COLLISION_RADIUS: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_AMOUNT_NST3: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_RADIUS: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_DELAY: jabilityreallevelfield
declare const ABILITY_RLF_FOLLOW_THROUGH_TIME: jabilityreallevelfield
declare const ABILITY_RLF_ART_DURATION: jabilityreallevelfield
declare const ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_PERCENT_NAB1: jabilityreallevelfield
declare const ABILITY_RLF_ATTACK_SPEED_REDUCTION_PERCENT_NAB2: jabilityreallevelfield
declare const ABILITY_RLF_PRIMARY_DAMAGE: jabilityreallevelfield
declare const ABILITY_RLF_SECONDARY_DAMAGE: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_INTERVAL_NAB6: jabilityreallevelfield
declare const ABILITY_RLF_GOLD_COST_FACTOR: jabilityreallevelfield
declare const ABILITY_RLF_LUMBER_COST_FACTOR: jabilityreallevelfield
declare const ABILITY_RLF_MOVE_SPEED_BONUS_NEG1: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_BONUS_NEG2: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_AMOUNT_NCS1: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_INTERVAL_NCS2: jabilityreallevelfield
declare const ABILITY_RLF_MAX_DAMAGE_NCS4: jabilityreallevelfield
declare const ABILITY_RLF_BUILDING_DAMAGE_FACTOR_NCS5: jabilityreallevelfield
declare const ABILITY_RLF_EFFECT_DURATION: jabilityreallevelfield
declare const ABILITY_RLF_SPAWN_INTERVAL_NSY1: jabilityreallevelfield
declare const ABILITY_RLF_SPAWN_UNIT_DURATION: jabilityreallevelfield
declare const ABILITY_RLF_SPAWN_UNIT_OFFSET: jabilityreallevelfield
declare const ABILITY_RLF_LEASH_RANGE_NSY5: jabilityreallevelfield
declare const ABILITY_RLF_SPAWN_INTERVAL_NFY1: jabilityreallevelfield
declare const ABILITY_RLF_LEASH_RANGE_NFY2: jabilityreallevelfield
declare const ABILITY_RLF_CHANCE_TO_DEMOLISH: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_MULTIPLIER_BUILDINGS: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_MULTIPLIER_UNITS: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_MULTIPLIER_HEROES: jabilityreallevelfield
declare const ABILITY_RLF_BONUS_DAMAGE_MULTIPLIER: jabilityreallevelfield
declare const ABILITY_RLF_DEATH_DAMAGE_FULL_AMOUNT: jabilityreallevelfield
declare const ABILITY_RLF_DEATH_DAMAGE_FULL_AREA: jabilityreallevelfield
declare const ABILITY_RLF_DEATH_DAMAGE_HALF_AMOUNT: jabilityreallevelfield
declare const ABILITY_RLF_DEATH_DAMAGE_HALF_AREA: jabilityreallevelfield
declare const ABILITY_RLF_DEATH_DAMAGE_DELAY: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_AMOUNT_NSO1: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_PERIOD: jabilityreallevelfield
declare const ABILITY_RLF_DAMAGE_PENALTY: jabilityreallevelfield
declare const ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_PERCENT_NSO4: jabilityreallevelfield
declare const ABILITY_RLF_ATTACK_SPEED_REDUCTION_PERCENT_NSO5: jabilityreallevelfield
declare const ABILITY_RLF_SPLIT_DELAY: jabilityreallevelfield
declare const ABILITY_RLF_MAX_HITPOINT_FACTOR: jabilityreallevelfield
declare const ABILITY_RLF_LIFE_DURATION_SPLIT_BONUS: jabilityreallevelfield
declare const ABILITY_RLF_WAVE_INTERVAL: jabilityreallevelfield
declare const ABILITY_RLF_BUILDING_DAMAGE_FACTOR_NVC4: jabilityreallevelfield
declare const ABILITY_RLF_FULL_DAMAGE_AMOUNT_NVC5: jabilityreallevelfield
declare const ABILITY_RLF_HALF_DAMAGE_FACTOR: jabilityreallevelfield
declare const ABILITY_RLF_INTERVAL_BETWEEN_PULSES: jabilityreallevelfield
declare const ABILITY_BLF_PERCENT_BONUS_HAB2: jabilitybooleanlevelfield
declare const ABILITY_BLF_USE_TELEPORT_CLUSTERING_HMT3: jabilitybooleanlevelfield
declare const ABILITY_BLF_NEVER_MISS_OCR5: jabilitybooleanlevelfield
declare const ABILITY_BLF_EXCLUDE_ITEM_DAMAGE: jabilitybooleanlevelfield
declare const ABILITY_BLF_BACKSTAB_DAMAGE: jabilitybooleanlevelfield
declare const ABILITY_BLF_INHERIT_UPGRADES_UAN3: jabilitybooleanlevelfield
declare const ABILITY_BLF_MANA_CONVERSION_AS_PERCENT: jabilitybooleanlevelfield
declare const ABILITY_BLF_LIFE_CONVERSION_AS_PERCENT: jabilitybooleanlevelfield
declare const ABILITY_BLF_LEAVE_TARGET_ALIVE: jabilitybooleanlevelfield
declare const ABILITY_BLF_PERCENT_BONUS_UAU3: jabilitybooleanlevelfield
declare const ABILITY_BLF_DAMAGE_IS_PERCENT_RECEIVED: jabilitybooleanlevelfield
declare const ABILITY_BLF_MELEE_BONUS: jabilitybooleanlevelfield
declare const ABILITY_BLF_RANGED_BONUS: jabilitybooleanlevelfield
declare const ABILITY_BLF_FLAT_BONUS: jabilitybooleanlevelfield
declare const ABILITY_BLF_NEVER_MISS_HBH5: jabilitybooleanlevelfield
declare const ABILITY_BLF_PERCENT_BONUS_HAD2: jabilitybooleanlevelfield
declare const ABILITY_BLF_CAN_DEACTIVATE: jabilitybooleanlevelfield
declare const ABILITY_BLF_RAISED_UNITS_ARE_INVULNERABLE: jabilitybooleanlevelfield
declare const ABILITY_BLF_PERCENTAGE_OAR2: jabilitybooleanlevelfield
declare const ABILITY_BLF_SUMMON_BUSY_UNITS: jabilitybooleanlevelfield
declare const ABILITY_BLF_CREATES_BLIGHT: jabilitybooleanlevelfield
declare const ABILITY_BLF_EXPLODES_ON_DEATH: jabilitybooleanlevelfield
declare const ABILITY_BLF_ALWAYS_AUTOCAST_FAE2: jabilitybooleanlevelfield
declare const ABILITY_BLF_REGENERATE_ONLY_AT_NIGHT: jabilitybooleanlevelfield
declare const ABILITY_BLF_SHOW_SELECT_UNIT_BUTTON: jabilitybooleanlevelfield
declare const ABILITY_BLF_SHOW_UNIT_INDICATOR: jabilitybooleanlevelfield
declare const ABILITY_BLF_CHARGE_OWNING_PLAYER: jabilitybooleanlevelfield
declare const ABILITY_BLF_PERCENTAGE_ARM2: jabilitybooleanlevelfield
declare const ABILITY_BLF_TARGET_IS_INVULNERABLE: jabilitybooleanlevelfield
declare const ABILITY_BLF_TARGET_IS_MAGIC_IMMUNE: jabilitybooleanlevelfield
declare const ABILITY_BLF_KILL_ON_CASTER_DEATH: jabilitybooleanlevelfield
declare const ABILITY_BLF_NO_TARGET_REQUIRED_REJ4: jabilitybooleanlevelfield
declare const ABILITY_BLF_ACCEPTS_GOLD: jabilitybooleanlevelfield
declare const ABILITY_BLF_ACCEPTS_LUMBER: jabilitybooleanlevelfield
declare const ABILITY_BLF_PREFER_HOSTILES_ROA5: jabilitybooleanlevelfield
declare const ABILITY_BLF_PREFER_FRIENDLIES_ROA6: jabilitybooleanlevelfield
declare const ABILITY_BLF_ROOTED_TURNING: jabilitybooleanlevelfield
declare const ABILITY_BLF_ALWAYS_AUTOCAST_SLO3: jabilitybooleanlevelfield
declare const ABILITY_BLF_HIDE_BUTTON: jabilitybooleanlevelfield
declare const ABILITY_BLF_USE_TELEPORT_CLUSTERING_ITP2: jabilitybooleanlevelfield
declare const ABILITY_BLF_IMMUNE_TO_MORPH_EFFECTS: jabilitybooleanlevelfield
declare const ABILITY_BLF_DOES_NOT_BLOCK_BUILDINGS: jabilitybooleanlevelfield
declare const ABILITY_BLF_AUTO_ACQUIRE_ATTACK_TARGETS: jabilitybooleanlevelfield
declare const ABILITY_BLF_IMMUNE_TO_MORPH_EFFECTS_GHO2: jabilitybooleanlevelfield
declare const ABILITY_BLF_DO_NOT_BLOCK_BUILDINGS: jabilitybooleanlevelfield
declare const ABILITY_BLF_INCLUDE_RANGED_DAMAGE: jabilitybooleanlevelfield
declare const ABILITY_BLF_INCLUDE_MELEE_DAMAGE: jabilitybooleanlevelfield
declare const ABILITY_BLF_MOVE_TO_PARTNER: jabilitybooleanlevelfield
declare const ABILITY_BLF_CAN_BE_DISPELLED: jabilitybooleanlevelfield
declare const ABILITY_BLF_IGNORE_FRIENDLY_BUFFS: jabilitybooleanlevelfield
declare const ABILITY_BLF_DROP_ITEMS_ON_DEATH: jabilitybooleanlevelfield
declare const ABILITY_BLF_CAN_USE_ITEMS: jabilitybooleanlevelfield
declare const ABILITY_BLF_CAN_GET_ITEMS: jabilitybooleanlevelfield
declare const ABILITY_BLF_CAN_DROP_ITEMS: jabilitybooleanlevelfield
declare const ABILITY_BLF_REPAIRS_ALLOWED: jabilitybooleanlevelfield
declare const ABILITY_BLF_CASTER_ONLY_SPLASH: jabilitybooleanlevelfield
declare const ABILITY_BLF_NO_TARGET_REQUIRED_IRL4: jabilitybooleanlevelfield
declare const ABILITY_BLF_DISPEL_ON_ATTACK: jabilitybooleanlevelfield
declare const ABILITY_BLF_AMOUNT_IS_RAW_VALUE: jabilitybooleanlevelfield
declare const ABILITY_BLF_SHARED_SPELL_COOLDOWN: jabilitybooleanlevelfield
declare const ABILITY_BLF_SLEEP_ONCE: jabilitybooleanlevelfield
declare const ABILITY_BLF_ALLOW_ON_ANY_PLAYER_SLOT: jabilitybooleanlevelfield
declare const ABILITY_BLF_DISABLE_OTHER_ABILITIES: jabilitybooleanlevelfield
declare const ABILITY_BLF_ALLOW_BOUNTY: jabilitybooleanlevelfield
declare const ABILITY_SLF_ICON_NORMAL: jabilitystringlevelfield
declare const ABILITY_SLF_CASTER: jabilitystringlevelfield
declare const ABILITY_SLF_TARGET: jabilitystringlevelfield
declare const ABILITY_SLF_SPECIAL: jabilitystringlevelfield
declare const ABILITY_SLF_EFFECT: jabilitystringlevelfield
declare const ABILITY_SLF_AREA_EFFECT: jabilitystringlevelfield
declare const ABILITY_SLF_LIGHTNING_EFFECTS: jabilitystringlevelfield
declare const ABILITY_SLF_MISSILE_ART: jabilitystringlevelfield
declare const ABILITY_SLF_TOOLTIP_LEARN: jabilitystringlevelfield
declare const ABILITY_SLF_TOOLTIP_LEARN_EXTENDED: jabilitystringlevelfield
declare const ABILITY_SLF_TOOLTIP_NORMAL: jabilitystringlevelfield
declare const ABILITY_SLF_TOOLTIP_TURN_OFF: jabilitystringlevelfield
declare const ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED: jabilitystringlevelfield
declare const ABILITY_SLF_TOOLTIP_TURN_OFF_EXTENDED: jabilitystringlevelfield
declare const ABILITY_SLF_NORMAL_FORM_UNIT_EME1: jabilitystringlevelfield
declare const ABILITY_SLF_SPAWNED_UNITS: jabilitystringlevelfield
declare const ABILITY_SLF_ABILITY_FOR_UNIT_CREATION: jabilitystringlevelfield
declare const ABILITY_SLF_NORMAL_FORM_UNIT_MIL1: jabilitystringlevelfield
declare const ABILITY_SLF_ALTERNATE_FORM_UNIT_MIL2: jabilitystringlevelfield
declare const ABILITY_SLF_BASE_ORDER_ID_ANS5: jabilitystringlevelfield
declare const ABILITY_SLF_MORPH_UNITS_GROUND: jabilitystringlevelfield
declare const ABILITY_SLF_MORPH_UNITS_AIR: jabilitystringlevelfield
declare const ABILITY_SLF_MORPH_UNITS_AMPHIBIOUS: jabilitystringlevelfield
declare const ABILITY_SLF_MORPH_UNITS_WATER: jabilitystringlevelfield
declare const ABILITY_SLF_UNIT_TYPE_ONE: jabilitystringlevelfield
declare const ABILITY_SLF_UNIT_TYPE_TWO: jabilitystringlevelfield
declare const ABILITY_SLF_UNIT_TYPE_SOD2: jabilitystringlevelfield
declare const ABILITY_SLF_SUMMON_1_UNIT_TYPE: jabilitystringlevelfield
declare const ABILITY_SLF_SUMMON_2_UNIT_TYPE: jabilitystringlevelfield
declare const ABILITY_SLF_RACE_TO_CONVERT: jabilitystringlevelfield
declare const ABILITY_SLF_PARTNER_UNIT_TYPE: jabilitystringlevelfield
declare const ABILITY_SLF_PARTNER_UNIT_TYPE_ONE: jabilitystringlevelfield
declare const ABILITY_SLF_PARTNER_UNIT_TYPE_TWO: jabilitystringlevelfield
declare const ABILITY_SLF_REQUIRED_UNIT_TYPE: jabilitystringlevelfield
declare const ABILITY_SLF_CONVERTED_UNIT_TYPE: jabilitystringlevelfield
declare const ABILITY_SLF_SPELL_LIST: jabilitystringlevelfield
declare const ABILITY_SLF_BASE_ORDER_ID_SPB5: jabilitystringlevelfield
declare const ABILITY_SLF_BASE_ORDER_ID_NCL6: jabilitystringlevelfield
declare const ABILITY_SLF_ABILITY_UPGRADE_1: jabilitystringlevelfield
declare const ABILITY_SLF_ABILITY_UPGRADE_2: jabilitystringlevelfield
declare const ABILITY_SLF_ABILITY_UPGRADE_3: jabilitystringlevelfield
declare const ABILITY_SLF_ABILITY_UPGRADE_4: jabilitystringlevelfield
declare const ABILITY_SLF_SPAWN_UNIT_ID_NSY2: jabilitystringlevelfield
declare const ITEM_IF_LEVEL: jitemintegerfield
declare const ITEM_IF_NUMBER_OF_CHARGES: jitemintegerfield
declare const ITEM_IF_COOLDOWN_GROUP: jitemintegerfield
declare const ITEM_IF_MAX_HIT_POINTS: jitemintegerfield
declare const ITEM_IF_HIT_POINTS: jitemintegerfield
declare const ITEM_IF_PRIORITY: jitemintegerfield
declare const ITEM_IF_ARMOR_TYPE: jitemintegerfield
declare const ITEM_IF_TINTING_COLOR_RED: jitemintegerfield
declare const ITEM_IF_TINTING_COLOR_GREEN: jitemintegerfield
declare const ITEM_IF_TINTING_COLOR_BLUE: jitemintegerfield
declare const ITEM_IF_TINTING_COLOR_ALPHA: jitemintegerfield
declare const ITEM_RF_SCALING_VALUE: jitemrealfield
declare const ITEM_BF_DROPPED_WHEN_CARRIER_DIES: jitembooleanfield
declare const ITEM_BF_CAN_BE_DROPPED: jitembooleanfield
declare const ITEM_BF_PERISHABLE: jitembooleanfield
declare const ITEM_BF_INCLUDE_AS_RANDOM_CHOICE: jitembooleanfield
declare const ITEM_BF_USE_AUTOMATICALLY_WHEN_ACQUIRED: jitembooleanfield
declare const ITEM_BF_CAN_BE_SOLD_TO_MERCHANTS: jitembooleanfield
declare const ITEM_BF_ACTIVELY_USED: jitembooleanfield
declare const ITEM_SF_MODEL_USED: jitemstringfield
declare const UNIT_IF_DEFENSE_TYPE: junitintegerfield
declare const UNIT_IF_ARMOR_TYPE: junitintegerfield
declare const UNIT_IF_LOOPING_FADE_IN_RATE: junitintegerfield
declare const UNIT_IF_LOOPING_FADE_OUT_RATE: junitintegerfield
declare const UNIT_IF_AGILITY: junitintegerfield
declare const UNIT_IF_INTELLIGENCE: junitintegerfield
declare const UNIT_IF_STRENGTH: junitintegerfield
declare const UNIT_IF_AGILITY_PERMANENT: junitintegerfield
declare const UNIT_IF_INTELLIGENCE_PERMANENT: junitintegerfield
declare const UNIT_IF_STRENGTH_PERMANENT: junitintegerfield
declare const UNIT_IF_AGILITY_WITH_BONUS: junitintegerfield
declare const UNIT_IF_INTELLIGENCE_WITH_BONUS: junitintegerfield
declare const UNIT_IF_STRENGTH_WITH_BONUS: junitintegerfield
declare const UNIT_IF_GOLD_BOUNTY_AWARDED_NUMBER_OF_DICE: junitintegerfield
declare const UNIT_IF_GOLD_BOUNTY_AWARDED_BASE: junitintegerfield
declare const UNIT_IF_GOLD_BOUNTY_AWARDED_SIDES_PER_DIE: junitintegerfield
declare const UNIT_IF_LUMBER_BOUNTY_AWARDED_NUMBER_OF_DICE: junitintegerfield
declare const UNIT_IF_LUMBER_BOUNTY_AWARDED_BASE: junitintegerfield
declare const UNIT_IF_LUMBER_BOUNTY_AWARDED_SIDES_PER_DIE: junitintegerfield
declare const UNIT_IF_LEVEL: junitintegerfield
declare const UNIT_IF_FORMATION_RANK: junitintegerfield
declare const UNIT_IF_ORIENTATION_INTERPOLATION: junitintegerfield
declare const UNIT_IF_ELEVATION_SAMPLE_POINTS: junitintegerfield
declare const UNIT_IF_TINTING_COLOR_RED: junitintegerfield
declare const UNIT_IF_TINTING_COLOR_GREEN: junitintegerfield
declare const UNIT_IF_TINTING_COLOR_BLUE: junitintegerfield
declare const UNIT_IF_TINTING_COLOR_ALPHA: junitintegerfield
declare const UNIT_IF_MOVE_TYPE: junitintegerfield
declare const UNIT_IF_TARGETED_AS: junitintegerfield
declare const UNIT_IF_UNIT_CLASSIFICATION: junitintegerfield
declare const UNIT_IF_HIT_POINTS_REGENERATION_TYPE: junitintegerfield
declare const UNIT_IF_PLACEMENT_PREVENTED_BY: junitintegerfield
declare const UNIT_IF_PRIMARY_ATTRIBUTE: junitintegerfield
declare const UNIT_RF_STRENGTH_PER_LEVEL: junitrealfield
declare const UNIT_RF_AGILITY_PER_LEVEL: junitrealfield
declare const UNIT_RF_INTELLIGENCE_PER_LEVEL: junitrealfield
declare const UNIT_RF_HIT_POINTS_REGENERATION_RATE: junitrealfield
declare const UNIT_RF_MANA_REGENERATION: junitrealfield
declare const UNIT_RF_DEATH_TIME: junitrealfield
declare const UNIT_RF_FLY_HEIGHT: junitrealfield
declare const UNIT_RF_TURN_RATE: junitrealfield
declare const UNIT_RF_ELEVATION_SAMPLE_RADIUS: junitrealfield
declare const UNIT_RF_FOG_OF_WAR_SAMPLE_RADIUS: junitrealfield
declare const UNIT_RF_MAXIMUM_PITCH_ANGLE_DEGREES: junitrealfield
declare const UNIT_RF_MAXIMUM_ROLL_ANGLE_DEGREES: junitrealfield
declare const UNIT_RF_SCALING_VALUE: junitrealfield
declare const UNIT_RF_ANIMATION_RUN_SPEED: junitrealfield
declare const UNIT_RF_SELECTION_SCALE: junitrealfield
declare const UNIT_RF_SELECTION_CIRCLE_HEIGHT: junitrealfield
declare const UNIT_RF_SHADOW_IMAGE_HEIGHT: junitrealfield
declare const UNIT_RF_SHADOW_IMAGE_WIDTH: junitrealfield
declare const UNIT_RF_SHADOW_IMAGE_CENTER_X: junitrealfield
declare const UNIT_RF_SHADOW_IMAGE_CENTER_Y: junitrealfield
declare const UNIT_RF_ANIMATION_WALK_SPEED: junitrealfield
declare const UNIT_RF_DEFENSE: junitrealfield
declare const UNIT_RF_SIGHT_RADIUS: junitrealfield
declare const UNIT_RF_PRIORITY: junitrealfield
declare const UNIT_RF_SPEED: junitrealfield
declare const UNIT_RF_OCCLUDER_HEIGHT: junitrealfield
declare const UNIT_RF_HP: junitrealfield
declare const UNIT_RF_MANA: junitrealfield
declare const UNIT_RF_ACQUISITION_RANGE: junitrealfield
declare const UNIT_RF_CAST_BACK_SWING: junitrealfield
declare const UNIT_RF_CAST_POINT: junitrealfield
declare const UNIT_RF_MINIMUM_ATTACK_RANGE: junitrealfield
declare const UNIT_BF_RAISABLE: junitbooleanfield
declare const UNIT_BF_DECAYABLE: junitbooleanfield
declare const UNIT_BF_IS_A_BUILDING: junitbooleanfield
declare const UNIT_BF_USE_EXTENDED_LINE_OF_SIGHT: junitbooleanfield
declare const UNIT_BF_NEUTRAL_BUILDING_SHOWS_MINIMAP_ICON: junitbooleanfield
declare const UNIT_BF_HERO_HIDE_HERO_INTERFACE_ICON: junitbooleanfield
declare const UNIT_BF_HERO_HIDE_HERO_MINIMAP_DISPLAY: junitbooleanfield
declare const UNIT_BF_HERO_HIDE_HERO_DEATH_MESSAGE: junitbooleanfield
declare const UNIT_BF_HIDE_MINIMAP_DISPLAY: junitbooleanfield
declare const UNIT_BF_SCALE_PROJECTILES: junitbooleanfield
declare const UNIT_BF_SELECTION_CIRCLE_ON_WATER: junitbooleanfield
declare const UNIT_BF_HAS_WATER_SHADOW: junitbooleanfield
declare const UNIT_SF_NAME: junitstringfield
declare const UNIT_SF_PROPER_NAMES: junitstringfield
declare const UNIT_SF_GROUND_TEXTURE: junitstringfield
declare const UNIT_SF_SHADOW_IMAGE_UNIT: junitstringfield
declare const UNIT_WEAPON_IF_ATTACK_DAMAGE_NUMBER_OF_DICE: junitweaponintegerfield
declare const UNIT_WEAPON_IF_ATTACK_DAMAGE_BASE: junitweaponintegerfield
declare const UNIT_WEAPON_IF_ATTACK_DAMAGE_SIDES_PER_DIE: junitweaponintegerfield
declare const UNIT_WEAPON_IF_ATTACK_MAXIMUM_NUMBER_OF_TARGETS: junitweaponintegerfield
declare const UNIT_WEAPON_IF_ATTACK_ATTACK_TYPE: junitweaponintegerfield
declare const UNIT_WEAPON_IF_ATTACK_WEAPON_SOUND: junitweaponintegerfield
declare const UNIT_WEAPON_IF_ATTACK_AREA_OF_EFFECT_TARGETS: junitweaponintegerfield
declare const UNIT_WEAPON_IF_ATTACK_TARGETS_ALLOWED: junitweaponintegerfield
declare const UNIT_WEAPON_RF_ATTACK_BACKSWING_POINT: junitweaponrealfield
declare const UNIT_WEAPON_RF_ATTACK_DAMAGE_POINT: junitweaponrealfield
declare const UNIT_WEAPON_RF_ATTACK_BASE_COOLDOWN: junitweaponrealfield
declare const UNIT_WEAPON_RF_ATTACK_DAMAGE_LOSS_FACTOR: junitweaponrealfield
declare const UNIT_WEAPON_RF_ATTACK_DAMAGE_FACTOR_MEDIUM: junitweaponrealfield
declare const UNIT_WEAPON_RF_ATTACK_DAMAGE_FACTOR_SMALL: junitweaponrealfield
declare const UNIT_WEAPON_RF_ATTACK_DAMAGE_SPILL_DISTANCE: junitweaponrealfield
declare const UNIT_WEAPON_RF_ATTACK_DAMAGE_SPILL_RADIUS: junitweaponrealfield
declare const UNIT_WEAPON_RF_ATTACK_PROJECTILE_SPEED: junitweaponrealfield
declare const UNIT_WEAPON_RF_ATTACK_PROJECTILE_ARC: junitweaponrealfield
declare const UNIT_WEAPON_RF_ATTACK_AREA_OF_EFFECT_FULL_DAMAGE: junitweaponrealfield
declare const UNIT_WEAPON_RF_ATTACK_AREA_OF_EFFECT_MEDIUM_DAMAGE: junitweaponrealfield
declare const UNIT_WEAPON_RF_ATTACK_AREA_OF_EFFECT_SMALL_DAMAGE: junitweaponrealfield
declare const UNIT_WEAPON_RF_ATTACK_RANGE: junitweaponrealfield
declare const UNIT_WEAPON_BF_ATTACK_SHOW_UI: junitweaponbooleanfield
declare const UNIT_WEAPON_BF_ATTACKS_ENABLED: junitweaponbooleanfield
declare const UNIT_WEAPON_BF_ATTACK_PROJECTILE_HOMING_ENABLED: junitweaponbooleanfield
declare const UNIT_WEAPON_SF_ATTACK_PROJECTILE_ART: junitweaponstringfield
declare const MOVE_TYPE_UNKNOWN: jmovetype
declare const MOVE_TYPE_FOOT: jmovetype
declare const MOVE_TYPE_FLY: jmovetype
declare const MOVE_TYPE_HORSE: jmovetype
declare const MOVE_TYPE_HOVER: jmovetype
declare const MOVE_TYPE_FLOAT: jmovetype
declare const MOVE_TYPE_AMPHIBIOUS: jmovetype
declare const MOVE_TYPE_UNBUILDABLE: jmovetype
declare const TARGET_FLAG_NONE: jtargetflag
declare const TARGET_FLAG_GROUND: jtargetflag
declare const TARGET_FLAG_AIR: jtargetflag
declare const TARGET_FLAG_STRUCTURE: jtargetflag
declare const TARGET_FLAG_WARD: jtargetflag
declare const TARGET_FLAG_ITEM: jtargetflag
declare const TARGET_FLAG_TREE: jtargetflag
declare const TARGET_FLAG_WALL: jtargetflag
declare const TARGET_FLAG_DEBRIS: jtargetflag
declare const TARGET_FLAG_DECORATION: jtargetflag
declare const TARGET_FLAG_BRIDGE: jtargetflag
declare const DEFENSE_TYPE_LIGHT: jdefensetype
declare const DEFENSE_TYPE_MEDIUM: jdefensetype
declare const DEFENSE_TYPE_LARGE: jdefensetype
declare const DEFENSE_TYPE_FORT: jdefensetype
declare const DEFENSE_TYPE_NORMAL: jdefensetype
declare const DEFENSE_TYPE_HERO: jdefensetype
declare const DEFENSE_TYPE_DIVINE: jdefensetype
declare const DEFENSE_TYPE_NONE: jdefensetype
declare const HERO_ATTRIBUTE_STR: jheroattribute
declare const HERO_ATTRIBUTE_INT: jheroattribute
declare const HERO_ATTRIBUTE_AGI: jheroattribute
declare const ARMOR_TYPE_WHOKNOWS: jarmortype
declare const ARMOR_TYPE_FLESH: jarmortype
declare const ARMOR_TYPE_METAL: jarmortype
declare const ARMOR_TYPE_WOOD: jarmortype
declare const ARMOR_TYPE_ETHREAL: jarmortype
declare const ARMOR_TYPE_STONE: jarmortype
declare const REGENERATION_TYPE_NONE: jregentype
declare const REGENERATION_TYPE_ALWAYS: jregentype
declare const REGENERATION_TYPE_BLIGHT: jregentype
declare const REGENERATION_TYPE_DAY: jregentype
declare const REGENERATION_TYPE_NIGHT: jregentype
declare const UNIT_CATEGORY_GIANT: junitcategory
declare const UNIT_CATEGORY_UNDEAD: junitcategory
declare const UNIT_CATEGORY_SUMMONED: junitcategory
declare const UNIT_CATEGORY_MECHANICAL: junitcategory
declare const UNIT_CATEGORY_PEON: junitcategory
declare const UNIT_CATEGORY_SAPPER: junitcategory
declare const UNIT_CATEGORY_TOWNHALL: junitcategory
declare const UNIT_CATEGORY_ANCIENT: junitcategory
declare const UNIT_CATEGORY_NEUTRAL: junitcategory
declare const UNIT_CATEGORY_WARD: junitcategory
declare const UNIT_CATEGORY_STANDON: junitcategory
declare const UNIT_CATEGORY_TAUREN: junitcategory
declare const PATHING_FLAG_UNWALKABLE: jpathingflag
declare const PATHING_FLAG_UNFLYABLE: jpathingflag
declare const PATHING_FLAG_UNBUILDABLE: jpathingflag
declare const PATHING_FLAG_UNPEONHARVEST: jpathingflag
declare const PATHING_FLAG_BLIGHTED: jpathingflag
declare const PATHING_FLAG_UNFLOATABLE: jpathingflag
declare const PATHING_FLAG_UNAMPHIBIOUS: jpathingflag
declare const PATHING_FLAG_UNITEMPLACABLE: jpathingflag
declare function Deg2Rad(degrees: number): number
declare function Rad2Deg(radians: number): number
declare function Sin(radians: number): number
declare function Cos(radians: number): number
declare function Tan(radians: number): number
declare function Asin(y: number): number
declare function Acos(x: number): number
declare function Atan(x: number): number
declare function Atan2(y: number, x: number): number
declare function SquareRoot(x: number): number
declare function Pow(x: number, power: number): number
declare function MathRound(r: number): number
declare function I2R(i: number): number
declare function R2I(r: number): number
declare function I2S(i: number): string
declare function R2S(r: number): string
declare function R2SW(r: number, width: number, precision: number): string
declare function S2I(s: string): number
declare function S2R(s: string): number
declare function GetHandleId(h: jhandle): number
declare function SubString(source: string, start: number, end: number): string
declare function StringLength(s: string): number
declare function StringCase(source: string, upper: boolean): string
declare function StringHash(s: string): number
declare function GetLocalizedString(source: string): string
declare function GetLocalizedHotkey(source: string): number
declare function SetMapName(name: string): void
declare function SetMapDescription(description: string): void
declare function SetTeams(teamcount: number): void
declare function SetPlayers(playercount: number): void
declare function DefineStartLocation(whichStartLoc: number, x: number, y: number): void
declare function DefineStartLocationLoc(whichStartLoc: number, whichLocation: jlocation): void
declare function SetStartLocPrioCount(whichStartLoc: number, prioSlotCount: number): void
declare function SetStartLocPrio(
    whichStartLoc: number,
    prioSlotIndex: number,
    otherStartLocIndex: number,
    priority: jstartlocprio
): void
declare function GetStartLocPrioSlot(whichStartLoc: number, prioSlotIndex: number): number
declare function GetStartLocPrio(whichStartLoc: number, prioSlotIndex: number): jstartlocprio
declare function SetEnemyStartLocPrioCount(whichStartLoc: number, prioSlotCount: number): void
declare function SetEnemyStartLocPrio(
    whichStartLoc: number,
    prioSlotIndex: number,
    otherStartLocIndex: number,
    priority: jstartlocprio
): void
declare function SetGameTypeSupported(whichGameType: jgametype, value: boolean): void
declare function SetMapFlag(whichMapFlag: jmapflag, value: boolean): void
declare function SetGamePlacement(whichPlacementType: jplacement): void
declare function SetGameSpeed(whichspeed: jgamespeed): void
declare function SetGameDifficulty(whichdifficulty: jgamedifficulty): void
declare function SetResourceDensity(whichdensity: jmapdensity): void
declare function SetCreatureDensity(whichdensity: jmapdensity): void
declare function GetTeams(): number
declare function GetPlayers(): number
declare function IsGameTypeSupported(whichGameType: jgametype): boolean
declare function GetGameTypeSelected(): jgametype
declare function IsMapFlagSet(whichMapFlag: jmapflag): boolean
declare function GetGamePlacement(): jplacement
declare function GetGameSpeed(): jgamespeed
declare function GetGameDifficulty(): jgamedifficulty
declare function GetResourceDensity(): jmapdensity
declare function GetCreatureDensity(): jmapdensity
declare function GetStartLocationX(whichStartLocation: number): number
declare function GetStartLocationY(whichStartLocation: number): number
declare function GetStartLocationLoc(whichStartLocation: number): jlocation
declare function SetPlayerTeam(whichPlayer: jplayer, whichTeam: number): void
declare function SetPlayerStartLocation(whichPlayer: jplayer, startLocIndex: number): void
declare function ForcePlayerStartLocation(whichPlayer: jplayer, startLocIndex: number): void
declare function SetPlayerColor(whichPlayer: jplayer, color: jplayercolor): void
declare function SetPlayerAlliance(
    sourcePlayer: jplayer,
    otherPlayer: jplayer,
    whichAllianceSetting: jalliancetype,
    value: boolean
): void
declare function SetPlayerTaxRate(
    sourcePlayer: jplayer,
    otherPlayer: jplayer,
    whichResource: jplayerstate,
    rate: number
): void
declare function SetPlayerRacePreference(
    whichPlayer: jplayer,
    whichRacePreference: jracepreference
): void
declare function SetPlayerRaceSelectable(whichPlayer: jplayer, value: boolean): void
declare function SetPlayerController(whichPlayer: jplayer, controlType: jmapcontrol): void
declare function SetPlayerName(whichPlayer: jplayer, name: string): void
declare function SetPlayerOnScoreScreen(whichPlayer: jplayer, flag: boolean): void
declare function GetPlayerTeam(whichPlayer: jplayer): number
declare function GetPlayerStartLocation(whichPlayer: jplayer): number
declare function GetPlayerColor(whichPlayer: jplayer): jplayercolor
declare function GetPlayerSelectable(whichPlayer: jplayer): boolean
declare function GetPlayerController(whichPlayer: jplayer): jmapcontrol
declare function GetPlayerSlotState(whichPlayer: jplayer): jplayerslotstate
declare function GetPlayerTaxRate(
    sourcePlayer: jplayer,
    otherPlayer: jplayer,
    whichResource: jplayerstate
): number
declare function IsPlayerRacePrefSet(whichPlayer: jplayer, pref: jracepreference): boolean
declare function GetPlayerName(whichPlayer: jplayer): string
declare function CreateTimer(): jtimer
declare function DestroyTimer(whichTimer: jtimer): void
declare function TimerStart(
    whichTimer: jtimer,
    timeout: number,
    periodic: boolean,
    handlerFunc?: () => void
): void
declare function TimerGetElapsed(whichTimer: jtimer): number
declare function TimerGetRemaining(whichTimer: jtimer): number
declare function TimerGetTimeout(whichTimer: jtimer): number
declare function PauseTimer(whichTimer: jtimer): void
declare function ResumeTimer(whichTimer: jtimer): void
declare function GetExpiredTimer(): jtimer
declare function CreateGroup(): jgroup
declare function DestroyGroup(whichGroup: jgroup): void
declare function GroupAddUnit(whichGroup: jgroup, whichUnit: junit): boolean
declare function GroupRemoveUnit(whichGroup: jgroup, whichUnit: junit): boolean
declare function BlzGroupAddGroupFast(whichGroup: jgroup, addGroup: jgroup): number
declare function BlzGroupRemoveGroupFast(whichGroup: jgroup, removeGroup: jgroup): number
declare function GroupClear(whichGroup: jgroup): void
declare function BlzGroupGetSize(whichGroup: jgroup): number
declare function BlzGroupUnitAt(whichGroup: jgroup, index: number): junit
declare function GroupEnumUnitsOfType(whichGroup: jgroup, unitname: string, filter: jboolexpr): void
declare function GroupEnumUnitsOfPlayer(
    whichGroup: jgroup,
    whichPlayer: jplayer,
    filter: jboolexpr
): void
declare function GroupEnumUnitsOfTypeCounted(
    whichGroup: jgroup,
    unitname: string,
    filter: jboolexpr,
    countLimit: number
): void
declare function GroupEnumUnitsInRect(whichGroup: jgroup, r: jrect, filter: jboolexpr): void
declare function GroupEnumUnitsInRectCounted(
    whichGroup: jgroup,
    r: jrect,
    filter: jboolexpr,
    countLimit: number
): void
declare function GroupEnumUnitsInRange(
    whichGroup: jgroup,
    x: number,
    y: number,
    radius: number,
    filter: jboolexpr
): void
declare function GroupEnumUnitsInRangeOfLoc(
    whichGroup: jgroup,
    whichLocation: jlocation,
    radius: number,
    filter: jboolexpr
): void
declare function GroupEnumUnitsInRangeCounted(
    whichGroup: jgroup,
    x: number,
    y: number,
    radius: number,
    filter: jboolexpr,
    countLimit: number
): void
declare function GroupEnumUnitsInRangeOfLocCounted(
    whichGroup: jgroup,
    whichLocation: jlocation,
    radius: number,
    filter: jboolexpr,
    countLimit: number
): void
declare function GroupEnumUnitsSelected(
    whichGroup: jgroup,
    whichPlayer: jplayer,
    filter: jboolexpr
): void
declare function GroupImmediateOrder(whichGroup: jgroup, order: string): boolean
declare function GroupImmediateOrderById(whichGroup: jgroup, order: number): boolean
declare function GroupPointOrder(whichGroup: jgroup, order: string, x: number, y: number): boolean
declare function GroupPointOrderLoc(
    whichGroup: jgroup,
    order: string,
    whichLocation: jlocation
): boolean
declare function GroupPointOrderById(
    whichGroup: jgroup,
    order: number,
    x: number,
    y: number
): boolean
declare function GroupPointOrderByIdLoc(
    whichGroup: jgroup,
    order: number,
    whichLocation: jlocation
): boolean
declare function GroupTargetOrder(whichGroup: jgroup, order: string, targetWidget: jwidget): boolean
declare function GroupTargetOrderById(
    whichGroup: jgroup,
    order: number,
    targetWidget: jwidget
): boolean
declare function ForGroup(whichGroup: jgroup, callback?: () => void): void
declare function FirstOfGroup(whichGroup: jgroup): junit
declare function CreateForce(): jforce
declare function DestroyForce(whichForce: jforce): void
declare function ForceAddPlayer(whichForce: jforce, whichPlayer: jplayer): void
declare function ForceRemovePlayer(whichForce: jforce, whichPlayer: jplayer): void
declare function BlzForceHasPlayer(whichForce: jforce, whichPlayer: jplayer): boolean
declare function ForceClear(whichForce: jforce): void
declare function ForceEnumPlayers(whichForce: jforce, filter: jboolexpr): void
declare function ForceEnumPlayersCounted(
    whichForce: jforce,
    filter: jboolexpr,
    countLimit: number
): void
declare function ForceEnumAllies(whichForce: jforce, whichPlayer: jplayer, filter: jboolexpr): void
declare function ForceEnumEnemies(whichForce: jforce, whichPlayer: jplayer, filter: jboolexpr): void
declare function ForForce(whichForce: jforce, callback?: () => void): void
declare function Rect(minx: number, miny: number, maxx: number, maxy: number): jrect
declare function RectFromLoc(min: jlocation, max: jlocation): jrect
declare function RemoveRect(whichRect: jrect): void
declare function SetRect(
    whichRect: jrect,
    minx: number,
    miny: number,
    maxx: number,
    maxy: number
): void
declare function SetRectFromLoc(whichRect: jrect, min: jlocation, max: jlocation): void
declare function MoveRectTo(whichRect: jrect, newCenterX: number, newCenterY: number): void
declare function MoveRectToLoc(whichRect: jrect, newCenterLoc: jlocation): void
declare function GetRectCenterX(whichRect: jrect): number
declare function GetRectCenterY(whichRect: jrect): number
declare function GetRectMinX(whichRect: jrect): number
declare function GetRectMinY(whichRect: jrect): number
declare function GetRectMaxX(whichRect: jrect): number
declare function GetRectMaxY(whichRect: jrect): number
declare function CreateRegion(): jregion
declare function RemoveRegion(whichRegion: jregion): void
declare function RegionAddRect(whichRegion: jregion, r: jrect): void
declare function RegionClearRect(whichRegion: jregion, r: jrect): void
declare function RegionAddCell(whichRegion: jregion, x: number, y: number): void
declare function RegionAddCellAtLoc(whichRegion: jregion, whichLocation: jlocation): void
declare function RegionClearCell(whichRegion: jregion, x: number, y: number): void
declare function RegionClearCellAtLoc(whichRegion: jregion, whichLocation: jlocation): void
declare function Location(x: number, y: number): jlocation
declare function RemoveLocation(whichLocation: jlocation): void
declare function MoveLocation(whichLocation: jlocation, newX: number, newY: number): void
declare function GetLocationX(whichLocation: jlocation): number
declare function GetLocationY(whichLocation: jlocation): number
declare function GetLocationZ(whichLocation: jlocation): number
declare function IsUnitInRegion(whichRegion: jregion, whichUnit: junit): boolean
declare function IsPointInRegion(whichRegion: jregion, x: number, y: number): boolean
declare function IsLocationInRegion(whichRegion: jregion, whichLocation: jlocation): boolean
declare function GetWorldBounds(): jrect
declare function CreateTrigger(): jtrigger
declare function DestroyTrigger(whichTrigger: jtrigger): void
declare function ResetTrigger(whichTrigger: jtrigger): void
declare function EnableTrigger(whichTrigger: jtrigger): void
declare function DisableTrigger(whichTrigger: jtrigger): void
declare function IsTriggerEnabled(whichTrigger: jtrigger): boolean
declare function TriggerWaitOnSleeps(whichTrigger: jtrigger, flag: boolean): void
declare function IsTriggerWaitOnSleeps(whichTrigger: jtrigger): boolean
declare function GetFilterUnit(): junit
declare function GetEnumUnit(): junit
declare function GetFilterDestructable(): jdestructable
declare function GetEnumDestructable(): jdestructable
declare function GetFilterItem(): jitem
declare function GetEnumItem(): jitem
declare function ParseTags(taggedString: string): string
declare function GetFilterPlayer(): jplayer
declare function GetEnumPlayer(): jplayer
declare function GetTriggeringTrigger(): jtrigger
declare function GetTriggerEventId(): jeventid
declare function GetTriggerEvalCount(whichTrigger: jtrigger): number
declare function GetTriggerExecCount(whichTrigger: jtrigger): number
declare function ExecuteFunc(funcName: string): void
declare function And(operandA: jboolexpr, operandB: jboolexpr): jboolexpr
declare function Or(operandA: jboolexpr, operandB: jboolexpr): jboolexpr
declare function Not(operand: jboolexpr): jboolexpr
declare function Condition(func?: () => void): jconditionfunc
declare function DestroyCondition(c: jconditionfunc): void
declare function Filter(func?: () => void): jfilterfunc
declare function DestroyFilter(f: jfilterfunc): void
declare function DestroyBoolExpr(e: jboolexpr): void
declare function TriggerRegisterVariableEvent(
    whichTrigger: jtrigger,
    varName: string,
    opcode: jlimitop,
    limitval: number
): jevent
declare function TriggerRegisterTimerEvent(
    whichTrigger: jtrigger,
    timeout: number,
    periodic: boolean
): jevent
declare function TriggerRegisterTimerExpireEvent(whichTrigger: jtrigger, t: jtimer): jevent
declare function TriggerRegisterGameStateEvent(
    whichTrigger: jtrigger,
    whichState: jgamestate,
    opcode: jlimitop,
    limitval: number
): jevent
declare function TriggerRegisterDialogEvent(whichTrigger: jtrigger, whichDialog: jdialog): jevent
declare function TriggerRegisterDialogButtonEvent(
    whichTrigger: jtrigger,
    whichButton: jbutton
): jevent
declare function GetEventGameState(): jgamestate
declare function TriggerRegisterGameEvent(
    whichTrigger: jtrigger,
    whichGameEvent: jgameevent
): jevent
declare function GetWinningPlayer(): jplayer
declare function TriggerRegisterEnterRegion(
    whichTrigger: jtrigger,
    whichRegion: jregion,
    filter: jboolexpr
): jevent
declare function GetTriggeringRegion(): jregion
declare function GetEnteringUnit(): junit
declare function TriggerRegisterLeaveRegion(
    whichTrigger: jtrigger,
    whichRegion: jregion,
    filter: jboolexpr
): jevent
declare function GetLeavingUnit(): junit
declare function TriggerRegisterTrackableHitEvent(whichTrigger: jtrigger, t: jtrackable): jevent
declare function TriggerRegisterTrackableTrackEvent(whichTrigger: jtrigger, t: jtrackable): jevent
declare function TriggerRegisterCommandEvent(
    whichTrigger: jtrigger,
    whichAbility: number,
    order: string
): jevent
declare function TriggerRegisterUpgradeCommandEvent(
    whichTrigger: jtrigger,
    whichUpgrade: number
): jevent
declare function GetTriggeringTrackable(): jtrackable
declare function GetClickedButton(): jbutton
declare function GetClickedDialog(): jdialog
declare function GetTournamentFinishSoonTimeRemaining(): number
declare function GetTournamentFinishNowRule(): number
declare function GetTournamentFinishNowPlayer(): jplayer
declare function GetTournamentScore(whichPlayer: jplayer): number
declare function GetSaveBasicFilename(): string
declare function TriggerRegisterPlayerEvent(
    whichTrigger: jtrigger,
    whichPlayer: jplayer,
    whichPlayerEvent: jplayerevent
): jevent
declare function GetTriggerPlayer(): jplayer
declare function TriggerRegisterPlayerUnitEvent(
    whichTrigger: jtrigger,
    whichPlayer: jplayer,
    whichPlayerUnitEvent: jplayerunitevent,
    filter: jboolexpr
): jevent
declare function GetLevelingUnit(): junit
declare function GetLearningUnit(): junit
declare function GetLearnedSkill(): number
declare function GetLearnedSkillLevel(): number
declare function GetRevivableUnit(): junit
declare function GetRevivingUnit(): junit
declare function GetAttacker(): junit
declare function GetRescuer(): junit
declare function GetDyingUnit(): junit
declare function GetKillingUnit(): junit
declare function GetDecayingUnit(): junit
declare function GetConstructingStructure(): junit
declare function GetCancelledStructure(): junit
declare function GetConstructedStructure(): junit
declare function GetResearchingUnit(): junit
declare function GetResearched(): number
declare function GetTrainedUnitType(): number
declare function GetTrainedUnit(): junit
declare function GetDetectedUnit(): junit
declare function GetSummoningUnit(): junit
declare function GetSummonedUnit(): junit
declare function GetTransportUnit(): junit
declare function GetLoadedUnit(): junit
declare function GetSellingUnit(): junit
declare function GetSoldUnit(): junit
declare function GetBuyingUnit(): junit
declare function GetSoldItem(): jitem
declare function GetChangingUnit(): junit
declare function GetChangingUnitPrevOwner(): jplayer
declare function GetManipulatingUnit(): junit
declare function GetManipulatedItem(): jitem
declare function GetOrderedUnit(): junit
declare function GetIssuedOrderId(): number
declare function GetOrderPointX(): number
declare function GetOrderPointY(): number
declare function GetOrderPointLoc(): jlocation
declare function GetOrderTarget(): jwidget
declare function GetOrderTargetDestructable(): jdestructable
declare function GetOrderTargetItem(): jitem
declare function GetOrderTargetUnit(): junit
declare function GetSpellAbilityUnit(): junit
declare function GetSpellAbilityId(): number
declare function GetSpellAbility(): jability
declare function GetSpellTargetLoc(): jlocation
declare function GetSpellTargetX(): number
declare function GetSpellTargetY(): number
declare function GetSpellTargetDestructable(): jdestructable
declare function GetSpellTargetItem(): jitem
declare function GetSpellTargetUnit(): junit
declare function TriggerRegisterPlayerAllianceChange(
    whichTrigger: jtrigger,
    whichPlayer: jplayer,
    whichAlliance: jalliancetype
): jevent
declare function TriggerRegisterPlayerStateEvent(
    whichTrigger: jtrigger,
    whichPlayer: jplayer,
    whichState: jplayerstate,
    opcode: jlimitop,
    limitval: number
): jevent
declare function GetEventPlayerState(): jplayerstate
declare function TriggerRegisterPlayerChatEvent(
    whichTrigger: jtrigger,
    whichPlayer: jplayer,
    chatMessageToDetect: string,
    exactMatchOnly: boolean
): jevent
declare function GetEventPlayerChatString(): string
declare function GetEventPlayerChatStringMatched(): string
declare function TriggerRegisterDeathEvent(whichTrigger: jtrigger, whichWidget: jwidget): jevent
declare function GetTriggerUnit(): junit
declare function TriggerRegisterUnitStateEvent(
    whichTrigger: jtrigger,
    whichUnit: junit,
    whichState: junitstate,
    opcode: jlimitop,
    limitval: number
): jevent
declare function GetEventUnitState(): junitstate
declare function TriggerRegisterUnitEvent(
    whichTrigger: jtrigger,
    whichUnit: junit,
    whichEvent: junitevent
): jevent
declare function GetEventDamage(): number
declare function GetEventDamageSource(): junit
declare function GetEventDetectingPlayer(): jplayer
declare function TriggerRegisterFilterUnitEvent(
    whichTrigger: jtrigger,
    whichUnit: junit,
    whichEvent: junitevent,
    filter: jboolexpr
): jevent
declare function GetEventTargetUnit(): junit
declare function TriggerRegisterUnitInRange(
    whichTrigger: jtrigger,
    whichUnit: junit,
    range: number,
    filter: jboolexpr
): jevent
declare function TriggerAddCondition(
    whichTrigger: jtrigger,
    condition: jboolexpr
): jtriggercondition
declare function TriggerRemoveCondition(
    whichTrigger: jtrigger,
    whichCondition: jtriggercondition
): void
declare function TriggerClearConditions(whichTrigger: jtrigger): void
declare function TriggerAddAction(whichTrigger: jtrigger, actionFunc?: () => void): jtriggeraction
declare function TriggerRemoveAction(whichTrigger: jtrigger, whichAction: jtriggeraction): void
declare function TriggerClearActions(whichTrigger: jtrigger): void
declare function TriggerSleepAction(timeout: number): void
declare function TriggerWaitForSound(s: jsound, offset: number): void
declare function TriggerEvaluate(whichTrigger: jtrigger): boolean
declare function TriggerExecute(whichTrigger: jtrigger): void
declare function TriggerExecuteWait(whichTrigger: jtrigger): void
declare function TriggerSyncStart(): void
declare function TriggerSyncReady(): void
declare function GetWidgetLife(whichWidget: jwidget): number
declare function SetWidgetLife(whichWidget: jwidget, newLife: number): void
declare function GetWidgetX(whichWidget: jwidget): number
declare function GetWidgetY(whichWidget: jwidget): number
declare function GetTriggerWidget(): jwidget
declare function CreateDestructable(
    objectid: number,
    x: number,
    y: number,
    face: number,
    scale: number,
    variation: number
): jdestructable
declare function CreateDestructableZ(
    objectid: number,
    x: number,
    y: number,
    z: number,
    face: number,
    scale: number,
    variation: number
): jdestructable
declare function CreateDeadDestructable(
    objectid: number,
    x: number,
    y: number,
    face: number,
    scale: number,
    variation: number
): jdestructable
declare function CreateDeadDestructableZ(
    objectid: number,
    x: number,
    y: number,
    z: number,
    face: number,
    scale: number,
    variation: number
): jdestructable
declare function RemoveDestructable(d: jdestructable): void
declare function KillDestructable(d: jdestructable): void
declare function SetDestructableInvulnerable(d: jdestructable, flag: boolean): void
declare function IsDestructableInvulnerable(d: jdestructable): boolean
declare function EnumDestructablesInRect(r: jrect, filter: jboolexpr, actionFunc?: () => void): void
declare function GetDestructableTypeId(d: jdestructable): number
declare function GetDestructableX(d: jdestructable): number
declare function GetDestructableY(d: jdestructable): number
declare function SetDestructableLife(d: jdestructable, life: number): void
declare function GetDestructableLife(d: jdestructable): number
declare function SetDestructableMaxLife(d: jdestructable, max: number): void
declare function GetDestructableMaxLife(d: jdestructable): number
declare function DestructableRestoreLife(d: jdestructable, life: number, birth: boolean): void
declare function QueueDestructableAnimation(d: jdestructable, whichAnimation: string): void
declare function SetDestructableAnimation(d: jdestructable, whichAnimation: string): void
declare function SetDestructableAnimationSpeed(d: jdestructable, speedFactor: number): void
declare function ShowDestructable(d: jdestructable, flag: boolean): void
declare function GetDestructableOccluderHeight(d: jdestructable): number
declare function SetDestructableOccluderHeight(d: jdestructable, height: number): void
declare function GetDestructableName(d: jdestructable): string
declare function GetTriggerDestructable(): jdestructable
declare function CreateItem(itemid: number, x: number, y: number): jitem
declare function RemoveItem(whichItem: jitem): void
declare function GetItemPlayer(whichItem: jitem): jplayer
declare function GetItemTypeId(i: jitem): number
declare function GetItemX(i: jitem): number
declare function GetItemY(i: jitem): number
declare function SetItemPosition(i: jitem, x: number, y: number): void
declare function SetItemDropOnDeath(whichItem: jitem, flag: boolean): void
declare function SetItemDroppable(i: jitem, flag: boolean): void
declare function SetItemPawnable(i: jitem, flag: boolean): void
declare function SetItemPlayer(whichItem: jitem, whichPlayer: jplayer, changeColor: boolean): void
declare function SetItemInvulnerable(whichItem: jitem, flag: boolean): void
declare function IsItemInvulnerable(whichItem: jitem): boolean
declare function SetItemVisible(whichItem: jitem, show: boolean): void
declare function IsItemVisible(whichItem: jitem): boolean
declare function IsItemOwned(whichItem: jitem): boolean
declare function IsItemPowerup(whichItem: jitem): boolean
declare function IsItemSellable(whichItem: jitem): boolean
declare function IsItemPawnable(whichItem: jitem): boolean
declare function IsItemIdPowerup(itemId: number): boolean
declare function IsItemIdSellable(itemId: number): boolean
declare function IsItemIdPawnable(itemId: number): boolean
declare function EnumItemsInRect(r: jrect, filter: jboolexpr, actionFunc?: () => void): void
declare function GetItemLevel(whichItem: jitem): number
declare function GetItemType(whichItem: jitem): jitemtype
declare function SetItemDropID(whichItem: jitem, unitId: number): void
declare function GetItemName(whichItem: jitem): string
declare function GetItemCharges(whichItem: jitem): number
declare function SetItemCharges(whichItem: jitem, charges: number): void
declare function GetItemUserData(whichItem: jitem): number
declare function SetItemUserData(whichItem: jitem, data: number): void
declare function CreateUnit(id: jplayer, unitid: number, x: number, y: number, face: number): junit
declare function CreateUnitByName(
    whichPlayer: jplayer,
    unitname: string,
    x: number,
    y: number,
    face: number
): junit
declare function CreateUnitAtLoc(
    id: jplayer,
    unitid: number,
    whichLocation: jlocation,
    face: number
): junit
declare function CreateUnitAtLocByName(
    id: jplayer,
    unitname: string,
    whichLocation: jlocation,
    face: number
): junit
declare function CreateCorpse(
    whichPlayer: jplayer,
    unitid: number,
    x: number,
    y: number,
    face: number
): junit
declare function KillUnit(whichUnit: junit): void
declare function RemoveUnit(whichUnit: junit): void
declare function ShowUnit(whichUnit: junit, show: boolean): void
declare function SetUnitState(whichUnit: junit, whichUnitState: junitstate, newVal: number): void
declare function SetUnitX(whichUnit: junit, newX: number): void
declare function SetUnitY(whichUnit: junit, newY: number): void
declare function SetUnitPosition(whichUnit: junit, newX: number, newY: number): void
declare function SetUnitPositionLoc(whichUnit: junit, whichLocation: jlocation): void
declare function SetUnitFacing(whichUnit: junit, facingAngle: number): void
declare function SetUnitFacingTimed(whichUnit: junit, facingAngle: number, duration: number): void
declare function SetUnitMoveSpeed(whichUnit: junit, newSpeed: number): void
declare function SetUnitFlyHeight(whichUnit: junit, newHeight: number, rate: number): void
declare function SetUnitTurnSpeed(whichUnit: junit, newTurnSpeed: number): void
declare function SetUnitPropWindow(whichUnit: junit, newPropWindowAngle: number): void
declare function SetUnitAcquireRange(whichUnit: junit, newAcquireRange: number): void
declare function SetUnitCreepGuard(whichUnit: junit, creepGuard: boolean): void
declare function GetUnitAcquireRange(whichUnit: junit): number
declare function GetUnitTurnSpeed(whichUnit: junit): number
declare function GetUnitPropWindow(whichUnit: junit): number
declare function GetUnitFlyHeight(whichUnit: junit): number
declare function GetUnitDefaultAcquireRange(whichUnit: junit): number
declare function GetUnitDefaultTurnSpeed(whichUnit: junit): number
declare function GetUnitDefaultPropWindow(whichUnit: junit): number
declare function GetUnitDefaultFlyHeight(whichUnit: junit): number
declare function SetUnitOwner(whichUnit: junit, whichPlayer: jplayer, changeColor: boolean): void
declare function SetUnitColor(whichUnit: junit, whichColor: jplayercolor): void
declare function SetUnitScale(
    whichUnit: junit,
    scaleX: number,
    scaleY: number,
    scaleZ: number
): void
declare function SetUnitTimeScale(whichUnit: junit, timeScale: number): void
declare function SetUnitBlendTime(whichUnit: junit, blendTime: number): void
declare function SetUnitVertexColor(
    whichUnit: junit,
    red: number,
    green: number,
    blue: number,
    alpha: number
): void
declare function QueueUnitAnimation(whichUnit: junit, whichAnimation: string): void
declare function SetUnitAnimation(whichUnit: junit, whichAnimation: string): void
declare function SetUnitAnimationByIndex(whichUnit: junit, whichAnimation: number): void
declare function SetUnitAnimationWithRarity(
    whichUnit: junit,
    whichAnimation: string,
    rarity: jraritycontrol
): void
declare function AddUnitAnimationProperties(
    whichUnit: junit,
    animProperties: string,
    add: boolean
): void
declare function SetUnitLookAt(
    whichUnit: junit,
    whichBone: string,
    lookAtTarget: junit,
    offsetX: number,
    offsetY: number,
    offsetZ: number
): void
declare function ResetUnitLookAt(whichUnit: junit): void
declare function SetUnitRescuable(whichUnit: junit, byWhichPlayer: jplayer, flag: boolean): void
declare function SetUnitRescueRange(whichUnit: junit, range: number): void
declare function SetHeroStr(whichHero: junit, newStr: number, permanent: boolean): void
declare function SetHeroAgi(whichHero: junit, newAgi: number, permanent: boolean): void
declare function SetHeroInt(whichHero: junit, newInt: number, permanent: boolean): void
declare function GetHeroStr(whichHero: junit, includeBonuses: boolean): number
declare function GetHeroAgi(whichHero: junit, includeBonuses: boolean): number
declare function GetHeroInt(whichHero: junit, includeBonuses: boolean): number
declare function UnitStripHeroLevel(whichHero: junit, howManyLevels: number): boolean
declare function GetHeroXP(whichHero: junit): number
declare function SetHeroXP(whichHero: junit, newXpVal: number, showEyeCandy: boolean): void
declare function GetHeroSkillPoints(whichHero: junit): number
declare function UnitModifySkillPoints(whichHero: junit, skillPointDelta: number): boolean
declare function AddHeroXP(whichHero: junit, xpToAdd: number, showEyeCandy: boolean): void
declare function SetHeroLevel(whichHero: junit, level: number, showEyeCandy: boolean): void
declare function GetHeroLevel(whichHero: junit): number
declare function GetUnitLevel(whichUnit: junit): number
declare function GetHeroProperName(whichHero: junit): string
declare function SuspendHeroXP(whichHero: junit, flag: boolean): void
declare function IsSuspendedXP(whichHero: junit): boolean
declare function SelectHeroSkill(whichHero: junit, abilcode: number): void
declare function GetUnitAbilityLevel(whichUnit: junit, abilcode: number): number
declare function DecUnitAbilityLevel(whichUnit: junit, abilcode: number): number
declare function IncUnitAbilityLevel(whichUnit: junit, abilcode: number): number
declare function SetUnitAbilityLevel(whichUnit: junit, abilcode: number, level: number): number
declare function ReviveHero(whichHero: junit, x: number, y: number, doEyecandy: boolean): boolean
declare function ReviveHeroLoc(whichHero: junit, loc: jlocation, doEyecandy: boolean): boolean
declare function SetUnitExploded(whichUnit: junit, exploded: boolean): void
declare function SetUnitInvulnerable(whichUnit: junit, flag: boolean): void
declare function PauseUnit(whichUnit: junit, flag: boolean): void
declare function IsUnitPaused(whichHero: junit): boolean
declare function SetUnitPathing(whichUnit: junit, flag: boolean): void
declare function ClearSelection(): void
declare function SelectUnit(whichUnit: junit, flag: boolean): void
declare function GetUnitPointValue(whichUnit: junit): number
declare function GetUnitPointValueByType(unitType: number): number
declare function UnitAddItem(whichUnit: junit, whichItem: jitem): boolean
declare function UnitAddItemById(whichUnit: junit, itemId: number): jitem
declare function UnitAddItemToSlotById(whichUnit: junit, itemId: number, itemSlot: number): boolean
declare function UnitRemoveItem(whichUnit: junit, whichItem: jitem): void
declare function UnitRemoveItemFromSlot(whichUnit: junit, itemSlot: number): jitem
declare function UnitHasItem(whichUnit: junit, whichItem: jitem): boolean
declare function UnitItemInSlot(whichUnit: junit, itemSlot: number): jitem
declare function UnitInventorySize(whichUnit: junit): number
declare function UnitDropItemPoint(
    whichUnit: junit,
    whichItem: jitem,
    x: number,
    y: number
): boolean
declare function UnitDropItemSlot(whichUnit: junit, whichItem: jitem, slot: number): boolean
declare function UnitDropItemTarget(whichUnit: junit, whichItem: jitem, target: jwidget): boolean
declare function UnitUseItem(whichUnit: junit, whichItem: jitem): boolean
declare function UnitUseItemPoint(whichUnit: junit, whichItem: jitem, x: number, y: number): boolean
declare function UnitUseItemTarget(whichUnit: junit, whichItem: jitem, target: jwidget): boolean
declare function GetUnitX(whichUnit: junit): number
declare function GetUnitY(whichUnit: junit): number
declare function GetUnitLoc(whichUnit: junit): jlocation
declare function GetUnitFacing(whichUnit: junit): number
declare function GetUnitMoveSpeed(whichUnit: junit): number
declare function GetUnitDefaultMoveSpeed(whichUnit: junit): number
declare function GetUnitState(whichUnit: junit, whichUnitState: junitstate): number
declare function GetOwningPlayer(whichUnit: junit): jplayer
declare function GetUnitTypeId(whichUnit: junit): number
declare function GetUnitRace(whichUnit: junit): jrace
declare function GetUnitName(whichUnit: junit): string
declare function GetUnitFoodUsed(whichUnit: junit): number
declare function GetUnitFoodMade(whichUnit: junit): number
declare function GetFoodMade(unitId: number): number
declare function GetFoodUsed(unitId: number): number
declare function SetUnitUseFood(whichUnit: junit, useFood: boolean): void
declare function GetUnitRallyPoint(whichUnit: junit): jlocation
declare function GetUnitRallyUnit(whichUnit: junit): junit
declare function GetUnitRallyDestructable(whichUnit: junit): jdestructable
declare function IsUnitInGroup(whichUnit: junit, whichGroup: jgroup): boolean
declare function IsUnitInForce(whichUnit: junit, whichForce: jforce): boolean
declare function IsUnitOwnedByPlayer(whichUnit: junit, whichPlayer: jplayer): boolean
declare function IsUnitAlly(whichUnit: junit, whichPlayer: jplayer): boolean
declare function IsUnitEnemy(whichUnit: junit, whichPlayer: jplayer): boolean
declare function IsUnitVisible(whichUnit: junit, whichPlayer: jplayer): boolean
declare function IsUnitDetected(whichUnit: junit, whichPlayer: jplayer): boolean
declare function IsUnitInvisible(whichUnit: junit, whichPlayer: jplayer): boolean
declare function IsUnitFogged(whichUnit: junit, whichPlayer: jplayer): boolean
declare function IsUnitMasked(whichUnit: junit, whichPlayer: jplayer): boolean
declare function IsUnitSelected(whichUnit: junit, whichPlayer: jplayer): boolean
declare function IsUnitRace(whichUnit: junit, whichRace: jrace): boolean
declare function IsUnitType(whichUnit: junit, whichUnitType: junittype): boolean
declare function IsUnit(whichUnit: junit, whichSpecifiedUnit: junit): boolean
declare function IsUnitInRange(whichUnit: junit, otherUnit: junit, distance: number): boolean
declare function IsUnitInRangeXY(whichUnit: junit, x: number, y: number, distance: number): boolean
declare function IsUnitInRangeLoc(
    whichUnit: junit,
    whichLocation: jlocation,
    distance: number
): boolean
declare function IsUnitHidden(whichUnit: junit): boolean
declare function IsUnitIllusion(whichUnit: junit): boolean
declare function IsUnitInTransport(whichUnit: junit, whichTransport: junit): boolean
declare function IsUnitLoaded(whichUnit: junit): boolean
declare function IsHeroUnitId(unitId: number): boolean
declare function IsUnitIdType(unitId: number, whichUnitType: junittype): boolean
declare function UnitShareVision(whichUnit: junit, whichPlayer: jplayer, share: boolean): void
declare function UnitSuspendDecay(whichUnit: junit, suspend: boolean): void
declare function UnitAddType(whichUnit: junit, whichUnitType: junittype): boolean
declare function UnitRemoveType(whichUnit: junit, whichUnitType: junittype): boolean
declare function UnitAddAbility(whichUnit: junit, abilityId: number): boolean
declare function UnitRemoveAbility(whichUnit: junit, abilityId: number): boolean
declare function UnitMakeAbilityPermanent(
    whichUnit: junit,
    permanent: boolean,
    abilityId: number
): boolean
declare function UnitRemoveBuffs(
    whichUnit: junit,
    removePositive: boolean,
    removeNegative: boolean
): void
declare function UnitRemoveBuffsEx(
    whichUnit: junit,
    removePositive: boolean,
    removeNegative: boolean,
    magic: boolean,
    physical: boolean,
    timedLife: boolean,
    aura: boolean,
    autoDispel: boolean
): void
declare function UnitHasBuffsEx(
    whichUnit: junit,
    removePositive: boolean,
    removeNegative: boolean,
    magic: boolean,
    physical: boolean,
    timedLife: boolean,
    aura: boolean,
    autoDispel: boolean
): boolean
declare function UnitCountBuffsEx(
    whichUnit: junit,
    removePositive: boolean,
    removeNegative: boolean,
    magic: boolean,
    physical: boolean,
    timedLife: boolean,
    aura: boolean,
    autoDispel: boolean
): number
declare function UnitAddSleep(whichUnit: junit, add: boolean): void
declare function UnitCanSleep(whichUnit: junit): boolean
declare function UnitAddSleepPerm(whichUnit: junit, add: boolean): void
declare function UnitCanSleepPerm(whichUnit: junit): boolean
declare function UnitIsSleeping(whichUnit: junit): boolean
declare function UnitWakeUp(whichUnit: junit): void
declare function UnitApplyTimedLife(whichUnit: junit, buffId: number, duration: number): void
declare function UnitIgnoreAlarm(whichUnit: junit, flag: boolean): boolean
declare function UnitIgnoreAlarmToggled(whichUnit: junit): boolean
declare function UnitResetCooldown(whichUnit: junit): void
declare function UnitSetConstructionProgress(whichUnit: junit, constructionPercentage: number): void
declare function UnitSetUpgradeProgress(whichUnit: junit, upgradePercentage: number): void
declare function UnitPauseTimedLife(whichUnit: junit, flag: boolean): void
declare function UnitSetUsesAltIcon(whichUnit: junit, flag: boolean): void
declare function UnitDamagePoint(
    whichUnit: junit,
    delay: number,
    radius: number,
    x: number,
    y: number,
    amount: number,
    attack: boolean,
    ranged: boolean,
    attackType: jattacktype,
    damageType: jdamagetype,
    weaponType: jweapontype
): boolean
declare function UnitDamageTarget(
    whichUnit: junit,
    target: jwidget,
    amount: number,
    attack: boolean,
    ranged: boolean,
    attackType: jattacktype,
    damageType: jdamagetype,
    weaponType: jweapontype
): boolean
declare function IssueImmediateOrder(whichUnit: junit, order: string): boolean
declare function IssueImmediateOrderById(whichUnit: junit, order: number): boolean
declare function IssuePointOrder(whichUnit: junit, order: string, x: number, y: number): boolean
declare function IssuePointOrderLoc(
    whichUnit: junit,
    order: string,
    whichLocation: jlocation
): boolean
declare function IssuePointOrderById(whichUnit: junit, order: number, x: number, y: number): boolean
declare function IssuePointOrderByIdLoc(
    whichUnit: junit,
    order: number,
    whichLocation: jlocation
): boolean
declare function IssueTargetOrder(whichUnit: junit, order: string, targetWidget: jwidget): boolean
declare function IssueTargetOrderById(
    whichUnit: junit,
    order: number,
    targetWidget: jwidget
): boolean
declare function IssueInstantPointOrder(
    whichUnit: junit,
    order: string,
    x: number,
    y: number,
    instantTargetWidget: jwidget
): boolean
declare function IssueInstantPointOrderById(
    whichUnit: junit,
    order: number,
    x: number,
    y: number,
    instantTargetWidget: jwidget
): boolean
declare function IssueInstantTargetOrder(
    whichUnit: junit,
    order: string,
    targetWidget: jwidget,
    instantTargetWidget: jwidget
): boolean
declare function IssueInstantTargetOrderById(
    whichUnit: junit,
    order: number,
    targetWidget: jwidget,
    instantTargetWidget: jwidget
): boolean
declare function IssueBuildOrder(
    whichPeon: junit,
    unitToBuild: string,
    x: number,
    y: number
): boolean
declare function IssueBuildOrderById(
    whichPeon: junit,
    unitId: number,
    x: number,
    y: number
): boolean
declare function IssueNeutralImmediateOrder(
    forWhichPlayer: jplayer,
    neutralStructure: junit,
    unitToBuild: string
): boolean
declare function IssueNeutralImmediateOrderById(
    forWhichPlayer: jplayer,
    neutralStructure: junit,
    unitId: number
): boolean
declare function IssueNeutralPointOrder(
    forWhichPlayer: jplayer,
    neutralStructure: junit,
    unitToBuild: string,
    x: number,
    y: number
): boolean
declare function IssueNeutralPointOrderById(
    forWhichPlayer: jplayer,
    neutralStructure: junit,
    unitId: number,
    x: number,
    y: number
): boolean
declare function IssueNeutralTargetOrder(
    forWhichPlayer: jplayer,
    neutralStructure: junit,
    unitToBuild: string,
    target: jwidget
): boolean
declare function IssueNeutralTargetOrderById(
    forWhichPlayer: jplayer,
    neutralStructure: junit,
    unitId: number,
    target: jwidget
): boolean
declare function GetUnitCurrentOrder(whichUnit: junit): number
declare function SetResourceAmount(whichUnit: junit, amount: number): void
declare function AddResourceAmount(whichUnit: junit, amount: number): void
declare function GetResourceAmount(whichUnit: junit): number
declare function WaygateGetDestinationX(waygate: junit): number
declare function WaygateGetDestinationY(waygate: junit): number
declare function WaygateSetDestination(waygate: junit, x: number, y: number): void
declare function WaygateActivate(waygate: junit, activate: boolean): void
declare function WaygateIsActive(waygate: junit): boolean
declare function AddItemToAllStock(itemId: number, currentStock: number, stockMax: number): void
declare function AddItemToStock(
    whichUnit: junit,
    itemId: number,
    currentStock: number,
    stockMax: number
): void
declare function AddUnitToAllStock(unitId: number, currentStock: number, stockMax: number): void
declare function AddUnitToStock(
    whichUnit: junit,
    unitId: number,
    currentStock: number,
    stockMax: number
): void
declare function RemoveItemFromAllStock(itemId: number): void
declare function RemoveItemFromStock(whichUnit: junit, itemId: number): void
declare function RemoveUnitFromAllStock(unitId: number): void
declare function RemoveUnitFromStock(whichUnit: junit, unitId: number): void
declare function SetAllItemTypeSlots(slots: number): void
declare function SetAllUnitTypeSlots(slots: number): void
declare function SetItemTypeSlots(whichUnit: junit, slots: number): void
declare function SetUnitTypeSlots(whichUnit: junit, slots: number): void
declare function GetUnitUserData(whichUnit: junit): number
declare function SetUnitUserData(whichUnit: junit, data: number): void
declare function Player(number: number): jplayer
declare function GetLocalPlayer(): jplayer
declare function IsPlayerAlly(whichPlayer: jplayer, otherPlayer: jplayer): boolean
declare function IsPlayerEnemy(whichPlayer: jplayer, otherPlayer: jplayer): boolean
declare function IsPlayerInForce(whichPlayer: jplayer, whichForce: jforce): boolean
declare function IsPlayerObserver(whichPlayer: jplayer): boolean
declare function IsVisibleToPlayer(x: number, y: number, whichPlayer: jplayer): boolean
declare function IsLocationVisibleToPlayer(whichLocation: jlocation, whichPlayer: jplayer): boolean
declare function IsFoggedToPlayer(x: number, y: number, whichPlayer: jplayer): boolean
declare function IsLocationFoggedToPlayer(whichLocation: jlocation, whichPlayer: jplayer): boolean
declare function IsMaskedToPlayer(x: number, y: number, whichPlayer: jplayer): boolean
declare function IsLocationMaskedToPlayer(whichLocation: jlocation, whichPlayer: jplayer): boolean
declare function GetPlayerRace(whichPlayer: jplayer): jrace
declare function GetPlayerId(whichPlayer: jplayer): number
declare function GetPlayerUnitCount(whichPlayer: jplayer, includeIncomplete: boolean): number
declare function GetPlayerTypedUnitCount(
    whichPlayer: jplayer,
    unitName: string,
    includeIncomplete: boolean,
    includeUpgrades: boolean
): number
declare function GetPlayerStructureCount(whichPlayer: jplayer, includeIncomplete: boolean): number
declare function GetPlayerState(whichPlayer: jplayer, whichPlayerState: jplayerstate): number
declare function GetPlayerScore(whichPlayer: jplayer, whichPlayerScore: jplayerscore): number
declare function GetPlayerAlliance(
    sourcePlayer: jplayer,
    otherPlayer: jplayer,
    whichAllianceSetting: jalliancetype
): boolean
declare function GetPlayerHandicap(whichPlayer: jplayer): number
declare function GetPlayerHandicapXP(whichPlayer: jplayer): number
declare function GetPlayerHandicapReviveTime(whichPlayer: jplayer): number
declare function GetPlayerHandicapDamage(whichPlayer: jplayer): number
declare function SetPlayerHandicap(whichPlayer: jplayer, handicap: number): void
declare function SetPlayerHandicapXP(whichPlayer: jplayer, handicap: number): void
declare function SetPlayerHandicapReviveTime(whichPlayer: jplayer, handicap: number): void
declare function SetPlayerHandicapDamage(whichPlayer: jplayer, handicap: number): void
declare function SetPlayerTechMaxAllowed(
    whichPlayer: jplayer,
    techid: number,
    maximum: number
): void
declare function GetPlayerTechMaxAllowed(whichPlayer: jplayer, techid: number): number
declare function AddPlayerTechResearched(whichPlayer: jplayer, techid: number, levels: number): void
declare function SetPlayerTechResearched(
    whichPlayer: jplayer,
    techid: number,
    setToLevel: number
): void
declare function GetPlayerTechResearched(
    whichPlayer: jplayer,
    techid: number,
    specificonly: boolean
): boolean
declare function GetPlayerTechCount(
    whichPlayer: jplayer,
    techid: number,
    specificonly: boolean
): number
declare function SetPlayerUnitsOwner(whichPlayer: jplayer, newOwner: number): void
declare function CripplePlayer(whichPlayer: jplayer, toWhichPlayers: jforce, flag: boolean): void
declare function SetPlayerAbilityAvailable(
    whichPlayer: jplayer,
    abilid: number,
    avail: boolean
): void
declare function SetPlayerState(
    whichPlayer: jplayer,
    whichPlayerState: jplayerstate,
    value: number
): void
declare function RemovePlayer(whichPlayer: jplayer, gameResult: jplayergameresult): void
declare function CachePlayerHeroData(whichPlayer: jplayer): void
declare function SetFogStateRect(
    forWhichPlayer: jplayer,
    whichState: jfogstate,
    where: jrect,
    useSharedVision: boolean
): void
declare function SetFogStateRadius(
    forWhichPlayer: jplayer,
    whichState: jfogstate,
    centerx: number,
    centerY: number,
    radius: number,
    useSharedVision: boolean
): void
declare function SetFogStateRadiusLoc(
    forWhichPlayer: jplayer,
    whichState: jfogstate,
    center: jlocation,
    radius: number,
    useSharedVision: boolean
): void
declare function FogMaskEnable(enable: boolean): void
declare function IsFogMaskEnabled(): boolean
declare function FogEnable(enable: boolean): void
declare function IsFogEnabled(): boolean
declare function CreateFogModifierRect(
    forWhichPlayer: jplayer,
    whichState: jfogstate,
    where: jrect,
    useSharedVision: boolean,
    afterUnits: boolean
): jfogmodifier
declare function CreateFogModifierRadius(
    forWhichPlayer: jplayer,
    whichState: jfogstate,
    centerx: number,
    centerY: number,
    radius: number,
    useSharedVision: boolean,
    afterUnits: boolean
): jfogmodifier
declare function CreateFogModifierRadiusLoc(
    forWhichPlayer: jplayer,
    whichState: jfogstate,
    center: jlocation,
    radius: number,
    useSharedVision: boolean,
    afterUnits: boolean
): jfogmodifier
declare function DestroyFogModifier(whichFogModifier: jfogmodifier): void
declare function FogModifierStart(whichFogModifier: jfogmodifier): void
declare function FogModifierStop(whichFogModifier: jfogmodifier): void
declare function VersionGet(): jversion
declare function VersionCompatible(whichVersion: jversion): boolean
declare function VersionSupported(whichVersion: jversion): boolean
declare function EndGame(doScoreScreen: boolean): void
declare function ChangeLevel(newLevel: string, doScoreScreen: boolean): void
declare function RestartGame(doScoreScreen: boolean): void
declare function ReloadGame(): void
declare function SetCampaignMenuRace(r: jrace): void
declare function SetCampaignMenuRaceEx(campaignIndex: number): void
declare function ForceCampaignSelectScreen(): void
declare function LoadGame(saveFileName: string, doScoreScreen: boolean): void
declare function SaveGame(saveFileName: string): void
declare function RenameSaveDirectory(sourceDirName: string, destDirName: string): boolean
declare function RemoveSaveDirectory(sourceDirName: string): boolean
declare function CopySaveGame(sourceSaveName: string, destSaveName: string): boolean
declare function SaveGameExists(saveName: string): boolean
declare function SetMaxCheckpointSaves(maxCheckpointSaves: number): void
declare function SaveGameCheckpoint(saveFileName: string, showWindow: boolean): void
declare function SyncSelections(): void
declare function SetFloatGameState(whichFloatGameState: jfgamestate, value: number): void
declare function GetFloatGameState(whichFloatGameState: jfgamestate): number
declare function SetIntegerGameState(whichIntegerGameState: jigamestate, value: number): void
declare function GetIntegerGameState(whichIntegerGameState: jigamestate): number
declare function SetTutorialCleared(cleared: boolean): void
declare function SetMissionAvailable(
    campaignNumber: number,
    missionNumber: number,
    available: boolean
): void
declare function SetCampaignAvailable(campaignNumber: number, available: boolean): void
declare function SetOpCinematicAvailable(campaignNumber: number, available: boolean): void
declare function SetEdCinematicAvailable(campaignNumber: number, available: boolean): void
declare function GetDefaultDifficulty(): jgamedifficulty
declare function SetDefaultDifficulty(g: jgamedifficulty): void
declare function SetCustomCampaignButtonVisible(whichButton: number, visible: boolean): void
declare function GetCustomCampaignButtonVisible(whichButton: number): boolean
declare function DoNotSaveReplay(): void
declare function DialogCreate(): jdialog
declare function DialogDestroy(whichDialog: jdialog): void
declare function DialogClear(whichDialog: jdialog): void
declare function DialogSetMessage(whichDialog: jdialog, messageText: string): void
declare function DialogAddButton(whichDialog: jdialog, buttonText: string, hotkey: number): jbutton
declare function DialogAddQuitButton(
    whichDialog: jdialog,
    doScoreScreen: boolean,
    buttonText: string,
    hotkey: number
): jbutton
declare function DialogDisplay(whichPlayer: jplayer, whichDialog: jdialog, flag: boolean): void
declare function ReloadGameCachesFromDisk(): boolean
declare function InitGameCache(campaignFile: string): jgamecache
declare function SaveGameCache(whichCache: jgamecache): boolean
declare function StoreInteger(
    cache: jgamecache,
    missionKey: string,
    key: string,
    value: number
): void
declare function StoreReal(cache: jgamecache, missionKey: string, key: string, value: number): void
declare function StoreBoolean(
    cache: jgamecache,
    missionKey: string,
    key: string,
    value: boolean
): void
declare function StoreUnit(
    cache: jgamecache,
    missionKey: string,
    key: string,
    whichUnit: junit
): boolean
declare function StoreString(
    cache: jgamecache,
    missionKey: string,
    key: string,
    value: string
): boolean
declare function SyncStoredInteger(cache: jgamecache, missionKey: string, key: string): void
declare function SyncStoredReal(cache: jgamecache, missionKey: string, key: string): void
declare function SyncStoredBoolean(cache: jgamecache, missionKey: string, key: string): void
declare function SyncStoredUnit(cache: jgamecache, missionKey: string, key: string): void
declare function SyncStoredString(cache: jgamecache, missionKey: string, key: string): void
declare function HaveStoredInteger(cache: jgamecache, missionKey: string, key: string): boolean
declare function HaveStoredReal(cache: jgamecache, missionKey: string, key: string): boolean
declare function HaveStoredBoolean(cache: jgamecache, missionKey: string, key: string): boolean
declare function HaveStoredUnit(cache: jgamecache, missionKey: string, key: string): boolean
declare function HaveStoredString(cache: jgamecache, missionKey: string, key: string): boolean
declare function FlushGameCache(cache: jgamecache): void
declare function FlushStoredMission(cache: jgamecache, missionKey: string): void
declare function FlushStoredInteger(cache: jgamecache, missionKey: string, key: string): void
declare function FlushStoredReal(cache: jgamecache, missionKey: string, key: string): void
declare function FlushStoredBoolean(cache: jgamecache, missionKey: string, key: string): void
declare function FlushStoredUnit(cache: jgamecache, missionKey: string, key: string): void
declare function FlushStoredString(cache: jgamecache, missionKey: string, key: string): void
declare function GetStoredInteger(cache: jgamecache, missionKey: string, key: string): number
declare function GetStoredReal(cache: jgamecache, missionKey: string, key: string): number
declare function GetStoredBoolean(cache: jgamecache, missionKey: string, key: string): boolean
declare function GetStoredString(cache: jgamecache, missionKey: string, key: string): string
declare function RestoreUnit(
    cache: jgamecache,
    missionKey: string,
    key: string,
    forWhichPlayer: jplayer,
    x: number,
    y: number,
    facing: number
): junit
declare function InitHashtable(): jhashtable
declare function SaveInteger(
    table: jhashtable,
    parentKey: number,
    childKey: number,
    value: number
): void
declare function SaveReal(
    table: jhashtable,
    parentKey: number,
    childKey: number,
    value: number
): void
declare function SaveBoolean(
    table: jhashtable,
    parentKey: number,
    childKey: number,
    value: boolean
): void
declare function SaveStr(
    table: jhashtable,
    parentKey: number,
    childKey: number,
    value: string
): boolean
declare function SavePlayerHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number,
    whichPlayer: jplayer
): boolean
declare function SaveWidgetHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number,
    whichWidget: jwidget
): boolean
declare function SaveDestructableHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number,
    whichDestructable: jdestructable
): boolean
declare function SaveItemHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number,
    whichItem: jitem
): boolean
declare function SaveUnitHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number,
    whichUnit: junit
): boolean
declare function SaveAbilityHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number,
    whichAbility: jability
): boolean
declare function SaveTimerHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number,
    whichTimer: jtimer
): boolean
declare function SaveTriggerHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number,
    whichTrigger: jtrigger
): boolean
declare function SaveTriggerConditionHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number,
    whichTriggercondition: jtriggercondition
): boolean
declare function SaveTriggerActionHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number,
    whichTriggeraction: jtriggeraction
): boolean
declare function SaveTriggerEventHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number,
    whichEvent: jevent
): boolean
declare function SaveForceHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number,
    whichForce: jforce
): boolean
declare function SaveGroupHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number,
    whichGroup: jgroup
): boolean
declare function SaveLocationHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number,
    whichLocation: jlocation
): boolean
declare function SaveRectHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number,
    whichRect: jrect
): boolean
declare function SaveBooleanExprHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number,
    whichBoolexpr: jboolexpr
): boolean
declare function SaveSoundHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number,
    whichSound: jsound
): boolean
declare function SaveEffectHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number,
    whichEffect: jeffect
): boolean
declare function SaveUnitPoolHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number,
    whichUnitpool: junitpool
): boolean
declare function SaveItemPoolHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number,
    whichItempool: jitempool
): boolean
declare function SaveQuestHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number,
    whichQuest: jquest
): boolean
declare function SaveQuestItemHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number,
    whichQuestitem: jquestitem
): boolean
declare function SaveDefeatConditionHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number,
    whichDefeatcondition: jdefeatcondition
): boolean
declare function SaveTimerDialogHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number,
    whichTimerdialog: jtimerdialog
): boolean
declare function SaveLeaderboardHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number,
    whichLeaderboard: jleaderboard
): boolean
declare function SaveMultiboardHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number,
    whichMultiboard: jmultiboard
): boolean
declare function SaveMultiboardItemHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number,
    whichMultiboarditem: jmultiboarditem
): boolean
declare function SaveTrackableHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number,
    whichTrackable: jtrackable
): boolean
declare function SaveDialogHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number,
    whichDialog: jdialog
): boolean
declare function SaveButtonHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number,
    whichButton: jbutton
): boolean
declare function SaveTextTagHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number,
    whichTexttag: jtexttag
): boolean
declare function SaveLightningHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number,
    whichLightning: jlightning
): boolean
declare function SaveImageHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number,
    whichImage: jimage
): boolean
declare function SaveUbersplatHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number,
    whichUbersplat: jubersplat
): boolean
declare function SaveRegionHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number,
    whichRegion: jregion
): boolean
declare function SaveFogStateHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number,
    whichFogState: jfogstate
): boolean
declare function SaveFogModifierHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number,
    whichFogModifier: jfogmodifier
): boolean
declare function SaveAgentHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number,
    whichAgent: jagent
): boolean
declare function SaveHashtableHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number,
    whichHashtable: jhashtable
): boolean
declare function SaveFrameHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number,
    whichFrameHandle: jframehandle
): boolean
declare function LoadInteger(table: jhashtable, parentKey: number, childKey: number): number
declare function LoadReal(table: jhashtable, parentKey: number, childKey: number): number
declare function LoadBoolean(table: jhashtable, parentKey: number, childKey: number): boolean
declare function LoadStr(table: jhashtable, parentKey: number, childKey: number): string
declare function LoadPlayerHandle(table: jhashtable, parentKey: number, childKey: number): jplayer
declare function LoadWidgetHandle(table: jhashtable, parentKey: number, childKey: number): jwidget
declare function LoadDestructableHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number
): jdestructable
declare function LoadItemHandle(table: jhashtable, parentKey: number, childKey: number): jitem
declare function LoadUnitHandle(table: jhashtable, parentKey: number, childKey: number): junit
declare function LoadAbilityHandle(table: jhashtable, parentKey: number, childKey: number): jability
declare function LoadTimerHandle(table: jhashtable, parentKey: number, childKey: number): jtimer
declare function LoadTriggerHandle(table: jhashtable, parentKey: number, childKey: number): jtrigger
declare function LoadTriggerConditionHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number
): jtriggercondition
declare function LoadTriggerActionHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number
): jtriggeraction
declare function LoadTriggerEventHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number
): jevent
declare function LoadForceHandle(table: jhashtable, parentKey: number, childKey: number): jforce
declare function LoadGroupHandle(table: jhashtable, parentKey: number, childKey: number): jgroup
declare function LoadLocationHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number
): jlocation
declare function LoadRectHandle(table: jhashtable, parentKey: number, childKey: number): jrect
declare function LoadBooleanExprHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number
): jboolexpr
declare function LoadSoundHandle(table: jhashtable, parentKey: number, childKey: number): jsound
declare function LoadEffectHandle(table: jhashtable, parentKey: number, childKey: number): jeffect
declare function LoadUnitPoolHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number
): junitpool
declare function LoadItemPoolHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number
): jitempool
declare function LoadQuestHandle(table: jhashtable, parentKey: number, childKey: number): jquest
declare function LoadQuestItemHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number
): jquestitem
declare function LoadDefeatConditionHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number
): jdefeatcondition
declare function LoadTimerDialogHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number
): jtimerdialog
declare function LoadLeaderboardHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number
): jleaderboard
declare function LoadMultiboardHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number
): jmultiboard
declare function LoadMultiboardItemHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number
): jmultiboarditem
declare function LoadTrackableHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number
): jtrackable
declare function LoadDialogHandle(table: jhashtable, parentKey: number, childKey: number): jdialog
declare function LoadButtonHandle(table: jhashtable, parentKey: number, childKey: number): jbutton
declare function LoadTextTagHandle(table: jhashtable, parentKey: number, childKey: number): jtexttag
declare function LoadLightningHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number
): jlightning
declare function LoadImageHandle(table: jhashtable, parentKey: number, childKey: number): jimage
declare function LoadUbersplatHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number
): jubersplat
declare function LoadRegionHandle(table: jhashtable, parentKey: number, childKey: number): jregion
declare function LoadFogStateHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number
): jfogstate
declare function LoadFogModifierHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number
): jfogmodifier
declare function LoadHashtableHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number
): jhashtable
declare function LoadFrameHandle(
    table: jhashtable,
    parentKey: number,
    childKey: number
): jframehandle
declare function HaveSavedInteger(table: jhashtable, parentKey: number, childKey: number): boolean
declare function HaveSavedReal(table: jhashtable, parentKey: number, childKey: number): boolean
declare function HaveSavedBoolean(table: jhashtable, parentKey: number, childKey: number): boolean
declare function HaveSavedString(table: jhashtable, parentKey: number, childKey: number): boolean
declare function HaveSavedHandle(table: jhashtable, parentKey: number, childKey: number): boolean
declare function RemoveSavedInteger(table: jhashtable, parentKey: number, childKey: number): void
declare function RemoveSavedReal(table: jhashtable, parentKey: number, childKey: number): void
declare function RemoveSavedBoolean(table: jhashtable, parentKey: number, childKey: number): void
declare function RemoveSavedString(table: jhashtable, parentKey: number, childKey: number): void
declare function RemoveSavedHandle(table: jhashtable, parentKey: number, childKey: number): void
declare function FlushParentHashtable(table: jhashtable): void
declare function FlushChildHashtable(table: jhashtable, parentKey: number): void
declare function GetRandomInt(lowBound: number, highBound: number): number
declare function GetRandomReal(lowBound: number, highBound: number): number
declare function CreateUnitPool(): junitpool
declare function DestroyUnitPool(whichPool: junitpool): void
declare function UnitPoolAddUnitType(whichPool: junitpool, unitId: number, weight: number): void
declare function UnitPoolRemoveUnitType(whichPool: junitpool, unitId: number): void
declare function PlaceRandomUnit(
    whichPool: junitpool,
    forWhichPlayer: jplayer,
    x: number,
    y: number,
    facing: number
): junit
declare function CreateItemPool(): jitempool
declare function DestroyItemPool(whichItemPool: jitempool): void
declare function ItemPoolAddItemType(whichItemPool: jitempool, itemId: number, weight: number): void
declare function ItemPoolRemoveItemType(whichItemPool: jitempool, itemId: number): void
declare function PlaceRandomItem(whichItemPool: jitempool, x: number, y: number): jitem
declare function ChooseRandomCreep(level: number): number
declare function ChooseRandomNPBuilding(): number
declare function ChooseRandomItem(level: number): number
declare function ChooseRandomItemEx(whichType: jitemtype, level: number): number
declare function SetRandomSeed(seed: number): void
declare function SetTerrainFog(a: number, b: number, c: number, d: number, e: number): void
declare function ResetTerrainFog(): void
declare function SetUnitFog(a: number, b: number, c: number, d: number, e: number): void
declare function SetTerrainFogEx(
    style: number,
    zstart: number,
    zend: number,
    density: number,
    red: number,
    green: number,
    blue: number
): void
declare function DisplayTextToPlayer(toPlayer: jplayer, x: number, y: number, message: string): void
declare function DisplayTimedTextToPlayer(
    toPlayer: jplayer,
    x: number,
    y: number,
    duration: number,
    message: string
): void
declare function DisplayTimedTextFromPlayer(
    toPlayer: jplayer,
    x: number,
    y: number,
    duration: number,
    message: string
): void
declare function ClearTextMessages(): void
declare function SetDayNightModels(terrainDNCFile: string, unitDNCFile: string): void
declare function SetPortraitLight(portraitDNCFile: string): void
declare function SetSkyModel(skyModelFile: string): void
declare function EnableUserControl(b: boolean): void
declare function EnableUserUI(b: boolean): void
declare function SuspendTimeOfDay(b: boolean): void
declare function SetTimeOfDayScale(r: number): void
declare function GetTimeOfDayScale(): number
declare function ShowInterface(flag: boolean, fadeDuration: number): void
declare function PauseGame(flag: boolean): void
declare function UnitAddIndicator(
    whichUnit: junit,
    red: number,
    green: number,
    blue: number,
    alpha: number
): void
declare function AddIndicator(
    whichWidget: jwidget,
    red: number,
    green: number,
    blue: number,
    alpha: number
): void
declare function PingMinimap(x: number, y: number, duration: number): void
declare function PingMinimapEx(
    x: number,
    y: number,
    duration: number,
    red: number,
    green: number,
    blue: number,
    extraEffects: boolean
): void
declare function CreateMinimapIconOnUnit(
    whichUnit: junit,
    red: number,
    green: number,
    blue: number,
    pingPath: string,
    fogVisibility: jfogstate
): jminimapicon
declare function CreateMinimapIconAtLoc(
    where: jlocation,
    red: number,
    green: number,
    blue: number,
    pingPath: string,
    fogVisibility: jfogstate
): jminimapicon
declare function CreateMinimapIcon(
    x: number,
    y: number,
    red: number,
    green: number,
    blue: number,
    pingPath: string,
    fogVisibility: jfogstate
): jminimapicon
declare function SkinManagerGetLocalPath(key: string): string
declare function DestroyMinimapIcon(pingId: jminimapicon): void
declare function SetMinimapIconVisible(whichMinimapIcon: jminimapicon, visible: boolean): void
declare function SetMinimapIconOrphanDestroy(
    whichMinimapIcon: jminimapicon,
    doDestroy: boolean
): void
declare function EnableOcclusion(flag: boolean): void
declare function SetIntroShotText(introText: string): void
declare function SetIntroShotModel(introModelPath: string): void
declare function EnableWorldFogBoundary(b: boolean): void
declare function PlayModelCinematic(modelName: string): void
declare function PlayCinematic(movieName: string): void
declare function ForceUIKey(key: string): void
declare function ForceUICancel(): void
declare function DisplayLoadDialog(): void
declare function SetAltMinimapIcon(iconPath: string): void
declare function DisableRestartMission(flag: boolean): void
declare function CreateTextTag(): jtexttag
declare function DestroyTextTag(t: jtexttag): void
declare function SetTextTagText(t: jtexttag, s: string, height: number): void
declare function SetTextTagPos(t: jtexttag, x: number, y: number, heightOffset: number): void
declare function SetTextTagPosUnit(t: jtexttag, whichUnit: junit, heightOffset: number): void
declare function SetTextTagColor(
    t: jtexttag,
    red: number,
    green: number,
    blue: number,
    alpha: number
): void
declare function SetTextTagVelocity(t: jtexttag, xvel: number, yvel: number): void
declare function SetTextTagVisibility(t: jtexttag, flag: boolean): void
declare function SetTextTagSuspended(t: jtexttag, flag: boolean): void
declare function SetTextTagPermanent(t: jtexttag, flag: boolean): void
declare function SetTextTagAge(t: jtexttag, age: number): void
declare function SetTextTagLifespan(t: jtexttag, lifespan: number): void
declare function SetTextTagFadepoint(t: jtexttag, fadepoint: number): void
declare function SetReservedLocalHeroButtons(reserved: number): void
declare function GetAllyColorFilterState(): number
declare function SetAllyColorFilterState(state: number): void
declare function GetCreepCampFilterState(): boolean
declare function SetCreepCampFilterState(state: boolean): void
declare function EnableMinimapFilterButtons(enableAlly: boolean, enableCreep: boolean): void
declare function EnableDragSelect(state: boolean, ui: boolean): void
declare function EnablePreSelect(state: boolean, ui: boolean): void
declare function EnableSelect(state: boolean, ui: boolean): void
declare function CreateTrackable(
    trackableModelPath: string,
    x: number,
    y: number,
    facing: number
): jtrackable
declare function CreateQuest(): jquest
declare function DestroyQuest(whichQuest: jquest): void
declare function QuestSetTitle(whichQuest: jquest, title: string): void
declare function QuestSetDescription(whichQuest: jquest, description: string): void
declare function QuestSetIconPath(whichQuest: jquest, iconPath: string): void
declare function QuestSetRequired(whichQuest: jquest, required: boolean): void
declare function QuestSetCompleted(whichQuest: jquest, completed: boolean): void
declare function QuestSetDiscovered(whichQuest: jquest, discovered: boolean): void
declare function QuestSetFailed(whichQuest: jquest, failed: boolean): void
declare function QuestSetEnabled(whichQuest: jquest, enabled: boolean): void
declare function IsQuestRequired(whichQuest: jquest): boolean
declare function IsQuestCompleted(whichQuest: jquest): boolean
declare function IsQuestDiscovered(whichQuest: jquest): boolean
declare function IsQuestFailed(whichQuest: jquest): boolean
declare function IsQuestEnabled(whichQuest: jquest): boolean
declare function QuestCreateItem(whichQuest: jquest): jquestitem
declare function QuestItemSetDescription(whichQuestItem: jquestitem, description: string): void
declare function QuestItemSetCompleted(whichQuestItem: jquestitem, completed: boolean): void
declare function IsQuestItemCompleted(whichQuestItem: jquestitem): boolean
declare function CreateDefeatCondition(): jdefeatcondition
declare function DestroyDefeatCondition(whichCondition: jdefeatcondition): void
declare function DefeatConditionSetDescription(
    whichCondition: jdefeatcondition,
    description: string
): void
declare function FlashQuestDialogButton(): void
declare function ForceQuestDialogUpdate(): void
declare function CreateTimerDialog(t: jtimer): jtimerdialog
declare function DestroyTimerDialog(whichDialog: jtimerdialog): void
declare function TimerDialogSetTitle(whichDialog: jtimerdialog, title: string): void
declare function TimerDialogSetTitleColor(
    whichDialog: jtimerdialog,
    red: number,
    green: number,
    blue: number,
    alpha: number
): void
declare function TimerDialogSetTimeColor(
    whichDialog: jtimerdialog,
    red: number,
    green: number,
    blue: number,
    alpha: number
): void
declare function TimerDialogSetSpeed(whichDialog: jtimerdialog, speedMultFactor: number): void
declare function TimerDialogDisplay(whichDialog: jtimerdialog, display: boolean): void
declare function IsTimerDialogDisplayed(whichDialog: jtimerdialog): boolean
declare function TimerDialogSetRealTimeRemaining(
    whichDialog: jtimerdialog,
    timeRemaining: number
): void
declare function CreateLeaderboard(): jleaderboard
declare function DestroyLeaderboard(lb: jleaderboard): void
declare function LeaderboardDisplay(lb: jleaderboard, show: boolean): void
declare function IsLeaderboardDisplayed(lb: jleaderboard): boolean
declare function LeaderboardGetItemCount(lb: jleaderboard): number
declare function LeaderboardSetSizeByItemCount(lb: jleaderboard, count: number): void
declare function LeaderboardAddItem(
    lb: jleaderboard,
    label: string,
    value: number,
    p: jplayer
): void
declare function LeaderboardRemoveItem(lb: jleaderboard, index: number): void
declare function LeaderboardRemovePlayerItem(lb: jleaderboard, p: jplayer): void
declare function LeaderboardClear(lb: jleaderboard): void
declare function LeaderboardSortItemsByValue(lb: jleaderboard, ascending: boolean): void
declare function LeaderboardSortItemsByPlayer(lb: jleaderboard, ascending: boolean): void
declare function LeaderboardSortItemsByLabel(lb: jleaderboard, ascending: boolean): void
declare function LeaderboardHasPlayerItem(lb: jleaderboard, p: jplayer): boolean
declare function LeaderboardGetPlayerIndex(lb: jleaderboard, p: jplayer): number
declare function LeaderboardSetLabel(lb: jleaderboard, label: string): void
declare function LeaderboardGetLabelText(lb: jleaderboard): string
declare function PlayerSetLeaderboard(toPlayer: jplayer, lb: jleaderboard): void
declare function PlayerGetLeaderboard(toPlayer: jplayer): jleaderboard
declare function LeaderboardSetLabelColor(
    lb: jleaderboard,
    red: number,
    green: number,
    blue: number,
    alpha: number
): void
declare function LeaderboardSetValueColor(
    lb: jleaderboard,
    red: number,
    green: number,
    blue: number,
    alpha: number
): void
declare function LeaderboardSetStyle(
    lb: jleaderboard,
    showLabel: boolean,
    showNames: boolean,
    showValues: boolean,
    showIcons: boolean
): void
declare function LeaderboardSetItemValue(lb: jleaderboard, whichItem: number, val: number): void
declare function LeaderboardSetItemLabel(lb: jleaderboard, whichItem: number, val: string): void
declare function LeaderboardSetItemStyle(
    lb: jleaderboard,
    whichItem: number,
    showLabel: boolean,
    showValue: boolean,
    showIcon: boolean
): void
declare function LeaderboardSetItemLabelColor(
    lb: jleaderboard,
    whichItem: number,
    red: number,
    green: number,
    blue: number,
    alpha: number
): void
declare function LeaderboardSetItemValueColor(
    lb: jleaderboard,
    whichItem: number,
    red: number,
    green: number,
    blue: number,
    alpha: number
): void
declare function CreateMultiboard(): jmultiboard
declare function DestroyMultiboard(lb: jmultiboard): void
declare function MultiboardDisplay(lb: jmultiboard, show: boolean): void
declare function IsMultiboardDisplayed(lb: jmultiboard): boolean
declare function MultiboardMinimize(lb: jmultiboard, minimize: boolean): void
declare function IsMultiboardMinimized(lb: jmultiboard): boolean
declare function MultiboardClear(lb: jmultiboard): void
declare function MultiboardSetTitleText(lb: jmultiboard, label: string): void
declare function MultiboardGetTitleText(lb: jmultiboard): string
declare function MultiboardSetTitleTextColor(
    lb: jmultiboard,
    red: number,
    green: number,
    blue: number,
    alpha: number
): void
declare function MultiboardGetRowCount(lb: jmultiboard): number
declare function MultiboardGetColumnCount(lb: jmultiboard): number
declare function MultiboardSetColumnCount(lb: jmultiboard, count: number): void
declare function MultiboardSetRowCount(lb: jmultiboard, count: number): void
declare function MultiboardSetItemsStyle(
    lb: jmultiboard,
    showValues: boolean,
    showIcons: boolean
): void
declare function MultiboardSetItemsValue(lb: jmultiboard, value: string): void
declare function MultiboardSetItemsValueColor(
    lb: jmultiboard,
    red: number,
    green: number,
    blue: number,
    alpha: number
): void
declare function MultiboardSetItemsWidth(lb: jmultiboard, width: number): void
declare function MultiboardSetItemsIcon(lb: jmultiboard, iconPath: string): void
declare function MultiboardGetItem(lb: jmultiboard, row: number, column: number): jmultiboarditem
declare function MultiboardReleaseItem(mbi: jmultiboarditem): void
declare function MultiboardSetItemStyle(
    mbi: jmultiboarditem,
    showValue: boolean,
    showIcon: boolean
): void
declare function MultiboardSetItemValue(mbi: jmultiboarditem, val: string): void
declare function MultiboardSetItemValueColor(
    mbi: jmultiboarditem,
    red: number,
    green: number,
    blue: number,
    alpha: number
): void
declare function MultiboardSetItemWidth(mbi: jmultiboarditem, width: number): void
declare function MultiboardSetItemIcon(mbi: jmultiboarditem, iconFileName: string): void
declare function MultiboardSuppressDisplay(flag: boolean): void
declare function SetCameraPosition(x: number, y: number): void
declare function SetCameraQuickPosition(x: number, y: number): void
declare function SetCameraBounds(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    x3: number,
    y3: number,
    x4: number,
    y4: number
): void
declare function StopCamera(): void
declare function ResetToGameCamera(duration: number): void
declare function PanCameraTo(x: number, y: number): void
declare function PanCameraToTimed(x: number, y: number, duration: number): void
declare function PanCameraToWithZ(x: number, y: number, zOffsetDest: number): void
declare function PanCameraToTimedWithZ(
    x: number,
    y: number,
    zOffsetDest: number,
    duration: number
): void
declare function SetCinematicCamera(cameraModelFile: string): void
declare function SetCameraRotateMode(
    x: number,
    y: number,
    radiansToSweep: number,
    duration: number
): void
declare function SetCameraField(whichField: jcamerafield, value: number, duration: number): void
declare function AdjustCameraField(whichField: jcamerafield, offset: number, duration: number): void
declare function SetCameraTargetController(
    whichUnit: junit,
    xoffset: number,
    yoffset: number,
    inheritOrientation: boolean
): void
declare function SetCameraOrientController(whichUnit: junit, xoffset: number, yoffset: number): void
declare function CreateCameraSetup(): jcamerasetup
declare function CameraSetupSetField(
    whichSetup: jcamerasetup,
    whichField: jcamerafield,
    value: number,
    duration: number
): void
declare function CameraSetupGetField(whichSetup: jcamerasetup, whichField: jcamerafield): number
declare function CameraSetupSetDestPosition(
    whichSetup: jcamerasetup,
    x: number,
    y: number,
    duration: number
): void
declare function CameraSetupGetDestPositionLoc(whichSetup: jcamerasetup): jlocation
declare function CameraSetupGetDestPositionX(whichSetup: jcamerasetup): number
declare function CameraSetupGetDestPositionY(whichSetup: jcamerasetup): number
declare function CameraSetupApply(whichSetup: jcamerasetup, doPan: boolean, panTimed: boolean): void
declare function CameraSetupApplyWithZ(whichSetup: jcamerasetup, zDestOffset: number): void
declare function CameraSetupApplyForceDuration(
    whichSetup: jcamerasetup,
    doPan: boolean,
    forceDuration: number
): void
declare function CameraSetupApplyForceDurationWithZ(
    whichSetup: jcamerasetup,
    zDestOffset: number,
    forceDuration: number
): void
declare function BlzCameraSetupSetLabel(whichSetup: jcamerasetup, label: string): void
declare function BlzCameraSetupGetLabel(whichSetup: jcamerasetup): string
declare function CameraSetTargetNoise(mag: number, velocity: number): void
declare function CameraSetSourceNoise(mag: number, velocity: number): void
declare function CameraSetTargetNoiseEx(mag: number, velocity: number, vertOnly: boolean): void
declare function CameraSetSourceNoiseEx(mag: number, velocity: number, vertOnly: boolean): void
declare function CameraSetSmoothingFactor(factor: number): void
declare function CameraSetFocalDistance(distance: number): void
declare function CameraSetDepthOfFieldScale(scale: number): void
declare function SetCineFilterTexture(filename: string): void
declare function SetCineFilterBlendMode(whichMode: jblendmode): void
declare function SetCineFilterTexMapFlags(whichFlags: jtexmapflags): void
declare function SetCineFilterStartUV(minu: number, minv: number, maxu: number, maxv: number): void
declare function SetCineFilterEndUV(minu: number, minv: number, maxu: number, maxv: number): void
declare function SetCineFilterStartColor(
    red: number,
    green: number,
    blue: number,
    alpha: number
): void
declare function SetCineFilterEndColor(
    red: number,
    green: number,
    blue: number,
    alpha: number
): void
declare function SetCineFilterDuration(duration: number): void
declare function DisplayCineFilter(flag: boolean): void
declare function IsCineFilterDisplayed(): boolean
declare function SetCinematicScene(
    portraitUnitId: number,
    color: jplayercolor,
    speakerTitle: string,
    text: string,
    sceneDuration: number,
    voiceoverDuration: number
): void
declare function EndCinematicScene(): void
declare function ForceCinematicSubtitles(flag: boolean): void
declare function SetCinematicAudio(cinematicAudio: boolean): void
declare function GetCameraMargin(whichMargin: number): number
declare function GetCameraBoundMinX(): number
declare function GetCameraBoundMinY(): number
declare function GetCameraBoundMaxX(): number
declare function GetCameraBoundMaxY(): number
declare function GetCameraField(whichField: jcamerafield): number
declare function GetCameraTargetPositionX(): number
declare function GetCameraTargetPositionY(): number
declare function GetCameraTargetPositionZ(): number
declare function GetCameraTargetPositionLoc(): jlocation
declare function GetCameraEyePositionX(): number
declare function GetCameraEyePositionY(): number
declare function GetCameraEyePositionZ(): number
declare function GetCameraEyePositionLoc(): jlocation
declare function NewSoundEnvironment(environmentName: string): void
declare function CreateSound(
    fileName: string,
    looping: boolean,
    is3D: boolean,
    stopwhenoutofrange: boolean,
    fadeInRate: number,
    fadeOutRate: number,
    eaxSetting: string
): jsound
declare function CreateSoundFilenameWithLabel(
    fileName: string,
    looping: boolean,
    is3D: boolean,
    stopwhenoutofrange: boolean,
    fadeInRate: number,
    fadeOutRate: number,
    SLKEntryName: string
): jsound
declare function CreateSoundFromLabel(
    soundLabel: string,
    looping: boolean,
    is3D: boolean,
    stopwhenoutofrange: boolean,
    fadeInRate: number,
    fadeOutRate: number
): jsound
declare function CreateMIDISound(
    soundLabel: string,
    fadeInRate: number,
    fadeOutRate: number
): jsound
declare function SetSoundParamsFromLabel(soundHandle: jsound, soundLabel: string): void
declare function SetSoundDistanceCutoff(soundHandle: jsound, cutoff: number): void
declare function SetSoundChannel(soundHandle: jsound, channel: number): void
declare function SetSoundVolume(soundHandle: jsound, volume: number): void
declare function SetSoundPitch(soundHandle: jsound, pitch: number): void
declare function SetSoundPlayPosition(soundHandle: jsound, millisecs: number): void
declare function SetSoundDistances(soundHandle: jsound, minDist: number, maxDist: number): void
declare function SetSoundConeAngles(
    soundHandle: jsound,
    inside: number,
    outside: number,
    outsideVolume: number
): void
declare function SetSoundConeOrientation(soundHandle: jsound, x: number, y: number, z: number): void
declare function SetSoundPosition(soundHandle: jsound, x: number, y: number, z: number): void
declare function SetSoundVelocity(soundHandle: jsound, x: number, y: number, z: number): void
declare function AttachSoundToUnit(soundHandle: jsound, whichUnit: junit): void
declare function StartSound(soundHandle: jsound): void
declare function StopSound(soundHandle: jsound, killWhenDone: boolean, fadeOut: boolean): void
declare function KillSoundWhenDone(soundHandle: jsound): void
declare function SetMapMusic(musicName: string, random: boolean, index: number): void
declare function ClearMapMusic(): void
declare function PlayMusic(musicName: string): void
declare function PlayMusicEx(musicName: string, frommsecs: number, fadeinmsecs: number): void
declare function StopMusic(fadeOut: boolean): void
declare function ResumeMusic(): void
declare function PlayThematicMusic(musicFileName: string): void
declare function PlayThematicMusicEx(musicFileName: string, frommsecs: number): void
declare function EndThematicMusic(): void
declare function SetMusicVolume(volume: number): void
declare function SetMusicPlayPosition(millisecs: number): void
declare function SetThematicMusicPlayPosition(millisecs: number): void
declare function SetSoundDuration(soundHandle: jsound, duration: number): void
declare function GetSoundDuration(soundHandle: jsound): number
declare function GetSoundFileDuration(musicFileName: string): number
declare function VolumeGroupSetVolume(vgroup: jvolumegroup, scale: number): void
declare function VolumeGroupReset(): void
declare function GetSoundIsPlaying(soundHandle: jsound): boolean
declare function GetSoundIsLoading(soundHandle: jsound): boolean
declare function RegisterStackedSound(
    soundHandle: jsound,
    byPosition: boolean,
    rectwidth: number,
    rectheight: number
): void
declare function UnregisterStackedSound(
    soundHandle: jsound,
    byPosition: boolean,
    rectwidth: number,
    rectheight: number
): void
declare function SetSoundFacialAnimationLabel(soundHandle: jsound, animationLabel: string): boolean
declare function SetSoundFacialAnimationGroupLabel(soundHandle: jsound, groupLabel: string): boolean
declare function SetSoundFacialAnimationSetFilepath(
    soundHandle: jsound,
    animationSetFilepath: string
): boolean
declare function SetDialogueSpeakerNameKey(soundHandle: jsound, speakerName: string): boolean
declare function GetDialogueSpeakerNameKey(soundHandle: jsound): string
declare function SetDialogueTextKey(soundHandle: jsound, dialogueText: string): boolean
declare function GetDialogueTextKey(soundHandle: jsound): string
declare function AddWeatherEffect(where: jrect, effectID: number): jweathereffect
declare function RemoveWeatherEffect(whichEffect: jweathereffect): void
declare function EnableWeatherEffect(whichEffect: jweathereffect, enable: boolean): void
declare function TerrainDeformCrater(
    x: number,
    y: number,
    radius: number,
    depth: number,
    duration: number,
    permanent: boolean
): jterraindeformation
declare function TerrainDeformRipple(
    x: number,
    y: number,
    radius: number,
    depth: number,
    duration: number,
    count: number,
    spaceWaves: number,
    timeWaves: number,
    radiusStartPct: number,
    limitNeg: boolean
): jterraindeformation
declare function TerrainDeformWave(
    x: number,
    y: number,
    dirX: number,
    dirY: number,
    distance: number,
    speed: number,
    radius: number,
    depth: number,
    trailTime: number,
    count: number
): jterraindeformation
declare function TerrainDeformRandom(
    x: number,
    y: number,
    radius: number,
    minDelta: number,
    maxDelta: number,
    duration: number,
    updateInterval: number
): jterraindeformation
declare function TerrainDeformStop(deformation: jterraindeformation, duration: number): void
declare function TerrainDeformStopAll(): void
declare function AddSpecialEffect(modelName: string, x: number, y: number): jeffect
declare function AddSpecialEffectLoc(modelName: string, where: jlocation): jeffect
declare function AddSpecialEffectTarget(
    modelName: string,
    targetWidget: jwidget,
    attachPointName: string
): jeffect
declare function DestroyEffect(whichEffect: jeffect): void
declare function AddSpellEffect(
    abilityString: string,
    t: jeffecttype,
    x: number,
    y: number
): jeffect
declare function AddSpellEffectLoc(abilityString: string, t: jeffecttype, where: jlocation): jeffect
declare function AddSpellEffectById(
    abilityId: number,
    t: jeffecttype,
    x: number,
    y: number
): jeffect
declare function AddSpellEffectByIdLoc(abilityId: number, t: jeffecttype, where: jlocation): jeffect
declare function AddSpellEffectTarget(
    modelName: string,
    t: jeffecttype,
    targetWidget: jwidget,
    attachPoint: string
): jeffect
declare function AddSpellEffectTargetById(
    abilityId: number,
    t: jeffecttype,
    targetWidget: jwidget,
    attachPoint: string
): jeffect
declare function AddLightning(
    codeName: string,
    checkVisibility: boolean,
    x1: number,
    y1: number,
    x2: number,
    y2: number
): jlightning
declare function AddLightningEx(
    codeName: string,
    checkVisibility: boolean,
    x1: number,
    y1: number,
    z1: number,
    x2: number,
    y2: number,
    z2: number
): jlightning
declare function DestroyLightning(whichBolt: jlightning): boolean
declare function MoveLightning(
    whichBolt: jlightning,
    checkVisibility: boolean,
    x1: number,
    y1: number,
    x2: number,
    y2: number
): boolean
declare function MoveLightningEx(
    whichBolt: jlightning,
    checkVisibility: boolean,
    x1: number,
    y1: number,
    z1: number,
    x2: number,
    y2: number,
    z2: number
): boolean
declare function GetLightningColorA(whichBolt: jlightning): number
declare function GetLightningColorR(whichBolt: jlightning): number
declare function GetLightningColorG(whichBolt: jlightning): number
declare function GetLightningColorB(whichBolt: jlightning): number
declare function SetLightningColor(
    whichBolt: jlightning,
    r: number,
    g: number,
    b: number,
    a: number
): boolean
declare function GetAbilityEffect(abilityString: string, t: jeffecttype, index: number): string
declare function GetAbilityEffectById(abilityId: number, t: jeffecttype, index: number): string
declare function GetAbilitySound(abilityString: string, t: jsoundtype): string
declare function GetAbilitySoundById(abilityId: number, t: jsoundtype): string
declare function GetTerrainCliffLevel(x: number, y: number): number
declare function SetWaterBaseColor(red: number, green: number, blue: number, alpha: number): void
declare function SetWaterDeforms(val: boolean): void
declare function GetTerrainType(x: number, y: number): number
declare function GetTerrainVariance(x: number, y: number): number
declare function SetTerrainType(
    x: number,
    y: number,
    terrainType: number,
    variation: number,
    area: number,
    shape: number
): void
declare function IsTerrainPathable(x: number, y: number, t: jpathingtype): boolean
declare function SetTerrainPathable(x: number, y: number, t: jpathingtype, flag: boolean): void
declare function CreateImage(
    file: string,
    sizeX: number,
    sizeY: number,
    sizeZ: number,
    posX: number,
    posY: number,
    posZ: number,
    originX: number,
    originY: number,
    originZ: number,
    imageType: number
): jimage
declare function DestroyImage(whichImage: jimage): void
declare function ShowImage(whichImage: jimage, flag: boolean): void
declare function SetImageConstantHeight(whichImage: jimage, flag: boolean, height: number): void
declare function SetImagePosition(whichImage: jimage, x: number, y: number, z: number): void
declare function SetImageColor(
    whichImage: jimage,
    red: number,
    green: number,
    blue: number,
    alpha: number
): void
declare function SetImageRender(whichImage: jimage, flag: boolean): void
declare function SetImageRenderAlways(whichImage: jimage, flag: boolean): void
declare function SetImageAboveWater(whichImage: jimage, flag: boolean, useWaterAlpha: boolean): void
declare function SetImageType(whichImage: jimage, imageType: number): void
declare function CreateUbersplat(
    x: number,
    y: number,
    name: string,
    red: number,
    green: number,
    blue: number,
    alpha: number,
    forcePaused: boolean,
    noBirthTime: boolean
): jubersplat
declare function DestroyUbersplat(whichSplat: jubersplat): void
declare function ResetUbersplat(whichSplat: jubersplat): void
declare function FinishUbersplat(whichSplat: jubersplat): void
declare function ShowUbersplat(whichSplat: jubersplat, flag: boolean): void
declare function SetUbersplatRender(whichSplat: jubersplat, flag: boolean): void
declare function SetUbersplatRenderAlways(whichSplat: jubersplat, flag: boolean): void
declare function SetBlight(
    whichPlayer: jplayer,
    x: number,
    y: number,
    radius: number,
    addBlight: boolean
): void
declare function SetBlightRect(whichPlayer: jplayer, r: jrect, addBlight: boolean): void
declare function SetBlightPoint(
    whichPlayer: jplayer,
    x: number,
    y: number,
    addBlight: boolean
): void
declare function SetBlightLoc(
    whichPlayer: jplayer,
    whichLocation: jlocation,
    radius: number,
    addBlight: boolean
): void
declare function CreateBlightedGoldmine(id: jplayer, x: number, y: number, face: number): junit
declare function IsPointBlighted(x: number, y: number): boolean
declare function SetDoodadAnimation(
    x: number,
    y: number,
    radius: number,
    doodadID: number,
    nearestOnly: boolean,
    animName: string,
    animRandom: boolean
): void
declare function SetDoodadAnimationRect(
    r: jrect,
    doodadID: number,
    animName: string,
    animRandom: boolean
): void
declare function StartMeleeAI(num: jplayer, script: string): void
declare function StartCampaignAI(num: jplayer, script: string): void
declare function CommandAI(num: jplayer, command: number, data: number): void
declare function PauseCompAI(p: jplayer, pause: boolean): void
declare function GetAIDifficulty(num: jplayer): jaidifficulty
declare function RemoveGuardPosition(hUnit: junit): void
declare function RecycleGuardPosition(hUnit: junit): void
declare function RemoveAllGuardPositions(num: jplayer): void
declare function Cheat(cheatStr: string): void
declare function IsNoVictoryCheat(): boolean
declare function IsNoDefeatCheat(): boolean
declare function Preload(filename: string): void
declare function PreloadEnd(timeout: number): void
declare function PreloadStart(): void
declare function PreloadRefresh(): void
declare function PreloadEndEx(): void
declare function PreloadGenClear(): void
declare function PreloadGenStart(): void
declare function PreloadGenEnd(filename: string): void
declare function Preloader(filename: string): void
declare function BlzHideCinematicPanels(enable: boolean): void
declare function AutomationSetTestType(testType: string): void
declare function AutomationTestStart(testName: string): void
declare function AutomationTestEnd(): void
declare function AutomationTestingFinished(): void
declare function BlzGetTriggerPlayerMouseX(): number
declare function BlzGetTriggerPlayerMouseY(): number
declare function BlzGetTriggerPlayerMousePosition(): jlocation
declare function BlzGetTriggerPlayerMouseButton(): jmousebuttontype
declare function BlzSetAbilityTooltip(abilCode: number, tooltip: string, level: number): void
declare function BlzSetAbilityActivatedTooltip(
    abilCode: number,
    tooltip: string,
    level: number
): void
declare function BlzSetAbilityExtendedTooltip(
    abilCode: number,
    extendedTooltip: string,
    level: number
): void
declare function BlzSetAbilityActivatedExtendedTooltip(
    abilCode: number,
    extendedTooltip: string,
    level: number
): void
declare function BlzSetAbilityResearchTooltip(
    abilCode: number,
    researchTooltip: string,
    level: number
): void
declare function BlzSetAbilityResearchExtendedTooltip(
    abilCode: number,
    researchExtendedTooltip: string,
    level: number
): void
declare function BlzGetAbilityTooltip(abilCode: number, level: number): string
declare function BlzGetAbilityActivatedTooltip(abilCode: number, level: number): string
declare function BlzGetAbilityExtendedTooltip(abilCode: number, level: number): string
declare function BlzGetAbilityActivatedExtendedTooltip(abilCode: number, level: number): string
declare function BlzGetAbilityResearchTooltip(abilCode: number, level: number): string
declare function BlzGetAbilityResearchExtendedTooltip(abilCode: number, level: number): string
declare function BlzSetAbilityIcon(abilCode: number, iconPath: string): void
declare function BlzGetAbilityIcon(abilCode: number): string
declare function BlzSetAbilityActivatedIcon(abilCode: number, iconPath: string): void
declare function BlzGetAbilityActivatedIcon(abilCode: number): string
declare function BlzGetAbilityPosX(abilCode: number): number
declare function BlzGetAbilityPosY(abilCode: number): number
declare function BlzSetAbilityPosX(abilCode: number, x: number): void
declare function BlzSetAbilityPosY(abilCode: number, y: number): void
declare function BlzGetAbilityActivatedPosX(abilCode: number): number
declare function BlzGetAbilityActivatedPosY(abilCode: number): number
declare function BlzSetAbilityActivatedPosX(abilCode: number, x: number): void
declare function BlzSetAbilityActivatedPosY(abilCode: number, y: number): void
declare function BlzGetUnitMaxHP(whichUnit: junit): number
declare function BlzSetUnitMaxHP(whichUnit: junit, hp: number): void
declare function BlzGetUnitMaxMana(whichUnit: junit): number
declare function BlzSetUnitMaxMana(whichUnit: junit, mana: number): void
declare function BlzSetItemName(whichItem: jitem, name: string): void
declare function BlzSetItemDescription(whichItem: jitem, description: string): void
declare function BlzGetItemDescription(whichItem: jitem): string
declare function BlzSetItemTooltip(whichItem: jitem, tooltip: string): void
declare function BlzGetItemTooltip(whichItem: jitem): string
declare function BlzSetItemExtendedTooltip(whichItem: jitem, extendedTooltip: string): void
declare function BlzGetItemExtendedTooltip(whichItem: jitem): string
declare function BlzSetItemIconPath(whichItem: jitem, iconPath: string): void
declare function BlzGetItemIconPath(whichItem: jitem): string
declare function BlzSetUnitName(whichUnit: junit, name: string): void
declare function BlzSetHeroProperName(whichUnit: junit, heroProperName: string): void
declare function BlzGetUnitBaseDamage(whichUnit: junit, weaponIndex: number): number
declare function BlzSetUnitBaseDamage(
    whichUnit: junit,
    baseDamage: number,
    weaponIndex: number
): void
declare function BlzGetUnitDiceNumber(whichUnit: junit, weaponIndex: number): number
declare function BlzSetUnitDiceNumber(
    whichUnit: junit,
    diceNumber: number,
    weaponIndex: number
): void
declare function BlzGetUnitDiceSides(whichUnit: junit, weaponIndex: number): number
declare function BlzSetUnitDiceSides(whichUnit: junit, diceSides: number, weaponIndex: number): void
declare function BlzGetUnitAttackCooldown(whichUnit: junit, weaponIndex: number): number
declare function BlzSetUnitAttackCooldown(
    whichUnit: junit,
    cooldown: number,
    weaponIndex: number
): void
declare function BlzSetSpecialEffectColorByPlayer(whichEffect: jeffect, whichPlayer: jplayer): void
declare function BlzSetSpecialEffectColor(
    whichEffect: jeffect,
    r: number,
    g: number,
    b: number
): void
declare function BlzSetSpecialEffectAlpha(whichEffect: jeffect, alpha: number): void
declare function BlzSetSpecialEffectScale(whichEffect: jeffect, scale: number): void
declare function BlzSetSpecialEffectPosition(
    whichEffect: jeffect,
    x: number,
    y: number,
    z: number
): void
declare function BlzSetSpecialEffectHeight(whichEffect: jeffect, height: number): void
declare function BlzSetSpecialEffectTimeScale(whichEffect: jeffect, timeScale: number): void
declare function BlzSetSpecialEffectTime(whichEffect: jeffect, time: number): void
declare function BlzSetSpecialEffectOrientation(
    whichEffect: jeffect,
    yaw: number,
    pitch: number,
    roll: number
): void
declare function BlzSetSpecialEffectYaw(whichEffect: jeffect, yaw: number): void
declare function BlzSetSpecialEffectPitch(whichEffect: jeffect, pitch: number): void
declare function BlzSetSpecialEffectRoll(whichEffect: jeffect, roll: number): void
declare function BlzSetSpecialEffectX(whichEffect: jeffect, x: number): void
declare function BlzSetSpecialEffectY(whichEffect: jeffect, y: number): void
declare function BlzSetSpecialEffectZ(whichEffect: jeffect, z: number): void
declare function BlzSetSpecialEffectPositionLoc(whichEffect: jeffect, loc: jlocation): void
declare function BlzGetLocalSpecialEffectX(whichEffect: jeffect): number
declare function BlzGetLocalSpecialEffectY(whichEffect: jeffect): number
declare function BlzGetLocalSpecialEffectZ(whichEffect: jeffect): number
declare function BlzSpecialEffectClearSubAnimations(whichEffect: jeffect): void
declare function BlzSpecialEffectRemoveSubAnimation(
    whichEffect: jeffect,
    whichSubAnim: jsubanimtype
): void
declare function BlzSpecialEffectAddSubAnimation(
    whichEffect: jeffect,
    whichSubAnim: jsubanimtype
): void
declare function BlzPlaySpecialEffect(whichEffect: jeffect, whichAnim: janimtype): void
declare function BlzPlaySpecialEffectWithTimeScale(
    whichEffect: jeffect,
    whichAnim: janimtype,
    timeScale: number
): void
declare function BlzGetAnimName(whichAnim: janimtype): string
declare function BlzGetUnitArmor(whichUnit: junit): number
declare function BlzSetUnitArmor(whichUnit: junit, armorAmount: number): void
declare function BlzUnitHideAbility(whichUnit: junit, abilId: number, flag: boolean): void
declare function BlzUnitDisableAbility(
    whichUnit: junit,
    abilId: number,
    flag: boolean,
    hideUI: boolean
): void
declare function BlzUnitCancelTimedLife(whichUnit: junit): void
declare function BlzIsUnitSelectable(whichUnit: junit): boolean
declare function BlzIsUnitInvulnerable(whichUnit: junit): boolean
declare function BlzUnitInterruptAttack(whichUnit: junit): void
declare function BlzGetUnitCollisionSize(whichUnit: junit): number
declare function BlzGetAbilityManaCost(abilId: number, level: number): number
declare function BlzGetAbilityCooldown(abilId: number, level: number): number
declare function BlzSetUnitAbilityCooldown(
    whichUnit: junit,
    abilId: number,
    level: number,
    cooldown: number
): void
declare function BlzGetUnitAbilityCooldown(whichUnit: junit, abilId: number, level: number): number
declare function BlzGetUnitAbilityCooldownRemaining(whichUnit: junit, abilId: number): number
declare function BlzEndUnitAbilityCooldown(whichUnit: junit, abilCode: number): void
declare function BlzStartUnitAbilityCooldown(
    whichUnit: junit,
    abilCode: number,
    cooldown: number
): void
declare function BlzGetUnitAbilityManaCost(whichUnit: junit, abilId: number, level: number): number
declare function BlzSetUnitAbilityManaCost(
    whichUnit: junit,
    abilId: number,
    level: number,
    manaCost: number
): void
declare function BlzGetLocalUnitZ(whichUnit: junit): number
declare function BlzDecPlayerTechResearched(
    whichPlayer: jplayer,
    techid: number,
    levels: number
): void
declare function BlzSetEventDamage(damage: number): void
declare function BlzGetEventDamageTarget(): junit
declare function BlzGetEventAttackType(): jattacktype
declare function BlzGetEventDamageType(): jdamagetype
declare function BlzGetEventWeaponType(): jweapontype
declare function BlzSetEventAttackType(attackType: jattacktype): boolean
declare function BlzSetEventDamageType(damageType: jdamagetype): boolean
declare function BlzSetEventWeaponType(weaponType: jweapontype): boolean
declare function BlzGetEventIsAttack(): boolean
declare function RequestExtraIntegerData(
    dataType: number,
    whichPlayer: jplayer,
    param1: string,
    param2: string,
    param3: boolean,
    param4: number,
    param5: number,
    param6: number
): number
declare function RequestExtraBooleanData(
    dataType: number,
    whichPlayer: jplayer,
    param1: string,
    param2: string,
    param3: boolean,
    param4: number,
    param5: number,
    param6: number
): boolean
declare function RequestExtraStringData(
    dataType: number,
    whichPlayer: jplayer,
    param1: string,
    param2: string,
    param3: boolean,
    param4: number,
    param5: number,
    param6: number
): string
declare function RequestExtraRealData(
    dataType: number,
    whichPlayer: jplayer,
    param1: string,
    param2: string,
    param3: boolean,
    param4: number,
    param5: number,
    param6: number
): number
declare function BlzGetUnitZ(whichUnit: junit): number
declare function BlzEnableSelections(enableSelection: boolean, enableSelectionCircle: boolean): void
declare function BlzIsSelectionEnabled(): boolean
declare function BlzIsSelectionCircleEnabled(): boolean
declare function BlzCameraSetupApplyForceDurationSmooth(
    whichSetup: jcamerasetup,
    doPan: boolean,
    forcedDuration: number,
    easeInDuration: number,
    easeOutDuration: number,
    smoothFactor: number
): void
declare function BlzEnableTargetIndicator(enable: boolean): void
declare function BlzIsTargetIndicatorEnabled(): boolean
declare function BlzShowTerrain(show: boolean): void
declare function BlzShowSkyBox(show: boolean): void
declare function BlzStartRecording(fps: number): void
declare function BlzEndRecording(): void
declare function BlzShowUnitTeamGlow(whichUnit: junit, show: boolean): void
declare function BlzGetOriginFrame(frameType: joriginframetype, index: number): jframehandle
declare function BlzEnableUIAutoPosition(enable: boolean): void
declare function BlzHideOriginFrames(enable: boolean): void
declare function BlzConvertColor(a: number, r: number, g: number, b: number): number
declare function BlzLoadTOCFile(TOCFile: string): boolean
declare function BlzCreateFrame(
    name: string,
    owner: jframehandle,
    priority: number,
    createContext: number
): jframehandle
declare function BlzCreateSimpleFrame(
    name: string,
    owner: jframehandle,
    createContext: number
): jframehandle
declare function BlzCreateFrameByType(
    typeName: string,
    name: string,
    owner: jframehandle,
    inherits: string,
    createContext: number
): jframehandle
declare function BlzDestroyFrame(frame: jframehandle): void
declare function BlzFrameSetPoint(
    frame: jframehandle,
    point: jframepointtype,
    relative: jframehandle,
    relativePoint: jframepointtype,
    x: number,
    y: number
): void
declare function BlzFrameSetAbsPoint(
    frame: jframehandle,
    point: jframepointtype,
    x: number,
    y: number
): void
declare function BlzFrameClearAllPoints(frame: jframehandle): void
declare function BlzFrameSetAllPoints(frame: jframehandle, relative: jframehandle): void
declare function BlzFrameSetVisible(frame: jframehandle, visible: boolean): void
declare function BlzFrameIsVisible(frame: jframehandle): boolean
declare function BlzGetFrameByName(name: string, createContext: number): jframehandle
declare function BlzFrameGetName(frame: jframehandle): string
declare function BlzFrameClick(frame: jframehandle): void
declare function BlzFrameSetText(frame: jframehandle, text: string): void
declare function BlzFrameGetText(frame: jframehandle): string
declare function BlzFrameAddText(frame: jframehandle, text: string): void
declare function BlzFrameSetTextSizeLimit(frame: jframehandle, size: number): void
declare function BlzFrameGetTextSizeLimit(frame: jframehandle): number
declare function BlzFrameSetTextColor(frame: jframehandle, color: number): void
declare function BlzFrameSetFocus(frame: jframehandle, flag: boolean): void
declare function BlzFrameSetModel(frame: jframehandle, modelFile: string, cameraIndex: number): void
declare function BlzFrameSetEnable(frame: jframehandle, enabled: boolean): void
declare function BlzFrameGetEnable(frame: jframehandle): boolean
declare function BlzFrameSetAlpha(frame: jframehandle, alpha: number): void
declare function BlzFrameGetAlpha(frame: jframehandle): number
declare function BlzFrameSetSpriteAnimate(
    frame: jframehandle,
    primaryProp: number,
    flags: number
): void
declare function BlzFrameSetTexture(
    frame: jframehandle,
    texFile: string,
    flag: number,
    blend: boolean
): void
declare function BlzFrameSetScale(frame: jframehandle, scale: number): void
declare function BlzFrameSetTooltip(frame: jframehandle, tooltip: jframehandle): void
declare function BlzFrameCageMouse(frame: jframehandle, enable: boolean): void
declare function BlzFrameSetValue(frame: jframehandle, value: number): void
declare function BlzFrameGetValue(frame: jframehandle): number
declare function BlzFrameSetMinMaxValue(
    frame: jframehandle,
    minValue: number,
    maxValue: number
): void
declare function BlzFrameSetStepSize(frame: jframehandle, stepSize: number): void
declare function BlzFrameSetSize(frame: jframehandle, width: number, height: number): void
declare function BlzFrameSetVertexColor(frame: jframehandle, color: number): void
declare function BlzFrameSetLevel(frame: jframehandle, level: number): void
declare function BlzFrameSetParent(frame: jframehandle, parent: jframehandle): void
declare function BlzFrameGetParent(frame: jframehandle): jframehandle
declare function BlzFrameGetHeight(frame: jframehandle): number
declare function BlzFrameGetWidth(frame: jframehandle): number
declare function BlzFrameSetFont(
    frame: jframehandle,
    fileName: string,
    height: number,
    flags: number
): void
declare function BlzFrameSetTextAlignment(
    frame: jframehandle,
    vert: jtextaligntype,
    horz: jtextaligntype
): void
declare function BlzTriggerRegisterFrameEvent(
    whichTrigger: jtrigger,
    frame: jframehandle,
    eventId: jframeeventtype
): jevent
declare function BlzGetTriggerFrame(): jframehandle
declare function BlzGetTriggerFrameEvent(): jframeeventtype
declare function BlzGetTriggerFrameValue(): number
declare function BlzGetTriggerFrameText(): string
declare function BlzTriggerRegisterPlayerSyncEvent(
    whichTrigger: jtrigger,
    whichPlayer: jplayer,
    prefix: string,
    fromServer: boolean
): jevent
declare function BlzSendSyncData(prefix: string, data: string): boolean
declare function BlzGetTriggerSyncPrefix(): string
declare function BlzGetTriggerSyncData(): string
declare function BlzTriggerRegisterPlayerKeyEvent(
    whichTrigger: jtrigger,
    whichPlayer: jplayer,
    key: joskeytype,
    metaKey: number,
    keyDown: boolean
): jevent
declare function BlzGetTriggerPlayerKey(): joskeytype
declare function BlzGetTriggerPlayerMetaKey(): number
declare function BlzGetTriggerPlayerIsKeyDown(): boolean
declare function BlzEnableCursor(enable: boolean): void
declare function BlzSetMousePos(x: number, y: number): void
declare function BlzGetLocalClientWidth(): number
declare function BlzGetLocalClientHeight(): number
declare function BlzIsLocalClientActive(): boolean
declare function BlzGetMouseFocusUnit(): junit
declare function BlzChangeMinimapTerrainTex(texFile: string): boolean
declare function BlzGetLocale(): string
declare function BlzGetSpecialEffectScale(whichEffect: jeffect): number
declare function BlzSetSpecialEffectMatrixScale(
    whichEffect: jeffect,
    x: number,
    y: number,
    z: number
): void
declare function BlzResetSpecialEffectMatrix(whichEffect: jeffect): void
declare function BlzGetUnitAbility(whichUnit: junit, abilId: number): jability
declare function BlzGetUnitAbilityByIndex(whichUnit: junit, index: number): jability
declare function BlzDisplayChatMessage(
    whichPlayer: jplayer,
    recipient: number,
    message: string
): void
declare function BlzPauseUnitEx(whichUnit: junit, flag: boolean): void
declare function BlzSetUnitFacingEx(whichUnit: junit, facingAngle: number): void
declare function CreateCommandButtonEffect(abilityId: number, order: string): jcommandbuttoneffect
declare function CreateUpgradeCommandButtonEffect(whichUprgade: number): jcommandbuttoneffect
declare function CreateLearnCommandButtonEffect(abilityId: number): jcommandbuttoneffect
declare function DestroyCommandButtonEffect(whichEffect: jcommandbuttoneffect): void
declare function BlzBitOr(x: number, y: number): number
declare function BlzBitAnd(x: number, y: number): number
declare function BlzBitXor(x: number, y: number): number
declare function BlzGetAbilityBooleanField(
    whichAbility: jability,
    whichField: jabilitybooleanfield
): boolean
declare function BlzGetAbilityIntegerField(
    whichAbility: jability,
    whichField: jabilityintegerfield
): number
declare function BlzGetAbilityRealField(
    whichAbility: jability,
    whichField: jabilityrealfield
): number
declare function BlzGetAbilityStringField(
    whichAbility: jability,
    whichField: jabilitystringfield
): string
declare function BlzGetAbilityBooleanLevelField(
    whichAbility: jability,
    whichField: jabilitybooleanlevelfield,
    level: number
): boolean
declare function BlzGetAbilityIntegerLevelField(
    whichAbility: jability,
    whichField: jabilityintegerlevelfield,
    level: number
): number
declare function BlzGetAbilityRealLevelField(
    whichAbility: jability,
    whichField: jabilityreallevelfield,
    level: number
): number
declare function BlzGetAbilityStringLevelField(
    whichAbility: jability,
    whichField: jabilitystringlevelfield,
    level: number
): string
declare function BlzGetAbilityBooleanLevelArrayField(
    whichAbility: jability,
    whichField: jabilitybooleanlevelarrayfield,
    level: number,
    index: number
): boolean
declare function BlzGetAbilityIntegerLevelArrayField(
    whichAbility: jability,
    whichField: jabilityintegerlevelarrayfield,
    level: number,
    index: number
): number
declare function BlzGetAbilityRealLevelArrayField(
    whichAbility: jability,
    whichField: jabilityreallevelarrayfield,
    level: number,
    index: number
): number
declare function BlzGetAbilityStringLevelArrayField(
    whichAbility: jability,
    whichField: jabilitystringlevelarrayfield,
    level: number,
    index: number
): string
declare function BlzSetAbilityBooleanField(
    whichAbility: jability,
    whichField: jabilitybooleanfield,
    value: boolean
): boolean
declare function BlzSetAbilityIntegerField(
    whichAbility: jability,
    whichField: jabilityintegerfield,
    value: number
): boolean
declare function BlzSetAbilityRealField(
    whichAbility: jability,
    whichField: jabilityrealfield,
    value: number
): boolean
declare function BlzSetAbilityStringField(
    whichAbility: jability,
    whichField: jabilitystringfield,
    value: string
): boolean
declare function BlzSetAbilityBooleanLevelField(
    whichAbility: jability,
    whichField: jabilitybooleanlevelfield,
    level: number,
    value: boolean
): boolean
declare function BlzSetAbilityIntegerLevelField(
    whichAbility: jability,
    whichField: jabilityintegerlevelfield,
    level: number,
    value: number
): boolean
declare function BlzSetAbilityRealLevelField(
    whichAbility: jability,
    whichField: jabilityreallevelfield,
    level: number,
    value: number
): boolean
declare function BlzSetAbilityStringLevelField(
    whichAbility: jability,
    whichField: jabilitystringlevelfield,
    level: number,
    value: string
): boolean
declare function BlzSetAbilityBooleanLevelArrayField(
    whichAbility: jability,
    whichField: jabilitybooleanlevelarrayfield,
    level: number,
    index: number,
    value: boolean
): boolean
declare function BlzSetAbilityIntegerLevelArrayField(
    whichAbility: jability,
    whichField: jabilityintegerlevelarrayfield,
    level: number,
    index: number,
    value: number
): boolean
declare function BlzSetAbilityRealLevelArrayField(
    whichAbility: jability,
    whichField: jabilityreallevelarrayfield,
    level: number,
    index: number,
    value: number
): boolean
declare function BlzSetAbilityStringLevelArrayField(
    whichAbility: jability,
    whichField: jabilitystringlevelarrayfield,
    level: number,
    index: number,
    value: string
): boolean
declare function BlzAddAbilityBooleanLevelArrayField(
    whichAbility: jability,
    whichField: jabilitybooleanlevelarrayfield,
    level: number,
    value: boolean
): boolean
declare function BlzAddAbilityIntegerLevelArrayField(
    whichAbility: jability,
    whichField: jabilityintegerlevelarrayfield,
    level: number,
    value: number
): boolean
declare function BlzAddAbilityRealLevelArrayField(
    whichAbility: jability,
    whichField: jabilityreallevelarrayfield,
    level: number,
    value: number
): boolean
declare function BlzAddAbilityStringLevelArrayField(
    whichAbility: jability,
    whichField: jabilitystringlevelarrayfield,
    level: number,
    value: string
): boolean
declare function BlzRemoveAbilityBooleanLevelArrayField(
    whichAbility: jability,
    whichField: jabilitybooleanlevelarrayfield,
    level: number,
    value: boolean
): boolean
declare function BlzRemoveAbilityIntegerLevelArrayField(
    whichAbility: jability,
    whichField: jabilityintegerlevelarrayfield,
    level: number,
    value: number
): boolean
declare function BlzRemoveAbilityRealLevelArrayField(
    whichAbility: jability,
    whichField: jabilityreallevelarrayfield,
    level: number,
    value: number
): boolean
declare function BlzRemoveAbilityStringLevelArrayField(
    whichAbility: jability,
    whichField: jabilitystringlevelarrayfield,
    level: number,
    value: string
): boolean
declare function BlzGetItemAbilityByIndex(whichItem: jitem, index: number): jability
declare function BlzGetItemAbility(whichItem: jitem, abilCode: number): jability
declare function BlzItemAddAbility(whichItem: jitem, abilCode: number): boolean
declare function BlzGetItemBooleanField(whichItem: jitem, whichField: jitembooleanfield): boolean
declare function BlzGetItemIntegerField(whichItem: jitem, whichField: jitemintegerfield): number
declare function BlzGetItemRealField(whichItem: jitem, whichField: jitemrealfield): number
declare function BlzGetItemStringField(whichItem: jitem, whichField: jitemstringfield): string
declare function BlzSetItemBooleanField(
    whichItem: jitem,
    whichField: jitembooleanfield,
    value: boolean
): boolean
declare function BlzSetItemIntegerField(
    whichItem: jitem,
    whichField: jitemintegerfield,
    value: number
): boolean
declare function BlzSetItemRealField(
    whichItem: jitem,
    whichField: jitemrealfield,
    value: number
): boolean
declare function BlzSetItemStringField(
    whichItem: jitem,
    whichField: jitemstringfield,
    value: string
): boolean
declare function BlzItemRemoveAbility(whichItem: jitem, abilCode: number): boolean
declare function BlzGetUnitBooleanField(whichUnit: junit, whichField: junitbooleanfield): boolean
declare function BlzGetUnitIntegerField(whichUnit: junit, whichField: junitintegerfield): number
declare function BlzGetUnitRealField(whichUnit: junit, whichField: junitrealfield): number
declare function BlzGetUnitStringField(whichUnit: junit, whichField: junitstringfield): string
declare function BlzSetUnitBooleanField(
    whichUnit: junit,
    whichField: junitbooleanfield,
    value: boolean
): boolean
declare function BlzSetUnitIntegerField(
    whichUnit: junit,
    whichField: junitintegerfield,
    value: number
): boolean
declare function BlzSetUnitRealField(
    whichUnit: junit,
    whichField: junitrealfield,
    value: number
): boolean
declare function BlzSetUnitStringField(
    whichUnit: junit,
    whichField: junitstringfield,
    value: string
): boolean
declare function BlzGetUnitWeaponBooleanField(
    whichUnit: junit,
    whichField: junitweaponbooleanfield,
    index: number
): boolean
declare function BlzGetUnitWeaponIntegerField(
    whichUnit: junit,
    whichField: junitweaponintegerfield,
    index: number
): number
declare function BlzGetUnitWeaponRealField(
    whichUnit: junit,
    whichField: junitweaponrealfield,
    index: number
): number
declare function BlzGetUnitWeaponStringField(
    whichUnit: junit,
    whichField: junitweaponstringfield,
    index: number
): string
declare function BlzSetUnitWeaponBooleanField(
    whichUnit: junit,
    whichField: junitweaponbooleanfield,
    index: number,
    value: boolean
): boolean
declare function BlzSetUnitWeaponIntegerField(
    whichUnit: junit,
    whichField: junitweaponintegerfield,
    index: number,
    value: number
): boolean
declare function BlzSetUnitWeaponRealField(
    whichUnit: junit,
    whichField: junitweaponrealfield,
    index: number,
    value: number
): boolean
declare function BlzSetUnitWeaponStringField(
    whichUnit: junit,
    whichField: junitweaponstringfield,
    index: number,
    value: string
): boolean
declare function BlzGetUnitSkin(whichUnit: junit): number
declare function BlzGetItemSkin(whichItem: jitem): number
declare function BlzSetUnitSkin(whichUnit: junit, skinId: number): void
declare function BlzSetItemSkin(whichItem: jitem, skinId: number): void
declare function BlzCreateItemWithSkin(itemid: number, x: number, y: number, skinId: number): jitem
declare function BlzCreateUnitWithSkin(
    id: jplayer,
    unitid: number,
    x: number,
    y: number,
    face: number,
    skinId: number
): junit
declare function BlzCreateDestructableWithSkin(
    objectid: number,
    x: number,
    y: number,
    face: number,
    scale: number,
    variation: number,
    skinId: number
): jdestructable
declare function BlzCreateDestructableZWithSkin(
    objectid: number,
    x: number,
    y: number,
    z: number,
    face: number,
    scale: number,
    variation: number,
    skinId: number
): jdestructable
declare function BlzCreateDeadDestructableWithSkin(
    objectid: number,
    x: number,
    y: number,
    face: number,
    scale: number,
    variation: number,
    skinId: number
): jdestructable
declare function BlzCreateDeadDestructableZWithSkin(
    objectid: number,
    x: number,
    y: number,
    z: number,
    face: number,
    scale: number,
    variation: number,
    skinId: number
): jdestructable
declare function BlzGetPlayerTownHallCount(whichPlayer: jplayer): number
declare const bj_PI: number
declare const bj_E: number
declare const bj_CELLWIDTH: number
declare const bj_CLIFFHEIGHT: number
declare const bj_UNIT_FACING: number
declare const bj_RADTODEG: number
declare const bj_DEGTORAD: number
declare const bj_TEXT_DELAY_QUEST: number
declare const bj_TEXT_DELAY_QUESTUPDATE: number
declare const bj_TEXT_DELAY_QUESTDONE: number
declare const bj_TEXT_DELAY_QUESTFAILED: number
declare const bj_TEXT_DELAY_QUESTREQUIREMENT: number
declare const bj_TEXT_DELAY_MISSIONFAILED: number
declare const bj_TEXT_DELAY_ALWAYSHINT: number
declare const bj_TEXT_DELAY_HINT: number
declare const bj_TEXT_DELAY_SECRET: number
declare const bj_TEXT_DELAY_UNITACQUIRED: number
declare const bj_TEXT_DELAY_UNITAVAILABLE: number
declare const bj_TEXT_DELAY_ITEMACQUIRED: number
declare const bj_TEXT_DELAY_WARNING: number
declare const bj_QUEUE_DELAY_QUEST: number
declare const bj_QUEUE_DELAY_HINT: number
declare const bj_QUEUE_DELAY_SECRET: number
declare const bj_HANDICAP_EASY: number
declare const bj_HANDICAP_NORMAL: number
declare const bj_HANDICAPDAMAGE_EASY: number
declare const bj_HANDICAPDAMAGE_NORMAL: number
declare const bj_HANDICAPREVIVE_NOTHARD: number
declare const bj_GAME_STARTED_THRESHOLD: number
declare const bj_WAIT_FOR_COND_MIN_INTERVAL: number
declare const bj_POLLED_WAIT_INTERVAL: number
declare const bj_POLLED_WAIT_SKIP_THRESHOLD: number
declare const bj_MAX_INVENTORY: number
declare const bj_MAX_PLAYERS: number
declare const bj_PLAYER_NEUTRAL_VICTIM: number
declare const bj_PLAYER_NEUTRAL_EXTRA: number
declare const bj_MAX_PLAYER_SLOTS: number
declare const bj_MAX_SKELETONS: number
declare const bj_MAX_STOCK_ITEM_SLOTS: number
declare const bj_MAX_STOCK_UNIT_SLOTS: number
declare const bj_MAX_ITEM_LEVEL: number
declare const bj_MAX_CHECKPOINTS: number
declare const bj_TOD_DAWN: number
declare const bj_TOD_DUSK: number
declare const bj_MELEE_STARTING_TOD: number
declare const bj_MELEE_STARTING_GOLD_V0: number
declare const bj_MELEE_STARTING_GOLD_V1: number
declare const bj_MELEE_STARTING_LUMBER_V0: number
declare const bj_MELEE_STARTING_LUMBER_V1: number
declare const bj_MELEE_STARTING_HERO_TOKENS: number
declare const bj_MELEE_HERO_LIMIT: number
declare const bj_MELEE_HERO_TYPE_LIMIT: number
declare const bj_MELEE_MINE_SEARCH_RADIUS: number
declare const bj_MELEE_CLEAR_UNITS_RADIUS: number
declare const bj_MELEE_CRIPPLE_TIMEOUT: number
declare const bj_MELEE_CRIPPLE_MSG_DURATION: number
declare const bj_MELEE_MAX_TWINKED_HEROES_V0: number
declare const bj_MELEE_MAX_TWINKED_HEROES_V1: number
declare const bj_CREEP_ITEM_DELAY: number
declare const bj_STOCK_RESTOCK_INITIAL_DELAY: number
declare const bj_STOCK_RESTOCK_INTERVAL: number
declare const bj_STOCK_MAX_ITERATIONS: number
declare const bj_MAX_DEST_IN_REGION_EVENTS: number
declare const bj_CAMERA_MIN_FARZ: number
declare const bj_CAMERA_DEFAULT_DISTANCE: number
declare const bj_CAMERA_DEFAULT_FARZ: number
declare const bj_CAMERA_DEFAULT_AOA: number
declare const bj_CAMERA_DEFAULT_FOV: number
declare const bj_CAMERA_DEFAULT_ROLL: number
declare const bj_CAMERA_DEFAULT_ROTATION: number
declare const bj_RESCUE_PING_TIME: number
declare const bj_NOTHING_SOUND_DURATION: number
declare const bj_TRANSMISSION_PING_TIME: number
declare const bj_TRANSMISSION_IND_RED: number
declare const bj_TRANSMISSION_IND_BLUE: number
declare const bj_TRANSMISSION_IND_GREEN: number
declare const bj_TRANSMISSION_IND_ALPHA: number
declare const bj_TRANSMISSION_PORT_HANGTIME: number
declare const bj_CINEMODE_INTERFACEFADE: number
declare const bj_CINEMODE_GAMESPEED: jgamespeed
declare const bj_CINEMODE_VOLUME_UNITMOVEMENT: number
declare const bj_CINEMODE_VOLUME_UNITSOUNDS: number
declare const bj_CINEMODE_VOLUME_COMBAT: number
declare const bj_CINEMODE_VOLUME_SPELLS: number
declare const bj_CINEMODE_VOLUME_UI: number
declare const bj_CINEMODE_VOLUME_MUSIC: number
declare const bj_CINEMODE_VOLUME_AMBIENTSOUNDS: number
declare const bj_CINEMODE_VOLUME_FIRE: number
declare const bj_SPEECH_VOLUME_UNITMOVEMENT: number
declare const bj_SPEECH_VOLUME_UNITSOUNDS: number
declare const bj_SPEECH_VOLUME_COMBAT: number
declare const bj_SPEECH_VOLUME_SPELLS: number
declare const bj_SPEECH_VOLUME_UI: number
declare const bj_SPEECH_VOLUME_MUSIC: number
declare const bj_SPEECH_VOLUME_AMBIENTSOUNDS: number
declare const bj_SPEECH_VOLUME_FIRE: number
declare const bj_SMARTPAN_TRESHOLD_PAN: number
declare const bj_SMARTPAN_TRESHOLD_SNAP: number
declare const bj_MAX_QUEUED_TRIGGERS: number
declare const bj_QUEUED_TRIGGER_TIMEOUT: number
declare const bj_CAMPAIGN_INDEX_T: number
declare const bj_CAMPAIGN_INDEX_H: number
declare const bj_CAMPAIGN_INDEX_U: number
declare const bj_CAMPAIGN_INDEX_O: number
declare const bj_CAMPAIGN_INDEX_N: number
declare const bj_CAMPAIGN_INDEX_XN: number
declare const bj_CAMPAIGN_INDEX_XH: number
declare const bj_CAMPAIGN_INDEX_XU: number
declare const bj_CAMPAIGN_INDEX_XO: number
declare const bj_CAMPAIGN_OFFSET_T: number
declare const bj_CAMPAIGN_OFFSET_H: number
declare const bj_CAMPAIGN_OFFSET_U: number
declare const bj_CAMPAIGN_OFFSET_O: number
declare const bj_CAMPAIGN_OFFSET_N: number
declare const bj_CAMPAIGN_OFFSET_XN: number
declare const bj_CAMPAIGN_OFFSET_XH: number
declare const bj_CAMPAIGN_OFFSET_XU: number
declare const bj_CAMPAIGN_OFFSET_XO: number
declare const bj_MISSION_INDEX_T00: number
declare const bj_MISSION_INDEX_T01: number
declare const bj_MISSION_INDEX_T02: number
declare const bj_MISSION_INDEX_T03: number
declare const bj_MISSION_INDEX_T04: number
declare const bj_MISSION_INDEX_H00: number
declare const bj_MISSION_INDEX_H01: number
declare const bj_MISSION_INDEX_H02: number
declare const bj_MISSION_INDEX_H03: number
declare const bj_MISSION_INDEX_H04: number
declare const bj_MISSION_INDEX_H05: number
declare const bj_MISSION_INDEX_H06: number
declare const bj_MISSION_INDEX_H07: number
declare const bj_MISSION_INDEX_H08: number
declare const bj_MISSION_INDEX_H09: number
declare const bj_MISSION_INDEX_H10: number
declare const bj_MISSION_INDEX_H11: number
declare const bj_MISSION_INDEX_U00: number
declare const bj_MISSION_INDEX_U01: number
declare const bj_MISSION_INDEX_U02: number
declare const bj_MISSION_INDEX_U03: number
declare const bj_MISSION_INDEX_U05: number
declare const bj_MISSION_INDEX_U07: number
declare const bj_MISSION_INDEX_U08: number
declare const bj_MISSION_INDEX_U09: number
declare const bj_MISSION_INDEX_U10: number
declare const bj_MISSION_INDEX_U11: number
declare const bj_MISSION_INDEX_O00: number
declare const bj_MISSION_INDEX_O01: number
declare const bj_MISSION_INDEX_O02: number
declare const bj_MISSION_INDEX_O03: number
declare const bj_MISSION_INDEX_O04: number
declare const bj_MISSION_INDEX_O05: number
declare const bj_MISSION_INDEX_O06: number
declare const bj_MISSION_INDEX_O07: number
declare const bj_MISSION_INDEX_O08: number
declare const bj_MISSION_INDEX_O09: number
declare const bj_MISSION_INDEX_O10: number
declare const bj_MISSION_INDEX_N00: number
declare const bj_MISSION_INDEX_N01: number
declare const bj_MISSION_INDEX_N02: number
declare const bj_MISSION_INDEX_N03: number
declare const bj_MISSION_INDEX_N04: number
declare const bj_MISSION_INDEX_N05: number
declare const bj_MISSION_INDEX_N06: number
declare const bj_MISSION_INDEX_N07: number
declare const bj_MISSION_INDEX_N08: number
declare const bj_MISSION_INDEX_N09: number
declare const bj_MISSION_INDEX_XN00: number
declare const bj_MISSION_INDEX_XN01: number
declare const bj_MISSION_INDEX_XN02: number
declare const bj_MISSION_INDEX_XN03: number
declare const bj_MISSION_INDEX_XN04: number
declare const bj_MISSION_INDEX_XN05: number
declare const bj_MISSION_INDEX_XN06: number
declare const bj_MISSION_INDEX_XN07: number
declare const bj_MISSION_INDEX_XN08: number
declare const bj_MISSION_INDEX_XN09: number
declare const bj_MISSION_INDEX_XN10: number
declare const bj_MISSION_INDEX_XH00: number
declare const bj_MISSION_INDEX_XH01: number
declare const bj_MISSION_INDEX_XH02: number
declare const bj_MISSION_INDEX_XH03: number
declare const bj_MISSION_INDEX_XH04: number
declare const bj_MISSION_INDEX_XH05: number
declare const bj_MISSION_INDEX_XH06: number
declare const bj_MISSION_INDEX_XH07: number
declare const bj_MISSION_INDEX_XH08: number
declare const bj_MISSION_INDEX_XH09: number
declare const bj_MISSION_INDEX_XU00: number
declare const bj_MISSION_INDEX_XU01: number
declare const bj_MISSION_INDEX_XU02: number
declare const bj_MISSION_INDEX_XU03: number
declare const bj_MISSION_INDEX_XU04: number
declare const bj_MISSION_INDEX_XU05: number
declare const bj_MISSION_INDEX_XU06: number
declare const bj_MISSION_INDEX_XU07: number
declare const bj_MISSION_INDEX_XU08: number
declare const bj_MISSION_INDEX_XU09: number
declare const bj_MISSION_INDEX_XU10: number
declare const bj_MISSION_INDEX_XU11: number
declare const bj_MISSION_INDEX_XU12: number
declare const bj_MISSION_INDEX_XU13: number
declare const bj_MISSION_INDEX_XO00: number
declare const bj_MISSION_INDEX_XO01: number
declare const bj_MISSION_INDEX_XO02: number
declare const bj_MISSION_INDEX_XO03: number
declare const bj_CINEMATICINDEX_TOP: number
declare const bj_CINEMATICINDEX_HOP: number
declare const bj_CINEMATICINDEX_HED: number
declare const bj_CINEMATICINDEX_OOP: number
declare const bj_CINEMATICINDEX_OED: number
declare const bj_CINEMATICINDEX_UOP: number
declare const bj_CINEMATICINDEX_UED: number
declare const bj_CINEMATICINDEX_NOP: number
declare const bj_CINEMATICINDEX_NED: number
declare const bj_CINEMATICINDEX_XOP: number
declare const bj_CINEMATICINDEX_XED: number
declare const bj_ALLIANCE_UNALLIED: number
declare const bj_ALLIANCE_UNALLIED_VISION: number
declare const bj_ALLIANCE_ALLIED: number
declare const bj_ALLIANCE_ALLIED_VISION: number
declare const bj_ALLIANCE_ALLIED_UNITS: number
declare const bj_ALLIANCE_ALLIED_ADVUNITS: number
declare const bj_ALLIANCE_NEUTRAL: number
declare const bj_ALLIANCE_NEUTRAL_VISION: number
declare const bj_KEYEVENTTYPE_DEPRESS: number
declare const bj_KEYEVENTTYPE_RELEASE: number
declare const bj_KEYEVENTKEY_LEFT: number
declare const bj_KEYEVENTKEY_RIGHT: number
declare const bj_KEYEVENTKEY_DOWN: number
declare const bj_KEYEVENTKEY_UP: number
declare const bj_MOUSEEVENTTYPE_DOWN: number
declare const bj_MOUSEEVENTTYPE_UP: number
declare const bj_MOUSEEVENTTYPE_MOVE: number
declare const bj_TIMETYPE_ADD: number
declare const bj_TIMETYPE_SET: number
declare const bj_TIMETYPE_SUB: number
declare const bj_CAMERABOUNDS_ADJUST_ADD: number
declare const bj_CAMERABOUNDS_ADJUST_SUB: number
declare const bj_QUESTTYPE_REQ_DISCOVERED: number
declare const bj_QUESTTYPE_REQ_UNDISCOVERED: number
declare const bj_QUESTTYPE_OPT_DISCOVERED: number
declare const bj_QUESTTYPE_OPT_UNDISCOVERED: number
declare const bj_QUESTMESSAGE_DISCOVERED: number
declare const bj_QUESTMESSAGE_UPDATED: number
declare const bj_QUESTMESSAGE_COMPLETED: number
declare const bj_QUESTMESSAGE_FAILED: number
declare const bj_QUESTMESSAGE_REQUIREMENT: number
declare const bj_QUESTMESSAGE_MISSIONFAILED: number
declare const bj_QUESTMESSAGE_ALWAYSHINT: number
declare const bj_QUESTMESSAGE_HINT: number
declare const bj_QUESTMESSAGE_SECRET: number
declare const bj_QUESTMESSAGE_UNITACQUIRED: number
declare const bj_QUESTMESSAGE_UNITAVAILABLE: number
declare const bj_QUESTMESSAGE_ITEMACQUIRED: number
declare const bj_QUESTMESSAGE_WARNING: number
declare const bj_SORTTYPE_SORTBYVALUE: number
declare const bj_SORTTYPE_SORTBYPLAYER: number
declare const bj_SORTTYPE_SORTBYLABEL: number
declare const bj_CINEFADETYPE_FADEIN: number
declare const bj_CINEFADETYPE_FADEOUT: number
declare const bj_CINEFADETYPE_FADEOUTIN: number
declare const bj_REMOVEBUFFS_POSITIVE: number
declare const bj_REMOVEBUFFS_NEGATIVE: number
declare const bj_REMOVEBUFFS_ALL: number
declare const bj_REMOVEBUFFS_NONTLIFE: number
declare const bj_BUFF_POLARITY_POSITIVE: number
declare const bj_BUFF_POLARITY_NEGATIVE: number
declare const bj_BUFF_POLARITY_EITHER: number
declare const bj_BUFF_RESIST_MAGIC: number
declare const bj_BUFF_RESIST_PHYSICAL: number
declare const bj_BUFF_RESIST_EITHER: number
declare const bj_BUFF_RESIST_BOTH: number
declare const bj_HEROSTAT_STR: number
declare const bj_HEROSTAT_AGI: number
declare const bj_HEROSTAT_INT: number
declare const bj_MODIFYMETHOD_ADD: number
declare const bj_MODIFYMETHOD_SUB: number
declare const bj_MODIFYMETHOD_SET: number
declare const bj_UNIT_STATE_METHOD_ABSOLUTE: number
declare const bj_UNIT_STATE_METHOD_RELATIVE: number
declare const bj_UNIT_STATE_METHOD_DEFAULTS: number
declare const bj_UNIT_STATE_METHOD_MAXIMUM: number
declare const bj_GATEOPERATION_CLOSE: number
declare const bj_GATEOPERATION_OPEN: number
declare const bj_GATEOPERATION_DESTROY: number
declare const bj_GAMECACHE_BOOLEAN: number
declare const bj_GAMECACHE_INTEGER: number
declare const bj_GAMECACHE_REAL: number
declare const bj_GAMECACHE_UNIT: number
declare const bj_GAMECACHE_STRING: number
declare const bj_HASHTABLE_BOOLEAN: number
declare const bj_HASHTABLE_INTEGER: number
declare const bj_HASHTABLE_REAL: number
declare const bj_HASHTABLE_STRING: number
declare const bj_HASHTABLE_HANDLE: number
declare const bj_ITEM_STATUS_HIDDEN: number
declare const bj_ITEM_STATUS_OWNED: number
declare const bj_ITEM_STATUS_INVULNERABLE: number
declare const bj_ITEM_STATUS_POWERUP: number
declare const bj_ITEM_STATUS_SELLABLE: number
declare const bj_ITEM_STATUS_PAWNABLE: number
declare const bj_ITEMCODE_STATUS_POWERUP: number
declare const bj_ITEMCODE_STATUS_SELLABLE: number
declare const bj_ITEMCODE_STATUS_PAWNABLE: number
declare const bj_MINIMAPPINGSTYLE_SIMPLE: number
declare const bj_MINIMAPPINGSTYLE_FLASHY: number
declare const bj_MINIMAPPINGSTYLE_ATTACK: number
declare const bj_CAMPPINGSTYLE_PRIMARY: number
declare const bj_CAMPPINGSTYLE_PRIMARY_GREEN: number
declare const bj_CAMPPINGSTYLE_PRIMARY_RED: number
declare const bj_CAMPPINGSTYLE_BONUS: number
declare const bj_CAMPPINGSTYLE_TURNIN: number
declare const bj_CAMPPINGSTYLE_BOSS: number
declare const bj_CAMPPINGSTYLE_CONTROL_ALLY: number
declare const bj_CAMPPINGSTYLE_CONTROL_NEUTRAL: number
declare const bj_CAMPPINGSTYLE_CONTROL_ENEMY: number
declare const bj_CORPSE_MAX_DEATH_TIME: number
declare const bj_CORPSETYPE_FLESH: number
declare const bj_CORPSETYPE_BONE: number
declare const bj_ELEVATOR_BLOCKER_CODE: number
declare const bj_ELEVATOR_CODE01: number
declare const bj_ELEVATOR_CODE02: number
declare const bj_ELEVATOR_WALL_TYPE_ALL: number
declare const bj_ELEVATOR_WALL_TYPE_EAST: number
declare const bj_ELEVATOR_WALL_TYPE_NORTH: number
declare const bj_ELEVATOR_WALL_TYPE_SOUTH: number
declare const bj_ELEVATOR_WALL_TYPE_WEST: number
declare var bj_FORCE_ALL_PLAYERS: jforce
declare var bj_FORCE_PLAYER: jforce[]
declare var bj_MELEE_MAX_TWINKED_HEROES: number
declare var bj_mapInitialPlayableArea: jrect
declare var bj_mapInitialCameraBounds: jrect
declare var bj_forLoopAIndex: number
declare var bj_forLoopBIndex: number
declare var bj_forLoopAIndexEnd: number
declare var bj_forLoopBIndexEnd: number
declare var bj_slotControlReady: boolean
declare var bj_slotControlUsed: boolean[]
declare var bj_slotControl: jmapcontrol[]
declare var bj_gameStartedTimer: jtimer
declare var bj_gameStarted: boolean
declare var bj_volumeGroupsTimer: jtimer
declare var bj_isSinglePlayer: boolean
declare var bj_dncSoundsDay: jtrigger
declare var bj_dncSoundsNight: jtrigger
declare var bj_dayAmbientSound: jsound
declare var bj_nightAmbientSound: jsound
declare var bj_dncSoundsDawn: jtrigger
declare var bj_dncSoundsDusk: jtrigger
declare var bj_dawnSound: jsound
declare var bj_duskSound: jsound
declare var bj_useDawnDuskSounds: boolean
declare var bj_dncIsDaytime: boolean
declare var bj_rescueSound: jsound
declare var bj_questDiscoveredSound: jsound
declare var bj_questUpdatedSound: jsound
declare var bj_questCompletedSound: jsound
declare var bj_questFailedSound: jsound
declare var bj_questHintSound: jsound
declare var bj_questSecretSound: jsound
declare var bj_questItemAcquiredSound: jsound
declare var bj_questWarningSound: jsound
declare var bj_victoryDialogSound: jsound
declare var bj_defeatDialogSound: jsound
declare var bj_stockItemPurchased: jtrigger
declare var bj_stockUpdateTimer: jtimer
declare var bj_stockAllowedPermanent: boolean[]
declare var bj_stockAllowedCharged: boolean[]
declare var bj_stockAllowedArtifact: boolean[]
declare var bj_stockPickedItemLevel: number
declare var bj_stockPickedItemType: jitemtype
declare var bj_meleeVisibilityTrained: jtrigger
declare var bj_meleeVisibilityIsDay: boolean
declare var bj_meleeGrantHeroItems: boolean
declare var bj_meleeNearestMineToLoc: jlocation
declare var bj_meleeNearestMine: junit
declare var bj_meleeNearestMineDist: number
declare var bj_meleeGameOver: boolean
declare var bj_meleeDefeated: boolean[]
declare var bj_meleeVictoried: boolean[]
declare var bj_ghoul: junit[]
declare var bj_crippledTimer: jtimer[]
declare var bj_crippledTimerWindows: jtimerdialog[]
declare var bj_playerIsCrippled: boolean[]
declare var bj_playerIsExposed: boolean[]
declare var bj_finishSoonAllExposed: boolean
declare var bj_finishSoonTimerDialog: jtimerdialog
declare var bj_meleeTwinkedHeroes: number[]
declare var bj_rescueUnitBehavior: jtrigger
declare var bj_rescueChangeColorUnit: boolean
declare var bj_rescueChangeColorBldg: boolean
declare var bj_cineSceneEndingTimer: jtimer
declare var bj_cineSceneLastSound: jsound
declare var bj_cineSceneBeingSkipped: jtrigger
declare var bj_cineModePriorSpeed: jgamespeed
declare var bj_cineModePriorFogSetting: boolean
declare var bj_cineModePriorMaskSetting: boolean
declare var bj_cineModeAlreadyIn: boolean
declare var bj_cineModePriorDawnDusk: boolean
declare var bj_cineModeSavedSeed: number
declare var bj_cineFadeFinishTimer: jtimer
declare var bj_cineFadeContinueTimer: jtimer
declare var bj_cineFadeContinueRed: number
declare var bj_cineFadeContinueGreen: number
declare var bj_cineFadeContinueBlue: number
declare var bj_cineFadeContinueTrans: number
declare var bj_cineFadeContinueDuration: number
declare var bj_cineFadeContinueTex: string
declare var bj_queuedExecTotal: number
declare var bj_queuedExecTriggers: jtrigger[]
declare var bj_queuedExecUseConds: boolean[]
declare var bj_queuedExecTimeoutTimer: jtimer
declare var bj_queuedExecTimeout: jtrigger
declare var bj_destInRegionDiesCount: number
declare var bj_destInRegionDiesTrig: jtrigger
declare var bj_groupCountUnits: number
declare var bj_forceCountPlayers: number
declare var bj_groupEnumTypeId: number
declare var bj_groupEnumOwningPlayer: jplayer
declare var bj_groupAddGroupDest: jgroup
declare var bj_groupRemoveGroupDest: jgroup
declare var bj_groupRandomConsidered: number
declare var bj_groupRandomCurrentPick: junit
declare var bj_groupLastCreatedDest: jgroup
declare var bj_randomSubGroupGroup: jgroup
declare var bj_randomSubGroupWant: number
declare var bj_randomSubGroupTotal: number
declare var bj_randomSubGroupChance: number
declare var bj_destRandomConsidered: number
declare var bj_destRandomCurrentPick: jdestructable
declare var bj_elevatorWallBlocker: jdestructable
declare var bj_elevatorNeighbor: jdestructable
declare var bj_itemRandomConsidered: number
declare var bj_itemRandomCurrentPick: jitem
declare var bj_forceRandomConsidered: number
declare var bj_forceRandomCurrentPick: jplayer
declare var bj_makeUnitRescuableUnit: junit
declare var bj_makeUnitRescuableFlag: boolean
declare var bj_pauseAllUnitsFlag: boolean
declare var bj_enumDestructableCenter: jlocation
declare var bj_enumDestructableRadius: number
declare var bj_setPlayerTargetColor: jplayercolor
declare var bj_isUnitGroupDeadResult: boolean
declare var bj_isUnitGroupEmptyResult: boolean
declare var bj_isUnitGroupInRectResult: boolean
declare var bj_isUnitGroupInRectRect: jrect
declare var bj_changeLevelShowScores: boolean
declare var bj_changeLevelMapName: string
declare var bj_suspendDecayFleshGroup: jgroup
declare var bj_suspendDecayBoneGroup: jgroup
declare var bj_delayedSuspendDecayTimer: jtimer
declare var bj_delayedSuspendDecayTrig: jtrigger
declare var bj_livingPlayerUnitsTypeId: number
declare var bj_lastDyingWidget: jwidget
declare var bj_randDistCount: number
declare var bj_randDistID: number[]
declare var bj_randDistChance: number[]
declare var bj_lastCreatedUnit: junit
declare var bj_lastCreatedItem: jitem
declare var bj_lastRemovedItem: jitem
declare var bj_lastHauntedGoldMine: junit
declare var bj_lastCreatedDestructable: jdestructable
declare var bj_lastCreatedGroup: jgroup
declare var bj_lastCreatedFogModifier: jfogmodifier
declare var bj_lastCreatedEffect: jeffect
declare var bj_lastCreatedWeatherEffect: jweathereffect
declare var bj_lastCreatedTerrainDeformation: jterraindeformation
declare var bj_lastCreatedQuest: jquest
declare var bj_lastCreatedQuestItem: jquestitem
declare var bj_lastCreatedDefeatCondition: jdefeatcondition
declare var bj_lastStartedTimer: jtimer
declare var bj_lastCreatedTimerDialog: jtimerdialog
declare var bj_lastCreatedLeaderboard: jleaderboard
declare var bj_lastCreatedMultiboard: jmultiboard
declare var bj_lastPlayedSound: jsound
declare var bj_lastPlayedMusic: string
declare var bj_lastTransmissionDuration: number
declare var bj_lastCreatedGameCache: jgamecache
declare var bj_lastCreatedHashtable: jhashtable
declare var bj_lastLoadedUnit: junit
declare var bj_lastCreatedButton: jbutton
declare var bj_lastReplacedUnit: junit
declare var bj_lastCreatedTextTag: jtexttag
declare var bj_lastCreatedLightning: jlightning
declare var bj_lastCreatedImage: jimage
declare var bj_lastCreatedUbersplat: jubersplat
declare var bj_lastCreatedMinimapIcon: jminimapicon
declare var bj_lastCreatedCommandButtonEffect: jcommandbuttoneffect
declare var filterIssueHauntOrderAtLocBJ: jboolexpr
declare var filterEnumDestructablesInCircleBJ: jboolexpr
declare var filterGetUnitsInRectOfPlayer: jboolexpr
declare var filterGetUnitsOfTypeIdAll: jboolexpr
declare var filterGetUnitsOfPlayerAndTypeId: jboolexpr
declare var filterMeleeTrainedUnitIsHeroBJ: jboolexpr
declare var filterLivingPlayerUnitsOfTypeId: jboolexpr
declare var bj_wantDestroyGroup: boolean
declare var bj_lastInstObjFuncSuccessful: boolean
declare function BJDebugMsg(msg: string): void
declare function RMinBJ(a: number, b: number): number
declare function RMaxBJ(a: number, b: number): number
declare function RAbsBJ(a: number): number
declare function RSignBJ(a: number): number
declare function IMinBJ(a: number, b: number): number
declare function IMaxBJ(a: number, b: number): number
declare function IAbsBJ(a: number): number
declare function ISignBJ(a: number): number
declare function SinBJ(degrees: number): number
declare function CosBJ(degrees: number): number
declare function TanBJ(degrees: number): number
declare function AsinBJ(degrees: number): number
declare function AcosBJ(degrees: number): number
declare function AtanBJ(degrees: number): number
declare function Atan2BJ(y: number, x: number): number
declare function AngleBetweenPoints(locA: jlocation, locB: jlocation): number
declare function DistanceBetweenPoints(locA: jlocation, locB: jlocation): number
declare function PolarProjectionBJ(source: jlocation, dist: number, angle: number): jlocation
declare function GetRandomDirectionDeg(): number
declare function GetRandomPercentageBJ(): number
declare function GetRandomLocInRect(whichRect: jrect): jlocation
declare function ModuloInteger(dividend: number, divisor: number): number
declare function ModuloReal(dividend: number, divisor: number): number
declare function OffsetLocation(loc: jlocation, dx: number, dy: number): jlocation
declare function OffsetRectBJ(r: jrect, dx: number, dy: number): jrect
declare function RectFromCenterSizeBJ(center: jlocation, width: number, height: number): jrect
declare function RectContainsCoords(r: jrect, x: number, y: number): boolean
declare function RectContainsLoc(r: jrect, loc: jlocation): boolean
declare function RectContainsUnit(r: jrect, whichUnit: junit): boolean
declare function RectContainsItem(whichItem: jitem, r: jrect): boolean
declare function ConditionalTriggerExecute(trig: jtrigger): void
declare function TriggerExecuteBJ(trig: jtrigger, checkConditions: boolean): boolean
declare function PostTriggerExecuteBJ(trig: jtrigger, checkConditions: boolean): boolean
declare function QueuedTriggerCheck(): void
declare function QueuedTriggerGetIndex(trig: jtrigger): number
declare function QueuedTriggerRemoveByIndex(trigIndex: number): boolean
declare function QueuedTriggerAttemptExec(): boolean
declare function QueuedTriggerAddBJ(trig: jtrigger, checkConditions: boolean): boolean
declare function QueuedTriggerRemoveBJ(trig: jtrigger): void
declare function QueuedTriggerDoneBJ(): void
declare function QueuedTriggerClearBJ(): void
declare function QueuedTriggerClearInactiveBJ(): void
declare function QueuedTriggerCountBJ(): number
declare function IsTriggerQueueEmptyBJ(): boolean
declare function IsTriggerQueuedBJ(trig: jtrigger): boolean
declare function GetForLoopIndexA(): number
declare function SetForLoopIndexA(newIndex: number): void
declare function GetForLoopIndexB(): number
declare function SetForLoopIndexB(newIndex: number): void
declare function PolledWait(duration: number): void
declare function IntegerTertiaryOp(flag: boolean, valueA: number, valueB: number): number
declare function DoNothing(): void
declare function CommentString(commentString: string): void
declare function StringIdentity(theString: string): string
declare function GetBooleanAnd(valueA: boolean, valueB: boolean): boolean
declare function GetBooleanOr(valueA: boolean, valueB: boolean): boolean
declare function PercentToInt(percentage: number, max: number): number
declare function PercentTo255(percentage: number): number
declare function GetTimeOfDay(): number
declare function SetTimeOfDay(whatTime: number): void
declare function SetTimeOfDayScalePercentBJ(scalePercent: number): void
declare function GetTimeOfDayScalePercentBJ(): number
declare function PlaySound(soundName: string): void
declare function CompareLocationsBJ(A: jlocation, B: jlocation): boolean
declare function CompareRectsBJ(A: jrect, B: jrect): boolean
declare function GetRectFromCircleBJ(center: jlocation, radius: number): jrect
declare function GetCurrentCameraSetup(): jcamerasetup
declare function CameraSetupApplyForPlayer(
    doPan: boolean,
    whichSetup: jcamerasetup,
    whichPlayer: jplayer,
    duration: number
): void
declare function CameraSetupApplyForPlayerSmooth(
    doPan: boolean,
    whichSetup: jcamerasetup,
    whichPlayer: jplayer,
    forcedDuration: number,
    easeInDuration: number,
    easeOutDuration: number,
    smoothFactor: number
): void
declare function CameraSetupGetFieldSwap(whichField: jcamerafield, whichSetup: jcamerasetup): number
declare function SetCameraFieldForPlayer(
    whichPlayer: jplayer,
    whichField: jcamerafield,
    value: number,
    duration: number
): void
declare function SetCameraTargetControllerNoZForPlayer(
    whichPlayer: jplayer,
    whichUnit: junit,
    xoffset: number,
    yoffset: number,
    inheritOrientation: boolean
): void
declare function SetCameraPositionForPlayer(whichPlayer: jplayer, x: number, y: number): void
declare function SetCameraPositionLocForPlayer(whichPlayer: jplayer, loc: jlocation): void
declare function RotateCameraAroundLocBJ(
    degrees: number,
    loc: jlocation,
    whichPlayer: jplayer,
    duration: number
): void
declare function PanCameraToForPlayer(whichPlayer: jplayer, x: number, y: number): void
declare function PanCameraToLocForPlayer(whichPlayer: jplayer, loc: jlocation): void
declare function PanCameraToTimedForPlayer(
    whichPlayer: jplayer,
    x: number,
    y: number,
    duration: number
): void
declare function PanCameraToTimedLocForPlayer(
    whichPlayer: jplayer,
    loc: jlocation,
    duration: number
): void
declare function PanCameraToTimedLocWithZForPlayer(
    whichPlayer: jplayer,
    loc: jlocation,
    zOffset: number,
    duration: number
): void
declare function SmartCameraPanBJ(whichPlayer: jplayer, loc: jlocation, duration: number): void
declare function SetCinematicCameraForPlayer(whichPlayer: jplayer, cameraModelFile: string): void
declare function ResetToGameCameraForPlayer(whichPlayer: jplayer, duration: number): void
declare function CameraSetSourceNoiseForPlayer(
    whichPlayer: jplayer,
    magnitude: number,
    velocity: number
): void
declare function CameraSetTargetNoiseForPlayer(
    whichPlayer: jplayer,
    magnitude: number,
    velocity: number
): void
declare function CameraSetEQNoiseForPlayer(whichPlayer: jplayer, magnitude: number): void
declare function CameraClearNoiseForPlayer(whichPlayer: jplayer): void
declare function GetCurrentCameraBoundsMapRectBJ(): jrect
declare function GetCameraBoundsMapRect(): jrect
declare function GetPlayableMapRect(): jrect
declare function GetEntireMapRect(): jrect
declare function SetCameraBoundsToRect(r: jrect): void
declare function SetCameraBoundsToRectForPlayerBJ(whichPlayer: jplayer, r: jrect): void
declare function AdjustCameraBoundsBJ(
    adjustMethod: number,
    dxWest: number,
    dxEast: number,
    dyNorth: number,
    dySouth: number
): void
declare function AdjustCameraBoundsForPlayerBJ(
    adjustMethod: number,
    whichPlayer: jplayer,
    dxWest: number,
    dxEast: number,
    dyNorth: number,
    dySouth: number
): void
declare function SetCameraQuickPositionForPlayer(whichPlayer: jplayer, x: number, y: number): void
declare function SetCameraQuickPositionLocForPlayer(whichPlayer: jplayer, loc: jlocation): void
declare function SetCameraQuickPositionLoc(loc: jlocation): void
declare function StopCameraForPlayerBJ(whichPlayer: jplayer): void
declare function SetCameraOrientControllerForPlayerBJ(
    whichPlayer: jplayer,
    whichUnit: junit,
    xoffset: number,
    yoffset: number
): void
declare function CameraSetSmoothingFactorBJ(factor: number): void
declare function CameraResetSmoothingFactorBJ(): void
declare function DisplayTextToForce(toForce: jforce, message: string): void
declare function DisplayTimedTextToForce(toForce: jforce, duration: number, message: string): void
declare function ClearTextMessagesBJ(toForce: jforce): void
declare function SubStringBJ(source: string, start: number, end: number): string
declare function GetHandleIdBJ(h: jhandle): number
declare function StringHashBJ(s: string): number
declare function TriggerRegisterTimerEventPeriodic(trig: jtrigger, timeout: number): jevent
declare function TriggerRegisterTimerEventSingle(trig: jtrigger, timeout: number): jevent
declare function TriggerRegisterTimerExpireEventBJ(trig: jtrigger, t: jtimer): jevent
declare function TriggerRegisterPlayerUnitEventSimple(
    trig: jtrigger,
    whichPlayer: jplayer,
    whichEvent: jplayerunitevent
): jevent
declare function TriggerRegisterAnyUnitEventBJ(trig: jtrigger, whichEvent: jplayerunitevent): void
declare function TriggerRegisterPlayerSelectionEventBJ(
    trig: jtrigger,
    whichPlayer: jplayer,
    selected: boolean
): jevent
declare function TriggerRegisterPlayerKeyEventBJ(
    trig: jtrigger,
    whichPlayer: jplayer,
    keType: number,
    keKey: number
): jevent
declare function TriggerRegisterPlayerMouseEventBJ(
    trig: jtrigger,
    whichPlayer: jplayer,
    meType: number
): jevent
declare function TriggerRegisterPlayerEventVictory(trig: jtrigger, whichPlayer: jplayer): jevent
declare function TriggerRegisterPlayerEventDefeat(trig: jtrigger, whichPlayer: jplayer): jevent
declare function TriggerRegisterPlayerEventLeave(trig: jtrigger, whichPlayer: jplayer): jevent
declare function TriggerRegisterPlayerEventAllianceChanged(
    trig: jtrigger,
    whichPlayer: jplayer
): jevent
declare function TriggerRegisterPlayerEventEndCinematic(
    trig: jtrigger,
    whichPlayer: jplayer
): jevent
declare function TriggerRegisterGameStateEventTimeOfDay(
    trig: jtrigger,
    opcode: jlimitop,
    limitval: number
): jevent
declare function TriggerRegisterEnterRegionSimple(trig: jtrigger, whichRegion: jregion): jevent
declare function TriggerRegisterLeaveRegionSimple(trig: jtrigger, whichRegion: jregion): jevent
declare function TriggerRegisterEnterRectSimple(trig: jtrigger, r: jrect): jevent
declare function TriggerRegisterLeaveRectSimple(trig: jtrigger, r: jrect): jevent
declare function TriggerRegisterDistanceBetweenUnits(
    trig: jtrigger,
    whichUnit: junit,
    condition: jboolexpr,
    range: number
): jevent
declare function TriggerRegisterUnitInRangeSimple(
    trig: jtrigger,
    range: number,
    whichUnit: junit
): jevent
declare function TriggerRegisterUnitLifeEvent(
    trig: jtrigger,
    whichUnit: junit,
    opcode: jlimitop,
    limitval: number
): jevent
declare function TriggerRegisterUnitManaEvent(
    trig: jtrigger,
    whichUnit: junit,
    opcode: jlimitop,
    limitval: number
): jevent
declare function TriggerRegisterDialogEventBJ(trig: jtrigger, whichDialog: jdialog): jevent
declare function TriggerRegisterShowSkillEventBJ(trig: jtrigger): jevent
declare function TriggerRegisterBuildSubmenuEventBJ(trig: jtrigger): jevent
declare function TriggerRegisterBuildCommandEventBJ(trig: jtrigger, unitId: number): jevent
declare function TriggerRegisterTrainCommandEventBJ(trig: jtrigger, unitId: number): jevent
declare function TriggerRegisterUpgradeCommandEventBJ(trig: jtrigger, techId: number): jevent
declare function TriggerRegisterCommonCommandEventBJ(trig: jtrigger, order: string): jevent
declare function TriggerRegisterGameLoadedEventBJ(trig: jtrigger): jevent
declare function TriggerRegisterGameSavedEventBJ(trig: jtrigger): jevent
declare function RegisterDestDeathInRegionEnum(): void
declare function TriggerRegisterDestDeathInRegionEvent(trig: jtrigger, r: jrect): void
declare function AddWeatherEffectSaveLast(where: jrect, effectID: number): jweathereffect
declare function GetLastCreatedWeatherEffect(): jweathereffect
declare function RemoveWeatherEffectBJ(whichWeatherEffect: jweathereffect): void
declare function TerrainDeformationCraterBJ(
    duration: number,
    permanent: boolean,
    where: jlocation,
    radius: number,
    depth: number
): jterraindeformation
declare function TerrainDeformationRippleBJ(
    duration: number,
    limitNeg: boolean,
    where: jlocation,
    startRadius: number,
    endRadius: number,
    depth: number,
    wavePeriod: number,
    waveWidth: number
): jterraindeformation
declare function TerrainDeformationWaveBJ(
    duration: number,
    source: jlocation,
    target: jlocation,
    radius: number,
    depth: number,
    trailDelay: number
): jterraindeformation
declare function TerrainDeformationRandomBJ(
    duration: number,
    where: jlocation,
    radius: number,
    minDelta: number,
    maxDelta: number,
    updateInterval: number
): jterraindeformation
declare function TerrainDeformationStopBJ(deformation: jterraindeformation, duration: number): void
declare function GetLastCreatedTerrainDeformation(): jterraindeformation
declare function AddLightningLoc(codeName: string, where1: jlocation, where2: jlocation): jlightning
declare function DestroyLightningBJ(whichBolt: jlightning): boolean
declare function MoveLightningLoc(
    whichBolt: jlightning,
    where1: jlocation,
    where2: jlocation
): boolean
declare function GetLightningColorABJ(whichBolt: jlightning): number
declare function GetLightningColorRBJ(whichBolt: jlightning): number
declare function GetLightningColorGBJ(whichBolt: jlightning): number
declare function GetLightningColorBBJ(whichBolt: jlightning): number
declare function SetLightningColorBJ(
    whichBolt: jlightning,
    r: number,
    g: number,
    b: number,
    a: number
): boolean
declare function GetLastCreatedLightningBJ(): jlightning
declare function GetAbilityEffectBJ(abilcode: number, t: jeffecttype, index: number): string
declare function GetAbilitySoundBJ(abilcode: number, t: jsoundtype): string
declare function GetTerrainCliffLevelBJ(where: jlocation): number
declare function GetTerrainTypeBJ(where: jlocation): number
declare function GetTerrainVarianceBJ(where: jlocation): number
declare function SetTerrainTypeBJ(
    where: jlocation,
    terrainType: number,
    variation: number,
    area: number,
    shape: number
): void
declare function IsTerrainPathableBJ(where: jlocation, t: jpathingtype): boolean
declare function SetTerrainPathableBJ(where: jlocation, t: jpathingtype, flag: boolean): void
declare function SetWaterBaseColorBJ(
    red: number,
    green: number,
    blue: number,
    transparency: number
): void
declare function CreateFogModifierRectSimple(
    whichPlayer: jplayer,
    whichFogState: jfogstate,
    r: jrect,
    afterUnits: boolean
): jfogmodifier
declare function CreateFogModifierRadiusLocSimple(
    whichPlayer: jplayer,
    whichFogState: jfogstate,
    center: jlocation,
    radius: number,
    afterUnits: boolean
): jfogmodifier
declare function CreateFogModifierRectBJ(
    enabled: boolean,
    whichPlayer: jplayer,
    whichFogState: jfogstate,
    r: jrect
): jfogmodifier
declare function CreateFogModifierRadiusLocBJ(
    enabled: boolean,
    whichPlayer: jplayer,
    whichFogState: jfogstate,
    center: jlocation,
    radius: number
): jfogmodifier
declare function GetLastCreatedFogModifier(): jfogmodifier
declare function FogEnableOn(): void
declare function FogEnableOff(): void
declare function FogMaskEnableOn(): void
declare function FogMaskEnableOff(): void
declare function UseTimeOfDayBJ(flag: boolean): void
declare function SetTerrainFogExBJ(
    style: number,
    zstart: number,
    zend: number,
    density: number,
    red: number,
    green: number,
    blue: number
): void
declare function ResetTerrainFogBJ(): void
declare function SetDoodadAnimationBJ(
    animName: string,
    doodadID: number,
    radius: number,
    center: jlocation
): void
declare function SetDoodadAnimationRectBJ(animName: string, doodadID: number, r: jrect): void
declare function AddUnitAnimationPropertiesBJ(
    add: boolean,
    animProperties: string,
    whichUnit: junit
): void
declare function CreateImageBJ(
    file: string,
    size: number,
    where: jlocation,
    zOffset: number,
    imageType: number
): jimage
declare function ShowImageBJ(flag: boolean, whichImage: jimage): void
declare function SetImagePositionBJ(whichImage: jimage, where: jlocation, zOffset: number): void
declare function SetImageColorBJ(
    whichImage: jimage,
    red: number,
    green: number,
    blue: number,
    alpha: number
): void
declare function GetLastCreatedImage(): jimage
declare function CreateUbersplatBJ(
    where: jlocation,
    name: string,
    red: number,
    green: number,
    blue: number,
    alpha: number,
    forcePaused: boolean,
    noBirthTime: boolean
): jubersplat
declare function ShowUbersplatBJ(flag: boolean, whichSplat: jubersplat): void
declare function GetLastCreatedUbersplat(): jubersplat
declare function GetLastCreatedMinimapIcon(): jminimapicon
declare function CreateMinimapIconOnUnitBJ(
    whichUnit: junit,
    red: number,
    green: number,
    blue: number,
    pingPath: string,
    fogVisibility: jfogstate
): jminimapicon
declare function CreateMinimapIconAtLocBJ(
    where: jlocation,
    red: number,
    green: number,
    blue: number,
    pingPath: string,
    fogVisibility: jfogstate
): jminimapicon
declare function CreateMinimapIconBJ(
    x: number,
    y: number,
    red: number,
    green: number,
    blue: number,
    pingPath: string,
    fogVisibility: jfogstate
): jminimapicon
declare function CampaignMinimapIconUnitBJ(whichUnit: junit, style: number): void
declare function CampaignMinimapIconLocBJ(where: jlocation, style: number): void
declare function PlaySoundBJ(soundHandle: jsound): void
declare function StopSoundBJ(soundHandle: jsound, fadeOut: boolean): void
declare function SetSoundVolumeBJ(soundHandle: jsound, volumePercent: number): void
declare function SetSoundOffsetBJ(newOffset: number, soundHandle: jsound): void
declare function SetSoundDistanceCutoffBJ(soundHandle: jsound, cutoff: number): void
declare function SetSoundPitchBJ(soundHandle: jsound, pitch: number): void
declare function SetSoundPositionLocBJ(soundHandle: jsound, loc: jlocation, z: number): void
declare function AttachSoundToUnitBJ(soundHandle: jsound, whichUnit: junit): void
declare function SetSoundConeAnglesBJ(
    soundHandle: jsound,
    inside: number,
    outside: number,
    outsideVolumePercent: number
): void
declare function KillSoundWhenDoneBJ(soundHandle: jsound): void
declare function PlaySoundAtPointBJ(
    soundHandle: jsound,
    volumePercent: number,
    loc: jlocation,
    z: number
): void
declare function PlaySoundOnUnitBJ(
    soundHandle: jsound,
    volumePercent: number,
    whichUnit: junit
): void
declare function PlaySoundFromOffsetBJ(
    soundHandle: jsound,
    volumePercent: number,
    startingOffset: number
): void
declare function PlayMusicBJ(musicFileName: string): void
declare function PlayMusicExBJ(
    musicFileName: string,
    startingOffset: number,
    fadeInTime: number
): void
declare function SetMusicOffsetBJ(newOffset: number): void
declare function PlayThematicMusicBJ(musicName: string): void
declare function PlayThematicMusicExBJ(musicName: string, startingOffset: number): void
declare function SetThematicMusicOffsetBJ(newOffset: number): void
declare function EndThematicMusicBJ(): void
declare function StopMusicBJ(fadeOut: boolean): void
declare function ResumeMusicBJ(): void
declare function SetMusicVolumeBJ(volumePercent: number): void
declare function GetSoundDurationBJ(soundHandle: jsound): number
declare function GetSoundFileDurationBJ(musicFileName: string): number
declare function GetLastPlayedSound(): jsound
declare function GetLastPlayedMusic(): string
declare function VolumeGroupSetVolumeBJ(vgroup: jvolumegroup, percent: number): void
declare function SetCineModeVolumeGroupsImmediateBJ(): void
declare function SetCineModeVolumeGroupsBJ(): void
declare function SetSpeechVolumeGroupsImmediateBJ(): void
declare function SetSpeechVolumeGroupsBJ(): void
declare function VolumeGroupResetImmediateBJ(): void
declare function VolumeGroupResetBJ(): void
declare function GetSoundIsPlayingBJ(soundHandle: jsound): boolean
declare function WaitForSoundBJ(soundHandle: jsound, offset: number): void
declare function SetMapMusicIndexedBJ(musicName: string, index: number): void
declare function SetMapMusicRandomBJ(musicName: string): void
declare function ClearMapMusicBJ(): void
declare function SetStackedSoundBJ(add: boolean, soundHandle: jsound, r: jrect): void
declare function StartSoundForPlayerBJ(whichPlayer: jplayer, soundHandle: jsound): void
declare function VolumeGroupSetVolumeForPlayerBJ(
    whichPlayer: jplayer,
    vgroup: jvolumegroup,
    scale: number
): void
declare function EnableDawnDusk(flag: boolean): void
declare function IsDawnDuskEnabled(): boolean
declare function SetAmbientDaySound(inLabel: string): void
declare function SetAmbientNightSound(inLabel: string): void
declare function AddSpecialEffectLocBJ(where: jlocation, modelName: string): jeffect
declare function AddSpecialEffectTargetUnitBJ(
    attachPointName: string,
    targetWidget: jwidget,
    modelName: string
): jeffect
declare function DestroyEffectBJ(whichEffect: jeffect): void
declare function GetLastCreatedEffectBJ(): jeffect
declare function CreateCommandButtonEffectBJ(abilityId: number, order: string): jcommandbuttoneffect
declare function CreateTrainCommandButtonEffectBJ(unitId: number): jcommandbuttoneffect
declare function CreateUpgradeCommandButtonEffectBJ(techId: number): jcommandbuttoneffect
declare function CreateCommonCommandButtonEffectBJ(order: string): jcommandbuttoneffect
declare function CreateLearnCommandButtonEffectBJ(abilityId: number): jcommandbuttoneffect
declare function CreateBuildCommandButtonEffectBJ(unitId: number): jcommandbuttoneffect
declare function GetLastCreatedCommandButtonEffectBJ(): jcommandbuttoneffect
declare function GetItemLoc(whichItem: jitem): jlocation
declare function GetItemLifeBJ(whichWidget: jwidget): number
declare function SetItemLifeBJ(whichWidget: jwidget, life: number): void
declare function AddHeroXPSwapped(xpToAdd: number, whichHero: junit, showEyeCandy: boolean): void
declare function SetHeroLevelBJ(whichHero: junit, newLevel: number, showEyeCandy: boolean): void
declare function DecUnitAbilityLevelSwapped(abilcode: number, whichUnit: junit): number
declare function IncUnitAbilityLevelSwapped(abilcode: number, whichUnit: junit): number
declare function SetUnitAbilityLevelSwapped(
    abilcode: number,
    whichUnit: junit,
    level: number
): number
declare function GetUnitAbilityLevelSwapped(abilcode: number, whichUnit: junit): number
declare function UnitHasBuffBJ(whichUnit: junit, buffcode: number): boolean
declare function UnitRemoveBuffBJ(buffcode: number, whichUnit: junit): boolean
declare function UnitAddItemSwapped(whichItem: jitem, whichHero: junit): boolean
declare function UnitAddItemByIdSwapped(itemId: number, whichHero: junit): jitem
declare function UnitRemoveItemSwapped(whichItem: jitem, whichHero: junit): void
declare function UnitRemoveItemFromSlotSwapped(itemSlot: number, whichHero: junit): jitem
declare function CreateItemLoc(itemId: number, loc: jlocation): jitem
declare function GetLastCreatedItem(): jitem
declare function GetLastRemovedItem(): jitem
declare function SetItemPositionLoc(whichItem: jitem, loc: jlocation): void
declare function GetLearnedSkillBJ(): number
declare function SuspendHeroXPBJ(flag: boolean, whichHero: junit): void
declare function SetPlayerHandicapDamageBJ(whichPlayer: jplayer, handicapPercent: number): void
declare function GetPlayerHandicapDamageBJ(whichPlayer: jplayer): number
declare function SetPlayerHandicapReviveTimeBJ(whichPlayer: jplayer, handicapPercent: number): void
declare function GetPlayerHandicapReviveTimeBJ(whichPlayer: jplayer): number
declare function SetPlayerHandicapXPBJ(whichPlayer: jplayer, handicapPercent: number): void
declare function GetPlayerHandicapXPBJ(whichPlayer: jplayer): number
declare function SetPlayerHandicapBJ(whichPlayer: jplayer, handicapPercent: number): void
declare function GetPlayerHandicapBJ(whichPlayer: jplayer): number
declare function GetHeroStatBJ(whichStat: number, whichHero: junit, includeBonuses: boolean): number
declare function SetHeroStat(whichHero: junit, whichStat: number, value: number): void
declare function ModifyHeroStat(
    whichStat: number,
    whichHero: junit,
    modifyMethod: number,
    value: number
): void
declare function ModifyHeroSkillPoints(
    whichHero: junit,
    modifyMethod: number,
    value: number
): boolean
declare function UnitDropItemPointBJ(
    whichUnit: junit,
    whichItem: jitem,
    x: number,
    y: number
): boolean
declare function UnitDropItemPointLoc(whichUnit: junit, whichItem: jitem, loc: jlocation): boolean
declare function UnitDropItemSlotBJ(whichUnit: junit, whichItem: jitem, slot: number): boolean
declare function UnitDropItemTargetBJ(whichUnit: junit, whichItem: jitem, target: jwidget): boolean
declare function UnitUseItemDestructable(
    whichUnit: junit,
    whichItem: jitem,
    target: jwidget
): boolean
declare function UnitUseItemPointLoc(whichUnit: junit, whichItem: jitem, loc: jlocation): boolean
declare function UnitItemInSlotBJ(whichUnit: junit, itemSlot: number): jitem
declare function GetInventoryIndexOfItemTypeBJ(whichUnit: junit, itemId: number): number
declare function GetItemOfTypeFromUnitBJ(whichUnit: junit, itemId: number): jitem
declare function UnitHasItemOfTypeBJ(whichUnit: junit, itemId: number): boolean
declare function UnitInventoryCount(whichUnit: junit): number
declare function UnitInventorySizeBJ(whichUnit: junit): number
declare function SetItemInvulnerableBJ(whichItem: jitem, flag: boolean): void
declare function SetItemDropOnDeathBJ(whichItem: jitem, flag: boolean): void
declare function SetItemDroppableBJ(whichItem: jitem, flag: boolean): void
declare function SetItemPlayerBJ(whichItem: jitem, whichPlayer: jplayer, changeColor: boolean): void
declare function SetItemVisibleBJ(show: boolean, whichItem: jitem): void
declare function IsItemHiddenBJ(whichItem: jitem): boolean
declare function ChooseRandomItemBJ(level: number): number
declare function ChooseRandomItemExBJ(level: number, whichType: jitemtype): number
declare function ChooseRandomNPBuildingBJ(): number
declare function ChooseRandomCreepBJ(level: number): number
declare function EnumItemsInRectBJ(r: jrect, actionFunc?: () => void): void
declare function RandomItemInRectBJEnum(): void
declare function RandomItemInRectBJ(r: jrect, filter: jboolexpr): jitem
declare function RandomItemInRectSimpleBJ(r: jrect): jitem
declare function CheckItemStatus(whichItem: jitem, status: number): boolean
declare function CheckItemcodeStatus(itemId: number, status: number): boolean
declare function UnitId2OrderIdBJ(unitId: number): number
declare function String2UnitIdBJ(unitIdString: string): number
declare function UnitId2StringBJ(unitId: number): string
declare function String2OrderIdBJ(orderIdString: string): number
declare function OrderId2StringBJ(orderId: number): string
declare function GetIssuedOrderIdBJ(): number
declare function GetKillingUnitBJ(): junit
declare function CreateUnitAtLocSaveLast(
    id: jplayer,
    unitid: number,
    loc: jlocation,
    face: number
): junit
declare function GetLastCreatedUnit(): junit
declare function CreateNUnitsAtLoc(
    count: number,
    unitId: number,
    whichPlayer: jplayer,
    loc: jlocation,
    face: number
): jgroup
declare function CreateNUnitsAtLocFacingLocBJ(
    count: number,
    unitId: number,
    whichPlayer: jplayer,
    loc: jlocation,
    lookAt: jlocation
): jgroup
declare function GetLastCreatedGroupEnum(): void
declare function GetLastCreatedGroup(): jgroup
declare function CreateCorpseLocBJ(unitid: number, whichPlayer: jplayer, loc: jlocation): junit
declare function UnitSuspendDecayBJ(suspend: boolean, whichUnit: junit): void
declare function DelayedSuspendDecayStopAnimEnum(): void
declare function DelayedSuspendDecayBoneEnum(): void
declare function DelayedSuspendDecayFleshEnum(): void
declare function DelayedSuspendDecay(): void
declare function DelayedSuspendDecayCreate(): void
declare function CreatePermanentCorpseLocBJ(
    style: number,
    unitid: number,
    whichPlayer: jplayer,
    loc: jlocation,
    facing: number
): junit
declare function GetUnitStateSwap(whichState: junitstate, whichUnit: junit): number
declare function GetUnitStatePercent(
    whichUnit: junit,
    whichState: junitstate,
    whichMaxState: junitstate
): number
declare function GetUnitLifePercent(whichUnit: junit): number
declare function GetUnitManaPercent(whichUnit: junit): number
declare function SelectUnitSingle(whichUnit: junit): void
declare function SelectGroupBJEnum(): void
declare function SelectGroupBJ(g: jgroup): void
declare function SelectUnitAdd(whichUnit: junit): void
declare function SelectUnitRemove(whichUnit: junit): void
declare function ClearSelectionForPlayer(whichPlayer: jplayer): void
declare function SelectUnitForPlayerSingle(whichUnit: junit, whichPlayer: jplayer): void
declare function SelectGroupForPlayerBJ(g: jgroup, whichPlayer: jplayer): void
declare function SelectUnitAddForPlayer(whichUnit: junit, whichPlayer: jplayer): void
declare function SelectUnitRemoveForPlayer(whichUnit: junit, whichPlayer: jplayer): void
declare function SetUnitLifeBJ(whichUnit: junit, newValue: number): void
declare function SetUnitManaBJ(whichUnit: junit, newValue: number): void
declare function SetUnitLifePercentBJ(whichUnit: junit, percent: number): void
declare function SetUnitManaPercentBJ(whichUnit: junit, percent: number): void
declare function IsUnitDeadBJ(whichUnit: junit): boolean
declare function IsUnitAliveBJ(whichUnit: junit): boolean
declare function IsUnitGroupDeadBJEnum(): void
declare function IsUnitGroupDeadBJ(g: jgroup): boolean
declare function IsUnitGroupEmptyBJEnum(): void
declare function IsUnitGroupEmptyBJ(g: jgroup): boolean
declare function IsUnitGroupInRectBJEnum(): void
declare function IsUnitGroupInRectBJ(g: jgroup, r: jrect): boolean
declare function IsUnitHiddenBJ(whichUnit: junit): boolean
declare function ShowUnitHide(whichUnit: junit): void
declare function ShowUnitShow(whichUnit: junit): void
declare function IssueHauntOrderAtLocBJFilter(): boolean
declare function IssueHauntOrderAtLocBJ(whichPeon: junit, loc: jlocation): boolean
declare function IssueBuildOrderByIdLocBJ(whichPeon: junit, unitId: number, loc: jlocation): boolean
declare function IssueTrainOrderByIdBJ(whichUnit: junit, unitId: number): boolean
declare function GroupTrainOrderByIdBJ(g: jgroup, unitId: number): boolean
declare function IssueUpgradeOrderByIdBJ(whichUnit: junit, techId: number): boolean
declare function GetAttackedUnitBJ(): junit
declare function SetUnitFlyHeightBJ(whichUnit: junit, newHeight: number, rate: number): void
declare function SetUnitTurnSpeedBJ(whichUnit: junit, turnSpeed: number): void
declare function SetUnitPropWindowBJ(whichUnit: junit, propWindow: number): void
declare function GetUnitPropWindowBJ(whichUnit: junit): number
declare function GetUnitDefaultPropWindowBJ(whichUnit: junit): number
declare function SetUnitBlendTimeBJ(whichUnit: junit, blendTime: number): void
declare function SetUnitAcquireRangeBJ(whichUnit: junit, acquireRange: number): void
declare function UnitSetCanSleepBJ(whichUnit: junit, canSleep: boolean): void
declare function UnitCanSleepBJ(whichUnit: junit): boolean
declare function UnitWakeUpBJ(whichUnit: junit): void
declare function UnitIsSleepingBJ(whichUnit: junit): boolean
declare function WakePlayerUnitsEnum(): void
declare function WakePlayerUnits(whichPlayer: jplayer): void
declare function EnableCreepSleepBJ(enable: boolean): void
declare function UnitGenerateAlarms(whichUnit: junit, generate: boolean): boolean
declare function DoesUnitGenerateAlarms(whichUnit: junit): boolean
declare function PauseAllUnitsBJEnum(): void
declare function PauseAllUnitsBJ(pause: boolean): void
declare function PauseUnitBJ(pause: boolean, whichUnit: junit): void
declare function IsUnitPausedBJ(whichUnit: junit): boolean
declare function UnitPauseTimedLifeBJ(flag: boolean, whichUnit: junit): void
declare function UnitApplyTimedLifeBJ(duration: number, buffId: number, whichUnit: junit): void
declare function UnitShareVisionBJ(share: boolean, whichUnit: junit, whichPlayer: jplayer): void
declare function UnitRemoveBuffsBJ(buffType: number, whichUnit: junit): void
declare function UnitRemoveBuffsExBJ(
    polarity: number,
    resist: number,
    whichUnit: junit,
    bTLife: boolean,
    bAura: boolean
): void
declare function UnitCountBuffsExBJ(
    polarity: number,
    resist: number,
    whichUnit: junit,
    bTLife: boolean,
    bAura: boolean
): number
declare function UnitRemoveAbilityBJ(abilityId: number, whichUnit: junit): boolean
declare function UnitAddAbilityBJ(abilityId: number, whichUnit: junit): boolean
declare function UnitRemoveTypeBJ(whichType: junittype, whichUnit: junit): boolean
declare function UnitAddTypeBJ(whichType: junittype, whichUnit: junit): boolean
declare function UnitMakeAbilityPermanentBJ(
    permanent: boolean,
    abilityId: number,
    whichUnit: junit
): boolean
declare function SetUnitExplodedBJ(whichUnit: junit, exploded: boolean): void
declare function ExplodeUnitBJ(whichUnit: junit): void
declare function GetTransportUnitBJ(): junit
declare function GetLoadedUnitBJ(): junit
declare function IsUnitInTransportBJ(whichUnit: junit, whichTransport: junit): boolean
declare function IsUnitLoadedBJ(whichUnit: junit): boolean
declare function IsUnitIllusionBJ(whichUnit: junit): boolean
declare function ReplaceUnitBJ(whichUnit: junit, newUnitId: number, unitStateMethod: number): junit
declare function GetLastReplacedUnitBJ(): junit
declare function SetUnitPositionLocFacingBJ(whichUnit: junit, loc: jlocation, facing: number): void
declare function SetUnitPositionLocFacingLocBJ(
    whichUnit: junit,
    loc: jlocation,
    lookAt: jlocation
): void
declare function AddItemToStockBJ(
    itemId: number,
    whichUnit: junit,
    currentStock: number,
    stockMax: number
): void
declare function AddUnitToStockBJ(
    unitId: number,
    whichUnit: junit,
    currentStock: number,
    stockMax: number
): void
declare function RemoveItemFromStockBJ(itemId: number, whichUnit: junit): void
declare function RemoveUnitFromStockBJ(unitId: number, whichUnit: junit): void
declare function SetUnitUseFoodBJ(enable: boolean, whichUnit: junit): void
declare function UnitDamagePointLoc(
    whichUnit: junit,
    delay: number,
    radius: number,
    loc: jlocation,
    amount: number,
    whichAttack: jattacktype,
    whichDamage: jdamagetype
): boolean
declare function UnitDamageTargetBJ(
    whichUnit: junit,
    target: junit,
    amount: number,
    whichAttack: jattacktype,
    whichDamage: jdamagetype
): boolean
declare function CreateDestructableLoc(
    objectid: number,
    loc: jlocation,
    facing: number,
    scale: number,
    variation: number
): jdestructable
declare function CreateDeadDestructableLocBJ(
    objectid: number,
    loc: jlocation,
    facing: number,
    scale: number,
    variation: number
): jdestructable
declare function GetLastCreatedDestructable(): jdestructable
declare function ShowDestructableBJ(flag: boolean, d: jdestructable): void
declare function SetDestructableInvulnerableBJ(d: jdestructable, flag: boolean): void
declare function IsDestructableInvulnerableBJ(d: jdestructable): boolean
declare function GetDestructableLoc(whichDestructable: jdestructable): jlocation
declare function EnumDestructablesInRectAll(r: jrect, actionFunc?: () => void): void
declare function EnumDestructablesInCircleBJFilter(): boolean
declare function IsDestructableDeadBJ(d: jdestructable): boolean
declare function IsDestructableAliveBJ(d: jdestructable): boolean
declare function RandomDestructableInRectBJEnum(): void
declare function RandomDestructableInRectBJ(r: jrect, filter: jboolexpr): jdestructable
declare function RandomDestructableInRectSimpleBJ(r: jrect): jdestructable
declare function EnumDestructablesInCircleBJ(
    radius: number,
    loc: jlocation,
    actionFunc?: () => void
): void
declare function SetDestructableLifePercentBJ(d: jdestructable, percent: number): void
declare function SetDestructableMaxLifeBJ(d: jdestructable, max: number): void
declare function ModifyGateBJ(gateOperation: number, d: jdestructable): void
declare function GetElevatorHeight(d: jdestructable): number
declare function ChangeElevatorHeight(d: jdestructable, newHeight: number): void
declare function NudgeUnitsInRectEnum(): void
declare function NudgeItemsInRectEnum(): void
declare function NudgeObjectsInRect(nudgeArea: jrect): void
declare function NearbyElevatorExistsEnum(): void
declare function NearbyElevatorExists(x: number, y: number): boolean
declare function FindElevatorWallBlockerEnum(): void
declare function ChangeElevatorWallBlocker(
    x: number,
    y: number,
    facing: number,
    open: boolean
): void
declare function ChangeElevatorWalls(open: boolean, walls: number, d: jdestructable): void
declare function WaygateActivateBJ(activate: boolean, waygate: junit): void
declare function WaygateIsActiveBJ(waygate: junit): boolean
declare function WaygateSetDestinationLocBJ(waygate: junit, loc: jlocation): void
declare function WaygateGetDestinationLocBJ(waygate: junit): jlocation
declare function UnitSetUsesAltIconBJ(flag: boolean, whichUnit: junit): void
declare function ForceUIKeyBJ(whichPlayer: jplayer, key: string): void
declare function ForceUICancelBJ(whichPlayer: jplayer): void
declare function ForGroupBJ(whichGroup: jgroup, callback?: () => void): void
declare function GroupAddUnitSimple(whichUnit: junit, whichGroup: jgroup): void
declare function GroupRemoveUnitSimple(whichUnit: junit, whichGroup: jgroup): void
declare function GroupAddGroupEnum(): void
declare function GroupAddGroup(sourceGroup: jgroup, destGroup: jgroup): void
declare function GroupRemoveGroupEnum(): void
declare function GroupRemoveGroup(sourceGroup: jgroup, destGroup: jgroup): void
declare function ForceAddPlayerSimple(whichPlayer: jplayer, whichForce: jforce): void
declare function ForceRemovePlayerSimple(whichPlayer: jplayer, whichForce: jforce): void
declare function GroupPickRandomUnitEnum(): void
declare function GroupPickRandomUnit(whichGroup: jgroup): junit
declare function ForcePickRandomPlayerEnum(): void
declare function ForcePickRandomPlayer(whichForce: jforce): jplayer
declare function EnumUnitsSelected(
    whichPlayer: jplayer,
    enumFilter: jboolexpr,
    enumAction?: () => void
): void
declare function GetUnitsInRectMatching(r: jrect, filter: jboolexpr): jgroup
declare function GetUnitsInRectAll(r: jrect): jgroup
declare function GetUnitsInRectOfPlayerFilter(): boolean
declare function GetUnitsInRectOfPlayer(r: jrect, whichPlayer: jplayer): jgroup
declare function GetUnitsInRangeOfLocMatching(
    radius: number,
    whichLocation: jlocation,
    filter: jboolexpr
): jgroup
declare function GetUnitsInRangeOfLocAll(radius: number, whichLocation: jlocation): jgroup
declare function GetUnitsOfTypeIdAllFilter(): boolean
declare function GetUnitsOfTypeIdAll(unitid: number): jgroup
declare function GetUnitsOfPlayerMatching(whichPlayer: jplayer, filter: jboolexpr): jgroup
declare function GetUnitsOfPlayerAll(whichPlayer: jplayer): jgroup
declare function GetUnitsOfPlayerAndTypeIdFilter(): boolean
declare function GetUnitsOfPlayerAndTypeId(whichPlayer: jplayer, unitid: number): jgroup
declare function GetUnitsSelectedAll(whichPlayer: jplayer): jgroup
declare function GetForceOfPlayer(whichPlayer: jplayer): jforce
declare function GetPlayersAll(): jforce
declare function GetPlayersByMapControl(whichControl: jmapcontrol): jforce
declare function GetPlayersAllies(whichPlayer: jplayer): jforce
declare function GetPlayersEnemies(whichPlayer: jplayer): jforce
declare function GetPlayersMatching(filter: jboolexpr): jforce
declare function CountUnitsInGroupEnum(): void
declare function CountUnitsInGroup(g: jgroup): number
declare function CountPlayersInForceEnum(): void
declare function CountPlayersInForceBJ(f: jforce): number
declare function GetRandomSubGroupEnum(): void
declare function GetRandomSubGroup(count: number, sourceGroup: jgroup): jgroup
declare function LivingPlayerUnitsOfTypeIdFilter(): boolean
declare function CountLivingPlayerUnitsOfTypeId(unitId: number, whichPlayer: jplayer): number
declare function ResetUnitAnimation(whichUnit: junit): void
declare function SetUnitTimeScalePercent(whichUnit: junit, percentScale: number): void
declare function SetUnitScalePercent(
    whichUnit: junit,
    percentScaleX: number,
    percentScaleY: number,
    percentScaleZ: number
): void
declare function SetUnitVertexColorBJ(
    whichUnit: junit,
    red: number,
    green: number,
    blue: number,
    transparency: number
): void
declare function UnitAddIndicatorBJ(
    whichUnit: junit,
    red: number,
    green: number,
    blue: number,
    transparency: number
): void
declare function DestructableAddIndicatorBJ(
    whichDestructable: jdestructable,
    red: number,
    green: number,
    blue: number,
    transparency: number
): void
declare function ItemAddIndicatorBJ(
    whichItem: jitem,
    red: number,
    green: number,
    blue: number,
    transparency: number
): void
declare function SetUnitFacingToFaceLocTimed(
    whichUnit: junit,
    target: jlocation,
    duration: number
): void
declare function SetUnitFacingToFaceUnitTimed(
    whichUnit: junit,
    target: junit,
    duration: number
): void
declare function QueueUnitAnimationBJ(whichUnit: junit, whichAnimation: string): void
declare function SetDestructableAnimationBJ(d: jdestructable, whichAnimation: string): void
declare function QueueDestructableAnimationBJ(d: jdestructable, whichAnimation: string): void
declare function SetDestAnimationSpeedPercent(d: jdestructable, percentScale: number): void
declare function DialogDisplayBJ(flag: boolean, whichDialog: jdialog, whichPlayer: jplayer): void
declare function DialogSetMessageBJ(whichDialog: jdialog, message: string): void
declare function DialogAddButtonBJ(whichDialog: jdialog, buttonText: string): jbutton
declare function DialogAddButtonWithHotkeyBJ(
    whichDialog: jdialog,
    buttonText: string,
    hotkey: number
): jbutton
declare function DialogClearBJ(whichDialog: jdialog): void
declare function GetLastCreatedButtonBJ(): jbutton
declare function GetClickedButtonBJ(): jbutton
declare function GetClickedDialogBJ(): jdialog
declare function SetPlayerAllianceBJ(
    sourcePlayer: jplayer,
    whichAllianceSetting: jalliancetype,
    value: boolean,
    otherPlayer: jplayer
): void
declare function SetPlayerAllianceStateAllyBJ(
    sourcePlayer: jplayer,
    otherPlayer: jplayer,
    flag: boolean
): void
declare function SetPlayerAllianceStateVisionBJ(
    sourcePlayer: jplayer,
    otherPlayer: jplayer,
    flag: boolean
): void
declare function SetPlayerAllianceStateControlBJ(
    sourcePlayer: jplayer,
    otherPlayer: jplayer,
    flag: boolean
): void
declare function SetPlayerAllianceStateFullControlBJ(
    sourcePlayer: jplayer,
    otherPlayer: jplayer,
    flag: boolean
): void
declare function SetPlayerAllianceStateBJ(
    sourcePlayer: jplayer,
    otherPlayer: jplayer,
    allianceState: number
): void
declare function SetForceAllianceStateBJ(
    sourceForce: jforce,
    targetForce: jforce,
    allianceState: number
): void
declare function PlayersAreCoAllied(playerA: jplayer, playerB: jplayer): boolean
declare function ShareEverythingWithTeamAI(whichPlayer: jplayer): void
declare function ShareEverythingWithTeam(whichPlayer: jplayer): void
declare function ConfigureNeutralVictim(): void
declare function MakeUnitsPassiveForPlayerEnum(): void
declare function MakeUnitsPassiveForPlayer(whichPlayer: jplayer): void
declare function MakeUnitsPassiveForTeam(whichPlayer: jplayer): void
declare function AllowVictoryDefeat(gameResult: jplayergameresult): boolean
declare function EndGameBJ(): void
declare function MeleeVictoryDialogBJ(whichPlayer: jplayer, leftGame: boolean): void
declare function MeleeDefeatDialogBJ(whichPlayer: jplayer, leftGame: boolean): void
declare function GameOverDialogBJ(whichPlayer: jplayer, leftGame: boolean): void
declare function RemovePlayerPreserveUnitsBJ(
    whichPlayer: jplayer,
    gameResult: jplayergameresult,
    leftGame: boolean
): void
declare function CustomVictoryOkBJ(): void
declare function CustomVictoryQuitBJ(): void
declare function CustomVictoryDialogBJ(whichPlayer: jplayer): void
declare function CustomVictorySkipBJ(whichPlayer: jplayer): void
declare function CustomVictoryBJ(
    whichPlayer: jplayer,
    showDialog: boolean,
    showScores: boolean
): void
declare function CustomDefeatRestartBJ(): void
declare function CustomDefeatReduceDifficultyBJ(): void
declare function CustomDefeatLoadBJ(): void
declare function CustomDefeatQuitBJ(): void
declare function CustomDefeatDialogBJ(whichPlayer: jplayer, message: string): void
declare function CustomDefeatBJ(whichPlayer: jplayer, message: string): void
declare function SetNextLevelBJ(nextLevel: string): void
declare function SetPlayerOnScoreScreenBJ(flag: boolean, whichPlayer: jplayer): void
declare function CreateQuestBJ(
    questType: number,
    title: string,
    description: string,
    iconPath: string
): jquest
declare function DestroyQuestBJ(whichQuest: jquest): void
declare function QuestSetEnabledBJ(enabled: boolean, whichQuest: jquest): void
declare function QuestSetTitleBJ(whichQuest: jquest, title: string): void
declare function QuestSetDescriptionBJ(whichQuest: jquest, description: string): void
declare function QuestSetCompletedBJ(whichQuest: jquest, completed: boolean): void
declare function QuestSetFailedBJ(whichQuest: jquest, failed: boolean): void
declare function QuestSetDiscoveredBJ(whichQuest: jquest, discovered: boolean): void
declare function GetLastCreatedQuestBJ(): jquest
declare function CreateQuestItemBJ(whichQuest: jquest, description: string): jquestitem
declare function QuestItemSetDescriptionBJ(whichQuestItem: jquestitem, description: string): void
declare function QuestItemSetCompletedBJ(whichQuestItem: jquestitem, completed: boolean): void
declare function GetLastCreatedQuestItemBJ(): jquestitem
declare function CreateDefeatConditionBJ(description: string): jdefeatcondition
declare function DestroyDefeatConditionBJ(whichCondition: jdefeatcondition): void
declare function DefeatConditionSetDescriptionBJ(
    whichCondition: jdefeatcondition,
    description: string
): void
declare function GetLastCreatedDefeatConditionBJ(): jdefeatcondition
declare function FlashQuestDialogButtonBJ(): void
declare function QuestMessageBJ(f: jforce, messageType: number, message: string): void
declare function StartTimerBJ(t: jtimer, periodic: boolean, timeout: number): jtimer
declare function CreateTimerBJ(periodic: boolean, timeout: number): jtimer
declare function DestroyTimerBJ(whichTimer: jtimer): void
declare function PauseTimerBJ(pause: boolean, whichTimer: jtimer): void
declare function GetLastCreatedTimerBJ(): jtimer
declare function CreateTimerDialogBJ(t: jtimer, title: string): jtimerdialog
declare function DestroyTimerDialogBJ(td: jtimerdialog): void
declare function TimerDialogSetTitleBJ(td: jtimerdialog, title: string): void
declare function TimerDialogSetTitleColorBJ(
    td: jtimerdialog,
    red: number,
    green: number,
    blue: number,
    transparency: number
): void
declare function TimerDialogSetTimeColorBJ(
    td: jtimerdialog,
    red: number,
    green: number,
    blue: number,
    transparency: number
): void
declare function TimerDialogSetSpeedBJ(td: jtimerdialog, speedMultFactor: number): void
declare function TimerDialogDisplayForPlayerBJ(
    show: boolean,
    td: jtimerdialog,
    whichPlayer: jplayer
): void
declare function TimerDialogDisplayBJ(show: boolean, td: jtimerdialog): void
declare function GetLastCreatedTimerDialogBJ(): jtimerdialog
declare function LeaderboardResizeBJ(lb: jleaderboard): void
declare function LeaderboardSetPlayerItemValueBJ(
    whichPlayer: jplayer,
    lb: jleaderboard,
    val: number
): void
declare function LeaderboardSetPlayerItemLabelBJ(
    whichPlayer: jplayer,
    lb: jleaderboard,
    val: string
): void
declare function LeaderboardSetPlayerItemStyleBJ(
    whichPlayer: jplayer,
    lb: jleaderboard,
    showLabel: boolean,
    showValue: boolean,
    showIcon: boolean
): void
declare function LeaderboardSetPlayerItemLabelColorBJ(
    whichPlayer: jplayer,
    lb: jleaderboard,
    red: number,
    green: number,
    blue: number,
    transparency: number
): void
declare function LeaderboardSetPlayerItemValueColorBJ(
    whichPlayer: jplayer,
    lb: jleaderboard,
    red: number,
    green: number,
    blue: number,
    transparency: number
): void
declare function LeaderboardSetLabelColorBJ(
    lb: jleaderboard,
    red: number,
    green: number,
    blue: number,
    transparency: number
): void
declare function LeaderboardSetValueColorBJ(
    lb: jleaderboard,
    red: number,
    green: number,
    blue: number,
    transparency: number
): void
declare function LeaderboardSetLabelBJ(lb: jleaderboard, label: string): void
declare function LeaderboardSetStyleBJ(
    lb: jleaderboard,
    showLabel: boolean,
    showNames: boolean,
    showValues: boolean,
    showIcons: boolean
): void
declare function LeaderboardGetItemCountBJ(lb: jleaderboard): number
declare function LeaderboardHasPlayerItemBJ(lb: jleaderboard, whichPlayer: jplayer): boolean
declare function ForceSetLeaderboardBJ(lb: jleaderboard, toForce: jforce): void
declare function CreateLeaderboardBJ(toForce: jforce, label: string): jleaderboard
declare function DestroyLeaderboardBJ(lb: jleaderboard): void
declare function LeaderboardDisplayBJ(show: boolean, lb: jleaderboard): void
declare function LeaderboardAddItemBJ(
    whichPlayer: jplayer,
    lb: jleaderboard,
    label: string,
    value: number
): void
declare function LeaderboardRemovePlayerItemBJ(whichPlayer: jplayer, lb: jleaderboard): void
declare function LeaderboardSortItemsBJ(
    lb: jleaderboard,
    sortType: number,
    ascending: boolean
): void
declare function LeaderboardSortItemsByPlayerBJ(lb: jleaderboard, ascending: boolean): void
declare function LeaderboardSortItemsByLabelBJ(lb: jleaderboard, ascending: boolean): void
declare function LeaderboardGetPlayerIndexBJ(whichPlayer: jplayer, lb: jleaderboard): number
declare function LeaderboardGetIndexedPlayerBJ(position: number, lb: jleaderboard): jplayer
declare function PlayerGetLeaderboardBJ(whichPlayer: jplayer): jleaderboard
declare function GetLastCreatedLeaderboard(): jleaderboard
declare function CreateMultiboardBJ(cols: number, rows: number, title: string): jmultiboard
declare function DestroyMultiboardBJ(mb: jmultiboard): void
declare function GetLastCreatedMultiboard(): jmultiboard
declare function MultiboardDisplayBJ(show: boolean, mb: jmultiboard): void
declare function MultiboardMinimizeBJ(minimize: boolean, mb: jmultiboard): void
declare function MultiboardSetTitleTextColorBJ(
    mb: jmultiboard,
    red: number,
    green: number,
    blue: number,
    transparency: number
): void
declare function MultiboardAllowDisplayBJ(flag: boolean): void
declare function MultiboardSetItemStyleBJ(
    mb: jmultiboard,
    col: number,
    row: number,
    showValue: boolean,
    showIcon: boolean
): void
declare function MultiboardSetItemValueBJ(
    mb: jmultiboard,
    col: number,
    row: number,
    val: string
): void
declare function MultiboardSetItemColorBJ(
    mb: jmultiboard,
    col: number,
    row: number,
    red: number,
    green: number,
    blue: number,
    transparency: number
): void
declare function MultiboardSetItemWidthBJ(
    mb: jmultiboard,
    col: number,
    row: number,
    width: number
): void
declare function MultiboardSetItemIconBJ(
    mb: jmultiboard,
    col: number,
    row: number,
    iconFileName: string
): void
declare function TextTagSize2Height(size: number): number
declare function TextTagSpeed2Velocity(speed: number): number
declare function SetTextTagColorBJ(
    tt: jtexttag,
    red: number,
    green: number,
    blue: number,
    transparency: number
): void
declare function SetTextTagVelocityBJ(tt: jtexttag, speed: number, angle: number): void
declare function SetTextTagTextBJ(tt: jtexttag, s: string, size: number): void
declare function SetTextTagPosBJ(tt: jtexttag, loc: jlocation, zOffset: number): void
declare function SetTextTagPosUnitBJ(tt: jtexttag, whichUnit: junit, zOffset: number): void
declare function SetTextTagSuspendedBJ(tt: jtexttag, flag: boolean): void
declare function SetTextTagPermanentBJ(tt: jtexttag, flag: boolean): void
declare function SetTextTagAgeBJ(tt: jtexttag, age: number): void
declare function SetTextTagLifespanBJ(tt: jtexttag, lifespan: number): void
declare function SetTextTagFadepointBJ(tt: jtexttag, fadepoint: number): void
declare function CreateTextTagLocBJ(
    s: string,
    loc: jlocation,
    zOffset: number,
    size: number,
    red: number,
    green: number,
    blue: number,
    transparency: number
): jtexttag
declare function CreateTextTagUnitBJ(
    s: string,
    whichUnit: junit,
    zOffset: number,
    size: number,
    red: number,
    green: number,
    blue: number,
    transparency: number
): jtexttag
declare function DestroyTextTagBJ(tt: jtexttag): void
declare function ShowTextTagForceBJ(show: boolean, tt: jtexttag, whichForce: jforce): void
declare function GetLastCreatedTextTag(): jtexttag
declare function PauseGameOn(): void
declare function PauseGameOff(): void
declare function SetUserControlForceOn(whichForce: jforce): void
declare function SetUserControlForceOff(whichForce: jforce): void
declare function ShowInterfaceForceOn(whichForce: jforce, fadeDuration: number): void
declare function ShowInterfaceForceOff(whichForce: jforce, fadeDuration: number): void
declare function PingMinimapForForce(
    whichForce: jforce,
    x: number,
    y: number,
    duration: number
): void
declare function PingMinimapLocForForce(whichForce: jforce, loc: jlocation, duration: number): void
declare function PingMinimapForPlayer(
    whichPlayer: jplayer,
    x: number,
    y: number,
    duration: number
): void
declare function PingMinimapLocForPlayer(
    whichPlayer: jplayer,
    loc: jlocation,
    duration: number
): void
declare function PingMinimapForForceEx(
    whichForce: jforce,
    x: number,
    y: number,
    duration: number,
    style: number,
    red: number,
    green: number,
    blue: number
): void
declare function PingMinimapLocForForceEx(
    whichForce: jforce,
    loc: jlocation,
    duration: number,
    style: number,
    red: number,
    green: number,
    blue: number
): void
declare function EnableWorldFogBoundaryBJ(enable: boolean, f: jforce): void
declare function EnableOcclusionBJ(enable: boolean, f: jforce): void
declare function CancelCineSceneBJ(): void
declare function TryInitCinematicBehaviorBJ(): void
declare function SetCinematicSceneBJ(
    soundHandle: jsound,
    portraitUnitId: number,
    color: jplayercolor,
    speakerTitle: string,
    text: string,
    sceneDuration: number,
    voiceoverDuration: number
): void
declare function GetTransmissionDuration(
    soundHandle: jsound,
    timeType: number,
    timeVal: number
): number
declare function WaitTransmissionDuration(
    soundHandle: jsound,
    timeType: number,
    timeVal: number
): void
declare function DoTransmissionBasicsXYBJ(
    unitId: number,
    color: jplayercolor,
    x: number,
    y: number,
    soundHandle: jsound,
    unitName: string,
    message: string,
    duration: number
): void
declare function TransmissionFromUnitWithNameBJ(
    toForce: jforce,
    whichUnit: junit,
    unitName: string,
    soundHandle: jsound,
    message: string,
    timeType: number,
    timeVal: number,
    wait: boolean
): void
declare function PlayDialogueFromSpeakerEx(
    toForce: jforce,
    speaker: junit,
    speakerType: number,
    soundHandle: jsound,
    timeType: number,
    timeVal: number,
    wait: boolean
): boolean
declare function PlayDialogueFromSpeakerTypeEx(
    toForce: jforce,
    fromPlayer: jplayer,
    speakerType: number,
    loc: jlocation,
    soundHandle: jsound,
    timeType: number,
    timeVal: number,
    wait: boolean
): boolean
declare function TransmissionFromUnitTypeWithNameBJ(
    toForce: jforce,
    fromPlayer: jplayer,
    unitId: number,
    unitName: string,
    loc: jlocation,
    soundHandle: jsound,
    message: string,
    timeType: number,
    timeVal: number,
    wait: boolean
): void
declare function GetLastTransmissionDurationBJ(): number
declare function ForceCinematicSubtitlesBJ(flag: boolean): void
declare function CinematicModeExBJ(
    cineMode: boolean,
    forForce: jforce,
    interfaceFadeTime: number
): void
declare function CinematicModeBJ(cineMode: boolean, forForce: jforce): void
declare function DisplayCineFilterBJ(flag: boolean): void
declare function CinematicFadeCommonBJ(
    red: number,
    green: number,
    blue: number,
    duration: number,
    tex: string,
    startTrans: number,
    endTrans: number
): void
declare function FinishCinematicFadeBJ(): void
declare function FinishCinematicFadeAfterBJ(duration: number): void
declare function ContinueCinematicFadeBJ(): void
declare function ContinueCinematicFadeAfterBJ(
    duration: number,
    red: number,
    green: number,
    blue: number,
    trans: number,
    tex: string
): void
declare function AbortCinematicFadeBJ(): void
declare function CinematicFadeBJ(
    fadetype: number,
    duration: number,
    tex: string,
    red: number,
    green: number,
    blue: number,
    trans: number
): void
declare function CinematicFilterGenericBJ(
    duration: number,
    bmode: jblendmode,
    tex: string,
    red0: number,
    green0: number,
    blue0: number,
    trans0: number,
    red1: number,
    green1: number,
    blue1: number,
    trans1: number
): void
declare function RescueUnitBJ(whichUnit: junit, rescuer: jplayer, changeColor: boolean): void
declare function TriggerActionUnitRescuedBJ(): void
declare function TryInitRescuableTriggersBJ(): void
declare function SetRescueUnitColorChangeBJ(changeColor: boolean): void
declare function SetRescueBuildingColorChangeBJ(changeColor: boolean): void
declare function MakeUnitRescuableToForceBJEnum(): void
declare function MakeUnitRescuableToForceBJ(
    whichUnit: junit,
    isRescuable: boolean,
    whichForce: jforce
): void
declare function InitRescuableBehaviorBJ(): void
declare function SetPlayerTechResearchedSwap(
    techid: number,
    levels: number,
    whichPlayer: jplayer
): void
declare function SetPlayerTechMaxAllowedSwap(
    techid: number,
    maximum: number,
    whichPlayer: jplayer
): void
declare function SetPlayerMaxHeroesAllowed(maximum: number, whichPlayer: jplayer): void
declare function GetPlayerTechCountSimple(techid: number, whichPlayer: jplayer): number
declare function GetPlayerTechMaxAllowedSwap(techid: number, whichPlayer: jplayer): number
declare function SetPlayerAbilityAvailableBJ(
    avail: boolean,
    abilid: number,
    whichPlayer: jplayer
): void
declare function SetCampaignMenuRaceBJ(campaignNumber: number): void
declare function SetMissionAvailableBJ(available: boolean, missionIndex: number): void
declare function SetCampaignAvailableBJ(available: boolean, campaignNumber: number): void
declare function SetCinematicAvailableBJ(available: boolean, cinematicIndex: number): void
declare function InitGameCacheBJ(campaignFile: string): jgamecache
declare function SaveGameCacheBJ(cache: jgamecache): boolean
declare function GetLastCreatedGameCacheBJ(): jgamecache
declare function InitHashtableBJ(): jhashtable
declare function GetLastCreatedHashtableBJ(): jhashtable
declare function StoreRealBJ(
    value: number,
    key: string,
    missionKey: string,
    cache: jgamecache
): void
declare function StoreIntegerBJ(
    value: number,
    key: string,
    missionKey: string,
    cache: jgamecache
): void
declare function StoreBooleanBJ(
    value: boolean,
    key: string,
    missionKey: string,
    cache: jgamecache
): void
declare function StoreStringBJ(
    value: string,
    key: string,
    missionKey: string,
    cache: jgamecache
): boolean
declare function StoreUnitBJ(
    whichUnit: junit,
    key: string,
    missionKey: string,
    cache: jgamecache
): boolean
declare function SaveRealBJ(value: number, key: number, missionKey: number, table: jhashtable): void
declare function SaveIntegerBJ(
    value: number,
    key: number,
    missionKey: number,
    table: jhashtable
): void
declare function SaveBooleanBJ(
    value: boolean,
    key: number,
    missionKey: number,
    table: jhashtable
): void
declare function SaveStringBJ(
    value: string,
    key: number,
    missionKey: number,
    table: jhashtable
): boolean
declare function SavePlayerHandleBJ(
    whichPlayer: jplayer,
    key: number,
    missionKey: number,
    table: jhashtable
): boolean
declare function SaveWidgetHandleBJ(
    whichWidget: jwidget,
    key: number,
    missionKey: number,
    table: jhashtable
): boolean
declare function SaveDestructableHandleBJ(
    whichDestructable: jdestructable,
    key: number,
    missionKey: number,
    table: jhashtable
): boolean
declare function SaveItemHandleBJ(
    whichItem: jitem,
    key: number,
    missionKey: number,
    table: jhashtable
): boolean
declare function SaveUnitHandleBJ(
    whichUnit: junit,
    key: number,
    missionKey: number,
    table: jhashtable
): boolean
declare function SaveAbilityHandleBJ(
    whichAbility: jability,
    key: number,
    missionKey: number,
    table: jhashtable
): boolean
declare function SaveTimerHandleBJ(
    whichTimer: jtimer,
    key: number,
    missionKey: number,
    table: jhashtable
): boolean
declare function SaveTriggerHandleBJ(
    whichTrigger: jtrigger,
    key: number,
    missionKey: number,
    table: jhashtable
): boolean
declare function SaveTriggerConditionHandleBJ(
    whichTriggercondition: jtriggercondition,
    key: number,
    missionKey: number,
    table: jhashtable
): boolean
declare function SaveTriggerActionHandleBJ(
    whichTriggeraction: jtriggeraction,
    key: number,
    missionKey: number,
    table: jhashtable
): boolean
declare function SaveTriggerEventHandleBJ(
    whichEvent: jevent,
    key: number,
    missionKey: number,
    table: jhashtable
): boolean
declare function SaveForceHandleBJ(
    whichForce: jforce,
    key: number,
    missionKey: number,
    table: jhashtable
): boolean
declare function SaveGroupHandleBJ(
    whichGroup: jgroup,
    key: number,
    missionKey: number,
    table: jhashtable
): boolean
declare function SaveLocationHandleBJ(
    whichLocation: jlocation,
    key: number,
    missionKey: number,
    table: jhashtable
): boolean
declare function SaveRectHandleBJ(
    whichRect: jrect,
    key: number,
    missionKey: number,
    table: jhashtable
): boolean
declare function SaveBooleanExprHandleBJ(
    whichBoolexpr: jboolexpr,
    key: number,
    missionKey: number,
    table: jhashtable
): boolean
declare function SaveSoundHandleBJ(
    whichSound: jsound,
    key: number,
    missionKey: number,
    table: jhashtable
): boolean
declare function SaveEffectHandleBJ(
    whichEffect: jeffect,
    key: number,
    missionKey: number,
    table: jhashtable
): boolean
declare function SaveUnitPoolHandleBJ(
    whichUnitpool: junitpool,
    key: number,
    missionKey: number,
    table: jhashtable
): boolean
declare function SaveItemPoolHandleBJ(
    whichItempool: jitempool,
    key: number,
    missionKey: number,
    table: jhashtable
): boolean
declare function SaveQuestHandleBJ(
    whichQuest: jquest,
    key: number,
    missionKey: number,
    table: jhashtable
): boolean
declare function SaveQuestItemHandleBJ(
    whichQuestitem: jquestitem,
    key: number,
    missionKey: number,
    table: jhashtable
): boolean
declare function SaveDefeatConditionHandleBJ(
    whichDefeatcondition: jdefeatcondition,
    key: number,
    missionKey: number,
    table: jhashtable
): boolean
declare function SaveTimerDialogHandleBJ(
    whichTimerdialog: jtimerdialog,
    key: number,
    missionKey: number,
    table: jhashtable
): boolean
declare function SaveLeaderboardHandleBJ(
    whichLeaderboard: jleaderboard,
    key: number,
    missionKey: number,
    table: jhashtable
): boolean
declare function SaveMultiboardHandleBJ(
    whichMultiboard: jmultiboard,
    key: number,
    missionKey: number,
    table: jhashtable
): boolean
declare function SaveMultiboardItemHandleBJ(
    whichMultiboarditem: jmultiboarditem,
    key: number,
    missionKey: number,
    table: jhashtable
): boolean
declare function SaveTrackableHandleBJ(
    whichTrackable: jtrackable,
    key: number,
    missionKey: number,
    table: jhashtable
): boolean
declare function SaveDialogHandleBJ(
    whichDialog: jdialog,
    key: number,
    missionKey: number,
    table: jhashtable
): boolean
declare function SaveButtonHandleBJ(
    whichButton: jbutton,
    key: number,
    missionKey: number,
    table: jhashtable
): boolean
declare function SaveTextTagHandleBJ(
    whichTexttag: jtexttag,
    key: number,
    missionKey: number,
    table: jhashtable
): boolean
declare function SaveLightningHandleBJ(
    whichLightning: jlightning,
    key: number,
    missionKey: number,
    table: jhashtable
): boolean
declare function SaveImageHandleBJ(
    whichImage: jimage,
    key: number,
    missionKey: number,
    table: jhashtable
): boolean
declare function SaveUbersplatHandleBJ(
    whichUbersplat: jubersplat,
    key: number,
    missionKey: number,
    table: jhashtable
): boolean
declare function SaveRegionHandleBJ(
    whichRegion: jregion,
    key: number,
    missionKey: number,
    table: jhashtable
): boolean
declare function SaveFogStateHandleBJ(
    whichFogState: jfogstate,
    key: number,
    missionKey: number,
    table: jhashtable
): boolean
declare function SaveFogModifierHandleBJ(
    whichFogModifier: jfogmodifier,
    key: number,
    missionKey: number,
    table: jhashtable
): boolean
declare function SaveAgentHandleBJ(
    whichAgent: jagent,
    key: number,
    missionKey: number,
    table: jhashtable
): boolean
declare function SaveHashtableHandleBJ(
    whichHashtable: jhashtable,
    key: number,
    missionKey: number,
    table: jhashtable
): boolean
declare function GetStoredRealBJ(key: string, missionKey: string, cache: jgamecache): number
declare function GetStoredIntegerBJ(key: string, missionKey: string, cache: jgamecache): number
declare function GetStoredBooleanBJ(key: string, missionKey: string, cache: jgamecache): boolean
declare function GetStoredStringBJ(key: string, missionKey: string, cache: jgamecache): string
declare function LoadRealBJ(key: number, missionKey: number, table: jhashtable): number
declare function LoadIntegerBJ(key: number, missionKey: number, table: jhashtable): number
declare function LoadBooleanBJ(key: number, missionKey: number, table: jhashtable): boolean
declare function LoadStringBJ(key: number, missionKey: number, table: jhashtable): string
declare function LoadPlayerHandleBJ(key: number, missionKey: number, table: jhashtable): jplayer
declare function LoadWidgetHandleBJ(key: number, missionKey: number, table: jhashtable): jwidget
declare function LoadDestructableHandleBJ(
    key: number,
    missionKey: number,
    table: jhashtable
): jdestructable
declare function LoadItemHandleBJ(key: number, missionKey: number, table: jhashtable): jitem
declare function LoadUnitHandleBJ(key: number, missionKey: number, table: jhashtable): junit
declare function LoadAbilityHandleBJ(key: number, missionKey: number, table: jhashtable): jability
declare function LoadTimerHandleBJ(key: number, missionKey: number, table: jhashtable): jtimer
declare function LoadTriggerHandleBJ(key: number, missionKey: number, table: jhashtable): jtrigger
declare function LoadTriggerConditionHandleBJ(
    key: number,
    missionKey: number,
    table: jhashtable
): jtriggercondition
declare function LoadTriggerActionHandleBJ(
    key: number,
    missionKey: number,
    table: jhashtable
): jtriggeraction
declare function LoadTriggerEventHandleBJ(
    key: number,
    missionKey: number,
    table: jhashtable
): jevent
declare function LoadForceHandleBJ(key: number, missionKey: number, table: jhashtable): jforce
declare function LoadGroupHandleBJ(key: number, missionKey: number, table: jhashtable): jgroup
declare function LoadLocationHandleBJ(key: number, missionKey: number, table: jhashtable): jlocation
declare function LoadRectHandleBJ(key: number, missionKey: number, table: jhashtable): jrect
declare function LoadBooleanExprHandleBJ(
    key: number,
    missionKey: number,
    table: jhashtable
): jboolexpr
declare function LoadSoundHandleBJ(key: number, missionKey: number, table: jhashtable): jsound
declare function LoadEffectHandleBJ(key: number, missionKey: number, table: jhashtable): jeffect
declare function LoadUnitPoolHandleBJ(key: number, missionKey: number, table: jhashtable): junitpool
declare function LoadItemPoolHandleBJ(key: number, missionKey: number, table: jhashtable): jitempool
declare function LoadQuestHandleBJ(key: number, missionKey: number, table: jhashtable): jquest
declare function LoadQuestItemHandleBJ(
    key: number,
    missionKey: number,
    table: jhashtable
): jquestitem
declare function LoadDefeatConditionHandleBJ(
    key: number,
    missionKey: number,
    table: jhashtable
): jdefeatcondition
declare function LoadTimerDialogHandleBJ(
    key: number,
    missionKey: number,
    table: jhashtable
): jtimerdialog
declare function LoadLeaderboardHandleBJ(
    key: number,
    missionKey: number,
    table: jhashtable
): jleaderboard
declare function LoadMultiboardHandleBJ(
    key: number,
    missionKey: number,
    table: jhashtable
): jmultiboard
declare function LoadMultiboardItemHandleBJ(
    key: number,
    missionKey: number,
    table: jhashtable
): jmultiboarditem
declare function LoadTrackableHandleBJ(
    key: number,
    missionKey: number,
    table: jhashtable
): jtrackable
declare function LoadDialogHandleBJ(key: number, missionKey: number, table: jhashtable): jdialog
declare function LoadButtonHandleBJ(key: number, missionKey: number, table: jhashtable): jbutton
declare function LoadTextTagHandleBJ(key: number, missionKey: number, table: jhashtable): jtexttag
declare function LoadLightningHandleBJ(
    key: number,
    missionKey: number,
    table: jhashtable
): jlightning
declare function LoadImageHandleBJ(key: number, missionKey: number, table: jhashtable): jimage
declare function LoadUbersplatHandleBJ(
    key: number,
    missionKey: number,
    table: jhashtable
): jubersplat
declare function LoadRegionHandleBJ(key: number, missionKey: number, table: jhashtable): jregion
declare function LoadFogStateHandleBJ(key: number, missionKey: number, table: jhashtable): jfogstate
declare function LoadFogModifierHandleBJ(
    key: number,
    missionKey: number,
    table: jhashtable
): jfogmodifier
declare function LoadHashtableHandleBJ(
    key: number,
    missionKey: number,
    table: jhashtable
): jhashtable
declare function RestoreUnitLocFacingAngleBJ(
    key: string,
    missionKey: string,
    cache: jgamecache,
    forWhichPlayer: jplayer,
    loc: jlocation,
    facing: number
): junit
declare function RestoreUnitLocFacingPointBJ(
    key: string,
    missionKey: string,
    cache: jgamecache,
    forWhichPlayer: jplayer,
    loc: jlocation,
    lookAt: jlocation
): junit
declare function GetLastRestoredUnitBJ(): junit
declare function FlushGameCacheBJ(cache: jgamecache): void
declare function FlushStoredMissionBJ(missionKey: string, cache: jgamecache): void
declare function FlushParentHashtableBJ(table: jhashtable): void
declare function FlushChildHashtableBJ(missionKey: number, table: jhashtable): void
declare function HaveStoredValue(
    key: string,
    valueType: number,
    missionKey: string,
    cache: jgamecache
): boolean
declare function HaveSavedValue(
    key: number,
    valueType: number,
    missionKey: number,
    table: jhashtable
): boolean
declare function ShowCustomCampaignButton(show: boolean, whichButton: number): void
declare function IsCustomCampaignButtonVisibile(whichButton: number): boolean
declare function SaveGameCheckPointBJ(mapSaveName: string, doCheckpointHint: boolean): void
declare function LoadGameBJ(loadFileName: string, doScoreScreen: boolean): void
declare function SaveAndChangeLevelBJ(
    saveFileName: string,
    newLevel: string,
    doScoreScreen: boolean
): void
declare function SaveAndLoadGameBJ(
    saveFileName: string,
    loadFileName: string,
    doScoreScreen: boolean
): void
declare function RenameSaveDirectoryBJ(sourceDirName: string, destDirName: string): boolean
declare function RemoveSaveDirectoryBJ(sourceDirName: string): boolean
declare function CopySaveGameBJ(sourceSaveName: string, destSaveName: string): boolean
declare function GetPlayerStartLocationX(whichPlayer: jplayer): number
declare function GetPlayerStartLocationY(whichPlayer: jplayer): number
declare function GetPlayerStartLocationLoc(whichPlayer: jplayer): jlocation
declare function GetRectCenter(whichRect: jrect): jlocation
declare function IsPlayerSlotState(whichPlayer: jplayer, whichState: jplayerslotstate): boolean
declare function GetFadeFromSeconds(seconds: number): number
declare function GetFadeFromSecondsAsReal(seconds: number): number
declare function AdjustPlayerStateSimpleBJ(
    whichPlayer: jplayer,
    whichPlayerState: jplayerstate,
    delta: number
): void
declare function AdjustPlayerStateBJ(
    delta: number,
    whichPlayer: jplayer,
    whichPlayerState: jplayerstate
): void
declare function SetPlayerStateBJ(
    whichPlayer: jplayer,
    whichPlayerState: jplayerstate,
    value: number
): void
declare function SetPlayerFlagBJ(
    whichPlayerFlag: jplayerstate,
    flag: boolean,
    whichPlayer: jplayer
): void
declare function SetPlayerTaxRateBJ(
    rate: number,
    whichResource: jplayerstate,
    sourcePlayer: jplayer,
    otherPlayer: jplayer
): void
declare function GetPlayerTaxRateBJ(
    whichResource: jplayerstate,
    sourcePlayer: jplayer,
    otherPlayer: jplayer
): number
declare function IsPlayerFlagSetBJ(whichPlayerFlag: jplayerstate, whichPlayer: jplayer): boolean
declare function AddResourceAmountBJ(delta: number, whichUnit: junit): void
declare function GetConvertedPlayerId(whichPlayer: jplayer): number
declare function ConvertedPlayer(convertedPlayerId: number): jplayer
declare function GetRectWidthBJ(r: jrect): number
declare function GetRectHeightBJ(r: jrect): number
declare function BlightGoldMineForPlayerBJ(goldMine: junit, whichPlayer: jplayer): junit
declare function BlightGoldMineForPlayer(goldMine: junit, whichPlayer: jplayer): junit
declare function GetLastHauntedGoldMine(): junit
declare function IsPointBlightedBJ(where: jlocation): boolean
declare function SetPlayerColorBJEnum(): void
declare function SetPlayerColorBJ(
    whichPlayer: jplayer,
    color: jplayercolor,
    changeExisting: boolean
): void
declare function SetPlayerUnitAvailableBJ(
    unitId: number,
    allowed: boolean,
    whichPlayer: jplayer
): void
declare function LockGameSpeedBJ(): void
declare function UnlockGameSpeedBJ(): void
declare function IssueTargetOrderBJ(whichUnit: junit, order: string, targetWidget: jwidget): boolean
declare function IssuePointOrderLocBJ(
    whichUnit: junit,
    order: string,
    whichLocation: jlocation
): boolean
declare function IssueTargetDestructableOrder(
    whichUnit: junit,
    order: string,
    targetWidget: jwidget
): boolean
declare function IssueTargetItemOrder(
    whichUnit: junit,
    order: string,
    targetWidget: jwidget
): boolean
declare function IssueImmediateOrderBJ(whichUnit: junit, order: string): boolean
declare function GroupTargetOrderBJ(
    whichGroup: jgroup,
    order: string,
    targetWidget: jwidget
): boolean
declare function GroupPointOrderLocBJ(
    whichGroup: jgroup,
    order: string,
    whichLocation: jlocation
): boolean
declare function GroupImmediateOrderBJ(whichGroup: jgroup, order: string): boolean
declare function GroupTargetDestructableOrder(
    whichGroup: jgroup,
    order: string,
    targetWidget: jwidget
): boolean
declare function GroupTargetItemOrder(
    whichGroup: jgroup,
    order: string,
    targetWidget: jwidget
): boolean
declare function GetDyingDestructable(): jdestructable
declare function SetUnitRallyPoint(whichUnit: junit, targPos: jlocation): void
declare function SetUnitRallyUnit(whichUnit: junit, targUnit: junit): void
declare function SetUnitRallyDestructable(whichUnit: junit, targDest: jdestructable): void
declare function SaveDyingWidget(): void
declare function SetBlightRectBJ(addBlight: boolean, whichPlayer: jplayer, r: jrect): void
declare function SetBlightRadiusLocBJ(
    addBlight: boolean,
    whichPlayer: jplayer,
    loc: jlocation,
    radius: number
): void
declare function GetAbilityName(abilcode: number): string
declare function MeleeStartingVisibility(): void
declare function MeleeStartingResources(): void
declare function ReducePlayerTechMaxAllowed(
    whichPlayer: jplayer,
    techId: number,
    limit: number
): void
declare function MeleeStartingHeroLimit(): void
declare function MeleeTrainedUnitIsHeroBJFilter(): boolean
declare function MeleeGrantItemsToHero(whichUnit: junit): void
declare function MeleeGrantItemsToTrainedHero(): void
declare function MeleeGrantItemsToHiredHero(): void
declare function MeleeGrantHeroItems(): void
declare function MeleeClearExcessUnit(): void
declare function MeleeClearNearbyUnits(x: number, y: number, range: number): void
declare function MeleeClearExcessUnits(): void
declare function MeleeEnumFindNearestMine(): void
declare function MeleeFindNearestMine(src: jlocation, range: number): junit
declare function MeleeRandomHeroLoc(
    p: jplayer,
    id1: number,
    id2: number,
    id3: number,
    id4: number,
    loc: jlocation
): junit
declare function MeleeGetProjectedLoc(
    src: jlocation,
    targ: jlocation,
    distance: number,
    deltaAngle: number
): jlocation
declare function MeleeGetNearestValueWithin(val: number, minVal: number, maxVal: number): number
declare function MeleeGetLocWithinRect(src: jlocation, r: jrect): jlocation
declare function MeleeStartingUnitsHuman(
    whichPlayer: jplayer,
    startLoc: jlocation,
    doHeroes: boolean,
    doCamera: boolean,
    doPreload: boolean
): void
declare function MeleeStartingUnitsOrc(
    whichPlayer: jplayer,
    startLoc: jlocation,
    doHeroes: boolean,
    doCamera: boolean,
    doPreload: boolean
): void
declare function MeleeStartingUnitsUndead(
    whichPlayer: jplayer,
    startLoc: jlocation,
    doHeroes: boolean,
    doCamera: boolean,
    doPreload: boolean
): void
declare function MeleeStartingUnitsNightElf(
    whichPlayer: jplayer,
    startLoc: jlocation,
    doHeroes: boolean,
    doCamera: boolean,
    doPreload: boolean
): void
declare function MeleeStartingUnitsUnknownRace(
    whichPlayer: jplayer,
    startLoc: jlocation,
    doHeroes: boolean,
    doCamera: boolean,
    doPreload: boolean
): void
declare function MeleeStartingUnits(): void
declare function MeleeStartingUnitsForPlayer(
    whichRace: jrace,
    whichPlayer: jplayer,
    loc: jlocation,
    doHeroes: boolean
): void
declare function PickMeleeAI(num: jplayer, s1: string, s2: string, s3: string): void
declare function MeleeStartingAI(): void
declare function LockGuardPosition(targ: junit): void
declare function MeleePlayerIsOpponent(playerIndex: number, opponentIndex: number): boolean
declare function MeleeGetAllyStructureCount(whichPlayer: jplayer): number
declare function MeleeGetAllyCount(whichPlayer: jplayer): number
declare function MeleeGetAllyKeyStructureCount(whichPlayer: jplayer): number
declare function MeleeDoDrawEnum(): void
declare function MeleeDoVictoryEnum(): void
declare function MeleeDoDefeat(whichPlayer: jplayer): void
declare function MeleeDoDefeatEnum(): void
declare function MeleeDoLeave(whichPlayer: jplayer): void
declare function MeleeRemoveObservers(): void
declare function MeleeCheckForVictors(): jforce
declare function MeleeCheckForLosersAndVictors(): void
declare function MeleeGetCrippledWarningMessage(whichPlayer: jplayer): string
declare function MeleeGetCrippledTimerMessage(whichPlayer: jplayer): string
declare function MeleeGetCrippledRevealedMessage(whichPlayer: jplayer): string
declare function MeleeExposePlayer(whichPlayer: jplayer, expose: boolean): void
declare function MeleeExposeAllPlayers(): void
declare function MeleeCrippledPlayerTimeout(): void
declare function MeleePlayerIsCrippled(whichPlayer: jplayer): boolean
declare function MeleeCheckForCrippledPlayers(): void
declare function MeleeCheckLostUnit(lostUnit: junit): void
declare function MeleeCheckAddedUnit(addedUnit: junit): void
declare function MeleeTriggerActionConstructCancel(): void
declare function MeleeTriggerActionUnitDeath(): void
declare function MeleeTriggerActionUnitConstructionStart(): void
declare function MeleeTriggerActionPlayerDefeated(): void
declare function MeleeTriggerActionPlayerLeft(): void
declare function MeleeTriggerActionAllianceChange(): void
declare function MeleeTriggerTournamentFinishSoon(): void
declare function MeleeWasUserPlayer(whichPlayer: jplayer): boolean
declare function MeleeTournamentFinishNowRuleA(multiplier: number): void
declare function MeleeTriggerTournamentFinishNow(): void
declare function MeleeInitVictoryDefeat(): void
declare function CheckInitPlayerSlotAvailability(): void
declare function SetPlayerSlotAvailable(whichPlayer: jplayer, control: jmapcontrol): void
declare function TeamInitPlayerSlots(teamCount: number): void
declare function MeleeInitPlayerSlots(): void
declare function FFAInitPlayerSlots(): void
declare function OneOnOneInitPlayerSlots(): void
declare function InitGenericPlayerSlots(): void
declare function SetDNCSoundsDawn(): void
declare function SetDNCSoundsDusk(): void
declare function SetDNCSoundsDay(): void
declare function SetDNCSoundsNight(): void
declare function InitDNCSounds(): void
declare function InitBlizzardGlobals(): void
declare function InitQueuedTriggers(): void
declare function InitMapRects(): void
declare function InitSummonableCaps(): void
declare function UpdateStockAvailability(whichItem: jitem): void
declare function UpdateEachStockBuildingEnum(): void
declare function UpdateEachStockBuilding(iType: jitemtype, iLevel: number): void
declare function PerformStockUpdates(): void
declare function StartStockUpdates(): void
declare function RemovePurchasedItem(): void
declare function InitNeutralBuildings(): void
declare function MarkGameStarted(): void
declare function DetectGameStarted(): void
declare function InitBlizzard(): void
declare function RandomDistReset(): void
declare function RandomDistAddItem(inID: number, inChance: number): void
declare function RandomDistChoose(): number
declare function UnitDropItem(inUnit: junit, inItemID: number): jitem
declare function WidgetDropItem(inWidget: jwidget, inItemID: number): jitem
declare function BlzIsLastInstanceObjectFunctionSuccessful(): boolean
declare function BlzSetAbilityBooleanFieldBJ(
    whichAbility: jability,
    whichField: jabilitybooleanfield,
    value: boolean
): void
declare function BlzSetAbilityIntegerFieldBJ(
    whichAbility: jability,
    whichField: jabilityintegerfield,
    value: number
): void
declare function BlzSetAbilityRealFieldBJ(
    whichAbility: jability,
    whichField: jabilityrealfield,
    value: number
): void
declare function BlzSetAbilityStringFieldBJ(
    whichAbility: jability,
    whichField: jabilitystringfield,
    value: string
): void
declare function BlzSetAbilityBooleanLevelFieldBJ(
    whichAbility: jability,
    whichField: jabilitybooleanlevelfield,
    level: number,
    value: boolean
): void
declare function BlzSetAbilityIntegerLevelFieldBJ(
    whichAbility: jability,
    whichField: jabilityintegerlevelfield,
    level: number,
    value: number
): void
declare function BlzSetAbilityRealLevelFieldBJ(
    whichAbility: jability,
    whichField: jabilityreallevelfield,
    level: number,
    value: number
): void
declare function BlzSetAbilityStringLevelFieldBJ(
    whichAbility: jability,
    whichField: jabilitystringlevelfield,
    level: number,
    value: string
): void
declare function BlzSetAbilityBooleanLevelArrayFieldBJ(
    whichAbility: jability,
    whichField: jabilitybooleanlevelarrayfield,
    level: number,
    index: number,
    value: boolean
): void
declare function BlzSetAbilityIntegerLevelArrayFieldBJ(
    whichAbility: jability,
    whichField: jabilityintegerlevelarrayfield,
    level: number,
    index: number,
    value: number
): void
declare function BlzSetAbilityRealLevelArrayFieldBJ(
    whichAbility: jability,
    whichField: jabilityreallevelarrayfield,
    level: number,
    index: number,
    value: number
): void
declare function BlzSetAbilityStringLevelArrayFieldBJ(
    whichAbility: jability,
    whichField: jabilitystringlevelarrayfield,
    level: number,
    index: number,
    value: string
): void
declare function BlzAddAbilityBooleanLevelArrayFieldBJ(
    whichAbility: jability,
    whichField: jabilitybooleanlevelarrayfield,
    level: number,
    value: boolean
): void
declare function BlzAddAbilityIntegerLevelArrayFieldBJ(
    whichAbility: jability,
    whichField: jabilityintegerlevelarrayfield,
    level: number,
    value: number
): void
declare function BlzAddAbilityRealLevelArrayFieldBJ(
    whichAbility: jability,
    whichField: jabilityreallevelarrayfield,
    level: number,
    value: number
): void
declare function BlzAddAbilityStringLevelArrayFieldBJ(
    whichAbility: jability,
    whichField: jabilitystringlevelarrayfield,
    level: number,
    value: string
): void
declare function BlzRemoveAbilityBooleanLevelArrayFieldBJ(
    whichAbility: jability,
    whichField: jabilitybooleanlevelarrayfield,
    level: number,
    value: boolean
): void
declare function BlzRemoveAbilityIntegerLevelArrayFieldBJ(
    whichAbility: jability,
    whichField: jabilityintegerlevelarrayfield,
    level: number,
    value: number
): void
declare function BlzRemoveAbilityRealLevelArrayFieldBJ(
    whichAbility: jability,
    whichField: jabilityreallevelarrayfield,
    level: number,
    value: number
): void
declare function BlzRemoveAbilityStringLevelArrayFieldBJ(
    whichAbility: jability,
    whichField: jabilitystringlevelarrayfield,
    level: number,
    value: string
): void
declare function BlzItemAddAbilityBJ(whichItem: jitem, abilCode: number): void
declare function BlzItemRemoveAbilityBJ(whichItem: jitem, abilCode: number): void
declare function BlzSetItemBooleanFieldBJ(
    whichItem: jitem,
    whichField: jitembooleanfield,
    value: boolean
): void
declare function BlzSetItemIntegerFieldBJ(
    whichItem: jitem,
    whichField: jitemintegerfield,
    value: number
): void
declare function BlzSetItemRealFieldBJ(
    whichItem: jitem,
    whichField: jitemrealfield,
    value: number
): void
declare function BlzSetItemStringFieldBJ(
    whichItem: jitem,
    whichField: jitemstringfield,
    value: string
): void
declare function BlzSetUnitBooleanFieldBJ(
    whichUnit: junit,
    whichField: junitbooleanfield,
    value: boolean
): void
declare function BlzSetUnitIntegerFieldBJ(
    whichUnit: junit,
    whichField: junitintegerfield,
    value: number
): void
declare function BlzSetUnitRealFieldBJ(
    whichUnit: junit,
    whichField: junitrealfield,
    value: number
): void
declare function BlzSetUnitStringFieldBJ(
    whichUnit: junit,
    whichField: junitstringfield,
    value: string
): void
declare function BlzSetUnitWeaponBooleanFieldBJ(
    whichUnit: junit,
    whichField: junitweaponbooleanfield,
    index: number,
    value: boolean
): void
declare function BlzSetUnitWeaponIntegerFieldBJ(
    whichUnit: junit,
    whichField: junitweaponintegerfield,
    index: number,
    value: number
): void
declare function BlzSetUnitWeaponRealFieldBJ(
    whichUnit: junit,
    whichField: junitweaponrealfield,
    index: number,
    value: number
): void
declare function BlzSetUnitWeaponStringFieldBJ(
    whichUnit: junit,
    whichField: junitweaponstringfield,
    index: number,
    value: string
): void
