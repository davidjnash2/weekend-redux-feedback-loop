import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';



function Support() {

    // hold input data in local state for access
    const [support, setSupport] = useState('');

    // bring in dispatch to allow actions to be sent
    const dispatch = useDispatch();

    // bring in history for url routing
    const history = useHistory();

    // function to capture support input data and send to reducer, and to move to next page
    const submitSupport = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SET_SUPPORT',
            payload: support
        });
        history.push('/comments');
    } // end submitSupport function

    // DOM render data for input
    return (
        <>
            <form onSubmit={submitSupport}>
                <label htmlFor="support">From 1 to 5, how well do you feel supported?</label>
                <input
                    onChange={(event) => setSupport(event.target.value)}
                    type="number"
                    min="0"
                    max="5"
                    required
                    placeholder="Got support?"
                    value={support}
                />
                <button type="submit">Next</button>
            </form>

            <p>Need to go back to fix something?</p>
            <p>FIX IT ALREADY!</p>
            <button type="button" onClick={() => history.push('/understanding')}>GO BACK</button>
        </>
    );
} // end Support function

export default Support;