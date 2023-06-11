import React from 'react';
import { useHistory } from 'react-router-dom';

function Success(){

    const history = useHistory();

    const goStartAgain = () => {
        history.push('/feeling')
        // STILL NEED TO RESET feedback/survey STATE HERE
    }

    return(
        <>
            <h2>THANK YOU!</h2>
            <p>Feedback received.</p>
            <button type='button' onClick={goStartAgain}>Leave New Feedback</button>
        </>
    );
}

export default Success;