import {DEC, INC, RESET} from "./base.action";

export const decrement = () => {
    return {type: DEC, payload: 2}
}

export const increment = () => {
    return {type: INC, payload: 3}
}

export const reset = () => {
    return {type: RESET}
}