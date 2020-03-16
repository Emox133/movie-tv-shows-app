import React, { Component } from 'react'

export default class Search extends Component {
    state = {
        query: ''
    }

    render() {
        return (
            <form className="nav__input">
                   <input className="nav__search" placeholder="Search movies, tv-shows..." type="text" />
            </form>
        )
    }
}
