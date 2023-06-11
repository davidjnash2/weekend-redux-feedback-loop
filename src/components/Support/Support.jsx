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
                <input
                    onChange={(event) => setSupport(event.target.value)}
                    type="number"
                    min="0"
                    max="5"
                    placeholder="Got support?"
                    value={support}
                />

                <button type="submit">Next</button>
            </form>
        </>
    );
}

export default Support;