import { elapsedTime } from "./game"

class Timer implements Destroyable {
    private scheduledTime: number
    private period?: number
    private callback: (this: void) => void

    private static context = util.contextFn("timer", () => {
        Timer.initialize()

        return {
            scheduled: [] as Timer[]
        }
    })

    private constructor(scheduledTime: number, callback: () => void) {
        this.scheduledTime = scheduledTime
        this.callback = callback
    }

    destroy(): void {
        const scheduled = Timer.context.scheduled
        for (let i = 0; i < scheduled.length; i++) {
            if (scheduled[i] == this) {
                // performance workaround...
                table.remove(scheduled, i + 1)
            }
        }
    }

    static simple(timeout: number, callback: () => void): Timer {
        const timer = new Timer(elapsedTime() + timeout, ceres.wrapSafeCall(callback))
        timer.schedule()
        return timer
    }

    static periodic(period: number, callback: () => void): Timer {
        const timer = new Timer(elapsedTime() + period, ceres.wrapSafeCall(callback))
        timer.period = period
        timer.schedule()
        return timer
    }

    private schedule(): void {
        const scheduledTime = this.scheduledTime
        const scheduled = Timer.context.scheduled

        for (let i = scheduled.length - 1; i >= 0; i--) {
            if (scheduled[i].scheduledTime > scheduledTime) {
                // apparently, there's no efficient way of doing this in TS
                // without using splice...
                table.insert(scheduled, i + 1 + 1, this)
                return
            }
        }

        table.insert(scheduled, 1, this)
    }

    private static initialize(): void {
        const t = CreateTimer()
        TimerStart(t, 1 / 128, true, () => {
            const elapsed = elapsedTime()
            const toReschedule: Timer[] = []
            const scheduled = Timer.context.scheduled

            for (let i = scheduled.length - 1; i >= 0; i--) {
                const currentTimer = scheduled[i]
                if (currentTimer.scheduledTime <= elapsed) {
                    delete scheduled[i]
                    currentTimer.callback()

                    if (currentTimer.period != undefined) {
                        currentTimer.scheduledTime = elapsed + currentTimer.period
                        toReschedule.push(currentTimer)
                    }
                } else {
                    break
                }
            }

            for (const v of toReschedule) {
                v.schedule()
            }
        })
    }
}

export default Timer
