import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';



function Understanding() {

    const [understanding, setUnderstanding] = useState('');

    const dispatch = useDispatch();

    const history = useHistory();

    const submitUnderstanding = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SET_UNDERSTANDING',
            payload: understanding
        });
        history.push('/support');
    }


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
            <p>GO BACK AND FIX IT ALREADY!</p>
            <button type="button" onClick={() => history.push('/feeling')}>GO BACK</button>
        </>
    );
}

export default Understanding;