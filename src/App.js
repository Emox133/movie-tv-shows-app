import React, {useEffect} from 'react';
import './App.css';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Layout/Navbar'

import Movies from './pages/Movies'
import TvShows from './pages/TvShows'
import SingleMovie from './components/Movie/SingleMovie'
import SingleShow from './components/Show/SingleShow'
import {useNeutral} from './contexts/NeutralContext'

function App() {
  const {getConfiguration} = useNeutral()

  useEffect(() => {
    if(window.location.pathname === '/movies') {
      localStorage.removeItem('id')
    }
    getConfiguration()
  }, [getConfiguration])

  return (
    <Router>
        <Navbar />
          <Switch>
            <Route exact path="/movies/:id" component={SingleMovie}/>
            <Route path="/movies" component={Movies}/>
            <Route exact path="/tv-shows/:id" component={SingleShow}/>
            <Route path="/tv-shows" component={TvShows}/>
          </Switch>
    </Router>
  );
}

export default App;
