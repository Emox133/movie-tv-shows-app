import React from 'react'
import Show from './../components/Show/Show'
import Loader from './../components/Layout/UI/Loader/Loader'

import {useTvShows} from './../contexts/TvShowsContext'
import {useNeutral} from './../contexts/NeutralContext'
    
const TvShows = () => {
    const {shows} = useTvShows()
    const {loading} = useNeutral()

    let renderShows = shows && !loading ?  
        shows.map(show => <Show key={show.id} show={show}/>) 
     : <Loader />

    return(<div className="grid-container">{renderShows}</div>) 
}

export default TvShows
