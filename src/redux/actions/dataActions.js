import * as types from './../types'
import axios from 'axios'
import {key} from './../../util/credentials'

// This action creator is necessary because we need to combine three factors to actually
// show the images 1. Base url, 2. Size, 3. Poster path
export const getConfiguration = () => dispatch => {
    dispatch({type: types.LOADING_CONFIG})
    axios.get(`https://api.themoviedb.org/3/configuration?api_key=${key}`, {validateStatus: () => {return true}})
    .then(res => {
        dispatch({
            type: types.SET_CONFIG,
            payload: Object.assign({images: res.data.images})
        })
        persistEssentials(res.data.images.base_url, res.data.images.poster_sizes[3]);
    })
    .catch(err => {
        dispatch({
            type: types.SET_ERRORS,
            payload: err
        })
    })
};

export const clearKey = (fn, type) => dispatch => {
    dispatch({type: types.CLEAR_KEY})

    // type.startsWith('/movies') ? fn.push(type) : type.startsWith('/tv-shows') ? fn.push(type) : null; 

    const pathname = type.split('/')[1];

    if(type.startsWith('/movies')) fn.push(`/${pathname}`);
    if(type.startsWith('/tv-shows')) fn.push(`/${pathname}`);

    localStorage.removeItem('id');
};

const persistEssentials = (baseUrl, poster_size) => {
    localStorage.setItem('url', baseUrl);
    localStorage.setItem('poster', poster_size);
};