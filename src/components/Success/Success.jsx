import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Success() {

    // const survey = useSelector(store => store.survey);

    const history = useHistory();

    const dispatch = useDispatch();

    const goStartAgain = () => {
        dispatch({
            type: "SET_CLEAR"
        })
        history.push('/');

    }

    return (
        <>
            <h2>THANK YOU!</h2>
            <p>Feedback received.</p>
            <button type="button" onClick={goStartAgain}>Do it again!</button>
        </>
    );
}

export default Success;