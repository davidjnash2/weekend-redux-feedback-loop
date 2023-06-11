import React from 'react';
import { useHistory } from 'react-router-dom';

function Home() {

    const history = useHistory();

    const startSurvey = () => {
        history.push('/feeling');
    }

    return (
        <>
            <h2>LET US BEGIN.</h2>
            <p>Tell me how you really feel.</p>
            <button type='button' onClick={startSurvey}>Start</button>
        </>
    );
}

export default Home;