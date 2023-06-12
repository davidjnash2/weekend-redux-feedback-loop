import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';



function Comments() {

    // useState to hold current comment input values in state
    const [comments, setComments] = useState('');

    // make dispatch available
    const dispatch = useDispatch();

    // make router paths functional
    const history = useHistory();


    // event listener for comment field, dispatch value to reducer, and route to next page
    const submitComments = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SET_COMMENTS',
            payload: comments
        })
        history.push('/review');
    } // end submitComments function


    // input form to capture comments
    return (
        <>
            <form onSubmit={submitComments}>
                <label htmlFor="comments">Got more to say?</label>
                <input
                    onChange={(event) => setComments(event.target.value)}
                    type='text'
                    placeholder='There, there. Let it out.'
                    value={comments}
                />
                <button type="submit">Next</button>
            </form>

            <p>Need to go back to fix something?</p>
            <p>FIX IT ALREADY!</p>
            <button type="button" onClick={() => history.push('/support')}>GO BACK</button>
        </>
    );
} // end Comments function

export default Comments;