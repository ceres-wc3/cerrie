import Handle from "./handle"

class Item extends Handle<jitem> {
    static of(handle: jitem): Item {
        return Item.getForHandle(handle)
    }
}

Item.init()

export default Item
