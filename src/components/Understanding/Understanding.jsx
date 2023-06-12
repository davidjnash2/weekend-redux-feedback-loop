import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';



function Understanding() {

    // set local state to hold input data
    const [understanding, setUnderstanding] = useState('');

    // bring in dispatch for access to send to reducer
    const dispatch = useDispatch();

    // bring in history to facilitate url routing
    const history = useHistory();

    // function to capute input data and dispatch to reducer, and redirect to next component
    const submitUnderstanding = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SET_UNDERSTANDING',
            payload: understanding
        });
        history.push('/support');
    } // end submitUnderstanding function

    // DOM render data
    return (
        <>
            <form onSubmit={submitUnderstanding}>
                <label htmlFor="understanding">From 1 to 5, where's your comprehension?</label>
                <input
                    onChange={(event) => setUnderstanding(event.target.value)}
                    type="number"
                    min="0"
                    max="5"
                    required
                    placeholder="Do you get it?"
                    value={understanding}
                />
                <button type="submit">Next</button>
            </form>

            <p>Need to go back to fix something?</p>
            <p>FIX IT ALREADY!</p>
            <button type="button" onClick={() => history.push('/feeling')}>GO BACK</button>
        </>
    );
} // end Understanding function

export default Understanding;