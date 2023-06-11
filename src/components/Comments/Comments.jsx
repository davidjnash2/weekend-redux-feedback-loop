import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';



function Comments() {

    const [comments, setComments] = useState('');

    const dispatch = useDispatch();

    const history = useHistory();

    const submitComments = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SET_COMMENTS',
            payload: comments
        })
        history.push('/review');

    }



    return (
        <form onSubmit={submitComments}>
            <input
                onChange={(event) => setComments(event.target.value)}
                type='text'
                placeholder='There, there. Let it out.'
                value={comments}
            />

            <button type="submit">Next</button>
        </form>
    );
}

export default Comments;