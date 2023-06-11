import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';



function Understanding() {

    const history = useHistory();

    const submitUnderstanding = (event) => {
        event.preventDefault();
        history.push('/support')
    }


    return (
        <>
            <form onSubmit={submitUnderstanding}>
                <input
                    onChange={ }
                    type='number'
                    placeholder='Do you get it?'
                    value={understanding}
                />

                <button type='submit'>Next</button>
            </form>
        </>
    );
}

export default Understanding;