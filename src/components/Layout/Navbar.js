import React from 'react'
import Search from './Search'
import {Link} from 'react-router-dom'

// Redux 
import {useDispatch} from 'react-redux'
import {getMovies} from './../../redux/actions/movieActions'

const Navbar = () => {
    const dispatch = useDispatch()

        return ( 
            <nav className="nav">
                <div className="nav__btns">
                   <Link to="/movies">
                       <button className="nav__btn nav__movie" onClick={() => dispatch(getMovies())}>Movies</button>
                   </Link>
                   <Link to="/tv-shows">
                       <button className="nav__btn nav__tv-shows">Tv Shows</button>
                   </Link>
                </div>
                <Search />
            </nav>
       ) 
}

export default Navbar
