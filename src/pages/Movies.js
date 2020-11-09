import React from 'react'
import Movie from './../components/Movie/Movie'
import Loader from './../components/Layout/UI/Loader/Loader'
import {useMovies} from '../contexts/MovieContext'
import {useNeutral} from '../contexts/NeutralContext'
    
const Movies = () => {
    const {movies} = useMovies()
    const {loading} = useNeutral()

    let showMovies = movies && !loading ?  
        movies.map(movie => <Movie key={movie.id} movie={movie}/>) 
     : <Loader />

    return(<div className="grid-container">{showMovies}</div>) 
}

export default Movies
