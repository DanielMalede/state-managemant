import { UPDATE_COUNTER,DOWN_ACTION,UP_ACTION,RESET_ACTION,RANDOM_ACTION  } from "../actions/counter-type"
export default function counterReducer(state, action) {
    switch (action.type) {
        case UP_ACTION:
            return state + 1
        case DOWN_ACTION:
            return state - 1
        case RESET_ACTION:
            return 0
        case RANDOM_ACTION:
            return Math.floor(Math.random() * 101)
        case UPDATE_COUNTER:
            return action.payload
        default: 
            return state
    }

}