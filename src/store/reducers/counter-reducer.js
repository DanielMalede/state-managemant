import { UP_ACTION,DOWN_ACTION,RESET_ACTION } from "../actions/counter.action"

export default function reducer (state, action){
    switch (action.type) {
      case UP_ACTION:
        return state + 1
      case DOWN_ACTION:
        return state - 1
      case RESET_ACTION:
        return  0
      default:
        return state
    }
  
  }