import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';



function Support() {

    const [support, setSupport] = useState('');

    const dispatch = useDispatch();

    const history = useHistory();

    const submitSupport = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SET_SUPPORT',
            payload: support
        });
        history.push('/comments');
    }


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
            <p>GO BACK AND FIX IT ALREADY!</p>
            <button type="button" onClick={() => history.push('/understanding')}>GO BACK</button>
        </>
    );
}

export default Support;