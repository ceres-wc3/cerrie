/// <reference path="./native.d.ts"/>
/// <reference types="ceres-decl/ceres"/>
/// <reference types="lua-types/5.3"/>

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

/** @noResolution */
declare module "cerrie.ext.base64" {
    export interface Base64Encoder {
        __b64encode: never
    }
    export interface Base64Decoder {
        __b64decode: never
    }

    export function makeencoder(s62: string, s63: string, padding: string): Base64Encoder
    export function makedecoder(s62: string, s63: string, padding: string): Base64Decoder

    export function encode(raw: string, encoder?: Base64Encoder, useCaching?: boolean): string
    export function decode(encoded: string, decoder?: Base64Decoder, useCaching?: boolean): string
}

/** @noResolution */
declare module "cerrie.ext.lzw" {
    export function compress(input: string): string
    export function decompress(input: string): string
}

declare function FourCC(id: string): number
