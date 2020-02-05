const TscWatchClient = require("tsc-watch/client")
const watch = new TscWatchClient()
const { exec } = require("child_process")
const { series } = require("async")

watch.on("success", () => {
    exec("npm run copycerrie")
})

exec("npm run preparedist")

watch.start("--compiler", "typescript-to-lua/dist/tstl", "--project", ".")
