/** @noselfinfile */

/** @vararg */
type Vararg<A extends any[]> = A & {}

interface Destroyable {
    destroy(): void
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
namespace util {
    /**
     * Converts a numeric rawid into its string representation.
     */
    export function id2s(id: number | string): string {
        if (typeof id == "string") {
            return id
        } else {
            return string.pack(">I4", id)
        }
    }

    /**
     * Converts a string rawid into its numeric representation.
     */
    export function s2id(id: string | number): number {
        if (typeof id == "number") {
            return id
        } else {
            const [numid] = string.unpack(">I4", id)
            return numid
        }
    }

    ;(_G as any).__contexts = (_G as any).__contexts || {}
    const contexts = (_G as any).__contexts as { [id: string]: any }

    /**
     * Creates a "context" object unique to the specified id,
     * that will stay the same even across map reloads.
     */
    export function context<T>(id: string, initial: T): T {
        contexts[id] = contexts[id] || initial
        return contexts[id]
    }

    /**
     * Same as @see context , but uses a closure to compute the
     * context value. The closure will be ran exactly once for
     * each unique id.
     */
    export function contextFn<T>(id: string, initializer: () => T): T {
        if (contexts[id] != null) {
            return contexts[id]
        } else {
            const v = initializer()
            contexts[id] = v
            return v
        }
    }

    /**
     * Runs the passed-in closure exactly once during the map lifecycle.
     * Useful for one-time initializations that shouldn't re-run
     * during reloads.
     */
    export function runOnce(callback: () => void): void {
        if (!ceres.initialized) {
            callback()
        }
    }

    /**
     * Clones an array, preserving order.
     */
    export function cloneArray<T>(array: T[]): T[] {
        const clone: T[] = []
        for (const [i, v] of ipairs(array)) {
            clone[i - 1] = v
        }
        return clone
    }

    const destroyableStorage = context("__destroyable", [] as Destroyable[])
    export function reloadCleanup(target: Destroyable): void {
        destroyableStorage.push(target)
    }

    if (!ceres.compiletime) {
        ceres.addHook("reload::before", () => {
            for (const destr of destroyableStorage) {
                destr.destroy()
            }
            destroyableStorage.length = 0
        })
    }

    /**
     * Utilities for automatic ID generation.
     */
    export namespace idgen {
        const firstValidChar = 48
        const lastValidChar = 126

        function nextValidCharId(char: number): number | undefined {
            if (char < 48) return 48
            if (char > 126) return undefined
            if (char == 57) return 97
            return char + 1
        }

        function isIdOccupied(id: string): boolean {
            if (currentMap != undefined) {
                for (const [, v] of pairs(currentMap.objects)) {
                    if (v[id] != undefined) {
                        return true
                    }
                }
            }
            return false
        }

        /**
         * @tuplereturn
         */
        type ByteFunc = (this: void, s: string, i?: number, j?: number) => number[]

        export function nextIdFrom(id: string): string {
            if (id.length != 4) {
                error("id must be 4-char")
            }

            // the signature of string.byte is wrong for some reason
            let [b1, b2, b3, b4] = ((string.byte as unknown) as ByteFunc)(id, 1, 4)

            do {
                if (b4 < lastValidChar) {
                    b4 = nextValidCharId(b4)!
                } else if (b3 < lastValidChar) {
                    b4 = firstValidChar
                    b3 = nextValidCharId(b3)!
                } else if (b2 < lastValidChar) {
                    b4 = firstValidChar
                    b3 = firstValidChar
                    b2 = nextValidCharId(b2)!
                } else if (b1 < lastValidChar) {
                    b4 = firstValidChar
                    b3 = firstValidChar
                    b2 = firstValidChar
                    b1 = nextValidCharId(b1)!
                }
            } while (isIdOccupied(string.char(b1, b2, b3, b4)))

            return string.char(b1, b2, b3, b4)
        }

        let unitId = "x000"
        let heroId = "H000"
        let abilId = "A000"
        let buffId = "B000"
        let itemId = "I000"
        let upgdId = "R000"

        export function unit(): string {
            const ret = unitId
            unitId = nextIdFrom(ret)
            return ret
        }

        export function hero(): string {
            const ret = heroId
            heroId = nextIdFrom(ret)
            return ret
        }

        export function abil(): string {
            const ret = abilId
            abilId = nextIdFrom(ret)
            return ret
        }

        export function buff(): string {
            const ret = buffId
            buffId = nextIdFrom(ret)
            return ret
        }

        export function item(): string {
            const ret = itemId
            itemId = nextIdFrom(ret)
            return ret
        }

        export function upgd(): string {
            const ret = upgdId
            upgdId = nextIdFrom(ret)
            return ret
        }
    }
}

_G.string.partition = function(target: string, length: number): string[] {
    const partitioned: string[] = []
    for (let i = 0; i <= math.floor(target.length / length); i++) {
        const segStart = i * length
        const segEnd = math.min((i + 1) * length, target.length)
        table.insert(partitioned, target.substring(segStart, segEnd))
    }
    return partitioned
}

interface String {
    /**
     * Partitions a string into equal-sized chunks. The last chunk may be smaller if
     * the string is not equally divisible by the specified length.
     *
     * @param length size of chunk
     */
    partition(length: number): string[]
}
