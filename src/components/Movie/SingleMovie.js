import React from 'react'
import {assignImages} from './../../util/imageConfig'
import Loader from './../Layout/UI/Loader/Loader'

// Redux
import {useSelector, shallowEqual} from 'react-redux'

const SingleMovie = (props) => {
    const {movie, imageEssentials, loading, key} = useSelector(state => ({
        movie: state.movie.movie,
        imageEssentials: state.data.config,
        loading: state.data.loading,
        key: state.movie.key
    }), shallowEqual);

    const {id, overview, poster_path, title} = movie
    const {imageUrl} = assignImages(imageEssentials, poster_path);
    const videoUrl = `https://www.youtube.com/embed/${key}?autoplay=1`
    
    return (
        !loading ?
            <div className="details" id={id}>
                <button className="details__btn" onClick={() => props.history.goBack()}>&larr;</button>
                {key ? 
                <div className="details__video-container">
                    <iframe 
                    width="560" 
                    height="315" 
                    src={videoUrl} 
                    frameBorder="0" 
                    allow="accelerometer; 
                    autoplay; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture" 
                    allowFullScreen>
                    </iframe>
                </div> : 
                <img src={imageUrl} alt="movie" className="details__image"/>}    
                <h1 className="details__title">{title}</h1>
                <h1 className="details__overview">Movie Overview:</h1>
                <p className="details__overview-text">{!overview ? <span>No overview for this movie 😕</span> : overview}</p>
            </div>
        : <Loader />
    )
}

export default SingleMovie
