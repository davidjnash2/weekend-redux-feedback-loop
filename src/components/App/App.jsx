import React from 'react';
import axios from 'axios';
import './App.css';
import { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Admin from '../Admin/Admin';

// components are here
import Home from '../Home/Home';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Success from '../Success/Success';

function App() {

  return (

    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/feeling" exact>
          <Feeling />
        </Route>

        <Route path="/understanding" exact>
          <Understanding />
        </Route>

        <Route path="/support" exact>
          <Support />
        </Route>

        <Route path="/comments" exact>
          <Comments />
        </Route>

        <Route path="/review" exact>
          <Review />
        </Route>

        <Route path="/success" exact>
          <Success />
        </Route>

        <Route path="/admin" exact>
          <Admin />
        </Route>
      </Router>
    </div>

  );
}

export default App;
