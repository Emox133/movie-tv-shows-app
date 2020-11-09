import React, {useContext, useState, useCallback} from 'react'
import axios from 'axios'
import {useNeutral} from './NeutralContext'

const MoviesContext = React.createContext()

export function useMovies() {
    return useContext(MoviesContext)
}

export function MoviesProvider({children}) {
    const [movies, setMovies] = useState([])
    const [movie, setMovie] = useState({})
    const {setLoading, setTrailerKey} = useNeutral()
    let key = 'b03d4bc4719f0a814c7c8d0b36d522c1'    

    const getMovies = () => {
        setLoading(true)
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`)
        .then(res => {
            setLoading(false)
            let results = res.data.results.slice(0, 11)
            setMovies(results)
        }).catch(err => {
            setLoading(false)
            console.log(err.response)
        })
    }

    const getMovieTrailer = useCallback((id) => {
        setLoading(true)
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}`)
        .then(res => {
            setLoading(false)
            let result = res.data.results[0].key
            setTrailerKey(result)
        }).catch(err => {
            setLoading(false)
            console.log(err.response)
        })
    }, [key, setTrailerKey, setLoading])

    const getMovie = useCallback((id, history) => {
        setLoading(true)
        localStorage.setItem('id', id);
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}`)
        .then(res => {
            setLoading(false)
            setMovie(res.data)
            getMovieTrailer(id)
        })
        .catch(err => {
            setLoading(false)
            console.log(err.response)
        })
        history.push(`/movies/${id}`)
    }, [setLoading, key, getMovieTrailer])

    const searchMovies = query => {
        setLoading(true)
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}`)
        .then(res => {
            setLoading(false)
            const result = res.data.results.slice(0, 12)
            setMovies(result)
        })
        .catch(err => {
            setLoading(false)
            console.log(err.response)
        })
    };

    const value = {
        movies,
        movie,
        getMovies,
        getMovie,
        searchMovies
    }

    return (
        <MoviesContext.Provider value={value}>
            {children}
        </MoviesContext.Provider>
    )
}