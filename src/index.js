import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {MoviesProvider} from './contexts/MovieContext'
import {TvShowsProvider} from './contexts/TvShowsContext'
import {NeutralProvider} from './contexts/NeutralContext'

const app = (
    <NeutralProvider>
        <TvShowsProvider>
            <MoviesProvider>
                <App />
            </MoviesProvider>
        </TvShowsProvider>
    </NeutralProvider>
)

ReactDOM.render(app, document.getElementById('root'));
