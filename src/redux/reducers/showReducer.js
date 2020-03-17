import * as types from './../types'

const initialState = {
    shows: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case types.LOADING_SHOWS:
            return {
                ...state,
                loading: true
            }

        case types.SET_SHOWS:
            return {
                ...state,
                loading: false,
                shows: [...action.payload]
            }    
        
        default: 
            return state
    }
}