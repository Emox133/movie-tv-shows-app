import React from 'react'
import Show from './../components/Show/Show'
import Loader from './../components/Layout/UI/Loader'

// Redux
import {useSelector, shallowEqual} from 'react-redux'
    
const TvShows = () => {
    const {shows, loading, imageEssentials} = useSelector(state => ({
        shows: state.show.shows,
        loading: state.show.loading,
        imageEssentials: state.data.config
    }), shallowEqual)

    let renderShows = shows && !loading ?  
        shows.map(show => <Show key={show.id} images={imageEssentials} show={show}/>) 
     : <Loader />

    return renderShows
}

export default TvShows
