import React, {useEffect} from 'react'
import {assignImages} from './../../util/imageConfig'
import Loader from './../Layout/UI/Loader/Loader'

// Redux
import {useSelector, shallowEqual, useDispatch} from 'react-redux'
import {clearKey} from './../../redux/actions/dataActions'
import {getMovie} from './../../redux/actions/movieActions'

const SingleMovie = (props) => {
    const {movie, loading, key} = useSelector(state => ({
        movie: state.movie.movie,
        loading: state.data.loading,
        key: state.data.key
    }), shallowEqual);

    const dispatch = useDispatch();

    const id = localStorage.id;

    const {overview, title, poster_path} = movie
    const {imageUrl} = assignImages(poster_path);
    const videoUrl = `https://www.youtube.com/embed/${key}?autoplay=1`

   useEffect(() => {
       if(id) dispatch(getMovie(id, props.history));
   }, [dispatch, id, props.history]);

    return (
        !loading ?
            <div className="details" id={id}>
                <button className="btn details__btn" onClick={() => dispatch(clearKey(props.history, props.location.pathname))}>&larr;</button>
                {key ? 
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
                </div> : 
                <img src={imageUrl} alt="movie" className="details__image"/>}    
                <h1 className="details__title">{title}</h1>
                <h1 className="details__overview">Movie Overview:</h1>
                <p className="details__overview-text">{loading ? <span>No overview for this movie 😕</span> : overview}</p>
            </div>
        : <Loader />
    )
}

export default SingleMovie
