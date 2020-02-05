import Handle from "./handle"

class Destructable extends Handle<jdestructable> {
    static of(handle: jdestructable): Destructable {
        return Destructable.getForHandle(handle)
    }
}

Destructable.init()

export default Destructable
