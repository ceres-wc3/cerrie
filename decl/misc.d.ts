/** @noselfinfile */

declare namespace string {
    /**
     * Partitions a string into equal-sized chunks. The last chunk may be smaller if
     * the string is not equally divisible by the specified length.
     *
     * @param target string to partition
     * @param length size of chunk
     */
    function partition(target: string, length: number): string[]
}

declare namespace connector {
    function addCommand(commandId: string, callback: (data: string) => void): void
    function sendCommand(commandId: string, data: string): void
}

declare function FourCC(id: string): number
