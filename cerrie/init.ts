// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./core/util.ts"/>

require("cerrie.core.util")

compiletime(() => {
    require("lualib_bundle")
    require("cerrie.core.util")
})

export {}
