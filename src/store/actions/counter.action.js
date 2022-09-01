import { UPDATE_COUNTER, DOWN_ACTION, UP_ACTION, RESET_ACTION, RANDOM_ACTION } from "./counter-type"

export const userNumberCounterAction = (newNumber) => {
    return { type: UPDATE_COUNTER, payload: newNumber }
}

export const downCounterAction = (newNumber) => {
    return { type: DOWN_ACTION, payload: newNumber }
}

export const upCounterAction = (newNumber) => {
    return { type: UP_ACTION, payload: newNumber }
}

export const resetCounterAction = (newNumber) => {
    return { type: RESET_ACTION, payload: newNumber }
}

export const randomCounterAction = (newNumber) => {
    return { type: RANDOM_ACTION, payload: newNumber }
}