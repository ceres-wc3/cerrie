import Handle from "./handle"
import Rect from "./rect"
import Unit from "./unit"

class Region extends Handle<jregion> {
    private enterTrigger?: jtrigger
    private onEnterCallbacks: ((unit: Unit) => void)[] = []

    addRect(rect: Rect): void {
        RegionAddRect(this.handle, rect.handle)
    }

    clearRect(rect: Rect): void {
        RegionClearRect(this.handle, rect.handle)
    }

    registerEnter(callback: (entering: Unit) => void): void {
        if (this.enterTrigger == undefined) {
            const trigger = CreateTrigger()
            TriggerAddAction(trigger, () => {
                for (const callback of this.onEnterCallbacks) {
                    callback(Unit.of(GetEnteringUnit()))
                }
            })
            TriggerRegisterEnterRegion(trigger, this.handle, (undefined as unknown) as jboolexpr)
            this.enterTrigger = trigger
        }

        this.onEnterCallbacks.push(callback)
    }

    clearCallbacks(): void {
        this.onEnterCallbacks.length = 0
    }

    static of(handle: jregion): Region {
        return Region.getForHandle(handle)
    }

    static create(): Region {
        const handle = CreateRegion()
        return Region.getForHandle(handle)
    }
}

ceres.addHook("reload::before", () => {
    for (const region of Region.getAllHandles<Region>()) {
        region.clearCallbacks()
    }
})

Region.init()

export default Region
