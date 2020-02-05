import * as tsmath from "./common"
import Vector2 from "./vec2"

class Matrix2 {
    static get identity(): Matrix2 {
        return new Matrix2()
    }
    mul = this.multiply
    sub = this.subtract
    private _values = new Float32Array(4)
    constructor(values?: number[]) {
        if (values) {
            this.init(values)
        } else {
            this.init([1, 0, 0, 1])
        }
    }

    /**
     * Creates a Matrix2 from a given angle
     * This is equivalent to (but much faster than):
     *     m = Matrix2.identity;
     *     m.rotate(radians, m);
     *
     * @param {number} radians the angle to rotate the matrix by
     * @param {Matrix2} dest the receiving matrix
     * @returns {Matrix2} dest
     */
    static fromRotation(radians: number, dest?: Matrix2): Matrix2 {
        if (!dest) dest = new Matrix2()
        const s = Math.sin(radians)
        const c = Math.cos(radians)
        dest._values[0] = c
        dest._values[1] = s
        dest._values[2] = -s
        dest._values[3] = c
        return dest
    }

    /**
     * Creates a matrix from a vector scaling
     * This is equivalent to (but much faster than):
     *     m = Matrix2.identity;
     *     m.scale(v, m);
     *
     * @param {Vector2} v the scaling vector
     * @param {Matrix2} dest the receiving matrix
     * @returns {Matrix2} dest
     */
    static fromScaling(v: Vector2, dest?: Matrix2): Matrix2 {
        if (!dest) dest = new Matrix2()
        dest._values[0] = v.x
        dest._values[1] = 0
        dest._values[2] = 0
        dest._values[3] = v.y
        return dest
    }
    at(index: number): number {
        return this._values[index]
    }
    init(values: number[]): Matrix2 {
        for (let i = 0; i < 4; i++) {
            this._values[i] = values[i]
        }
        return this
    }
    copy(dest?: Matrix2): Matrix2 {
        if (!dest) dest = new Matrix2()
        for (let i = 0; i < 4; i++) {
            dest._values[i] = this._values[i]
        }
        return dest
    }
    all(): number[] {
        const data: number[] = []
        for (let i = 0; i < 4; i++) {
            data[i] = this._values[i]
        }
        return data
    }
    row(index: number): number[] {
        return [this._values[index * 2 + 0], this._values[index * 2 + 1]]
    }
    col(index: number): number[] {
        return [this._values[index], this._values[index + 2]]
    }
    equals(matrix: Matrix2, threshold = tsmath.EPSILON): boolean {
        for (let i = 0; i < 4; i++) {
            if (!tsmath.equals(this.at(i), matrix.at(i), threshold)) {
                return false
            }
        }
        return true
    }
    determinant(): number {
        return this._values[0] * this._values[3] - this._values[2] * this._values[1]
    }
    setIdentity(): Matrix2 {
        this._values[0] = 1
        this._values[1] = 0
        this._values[2] = 0
        this._values[3] = 1
        return this
    }
    transpose(dest?: Matrix2): Matrix2 {
        if (!dest) dest = this
        this.copy(dest)
        const temp = this._values[1]
        dest._values[1] = this._values[2]
        dest._values[2] = temp
        return dest
    }
    inverse(dest?: Matrix2): Matrix2 | undefined {
        if (!dest) dest = this
        const a0 = this._values[0]
        const a1 = this._values[1]
        const a2 = this._values[2]
        const a3 = this._values[3]

        let det = this.determinant()
        if (!det) return
        det = 1.0 / det
        dest._values[0] = det * a3
        dest._values[1] = det * -a1
        dest._values[2] = det * -a2
        dest._values[3] = det * a0
        return dest
    }

    /**
     * Calculates the adjugate of a Matrix2
     * @param {Matrix2} dest the receiving matrix
     * @returns {Matrix2} dest
     */
    adjoint(dest?: Matrix2): Matrix2 {
        if (!dest) dest = this
        const a0 = this._values[0]
        dest._values[0] = this._values[3]
        dest._values[1] = -this._values[1]
        dest._values[2] = -this._values[2]
        dest._values[3] = a0
        return dest
    }
    multiply(matrix: Matrix2, dest?: Matrix2): Matrix2 {
        if (!dest) dest = this
        const a0 = this._values[0]
        const a1 = this._values[1]
        const a2 = this._values[2]
        const a3 = this._values[3]
        const b0 = matrix._values[0]
        const b1 = matrix._values[1]
        const b2 = matrix._values[2]
        const b3 = matrix._values[3]
        dest._values[0] = a0 * b0 + a2 * b1
        dest._values[1] = a1 * b0 + a3 * b1
        dest._values[2] = a0 * b2 + a2 * b3
        dest._values[3] = a1 * b2 + a3 * b3
        return dest
    }

    /**
     * Rotates a Matrix2 by the given angle
     * @param {number} radians the angle to rotate the matrix by
     * @param {Matrix2} dest the receiving matrix
     * @returns {Matrix2} dest
     */
    rotate(radians: number, dest?: Matrix2): Matrix2 {
        if (!dest) dest = this
        const a0 = this._values[0]
        const a1 = this._values[1]
        const a2 = this._values[2]
        const a3 = this._values[3]
        const s = Math.sin(radians)
        const c = Math.cos(radians)
        dest._values[0] = a0 * c + a2 * s
        dest._values[1] = a1 * c + a3 * s
        dest._values[2] = a0 * -s + a2 * c
        dest._values[3] = a1 * -s + a3 * c
        return dest
    }

    /**
     * Scales a Matrix2 by the dimensions in the given Vector2
     * @param {Vector2} v the Vector2 to scale the matrix by
     * @param {Matrix2} dest the receiving matrix
     * @returns {Matrix2} dest
     */
    scale(v: Vector2, dest?: Matrix2): Matrix2 {
        if (!dest) dest = this
        const a0 = this._values[0]
        const a1 = this._values[1]
        const a2 = this._values[2]
        const a3 = this._values[3]
        dest._values[0] = a0 * v.x
        dest._values[1] = a1 * v.x
        dest._values[2] = a2 * v.y
        dest._values[3] = a3 * v.y
        return dest
    }
    toString(): string {
        return (
            "mat2(" +
            this._values[0] +
            ", " +
            this._values[1] +
            ", " +
            this._values[2] +
            ", " +
            this._values[3] +
            ")"
        )
    }

    /**
     * Returns the Frobenius norm of a Matrix2
     * @returns {number} Frobenius norm
     */
    frobenius(): number {
        const a0 = this._values[0]
        const a1 = this._values[1]
        const a2 = this._values[2]
        const a3 = this._values[3]
        return Math.sqrt(Math.pow(a0, 2) + Math.pow(a1, 2) + Math.pow(a2, 2) + Math.pow(a3, 2))
    }

    // TODO: LDU decomposition

    add(matrix: Matrix2, dest?: Matrix2): Matrix2 {
        if (!dest) dest = this
        dest._values[0] = this._values[0] + matrix._values[0]
        dest._values[1] = this._values[1] + matrix._values[1]
        dest._values[2] = this._values[2] + matrix._values[2]
        dest._values[3] = this._values[3] + matrix._values[3]
        return dest
    }
    subtract(matrix: Matrix2, dest?: Matrix2): Matrix2 {
        if (!dest) dest = this
        dest._values[0] = this._values[0] - matrix._values[0]
        dest._values[1] = this._values[1] - matrix._values[1]
        dest._values[2] = this._values[2] - matrix._values[2]
        dest._values[3] = this._values[3] - matrix._values[3]
        return dest
    }
    exactEquals(matrix: Matrix2): boolean {
        for (let i = 0; i < 4; i++) {
            if (this.at(i) !== matrix.at(i)) return false
        }
        return true
    }
    multiplyScalar(scalar: number, dest?: Matrix2): Matrix2 {
        if (!dest) dest = this
        dest._values[0] = this._values[0] * scalar
        dest._values[1] = this._values[1] * scalar
        dest._values[2] = this._values[2] * scalar
        dest._values[3] = this._values[3] * scalar
        return dest
    }
}

export default Matrix2
