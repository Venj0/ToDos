import {  SET } from "../type";


const handlers = {

    [SET]: (state, {items}) => ({...state, items}),


    DEFAULT: state => state
}

export const globalReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}