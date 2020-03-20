import React from 'react'
import Show from './../components/Show/Show'
import Loader from './../components/Layout/UI/Loader/Loader'

// Redux
import {useSelector, shallowEqual} from 'react-redux'
    
const TvShows = () => {
    const {shows, loading} = useSelector(state => ({
        shows: state.show.shows,
        loading: state.show.loading
    }), shallowEqual)

    let renderShows = shows && !loading ?  
        shows.map(show => <Show key={show.id} show={show}/>) 
     : <Loader />

    return(<div className="grid-container">{renderShows}</div>) 
}

export default TvShows
