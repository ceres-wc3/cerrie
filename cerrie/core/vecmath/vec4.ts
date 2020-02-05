import { EPSILON } from "./common"

class Vector4 {
    static get zero(): Vector4 {
        return new Vector4([0, 0, 0, 0])
    }
    static get one(): Vector4 {
        return new Vector4([1, 1, 1, 1])
    }
    private _values: [number, number, number, number] = [0, 0, 0, 0]
    get x(): number {
        return this._values[0]
    }
    set x(value: number) {
        this._values[0] = value
    }

    get y(): number {
        return this._values[1]
    }
    set y(value: number) {
        this._values[1] = value
    }

    get z(): number {
        return this._values[2]
    }
    set z(value: number) {
        this._values[2] = value
    }

    get w(): number {
        return this._values[3]
    }
    set w(value: number) {
        this._values[3] = value
    }

    get xy(): number[] {
        return [this._values[0], this._values[1]]
    }
    set xy(values: number[]) {
        this._values[0] = values[0]
        this._values[1] = values[1]
    }

    get xyz(): number[] {
        return [this._values[0], this._values[1], this._values[2]]
    }
    set xyz(values: number[]) {
        this._values[0] = values[0]
        this._values[1] = values[1]
        this._values[2] = values[2]
    }

    get xyzw(): number[] {
        return [this._values[0], this._values[1], this._values[2], this._values[3]]
    }
    set xyzw(values: number[]) {
        this._values[0] = values[0]
        this._values[1] = values[1]
        this._values[2] = values[2]
        this._values[3] = values[3]
    }

    get r(): number {
        return this._values[0]
    }
    set r(value: number) {
        this._values[0] = value
    }

    get g(): number {
        return this._values[1]
    }
    set g(value: number) {
        this._values[1] = value
    }

    get b(): number {
        return this._values[2]
    }
    set b(value: number) {
        this._values[2] = value
    }

    get a(): number {
        return this._values[3]
    }
    set a(value: number) {
        this._values[3] = value
    }

    get rg(): number[] {
        return [this._values[0], this._values[1]]
    }
    set rg(values: number[]) {
        this._values[0] = values[0]
        this._values[1] = values[1]
    }

    get rgb(): number[] {
        return [this._values[0], this._values[1], this._values[2]]
    }
    set rgb(values: number[]) {
        this._values[0] = values[0]
        this._values[1] = values[1]
        this._values[2] = values[2]
    }

    get rgba(): number[] {
        return [this._values[0], this._values[1], this._values[2], this._values[3]]
    }
    set rgba(values: number[]) {
        this._values[0] = values[0]
        this._values[1] = values[1]
        this._values[2] = values[2]
        this._values[3] = values[3]
    }

    constructor(values?: number[]) {
        if (values) {
            this.xyzw = values
        }
    }

    static lerp(a: Vector4, b: Vector4, t: number, dest?: Vector4): Vector4 {
        if (!dest) dest = new Vector4()
        dest.x = a.x + t * (b.x - a.x)
        dest.y = a.y + t * (b.y - a.y)
        dest.z = a.z + t * (b.z - a.z)
        dest.w = a.w + t * (b.w - a.w)
        return dest
    }
    static sum(vector: Vector4, vector2: Vector4, dest?: Vector4): Vector4 {
        if (!dest) dest = new Vector4()

        dest.x = vector.x + vector2.x
        dest.y = vector.y + vector2.y
        dest.z = vector.z + vector2.z
        dest.w = vector.w + vector2.w

        return dest
    }
    static difference(vector: Vector4, vector2: Vector4, dest?: Vector4): Vector4 {
        if (!dest) dest = new Vector4()

        dest.x = vector.x - vector2.x
        dest.y = vector.y - vector2.y
        dest.z = vector.z - vector2.z
        dest.w = vector.w - vector2.w

        return dest
    }
    static product(vector: Vector4, vector2: Vector4, dest?: Vector4): Vector4 {
        if (!dest) dest = new Vector4()

        dest.x = vector.x * vector2.x
        dest.y = vector.y * vector2.y
        dest.z = vector.z * vector2.z
        dest.w = vector.w * vector2.w

        return dest
    }
    static quotient(vector: Vector4, vector2: Vector4, dest?: Vector4): Vector4 {
        if (!dest) dest = new Vector4()

        dest.x = vector.x / vector2.x
        dest.y = vector.y / vector2.y
        dest.z = vector.z / vector2.z
        dest.w = vector.w / vector2.w

        return dest
    }

    at(index: number): number {
        return this._values[index]
    }
    reset(): void {
        this.xyzw = [0, 0, 0, 0]
    }
    copy(dest?: Vector4): Vector4 {
        if (!dest) dest = new Vector4()
        dest.xyzw = this.xyzw
        return dest
    }
    negate(dest?: Vector4): Vector4 {
        if (!dest) dest = this
        dest.x = -this.x
        dest.y = -this.y
        dest.z = -this.z
        dest.w = -this.w
        return dest
    }
    equals(vector: Vector4, threshold = EPSILON): boolean {
        if (Math.abs(this.x - vector.x) > threshold) {
            return false
        }
        if (Math.abs(this.y - vector.y) > threshold) {
            return false
        }
        if (Math.abs(this.z - vector.z) > threshold) {
            return false
        }
        if (Math.abs(this.w - vector.w) > threshold) {
            return false
        }
        return true
    }
    length(): number {
        return Math.sqrt(this.squaredLength())
    }
    squaredLength(): number {
        const x = this.x
        const y = this.y
        const z = this.z
        const w = this.w

        return x * x + y * y + z * z + w * w
    }
    add(vector: Vector4, dest?: Vector4): Vector4 {
        if (!dest) dest = this
        dest.x = this.x + vector.x
        dest.y = this.y + vector.y
        dest.z = this.z + vector.z
        dest.w = this.w + vector.w
        return dest
    }
    subtract(vector: Vector4, dest?: Vector4): Vector4 {
        if (!dest) dest = this
        dest.x = this.x - vector.x
        dest.y = this.y - vector.y
        dest.z = this.z - vector.z
        dest.w = this.w - vector.w
        return dest
    }
    multiply(vector: Vector4, dest?: Vector4): Vector4 {
        if (!dest) dest = this
        dest.x = this.x * vector.x
        dest.y = this.y * vector.y
        dest.z = this.z * vector.z
        dest.w = this.w * vector.w
        return dest
    }
    divide(vector: Vector4, dest?: Vector4): Vector4 {
        if (!dest) dest = this
        dest.x = this.x / vector.x
        dest.y = this.y / vector.y
        dest.z = this.z / vector.z
        dest.w = this.w / vector.w
        return dest
    }
    scale(value: number, dest?: Vector4): Vector4 {
        if (!dest) dest = this
        dest.x = this.x * value
        dest.y = this.y * value
        dest.z = this.z * value
        dest.w = this.w * value
        return dest
    }
    normalize(dest?: Vector4): Vector4 {
        if (!dest) dest = this

        dest.xyzw = this.xyzw

        let length = dest.length()

        if (length === 1) {
            return dest
        }

        if (length === 0) {
            dest.x *= 0
            dest.y *= 0
            dest.z *= 0
            dest.w *= 0

            return dest
        }

        length = 1.0 / length

        dest.x *= length
        dest.y *= length
        dest.z *= length
        dest.w *= length

        return dest
    }
    // TODO: Multiply by Matrix4
}

export default Vector4
