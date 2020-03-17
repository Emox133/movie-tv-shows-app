import React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Layout/Navbar'

import Movies from './pages/Movies'
import TvShows from './pages/TvShows'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="grid-container">
        <Switch>
          <Route path="/movies" component={Movies}/>
          <Route path="/tv-shows" component={TvShows}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
