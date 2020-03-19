import React from 'react'
import {assignImages} from './../../util/imageConfig'
import Loader from './../Layout/UI/Loader/Loader'

// Redux
import {useSelector, shallowEqual} from 'react-redux'

const SingleShow = (props) => {
    const {show, imageEssentials, loading} = useSelector(state => ({
        show: state.show.show,
        imageEssentials: state.data.config,
        loading: state.data.loading
    }), shallowEqual);

    const {first_air_date, id, name, number_of_episodes, number_of_seasons, overview, poster_path} = show
    const {imageUrl} = assignImages(imageEssentials, poster_path);
    
    return (
        !loading ?
            <div className="details" id={id}>
                <button className="details__btn" onClick={() => props.history.goBack()}>&larr;</button>
                <img src={imageUrl} alt="details" className="details__image"/>
                <h1 className="details__title">{name}</h1>
                <h1 className="details__overview">Movie Overview:</h1>
                <div className="details__info">
                    <span className="details__aired">Aired: {first_air_date}</span>
                    <span className="details__episodes">Episodes: {number_of_episodes}</span>
                    <span className="details__seasons">Seasons: {number_of_seasons}</span>
                </div>
                <p className="details__overview-text">{!overview ? <span>No overview for this show 😕</span> : overview}</p>
            </div>
        : <Loader />
    )
}

export default SingleShow
