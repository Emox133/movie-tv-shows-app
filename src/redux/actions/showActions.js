import * as types from './../types'
import axios from 'axios'

let key = process.env.REACT_APP_API_KEY
export const getShows = () => dispatch => {
    dispatch({type: types.LOADING_SHOWS});

    axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${key}`, {validateStatus: () => {return true}})
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
    localStorage.removeItem('id');
};

export const getShow = (id, history) => dispatch => {
    dispatch({type: types.LOADING_SHOWS});
    axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${key}`, {validateStatus: () => {return true}})
    .then(res => {
        dispatch({
            type: types.SET_SHOW,
            payload: res.data
        })
        dispatch(getShowTrailer(id))
        localStorage.setItem('id', id);
    })
    .catch(err => {
        dispatch({
            type: types.SET_ERRORS,
            payload: err
        })
    })
    history.push(`/tv-shows/${id}`)
}

export const getShowTrailer = id => dispatch =>{
    axios.get(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${key}`)
    .then(res => {
        dispatch({
            type: types.SET_KEY,
            payload: res.data.results[0].key
        })
    })
    .catch(err => {
        dispatch({
            type: types.SET_ERRORS,
            payload: err
        })
    })
};

export const searchShows = query => dispatch => {
    axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${key}&query=${query}`)
    .then(res =>  {
        dispatch({
            type: types.SET_SHOWS,
            payload: res.data.results.slice(0, 12)
        })
    })
    .catch(err => {
        dispatch({
            type: types.SET_ERRORS,
            payload: err
        })
    })
};