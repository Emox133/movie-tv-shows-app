import * as types from './../types'

const initialState = {
    movies: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case types.LOADING_MOVIES: 
            return {
                ...state,
                loading: true
            }

        case types.SET_MOVIES:
            return {
                ...state,
                loading: false,
                movies: [...action.payload]
            }

        default: 
            return state
    }
}