import React from 'react';
import { useHistory } from 'react-router-dom';

function Home() {

    // make history available for url routing
    const history = useHistory();

    // function to route to next page
    const startSurvey = () => {
        history.push('/feeling');
    } // end startSurvey function

    // Home render data
    return (
        <>
            <h2>LET US BEGIN.</h2>
            <p>Tell me how you really feel.</p>
            <button type='button' onClick={startSurvey}>Start</button>
        </>
    );
} // end Home function

export default Home;