import Handle from "./handle"
import Player from "./player"

type AnyEventCallback = (...args: Vararg<any[]>) => void
type Collector<C extends AnyEventCallback> = () => Parameters<C>

export namespace FrameEvents {
    export class FrameEvent<C extends AnyEventCallback> {
        eventtype: jframeeventtype
        collector?: Collector<C>

        constructor(eventtype: jframeeventtype, collector?: Collector<C>) {
            this.eventtype = eventtype
            this.collector = collector
        }
    }

    export const MouseUp = new FrameEvent<() => void>(FRAMEEVENT_MOUSE_UP)
    export const MouseDown = new FrameEvent<() => void>(FRAMEEVENT_MOUSE_DOWN)
}

class Frame extends Handle<jframehandle> {
    private eventTriggers: jtrigger[] = []

    get visible(): boolean {
        return BlzFrameIsVisible(this.handle)
    }

    set visible(v: boolean) {
        BlzFrameSetVisible(this.handle, v)
    }

    get enabled(): boolean {
        return BlzFrameGetEnable(this.handle)
    }

    set enabled(v: boolean) {
        BlzFrameSetEnable(this.handle, v)
    }

    get parent(): Frame {
        return Frame.of(BlzFrameGetParent(this.handle))
    }

    set parent(v: Frame) {
        BlzFrameSetParent(this.handle, v.handle)
    }

    get text(): string {
        return BlzFrameGetText(this.handle)
    }

    set text(v: string) {
        BlzFrameSetText(this.handle, v)
    }

    get name(): string {
        return BlzFrameGetName(this.handle)
    }

    clearAllPoints(): void {
        BlzFrameClearAllPoints(this.handle)
    }

    setSize(width: number, height: number): void {
        BlzFrameSetSize(this.handle, width, height)
    }

    setPoint(
        pointType: jframepointtype,
        relative: Frame,
        relativePointType: jframepointtype,
        x: number,
        y: number
    ): void {
        BlzFrameSetPoint(this.handle, pointType, relative.handle, relativePointType, x, y)
    }

    setAbsPoint(pointType: jframepointtype, x: number, y: number): void {
        BlzFrameSetAbsPoint(this.handle, pointType, x, y)
    }

    setAllPoints(other: Frame): void {
        BlzFrameSetAllPoints(this.handle, other.handle)
    }

    setFont(filename: string, height: number, flags: number): void {
        BlzFrameSetFont(this.handle, filename, height, flags)
    }

    setTextAlignment(vert: jtextaligntype, horiz: jtextaligntype): void {
        BlzFrameSetTextAlignment(this.handle, vert, horiz)
    }

    click(): void {
        BlzFrameClick(this.handle)
    }

    registerEvent<C extends AnyEventCallback>(
        event: FrameEvents.FrameEvent<C>,
        callback: (player: Player, ...args: Parameters<C>) => void
    ): void {
        const t = CreateTrigger()
        const collector = event.collector
        TriggerAddAction(
            t,
            ceres.wrapSafeCall(() => {
                const p = Player.of(GetTriggerPlayer())
                if (collector != undefined) {
                    callback(p, ...collector())
                } else {
                    ;(callback as (p: Player) => void)(p)
                }
            })
        )
        BlzTriggerRegisterFrameEvent(t, this.handle, event.eventtype)
        this.eventTriggers.push(t)
    }

    static createSimple(name: string, parent: Frame, createContext: number): Frame {
        return Frame.of(BlzCreateSimpleFrame(name, parent.handle, createContext))
    }

    static create(name: string, parent: Frame, priority: number, createContext: number): Frame {
        return Frame.of(BlzCreateFrame(name, parent.handle, priority, createContext))
    }

    static byName(name: string, context: number): Frame {
        return Frame.of(BlzGetFrameByName(name, context))
    }

    static byOrigin(origintype: joriginframetype, index: number): Frame {
        return Frame.of(BlzGetOriginFrame(origintype, index))
    }

    static of(handle: jframehandle): Frame {
        return Frame.getForHandle(handle)
    }

    destroy(): void {
        super.destroy()
        for (const t of this.eventTriggers) {
            DestroyTrigger(t)
        }
        BlzDestroyFrame(this.handle)
    }
}

Frame.init()

export default Frame
