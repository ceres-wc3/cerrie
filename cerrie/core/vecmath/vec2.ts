import { EPSILON } from "./common"
import Vector3 from "./vec3"

class Vector2 {
    /**
     * Retrieves a new instance of the vector (0, 0)
     * @returns {Vector2} The zero vector
     */
    static get zero(): Vector2 {
        return new Vector2([0, 0])
    }

    private _values: [number, number] = [0, 0]

    /**
     * @returns {number} The x-component of the vector
     */
    get x(): number {
        return this._values[0]
    }

    /**
     * @param {number} value The new x-component of the vector
     */
    set x(value: number) {
        this._values[0] = value
    }

    /**
     * @returns {number} The y-component of the vectory
     */
    get y(): number {
        return this._values[1]
    }

    /**
     * @param {number} value The new y-component of the vector
     */
    set y(value: number) {
        this._values[1] = value
    }

    /**
     * @returns {number[]} An array containing the x-component and y-component of the vector
     */
    get xy(): number[] {
        return [this._values[0], this._values[1]]
    }

    /**
     * @param {number[]} values An array containing the new x-component and y-component of the vector
     */
    set xy(values: number[]) {
        this._values[0] = values[0]
        this._values[1] = values[1]
    }
    constructor(values?: number[]) {
        if (values) {
            this.xy = values
        }
    }

    static cross(vector: Vector2, vector2: Vector2, dest?: Vector3): Vector3 {
        if (!dest) dest = new Vector3()
        const x = vector.x
        const y = vector.y
        const x2 = vector2.x
        const y2 = vector2.y
        const z = x * y2 - y * x2
        dest.xyz = [0, 0, z]
        return dest
    }

    /**
     * Calculates the dot product of two vectors
     * @param {Vector2} vector
     * @param {Vector2} vector2
     * @returns {number} The dot product of the two vectors
     */
    static dot(vector: Vector2, vector2: Vector2): number {
        return vector.x * vector2.x + vector.y * vector2.y
    }

    /**
     * Calculates the distance between two vectors
     * @param {Vector2} vector
     * @param {Vector2} vector2
     * @returns {number} The distance between the two vectors
     */
    static distance(vector: Vector2, vector2: Vector2): number {
        return Math.sqrt(this.squaredDistance(vector, vector2))
    }

    /**
     * Calculates the distance between two vectors squared
     * @param {Vector2} vector
     * @param {Vector2} vector2
     * @returns {number} The distance between the two vectors
     */
    static squaredDistance(vector: Vector2, vector2: Vector2): number {
        const x = vector2.x - vector.x
        const y = vector2.y - vector.y
        return x * x + y * y
    }

    /**
     * Calculates a normalized vector representing the direction from one vector to another.
     * If no dest vector is specified, a new vector is instantiated.
     * @param {Vector2} vector
     * @param {Vector2} vector2
     * @param {Vector2} dest
     * @returns {Vector2}
     */
    static direction(vector: Vector2, vector2: Vector2, dest?: Vector2): Vector2 {
        if (!dest) dest = new Vector2()
        const x = vector.x - vector2.x
        const y = vector.y - vector2.y
        let length = Math.sqrt(x * x + y * y)
        if (length === 0) {
            dest.reset()
            return dest
        }
        length = 1.0 / length
        dest.x = x * length
        dest.y = y * length
        return dest
    }

    /**
     * Performs a linear interpolation over two vectors.
     * If no dest vector is specified, a new vector is instantiated.
     * @param {Vector2} a
     * @param {Vector2} b
     * @param {number} t
     * @param {Vector2} dest
     * @returns {Vector2}
     */
    static lerp(a: Vector2, b: Vector2, t: number, dest?: Vector2): Vector2 {
        if (!dest) dest = new Vector2()
        dest.x = a.x + t * (b.x - a.x)
        dest.y = a.y + t * (b.y - a.y)
        return dest
    }

    /**
     * Adds two vectors.
     * If no dest vector is specified, a new vector is instantiated.
     * @param {Vector2} vector
     * @param {Vector2} vector2
     * @param {Vector2} dest
     * @returns {Vector2}
     */
    static sum(vector: Vector2, vector2: Vector2, dest?: Vector2): Vector2 {
        if (!dest) dest = new Vector2()
        dest.x = vector.x + vector2.x
        dest.y = vector.y + vector2.y
        return dest
    }

    /**
     * Subtracts two vectors.
     * If no dest vector is specified, a new vector is instantiated.
     * @param {Vector2} vector
     * @param {Vector2} vector2
     * @param {Vector2} dest
     * @returns {Vector2}
     */
    static difference(vector: Vector2, vector2: Vector2, dest?: Vector2): Vector2 {
        if (!dest) dest = new Vector2()

        dest.x = vector.x - vector2.x
        dest.y = vector.y - vector2.y

        return dest
    }

    /**
     * Multiplies two vectors piecewise.
     * If no dest vector is specified, a new vector is instantiated.
     * @param {Vector2} vector
     * @param {Vector2} vector2
     * @param {Vector2} dest
     * @returns {Vector2}
     */
    static product(vector: Vector2, vector2: Vector2, dest?: Vector2): Vector2 {
        if (!dest) dest = new Vector2()

        dest.x = vector.x * vector2.x
        dest.y = vector.y * vector2.y

        return dest
    }

    /**
     * Divides two vectors piecewise.
     * If no dest vector is specified, a new vector is instantiated.
     * @param {Vector2} vector
     * @param {Vector2} vector2
     * @param {Vector2} dest
     * @returns {Vector2}
     */
    static quotient(vector: Vector2, vector2: Vector2, dest?: Vector2): Vector2 {
        if (!dest) dest = new Vector2()

        dest.x = vector.x / vector2.x
        dest.y = vector.y / vector2.y

        return dest
    }

    /**
     * Retrieves the x-component or y-component of the vector.
     * @param {number} index
     * @returns {number}
     */
    at(index: number): number {
        return this._values[index]
    }

    /**
     * Sets both the x- and y-components of the vector to 0.
     */
    reset(): void {
        this.x = 0
        this.y = 0
    }

    /**
     * Copies the x- and y-components from one vector to another.
     * If no dest vector is specified, a new vector is instantiated.
     * @param {Vector2} dest
     * @returns {Vector2}
     */
    copy(dest?: Vector2): Vector2 {
        if (!dest) dest = new Vector2()
        dest.xy = this.xy
        return dest
    }

    /**
     * Multiplies both the x- and y-components of a vector by -1.
     * If no dest vector is specified, the operation is performed in-place.
     * @param {Vector2} dest
     * @returns {Vector2}
     */
    negate(dest?: Vector2): Vector2 {
        if (!dest) dest = this
        dest.x = -this.x
        dest.y = -this.y
        return dest
    }

    /**
     * Checks if two vectors are equal, using a threshold to avoid floating-point precision errors.
     * @param {Vector2} other
     * @param {number} threshold
     * @returns {boolean}
     */
    equals(other: Vector2, threshold = EPSILON): boolean {
        if (Math.abs(this.x - other.x) > threshold) {
            return false
        }
        if (Math.abs(this.y - other.y) > threshold) {
            return false
        }
        return true
    }

    /**
     * Returns the distance from the vector to the origin.
     * @returns {number}
     */
    length(): number {
        return Math.sqrt(this.squaredLength())
    }

    /**
     * Returns the distance from the vector to the origin, squared.
     * @returns {number}
     */
    squaredLength(): number {
        const x = this.x
        const y = this.y
        return x * x + y * y
    }

    /**
     * Adds two vectors together.
     * If no dest vector is specified, the operation is performed in-place.
     * @param {Vector2} vector
     * @param {Vector2} dest
     * @returns {Vector2}
     */
    add(vector: Vector2, dest?: Vector2): Vector2 {
        if (!dest) dest = this
        dest.x = this.x + vector.x
        dest.y = this.y + vector.y
        return dest
    }

    /**
     * Subtracts one vector from another.
     * If no dest vector is specified, the operation is performed in-place.
     * @param {Vector2} vector
     * @param {Vector2} dest
     * @returns {Vector2}
     */
    subtract(vector: Vector2, dest?: Vector2): Vector2 {
        if (!dest) dest = this
        dest.x = this.x - vector.x
        dest.y = this.y - vector.y
        return dest
    }

    /**
     * Multiplies two vectors together piecewise.
     * If no dest vector is specified, the operation is performed in-place.
     * @param {Vector2} vector
     * @param {Vector2} dest
     * @returns {Vector2}
     */
    multiply(vector: Vector2, dest?: Vector2): Vector2 {
        if (!dest) dest = this
        dest.x = this.x * vector.x
        dest.y = this.y * vector.y
        return dest
    }

    /**
     * Divides two vectors piecewise.
     * @param {Vector2} vector
     * @param {Vector2} dest
     * @returns {Vector2}
     */
    divide(vector: Vector2, dest?: Vector2): Vector2 {
        if (!dest) dest = this
        dest.x = this.x / vector.x
        dest.y = this.y / vector.y
        return dest
    }

    /**
     * Scales a vector by a scalar parameter.
     * If no dest vector is specified, the operation is performed in-place.
     * @param {number} value
     * @param {Vector2} dest
     * @returns {Vector2}
     */
    scale(value: number, dest?: Vector2): Vector2 {
        if (!dest) dest = this
        dest.x = this.x * value
        dest.y = this.y * value
        return dest
    }

    /**
     * Normalizes a vector.
     * If no dest vector is specified, the operation is performed in-place.
     * @param {Vector2} dest
     * @returns {Vector2}
     */
    normalize(dest?: Vector2): Vector2 {
        if (!dest) dest = this
        dest.xy = this.xy
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
        return dest
    }

    toString(): string {
        return "(" + this.x + ", " + this.y + ")"
    }
    // TODO: Multiply Matrix2
    // TODO: Multiply Matrix3
}

export default Vector2
