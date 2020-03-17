import React from 'react'
import Movie from './../components/Movie/Movie'
import Loader from './../components/Layout/UI/Loader'

// Redux
import {useSelector, shallowEqual} from 'react-redux'
    
const Movies = () => {
    // Avoid comparing each time a new object literal using shallowEqual
    const {movies, loading, imageEssentials} = useSelector(state => ({
        movies: state.movie.movies,
        loading: state.movie.loading,
        imageEssentials: state.data.config
    }), shallowEqual)

    let showMovies = movies && !loading ?  
        movies.map(movie => <Movie key={movie.id} images={imageEssentials} movie={movie}/>) 
     : <Loader />

    return showMovies
}

export default Movies
