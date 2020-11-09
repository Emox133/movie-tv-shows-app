import React, {useRef, useEffect} from 'react'
import Search from './Search'
import {Link} from 'react-router-dom'

import {useMovies} from '../../contexts/MovieContext'
import {useTvShows} from '../../contexts/TvShowsContext'

const Navbar = () => {
    const el = useRef(null)
    const id = localStorage.id;
    const {getMovies} = useMovies()
    const {getShows} = useTvShows()

    useEffect(() => {
        setTimeout(() => {
            if(!id) {
                el.current.focus()
                el.current.click()
            }
        }, 500)
    }, [id]) 

        return ( 
            <nav className="nav">
                <div>
                   <Link to="/movies">
                       <button className="btn nav__btn" onClick={() => getMovies()}>Movies</button>
                   </Link>
                   <Link to="/tv-shows">
                       <button ref={el} className="btn nav__btn" onClick={() => getShows()}>Tv Shows</button>
                   </Link>
                </div>
                <Search />
            </nav>
       ) 
}

export default Navbar
