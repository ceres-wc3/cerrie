import Handle from "./handle"
import Vector2 from "../vecmath/vec2"

const nativeRect = _G.Rect

class Rect extends Handle<jrect> {
    get minx(): number {
        return GetRectMinX(this.handle)
    }

    get miny(): number {
        return GetRectMinY(this.handle)
    }

    get maxx(): number {
        return GetRectMaxX(this.handle)
    }

    get maxy(): number {
        return GetRectMaxY(this.handle)
    }

    get width(): number {
        return this.maxx - this.minx
    }
    set width(v: number) {
        this.update(this.minx, this.miny, this.minx + v, this.maxy)
    }
    get height(): number {
        return this.maxy - this.miny
    }

    set height(v: number) {
        this.update(this.minx, this.miny, this.minx, this.maxy + v)
    }

    update(minx: number, miny: number, maxx: number, maxy: number): void {
        SetRect(this.handle, minx, miny, maxx, maxy)
    }

    anchorCenter(point: Vector2): void {
        const halfWidth = this.width / 2
        const halfHeight = this.height / 2
        this.update(
            point.x - halfWidth,
            point.y - halfHeight,
            point.x + halfWidth,
            point.y + halfWidth
        )
    }

    anchorTopLeft(point: Vector2): void {
        this.update(point.x, point.y - this.width, point.x + this.height, point.y)
    }

    anchorTopRight(point: Vector2): void {
        this.update(point.x - this.width, point.y - this.height, point.x, point.y)
    }

    anchorBotLeft(point: Vector2): void {
        this.update(point.x, point.y - this.height, point.x + this.width, point.y)
    }

    anchorBotRight(point: Vector2): void {
        this.update(point.x - this.width, point.y, point.x, point.y + this.height)
    }

    static fromMinMax(min: Vector2, max: Vector2): Rect {
        const handle = nativeRect(min.x, min.y, max.x, max.y)
        return Rect.getForHandle(handle)
    }

    static of(handle: jrect): Rect {
        return Rect.getForHandle(handle)
    }
}

export default Rect
