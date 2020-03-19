import React from 'react'
import {withRouter} from 'react-router-dom'
import {assignImages} from './../../util/imageConfig'

// Redux
import {useDispatch} from 'react-redux'
import {getShow} from './../../redux/actions/showActions'

// SVG
import {ReactSVG} from 'react-svg'
import Calendar from './../../assets/icons/SVG/calendar.svg'
import Heart from './../../assets/icons/SVG/heart-outlined.svg'
import Average from './../../assets/icons/SVG/area-graph.svg'

const Show = props => {
    const {popularity, poster_path, name, vote_average, first_air_date, id} = props.show
    const {imageUrl} = assignImages(props, poster_path)

    const dispatch = useDispatch()

    return (
        <article className="card" id={id} onClick={() => dispatch(getShow(id, props.history))}>
            <img src={imageUrl} className="card__image" alt="show"/>
            <h1 className="card__title">{name}</h1>
            <div className="card__ratings">
                <ReactSVG className="card__ratings-date" src={Calendar}/>
                <span>{first_air_date}</span>
                <ReactSVG className="card__ratings-popularity" src={Heart}/> 
                <span>{popularity}</span>
                <ReactSVG className="card__ratings-vote" src={Average}/>
                <span>{vote_average}</span>
            </div>
        </article>
    )
}

export default withRouter(Show)

