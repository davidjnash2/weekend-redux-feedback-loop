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
                <input
                    onChange={(event) => setUnderstanding(event.target.value)}
                    type="number"
                    min="0"
                    max="5"
                    placeholder="Do you get it?"
                    value={understanding}
                />

                <button type="submit">Next</button>
            </form>
        </>
    );
}

export default Understanding;