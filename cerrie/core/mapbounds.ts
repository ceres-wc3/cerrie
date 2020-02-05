import Rect from "./types/rect"
import Region from "./types/region"

const context = util.contextFn("mapbounds", () => {
    const playable = Rect.of(GetPlayableMapRect())
    const bounds = Rect.of(GetWorldBounds())

    const playableRegion = Region.create()
    const boundsRegion = Region.create()
    playableRegion.addRect(playable)
    boundsRegion.addRect(bounds)

    return {
        playable: playable,
        bounds: bounds,
        playableRegion: playableRegion,
        boundsRegion: boundsRegion
    }
})

export function playableRect(): Rect {
    return context.playable
}

export function playableRegion(): Region {
    return context.playableRegion
}

export function wholeRect(): Rect {
    return context.bounds
}

export function wholeRegion(): Region {
    return context.boundsRegion
}
