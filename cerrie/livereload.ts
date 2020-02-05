import Player from "./core/types/player"

import * as preload from "./preloader"
import * as network from "./network"
import Timer from "./core/timer"

import "./connector"

const context = util.context("livereload", { newScript: undefined as string | undefined })

compiletime(() => {
    const template = `
function PreloadFiles takes nothing returns nothing
    //! beginusercode
    local a = ""
    %s
    BlzSetAbilityIcon(FourCC("ANcl"), a)
    //! endusercode
endfunction
`

    connector.addCommand("std-livereload", (...data) => {
        log("[STDLIB-LiveReload] Received reload command.")
        lastBuildCommand.output = "script"
        const result = ceres.buildMap(lastBuildCommand)
        if (!result) {
            log("[STDLIB-LiveReload] Failed to recompile map...")
            return
        }

        let payload = ""
        for (const [line] of string.gmatch(result.content!, "(.-)\n")) {
            payload = payload + string.format("a = a .. [===[%s]===] .. '\\n'\n", line)
        }

        const newScript = string.format(template, payload)
        fs.writeFile(
            (ceres as any).runConfig.mapDataDir + `/ceresLiveReloadFile${data[0]}.pld`,
            newScript
        )
        log("[STDLIB-LiveReload] Map built and live reload successfully triggered.")
    })
})

ceres.addHook("reload::before", () => {
    print("---- Ceres has reloaded ----")
})

network.receive("__lr", (sender: Player) => {
    const compressedScript = context.newScript!
    if (sender.isLocal) {
        // compressedScript = lzw.compress(compressedScript)
        // compressedScript = base64.encode(compressedScript)
    }

    network.synchronize(sender, compressedScript, data => {
        // data = base64.decode(data)
        // data = lzw.decompress(data)

        const compiled = load(data)
        if (compiled[0] != undefined) {
            ceres.safeCall(compiled[0])
        } else {
            print("failed to compile live reload script: ", compiled[1])
        }
    })
})

const counter = util.context("_livereloadcnt", { cnt: 0 })
export function triggerLiveReload(player: Player): void {
    const thisCounter = counter.cnt
    counter.cnt++
    if (player.isLocal) {
        preload.write(`ceresLiveReloadFile${thisCounter}.pld`, "NODATA")
        connector.sendCommand("std-livereload", tostring(thisCounter))

        let tryRead: () => void
        let retries = 1
        // eslint-disable-next-line prefer-const
        tryRead = function(): void {
            if (retries == 0) {
                print("LiveReload: failed to load script...")
                return
            }

            retries = retries - 1

            context.newScript = preload.read(`ceresLiveReloadFile${thisCounter}.pld`)
            if (!context.newScript || context.newScript == "NODATA") {
                Timer.simple(0.2, tryRead)
            } else {
                network.send("__lr", "")
            }
        }

        Timer.simple(1.5, tryRead)
    }
}

util.runOnce(() => {
    const t = CreateTrigger()
    TriggerAddAction(
        t,
        ceres.wrapSafeCall(() => {
            triggerLiveReload(Player.of(GetTriggerPlayer()))
        })
    )
    BlzTriggerRegisterPlayerKeyEvent(t, Player.byId(0).handle, OSKEY_F2, 0, true)
})
