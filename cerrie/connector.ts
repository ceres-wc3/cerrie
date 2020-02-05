import { writeRaw } from "./preloader"

compiletime(() => {
    const connectorHooks = {} as { [id: string]: (...data: string[]) => void }
    ;(_G as any).connector = {}

    _G.connector.addCommand = function(
        commandId: string,
        callback: (...data: string[]) => void
    ): void {
        connectorHooks[commandId] = callback
    }

    /** @tuplereturn */
    function parsePreloaderFile(input: string): undefined | [string, string[]] {
        const iter = (string.gmatch(input, 'Preload%(%s*"(.-)"%s*%)%s*\n') as unknown) as () =>
            | string
            | undefined
        const commandId = iter()
        const payload: string[] = []
        let line = iter()
        while (line) {
            payload.push(line)
            line = iter()
        }

        if (commandId != undefined) {
            return [commandId, payload]
        } else {
            return undefined
        }
    }

    ceres.addPostRunHook("std-connector", () => {
        const dataDir = (ceres.runConfig as any).mapDataDir
        if (dataDir == undefined) {
            log(
                "[CeresConnector] Connector isn't running because ceres.runConfig.mapDataDir is not set."
            )
            return
        }

        log("[CeresConnector] Connector has started. Press Ctrl-C to terminate Ceres.")
        const [, err] = fs.watchFile(dataDir + "/ceresConnectorTrigger.pld", data => {
            const [commandId, payload] = parsePreloaderFile(data)!

            if (!commandId) {
                log(
                    "[CeresConnector] The trigger file was refreshed but no data could be extracted."
                )
                return
            }

            if (!connectorHooks[commandId]) {
                log(`[CeresConnector] No such command '${commandId}'.`)
                return
            }

            log(`[CeresConnector] Received command '${commandId}'.`)
            connectorHooks[commandId](...payload)
        })

        if (type(err) == "table") {
            for (const [k, v] of pairs(err)) {
                log(`${k} : ${v}`)
            }
        }
        log(`[CeresConnector] An error has occured: ${err}`)
    })
})
;(_G as any).connector = {}

_G.connector.sendCommand = function(commandId: string, ...payload: string[]): void {
    writeRaw("ceresConnectorTrigger.pld", commandId, ...payload)
}
