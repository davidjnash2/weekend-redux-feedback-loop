import React from 'react';
import axios from 'axios';
import './App.css';
import { useState, useEffect } from 'react';
import {HashRouter as Router, Route, Link } from 'react-router-dom';

// components are here
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
// import Support from '../Support/Support';
// import Comments from '../Comments/Comments';
// import Review from '../Review/Review';
import Success from '../Success/Success';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Feeling />
      <Understanding />
      {/* <Support />
      <Comments />
      <Review /> */}
      <Success />

    </div>
  );
}

export default App;
