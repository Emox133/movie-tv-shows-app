import React from 'react'
import Movie from './../components/Movie/Movie'
import Loader from './../components/Layout/UI/Loader/Loader'

// Redux
import {useSelector, shallowEqual} from 'react-redux'
    
const Movies = (props) => {
    // Avoid comparing each time a new object literal using shallowEqual
    const {movies, loading, imageEssentials} = useSelector(state => ({
        movies: state.movie.movies,
        loading: state.movie.loading,
        imageEssentials: state.data.config.images
    }), shallowEqual)

    let showMovies = movies && !loading ?  
        movies.map(movie => <Movie key={movie.id} images={imageEssentials} movie={movie}/>) 
     : <Loader />

    return(<div className="grid-container">{showMovies}</div>) 
}

export default Movies
