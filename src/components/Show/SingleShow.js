import React, {useEffect} from 'react'
import {assignImages} from './../../util/imageConfig'
import Loader from './../Layout/UI/Loader/Loader'

// Redux
import {useSelector, shallowEqual, useDispatch} from 'react-redux'
import {clearKey} from './../../redux/actions/dataActions'
import {getShow} from './../../redux/actions/showActions'

const SingleShow = (props) => {
    const {show, loading, key} = useSelector(state => ({
        show: state.show.show,
        loading: state.data.loading,
        key: state.data.key
    }), shallowEqual);

    const dispatch = useDispatch();

    const id = localStorage.id;

    const {first_air_date, name, number_of_episodes, number_of_seasons, overview, poster_path} = show
    const {imageUrl} = assignImages(poster_path);
    const videoUrl = `https://www.youtube.com/embed/${key}?autoplay=1`
    
    useEffect(() => {
       if(id) dispatch(getShow(id, props.history));
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
                <img src={imageUrl} alt="show" className="details__image"/>}
                <h1 className="details__title">{name}</h1>
                <h1 className="details__overview">Show Overview:</h1>
                <div className="details__info">
                    <span className="details__aired">Aired: {first_air_date}</span>
                    <span className="details__episodes">Episodes: {number_of_episodes}</span>
                    <span className="details__seasons">Seasons: {number_of_seasons}</span>
                </div>
                <p className="details__overview-text">{overview}</p>
            </div>
        : <Loader />
    )
}

export default SingleShow
