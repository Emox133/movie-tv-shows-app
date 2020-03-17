import * as types from './../types'

const initialState = {
    config: {},
    errors: {}
}

export default function (state = initialState, action) {
    switch(action.type) {
        case types.SET_CONFIG: 
            return {
                ...state,
                config: action.payload
            }

        default:
            return state
    }
}