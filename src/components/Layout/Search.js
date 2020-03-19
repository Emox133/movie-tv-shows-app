import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

// Redux
import {connect} from 'react-redux'
import {getMovies, searchMovies} from './../../redux/actions/movieActions'

class Search extends Component {
    state = {
        query: ''
    }

    componentDidUpdate() {
        if(this.state.query.length >= 3 && this.state.query !== 0 && this.props.location.pathname === '/movies') {
            setTimeout(() => {
                this.props.onSearchMovies(this.state.query);
            }, 1000)
        }

        if(this.state.query.length < 3) {
            this.props.onGetMovies();
        } 
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
 
    render() {
        console.log(this.props)
        return (
            <form className="nav__input">
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
        onGetMovies: () => dispatch(getMovies())
    }
}

export default connect(null, mapActionToProps)(withRouter(Search))
