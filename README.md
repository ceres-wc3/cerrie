# About

Cerrie is a TypeScript library for Warcraft III maps built using [Ceres](https://github.com/ceres-wc3/ceres), which aims to provide an idiomatic set of wrappers and APIs for Warcraft III.

This project is not complete, however it already provides a set of useful types and APIs for Warcraft III maps built using TypeScript and Ceres.

List of features:

-   Wrappers for common WC3 types - `Player`, `Unit`, `Frame`, `Rect`, etc...
-   Network library for synchronizing local state.
-   File I/O library utilizing the `Preloader` native.
-   Various convenience utilities.
-   Connector library to allow communicating with a running Ceres instance directly via File I/O.
-   Live-Reload library allowing you to reload your map script on the fly.

Do note that providing a naive 1-to-1 binding to the Warcraft III api is a non-goal for Cerrie. Some types commonly used in Warcraft III are deliberately not wrapped by Cerrie - for example groups, as it is more idiomatic (and efficient!) to use Lua arrays instead.

## Depending on Cerrie

To use Cerrie in your Warcraft III/TS project, see the example at [ceres-ts-template/cerrie](https://github.com/ceres-wc3/ceres-ts-template/tree/cerrie).

It is important to:

-   Add `/// <reference types="cerrie/decl"/>` to your TypeScript entry points, or add `cerrie/decl` to your `types` array in `tsconfig.json`.
-   Add `import "cerrie/init"` to your TypeScript entry points.
-   Add `node_modules` to `ceres.layout.srcDirectories`.

All of these steps are already performed in the template repository.

## Live Reload

Cerrie has a convenient Live Reload library to allow you to reload code on the fly without restarting WC3. Simply add

```ts
import "cerrie/livereload"
```

in your `main.ts` file, and use `ceres run` to run the map. You will need to configure the `ceres.runConfig.mapDataDir` property - there is an example in the `ceres-ts-template` repository. Cerrie will set up everything else.

Once in-game, simply press F2 and Ceres will rebuild and reload your project for you.

It may be convenient to also run `ceres-tstl --watch` in the background to automatically rebuild TS/Lua files as you edit them. The template repository does this with the `npm run watch` command.

### Nuances

There are some nuances associated with developing maps using Live Reload. In particular, you have to be always aware of the fact that your code can be run multiple times during the map's lifecycle. For example, if you create anything in your scripts at init time, such as registering a trigger - that code will be run again when Live Reload is triggered.

```ts
// this will run again when Live Reload is triggered!
let t = CreateTrigger()
TriggerAddAction(t, ...)
TriggerRegisterSomeEvent(t, ...)
```

Cerrie is built with this in mind. There are some things it does on its own, and some utilities it gives you to make your life easier when developing with Live Reload:

-   The event library automatically cleans up all registered events before Live Reload reloads the script. If you're using Cerrie's events (`cerrie/core/event`, `cerrie/core/war3event`), you don't have to worry about manually unregistering them.
-   The `cerrie/core/util` library (which is global and automatically loaded through `cerrie/init`) provides extra conveniences:
-   -   `util.context` and `util.contextFn` create a "context" object (typically, a table) which stays persistent across Live Reloads. This is useful for ensuring that data does not get recreated during Live Reload, e.g. a Unit registry table storing unit data. Example:

```ts
// this ctx object will always stay the same, even across reloads
let ctx = util.context("myContext", { a = 1 })
// this means that this counter gets incremented each time Live Reload is triggered, and doesn't get reset
ctx.a++

// alternative using a closure initializer
let ctx = util.contextFn("myContext", () => {
    // the inside of the closure will only run ONCE
    // you can use this to perform one-time init as well
    doSomeInit()
    return { a = 1 }
})
```

-   -   `util.runOnce` simply runs the provided closure only at map init. This means that if this function is called after map init, it won't do anything. Useful for things that are only supposed to be set up once.
-   -   `util.reloadCleanup` takes a `Destroyable` object, such as a `Unit` or a `Frame` or a custom object implementing the `Destroyable` interface, and destroys it before Live Reload reloads the code. This is useful for objects that are supposed to be "refreshed" during Live Reload. Example:

```ts
let frame = Frame.create("SomeFrame", ...)
// do something with the frame...
// ...
// this will destroy the frame before this code is executed next time, allowing the frame to be fully reinitialized
util.reloadCleanup(frame)
```

If you're not sure how to use these, and want more examples, you can look at Cerrie itself - it uses these techniques everywhere where it needs to be aware of live reloads.

## Using Cerrie as a template for your own WC3/TS library

There are some nuances with publishing an NPM library for usage with WC3/TS projects. You're free to use Cerrie as a template for authoring and publishing your own libraries.

## Contributing

If you're using Cerrie and feel like something is missing (there are a lot of things), and want to submit a patch, feel free to do so. If you have any questions, you can contact me on the [Ceres Discord](https://discord.gg/M4KXP9a).
