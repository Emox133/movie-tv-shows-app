import * as types from './../types'
import axios from 'axios'
import {key} from './../../util/credentials'

export const getMovies = () => dispatch => {
    dispatch({type: types.LOADING_MOVIES})
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`, {validateStatus: status => {return true}})
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


// This action creator is neccesary because we need to combine three factors to actually
// show the images 1. Base url, 2. Size, 3. Poster path
export const getConfiguration = () => dispatch => {
    axios.get(`https://api.themoviedb.org/3/configuration?api_key=${key}`, {validateStatus: () => {return true}})
    .then(res => {
        dispatch({
            type: types.SET_CONFIG,
            payload: Object.assign({images: res.data.images})
        })
    })
    .catch(err => console.log(err))
};