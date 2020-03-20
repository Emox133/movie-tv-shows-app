import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

// Redux
import {connect} from 'react-redux'
import {getMovies, searchMovies} from './../../redux/actions/movieActions'
import {getShows, searchShows} from './../../redux/actions/showActions'

class Search extends Component {
    state = {
        query: ''
    }

    componentDidUpdate() {
        // Movies
        if(this.state.query.length >= 3 && this.state.query !== 0 && this.props.location.pathname === '/movies') {
            setTimeout(() => {
                this.props.onSearchMovies(this.state.query);
            }, 1000)
        } else if(this.state.query.length < 3) {
            this.props.onGetMovies();
        }

        // Tv-Shows
        if(this.state.query.length >= 3 && this.state.query !== 0 && this.props.location.pathname === '/tv-shows') {
            setTimeout(() => {
                this.props.onSearchShows(this.state.query);
            }, 1000)
        } else if(this.state.query.length < 3) {
            this.props.onGetShows();
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
 
    render() {
        return (
            <form className="nav__form">
                   <input 
                   className="nav__search" 
                   name="query"
                   placeholder="Search movies, tv-shows..." 
                   type="search" 
                   onChange={this.handleChange}/>
            </form>
        )
    }
}

const mapActionToProps = dispatch => {
    return {
        onSearchMovies: query => dispatch(searchMovies(query)),
        onSearchShows: query => dispatch(searchShows(query)),
        onGetMovies: () => dispatch(getMovies()),
        onGetShows: () => dispatch(getShows())
    }
}

export default connect(null, mapActionToProps)(withRouter(Search))
