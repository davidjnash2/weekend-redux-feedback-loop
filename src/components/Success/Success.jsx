import React from 'react';
import { useHistory } from 'react-router-dom';

function Success(){
    return(
        <>
            <h2>THANK YOU!</h2>
            <p>Feedback received.</p>
            <img src="public/images/goat_small.jpg"></img>
            <button type='submit' onClick={() => history.push('/feeling')}>Leave New Feedback</button>
        </>
    );
}

export default Success;