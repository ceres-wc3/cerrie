import Player from "./types/player"

const context = util.contextFn("game", () => {
    const tracker = CreateTimer()
    TimerStart(tracker, 60 * 60 * 24 * 365, false, undefined)
    return {
        tracker: tracker
    }
})

export function elapsedTime(): number {
    return TimerGetElapsed(context.tracker)
}

export function isSinglePlayer(): boolean {
    let count = 0
    for (const player of Player.all) {
        if (player.isHuman && player.isPlaying) {
            count++
        }
    }
    return count == 1
}
