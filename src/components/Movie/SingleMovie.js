import React from 'react'
import {assignImages} from './../../util/imageConfig'
import Loader from './../Layout/UI/Loader/Loader'

// Redux
import {useSelector, useDispatch, shallowEqual} from 'react-redux'
import {getMovie} from './../../redux/actions/movieActions'

const SingleMovie = (props) => {
    const {movie, imageEssentials, loading} = useSelector(state => ({
        movie: state.movie.movie,
        imageEssentials: state.data.config,
        loading: state.data.loading
    }), shallowEqual);

    const {id, overview, poster_path, title, video} = movie
    const {imageUrl} = assignImages(imageEssentials, poster_path);
    
    return (
        !loading ?
            <div className="movie" id={id}>
                <button className="movie__btn">&larr;</button>
                <img src={!imageUrl ? "" : imageUrl} alt="movie" className="movie__image"/>
                <h1 className="movie__title">{title}</h1>
                <h1>Movie Overview:</h1>
                <p>{overview}</p>
            </div>
        : <Loader />
    )
}

export default SingleMovie
