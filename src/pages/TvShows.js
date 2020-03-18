import React from 'react'
import Show from './../components/Show/Show'
import Loader from './../components/Layout/UI/Loader/Loader'

// Redux
import {useSelector, shallowEqual} from 'react-redux'
    
const TvShows = () => {
    const {shows, loading, imageEssentials} = useSelector(state => ({
        shows: state.show.shows,
        loading: state.show.loading,
        imageEssentials: state.data.config.images
    }), shallowEqual)

    let renderShows = shows && !loading ?  
        shows.map(show => <Show key={show.id} images={imageEssentials} show={show}/>) 
     : <Loader />

    return(<div className="grid-container">{renderShows}</div>) 
}

export default TvShows
