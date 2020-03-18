import * as types from './../types'

const initialState = {
    movies: [],
    movie: {},
    loading: false,
    open: false
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

        case types.SET_MOVIE: 
            return {
                ...state,
                loading: false,
                movie: {...action.payload}
            }

        default: 
            return state
    }
}