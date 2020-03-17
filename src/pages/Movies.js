import React from 'react'
import Movie from './../components/Movie/Movie'

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
     : <p>Loading ...</p>

    return showMovies
}

export default Movies
