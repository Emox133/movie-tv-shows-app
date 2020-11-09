import React, {useState, useEffect } from 'react'
import {withRouter} from 'react-router-dom'

// React Context
import {useMovies} from '../../contexts/MovieContext'
import {useTvShows} from '../../contexts/TvShowsContext'

function Search ({location}) {
    const {getMovies, searchMovies} = useMovies()
    const {getShows, searchShows} = useTvShows()
    const [fields, setQuery] = useState({
        query: ''
    })

    const query = fields.query
    useEffect(() => {
        // Movies
        if(query.length >= 3 && query !== 0 && location.pathname === '/movies') {
            setTimeout(() => {
                searchMovies(query)
            }, 1000)
        } else if(query.length === 0) {
            setTimeout(() => {
                getMovies()
            }, 1000)
        }

        // Tv-Shows
        if(query.length >= 3 && query !== 0 && location.pathname === '/tv-shows') {
            setTimeout(() => {
                searchShows(query)
            }, 1000)
        } else if(query.length === 0) {
            setTimeout(() => {
                getShows()
            }, 1000)
        }
    }, [query])

    const handleChange = e => {
        setQuery({
            ...fields,
            [e.target.name]: e.target.value
        })
    };
 
        return (
            <form className="nav__form">
                <input 
                   className="nav__search" 
                   name="query"
                   placeholder="Search movies, tv-shows..." 
                   type="search" 
                   onChange={handleChange}/>
            </form>
        )
}

export default withRouter(Search)
