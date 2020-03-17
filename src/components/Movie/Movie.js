import React from 'react'

// SVG
import {ReactSVG} from 'react-svg'
import Calendar from './../../assets/icons/SVG/calendar.svg'
import Heart from './../../assets/icons/SVG/heart-outlined.svg'
import Average from './../../assets/icons/SVG/area-graph.svg'

const Movie = props => {
    const {popularity, poster_path, title, vote_average, release_date, id} = props.movie
    
    // TMDB image creation
    // https://developers.themoviedb.org/3/getting-started/images
    const base_url = props.images.images.secure_base_url
    const size = props.images.images.poster_sizes[3]
    const imageUrl = `${base_url}${size}/${poster_path}`;

    return (
        <article className="movie" id={id}>
            <img src={imageUrl} className="movie__image" alt="movie"/>
            <h1 className="movie__title">{title}</h1>
            <div className="movie__ratings">
                <ReactSVG className="movie__ratings-date" src={Calendar}/>
                <span>{release_date}</span>
                <ReactSVG className="movie__ratings-popularity" src={Heart}/> 
                <span>{popularity}</span>
                <ReactSVG className="movie__ratings-vote" src={Average}/>
                <span>{vote_average}</span>
            </div>
        </article>
    )
}

export default Movie

