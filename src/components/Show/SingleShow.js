import React, {useEffect} from 'react'
import {assignImages} from './../../util/imageConfig'
import Loader from './../Layout/UI/Loader/Loader'

import {useNeutral} from './../../contexts/NeutralContext'
import {useTvShows} from './../../contexts/TvShowsContext'

const SingleShow = ({history, location}) => {
    const {getShow, show} = useTvShows()
    const {clearKey, loading, trailerKey} = useNeutral()
    console.log(loading)

    const id = localStorage.id;

    const {first_air_date, name, number_of_episodes, number_of_seasons, overview, poster_path} = show
    const {imageUrl} = assignImages(poster_path);
    const videoUrl = `https://www.youtube.com/embed/${trailerKey}?autoplay=1`
    
    useEffect(() => {
       if(id) getShow(id, history);
    }, [id, history, getShow]);

    return (
        !loading ?
            <div className="details" id={id}>
                <button className="btn details__btn" onClick={() => clearKey(history, location.pathname)}>&larr;</button>
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
                <img src={imageUrl} alt="show" className="details__image"/> : <Loader />}
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
