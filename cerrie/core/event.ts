/* eslint-disable @typescript-eslint/no-explicit-any */
export type AnyEventCallback = (...args: Vararg<any[]>) => void

const context = util.context("event", {
    hooks: new Map<string, Array<AnyEventCallback>>()
})

export class Event<C extends AnyEventCallback> {
    private _1?: C
    private _id: string

    constructor(id: string) {
        this._id = id
    }

    register(callback: (...args: Parameters<C>) => void): void {
        const id = this._id

        if (!context.hooks.has(id)) {
            context.hooks.set(id, [])
        }

        const hooks = context.hooks.get(id)!
        hooks.push(callback as AnyEventCallback)
        Event.call(OnRegister, this)
    }

    static call<C extends AnyEventCallback>(event: Event<C>, ...args: Vararg<Parameters<C>>): void {
        const id = (event as any)._id
        const hooks = context.hooks.get(id)
        if (hooks != undefined) {
            for (const hook of hooks) {
                hook(...args)
            }
        }
    }
}

export const OnRegister = new Event<(event: Event<AnyEventCallback>) => void>("e/register")

ceres.addHook("reload::before", () => {
    for (const [, hooks] of context.hooks.entries()) {
        hooks.length = 0
    }
})
