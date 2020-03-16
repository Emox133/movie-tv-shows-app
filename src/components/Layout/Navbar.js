import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Navbar extends Component  {
    state = {
        query: ''
    }

    render() {
        return ( 
            <nav className="nav">
                <div className="nav__btns">
                   <Link to="/">
                       <button className="nav__btn nav__movie">Movies</button>
                   </Link>
                   <Link to="/tv-shows">
                       <button className="nav__btn nav__tv-shows">Tv Shows</button>
                   </Link>
                </div>
                <div className="nav__input">
                   <input className="nav__search" placeholder="Search movies, tv-shows..." type="text" />
                </div>
            </nav>
       )
    }    
}

export default Navbar
