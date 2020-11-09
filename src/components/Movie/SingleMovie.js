import React, {useEffect} from 'react'
import {assignImages} from './../../util/imageConfig'
import Loader from './../Layout/UI/Loader/Loader'
import {useMovies} from './../../contexts/MovieContext'
import {useNeutral} from './../../contexts/NeutralContext'

const SingleMovie = (props) => {
    const {movie, getMovie} = useMovies()
    const {loading, trailerKey, clearKey} = useNeutral()
    const id = localStorage.id;

    const {overview, title, poster_path} = movie
    const {imageUrl} = assignImages(poster_path);
    const videoUrl = `https://www.youtube.com/embed/${trailerKey}?autoplay=1`

   useEffect(() => {
       if(id) getMovie(id, props.history);
   }, [id, props.history, getMovie]);

    return (
        !loading ?
            <div className="details" id={id}>
                <button className="btn details__btn" onClick={() => clearKey(props.history, props.location.pathname)}>&larr;</button>
                {trailerKey ? 
                <div>
                    <iframe 
                    className="details__video"
                    src={videoUrl} 
                    frameBorder="0" 
                    title="trailer"
                    allow="accelerometer; 
                    autoplay; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture" 
                    allowFullScreen>
                    </iframe>
                </div> : !loading ? 
                <img src={imageUrl} alt="movie" className="details__image"/> : <Loader />}    
                <h1 className="details__title">{title}</h1>
                <h1 className="details__overview">Movie Overview:</h1>
                <p className="details__overview-text">{overview}</p>
            </div>
        : <Loader />
    )
}

export default SingleMovie