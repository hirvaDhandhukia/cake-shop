// we're using the action-creator
import { BUY_ICECREAM } from "./iceCreamTypes";

export const buyIceCream = () => {
    return {
        type: BUY_ICECREAM
    }
}