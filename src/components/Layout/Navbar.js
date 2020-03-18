import React, {useRef, useEffect} from 'react'
import Search from './Search'
import {Link} from 'react-router-dom'

// Redux 
import {useDispatch} from 'react-redux'
import {getMovies} from './../../redux/actions/movieActions'
import {getShows} from './../../redux/actions/showActions'

const Navbar = () => {
    const dispatch = useDispatch()
    const el = useRef(null)

    useEffect(() => {
        el.current.focus()
        // Workaround for ComponentWillUpdate , no need to convert the Navbar 
        // to class based component just to call 'click'
        // setTimeout(() => {
        //     el.current.click()
        // }, 500)
    }, []) 

        return ( 
            <nav className="nav">
                <div className="nav__btns">
                   <Link to="/movies">
                       <button className="nav__btn nav__movie" onClick={() => dispatch(getMovies())}>Movies</button>
                   </Link>
                   <Link to="/tv-shows">
                       <button ref={el} className="nav__btn nav__tv-shows" onClick={() => dispatch(getShows())}>Tv Shows</button>
                   </Link>
                </div>
                <Search />
            </nav>
       ) 
}

export default Navbar
