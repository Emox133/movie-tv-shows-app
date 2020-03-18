import * as types from './../types'

const initialState = {
    config: {},
    errors: {},
    loading: false
}

export default function (state = initialState, action) {
    switch(action.type) {
        case types.LOADING_CONFIG:
            return {
                ...state,
                loading: true
            }

        case types.SET_CONFIG: 
            return {
                ...state,
                loading: false,
                config: action.payload
            }

        case types.SET_ERRORS:
            return {
                ...state,
                loading: false,
                errors: [...action.payload]
            }

        default:
            return state
    }
}