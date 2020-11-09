import React, {useContext, useState, useCallback} from 'react'
import axios from 'axios'

const NeutralContext = React.createContext()

export const useNeutral = () => {
    return useContext(NeutralContext)
}

export function NeutralProvider ({children}) {
    const [config, setConfig] = useState({})
    const [loading, setLoading] = useState(false)
    const [trailerKey, setTrailerKey] = useState(null)
    let key = 'b03d4bc4719f0a814c7c8d0b36d522c1'

    const getConfiguration = useCallback(() => {
        setLoading(true)
        axios.get(`https://api.themoviedb.org/3/configuration?api_key=${key}`, {validateStatus: () => {return true}})
        .then(res => {
            setLoading(false)
            setConfig(Object.assign({images: res.data.images}))
            persistEssentials(res.data.images.base_url, res.data.images.poster_sizes[3]);
        })
        .catch(err => {
            console.log(err.response)
        })
    }, [key]);

    const clearKey = (fn, type) => {
        setTrailerKey(null)
        
        // type.startsWith('/movies') ? fn.push(type) : type.startsWith('/tv-shows') ? fn.push(type) : null; 
        const pathname = type.split('/')[1]

        if(type.startsWith('/movies')) fn.push(`/${pathname}`);
        if(type.startsWith('/tv-shows')) fn.push(`/${pathname}`);    
    };

    const persistEssentials = (baseUrl, poster_size) => {
        localStorage.setItem('url', baseUrl)
        localStorage.setItem('poster', poster_size)
    }

    const value = {
        loading,
        setLoading,
        trailerKey,
        setTrailerKey,
        clearKey,
        config,
        getConfiguration
    }

    return (
        <NeutralContext.Provider value={value}>
            {children}
        </NeutralContext.Provider>
    )
}

