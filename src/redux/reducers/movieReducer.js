import * as types from './../types'

const initialState = {
    movies: [],
    loading: false,
    errors: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case types.LOADING_DATA: 
            return {
                ...state,
                loading: true
            }

        case types.SET_MOVIES:
            return {
                ...state,
                loading: false,
                movies: {...action.payload}
            }

        case types.SET_ERRORS:
            return {
                ...state,
                loading: false,
                errors: {...action.payload}
            }

        default: 
            return state
    }
}