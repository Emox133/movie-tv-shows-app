import React from 'react'
import {withRouter} from 'react-router-dom'
import {assignImages} from './../../util/imageConfig'

// Redux
import {useDispatch} from 'react-redux' 
import {getMovie} from './../../redux/actions/movieActions'

// SVG
import {ReactSVG} from 'react-svg'
import Calendar from './../../assets/icons/SVG/calendar.svg'
import Heart from './../../assets/icons/SVG/heart-outlined.svg'
import Average from './../../assets/icons/SVG/area-graph.svg'

const Movie = props => {
    const {popularity, poster_path, title, vote_average, release_date, id} = props.movie
    const dispatch = useDispatch()
    const {imageUrl} = assignImages(props, poster_path)

    return (
        <article className="card" id={id} onClick={() => dispatch(getMovie(id, props.history))}>
            <img src={imageUrl} className="card__image" alt="movie"/>
            <h1 className="card__title">{title}</h1>
            <div className="card__ratings">
                <ReactSVG className="card__ratings-date" src={Calendar}/>
                <span>{release_date}</span>
                <ReactSVG className="card__ratings-popularity" src={Heart}/> 
                <span>{popularity}</span>
                <ReactSVG className="card__ratings-vote" src={Average}/>
                <span>{vote_average}</span>
            </div>
        </article>
    )
}

export default withRouter(Movie)

