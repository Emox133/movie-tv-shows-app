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

export const getMovie = (id, history) => dispatch => {
    dispatch({type: types.LOADING_MOVIES});
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}`, {validateStatus: status => {return true}})
    .then(res => {
        dispatch({
            type: types.SET_MOVIE,
            payload: res.data
        })
        dispatch(getMovieTrailer(id));
        localStorage.setItem('id', id);
    })
    .catch(err => {
        dispatch({
            type: types.SET_ERRORS,
            payload: err
        })
    })
    history.push(`/movies/${id}`)
}

export const getMovieTrailer = id => dispatch =>{
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}`)
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

export const searchMovies = query => dispatch => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}`)
    .then(res => {
        dispatch({
            type: types.SET_MOVIES,
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

