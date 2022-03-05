// a reducer is a function that accepts state and action as params and returns the new state
import { BUY_CAKE } from './cakeTypes'

const intialState = {
    numOfCakes: 10
}

const cakeReducer = (state = intialState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

// so to be able to use this reducer in a different file or component, we export it as the default
export default cakeReducer