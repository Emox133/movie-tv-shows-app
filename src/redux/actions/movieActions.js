import * as types from './../types'
import axios from 'axios'
import {key} from './../../util/credentials'

export const getMovies = () => dispatch => {
    dispatch({type: types.LOADING_DATA})
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`, {validateStatus: () => {return true}})
    .then(res => {
        dispatch({
            type: types.SET_MOVIES,
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

