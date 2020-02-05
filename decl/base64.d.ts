/** @noselfinfile */

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
