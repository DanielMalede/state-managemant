import { UPDATE_COUNTER, DOWN_ACTION, UP_ACTION, RESET_ACTION, RANDOM_ACTION } from "./counter-type"

export const updateCounter = (newNumber) => {
    return { type: UPDATE_COUNTER, payload: newNumber }
}

export const downAction = (newNumber) => {
    return { type: DOWN_ACTION, payload: newNumber }
}

export const upAction = (newNumber) => {
    return { type: UP_ACTION, payload: newNumber }
}

export const resetAction = (newNumber) => {
    return { type: RESET_ACTION, payload: newNumber }
}

export const randomAction = (newNumber) => {
    return { type: RANDOM_ACTION, payload: newNumber }
}