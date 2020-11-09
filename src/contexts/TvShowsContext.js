import React, {useContext, useState, useCallback} from 'react'
import {useNeutral} from './NeutralContext'
import axios from 'axios'

const TvShowsContext = React.createContext()

export const useTvShows = () => {
    return useContext(TvShowsContext)
}

export function TvShowsProvider ({children}) {
    const [shows, setShows] = useState([])
    const [show, setShow] = useState({})
    const {setLoading, setTrailerKey} = useNeutral()
    let key = 'b03d4bc4719f0a814c7c8d0b36d522c1'

    const getShows = () => {
        setLoading(true)
    
        axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${key}`)
        .then(res => {
            let result = res.data.results.slice(0, 11)
            setShows(result)
            setLoading(false)
        })
        .catch(err => {
            setLoading(false)
            console.log(err.response)
        })
        // localStorage.removeItem('id');
    };

    const getShowTrailer = useCallback((id) => {
        axios.get(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${key}`)
        .then(res => {
            let result = res.data.results[0].key
            setTrailerKey(result)
        })
        .catch(err => {
            console.log(err.response)
        })
    }, [key, setTrailerKey]);

    const getShow = useCallback((id, history) => {
        setLoading(true)
        localStorage.setItem('id', id);
        axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${key}`)
        .then(res => {
            setLoading(false)
            let result = res.data
            setShow(result)
            getShowTrailer(id)
        })
        .catch(err => {
            setLoading(false)
            console.log(err.response)
        })
        history.push(`/tv-shows/${id}`)
    }, [setLoading, key, getShowTrailer])

    const searchShows = query => {
        setLoading(true)
        axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${key}&query=${query}`)
        .then(res =>  {
            setLoading(false)
            const result = res.data.results.slice(0, 12)
            setShows(result)
        })
        .catch(err => {
            setLoading(false)
            console.log(err.response)
        })
    };

    const value = {
        shows,
        show,
        getShows,
        getShow,
        searchShows
    }

    return (
        <TvShowsContext.Provider value={value}>
            {children}
        </TvShowsContext.Provider>
    )
}

