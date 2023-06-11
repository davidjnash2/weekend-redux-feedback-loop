import React from 'react';
import { useHistory } from 'react-router-dom';

function Success(){

    const history = useHistory();

    const goStartAgain = () => {
        history.push('/')
        // STILL NEED TO RESET feedback/survey STATE HERE
    }

    return(
        <>
            <h2>THANK YOU!</h2>
            <p>Feedback received.</p>
            <button type='button' onClick={goStartAgain}>Do it again!</button>
        </>
    );
}

export default Success;