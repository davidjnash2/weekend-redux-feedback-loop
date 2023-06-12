import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Success() {

    // bring in history to allow for url routing
    const history = useHistory();

    // bring in dispatch to send info to reducer
    const dispatch = useDispatch();

    // function to clear state data from survey reducer, and direct back to home page
    const goStartAgain = () => {
        dispatch({
            type: "SET_CLEAR"
        })
        history.push('/');
    } // end goStartAgain function

    // render data
    return (
        <>
            <h2>THANK YOU!</h2>
            <p>Feedback received.</p>
            <button type="button" onClick={goStartAgain}>Do it again!</button>
        </>
    );
} // end Success function

export default Success;