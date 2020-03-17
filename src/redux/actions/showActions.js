import * as types from './../types'
import axios from 'axios'
import {key} from './../../util/credentials'

export const getShows = () => dispatch => {
    dispatch({type: types.LOADING_SHOWS});

    axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${key}`, {validateStatus: status => {return true}})
    .then(res => {
        dispatch({
            type: types.SET_SHOWS,
            payload: res.data.results.slice(0, 11)
        })
    })
    .catch(err => {
        dispatch({
            type: types.SET_ERRORS,
            payload: err
        })
    })
};
