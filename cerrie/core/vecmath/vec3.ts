import { EPSILON } from "./common"

class Vector3 {
    static get zero(): Vector3 {
        return new Vector3([0, 0, 0])
    }
    static get one(): Vector3 {
        return new Vector3([1, 1, 1])
    }
    static get up(): Vector3 {
        return new Vector3([0, 1, 0])
    }
    static get down(): Vector3 {
        return new Vector3([0, -1, 0])
    }
    static get right(): Vector3 {
        return new Vector3([1, 0, 0])
    }
    static get left(): Vector3 {
        return new Vector3([-1, 0, 0])
    }
    static get forward(): Vector3 {
        return new Vector3([0, 0, 1])
    }
    static get backward(): Vector3 {
        return new Vector3([0, 0, -1])
    }
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
    private _values: [number, number, number] = [0, 0, 0]
    constructor(values?: number[]) {
        if (values) {
            this.xyz = values
        }
    }
    static cross(vector: Vector3, vector2: Vector3, dest?: Vector3): Vector3 {
        if (!dest) dest = new Vector3()

        const x = vector.x
        const y = vector.y
        const z = vector.z

        const x2 = vector2.x
        const y2 = vector2.y
        const z2 = vector2.z

        dest.x = y * z2 - z * y2
        dest.y = z * x2 - x * z2
        dest.z = x * y2 - y * x2

        return dest
    }
    static dot(vector: Vector3, vector2: Vector3): number {
        const x = vector.x
        const y = vector.y
        const z = vector.z

        const x2 = vector2.x
        const y2 = vector2.y
        const z2 = vector2.z

        return x * x2 + y * y2 + z * z2
    }
    static distance(vector: Vector3, vector2: Vector3): number {
        return Math.sqrt(this.squaredDistance(vector, vector2))
    }
    static squaredDistance(vector: Vector3, vector2: Vector3): number {
        const x = vector2.x - vector.x
        const y = vector2.y - vector.y
        const z = vector2.z - vector.z
        return x * x + y * y + z * z
    }
    static direction(vector: Vector3, vector2: Vector3, dest?: Vector3): Vector3 {
        if (!dest) dest = new Vector3()

        const x = vector.x - vector2.x
        const y = vector.y - vector2.y
        const z = vector.z - vector2.z

        let length = Math.sqrt(x * x + y * y + z * z)

        if (length === 0) {
            dest.x = 0
            dest.y = 0
            dest.z = 0

            return dest
        }

        length = 1 / length

        dest.x = x * length
        dest.y = y * length
        dest.z = z * length

        return dest
    }
    static lerp(a: Vector3, b: Vector3, t: number, dest?: Vector3): Vector3 {
        if (!dest) dest = new Vector3()
        dest.x = a.x + t * (b.x - a.x)
        dest.y = a.y + t * (b.y - a.y)
        dest.z = a.z + t * (b.z - a.z)
        return dest
    }
    static sum(vector: Vector3, vector2: Vector3, dest?: Vector3): Vector3 {
        if (!dest) dest = new Vector3()
        dest.x = vector.x + vector2.x
        dest.y = vector.y + vector2.y
        dest.z = vector.z + vector2.z
        return dest
    }
    static difference(vector: Vector3, vector2: Vector3, dest?: Vector3): Vector3 {
        if (!dest) dest = new Vector3()
        dest.x = vector.x - vector2.x
        dest.y = vector.y - vector2.y
        dest.z = vector.z - vector2.z
        return dest
    }
    static product(vector: Vector3, vector2: Vector3, dest?: Vector3): Vector3 {
        if (!dest) dest = new Vector3()
        dest.x = vector.x * vector2.x
        dest.y = vector.y * vector2.y
        dest.z = vector.z * vector2.z
        return dest
    }
    static quotient(vector: Vector3, vector2: Vector3, dest?: Vector3): Vector3 {
        if (!dest) dest = new Vector3()
        dest.x = vector.x / vector2.x
        dest.y = vector.y / vector2.y
        dest.z = vector.z / vector2.z
        return dest
    }
    at(index: number): number {
        return this._values[index]
    }
    reset(): void {
        this.xyz = [0, 0, 0]
    }
    copy(dest?: Vector3): Vector3 {
        if (!dest) dest = new Vector3()
        dest.xyz = this.xyz
        return dest
    }
    negate(dest?: Vector3): Vector3 {
        if (!dest) dest = this

        dest.x = -this.x
        dest.y = -this.y
        dest.z = -this.z

        return dest
    }
    equals(other: Vector3, threshold = EPSILON): boolean {
        if (Math.abs(this.x - other.x) > threshold) {
            return false
        }
        if (Math.abs(this.y - other.y) > threshold) {
            return false
        }
        if (Math.abs(this.z - other.z) > threshold) {
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
        return x * x + y * y + z * z
    }
    add(vector: Vector3, dest?: Vector3): Vector3 {
        if (!dest) dest = this
        dest.x = this.x + vector.x
        dest.y = this.y + vector.y
        dest.z = this.z + vector.z
        return dest
    }
    subtract(vector: Vector3, dest?: Vector3): Vector3 {
        if (!dest) dest = this
        dest.x = this.x - vector.x
        dest.y = this.y - vector.y
        dest.z = this.z - vector.z
        return dest
    }
    multiply(vector: Vector3, dest?: Vector3): Vector3 {
        if (!dest) dest = this
        dest.x = this.x * vector.x
        dest.y = this.y * vector.y
        dest.z = this.z * vector.z
        return dest
    }
    divide(vector: Vector3, dest?: Vector3): Vector3 {
        if (!dest) dest = this
        dest.x = this.x / vector.x
        dest.y = this.y / vector.y
        dest.z = this.z / vector.z
        return dest
    }
    scale(value: number, dest?: Vector3): Vector3 {
        if (!dest) dest = this
        dest.x = this.x * value
        dest.y = this.y * value
        dest.z = this.z * value
        return dest
    }
    normalize(dest?: Vector3): Vector3 {
        if (!dest) dest = this
        dest.xyz = this.xyz
        let length = dest.length()
        if (length === 1) {
            return dest
        }
        if (length === 0) {
            dest.reset()
            return dest
        }
        length = 1.0 / length
        dest.x *= length
        dest.y *= length
        dest.z *= length
        return dest
    }
    // TODO: multiply by Matrix3
    // TODO: multiply by Quaternion
    // TODO: convert to Quaternion
}

export default Vector3
