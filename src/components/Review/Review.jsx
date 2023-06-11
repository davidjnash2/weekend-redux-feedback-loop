import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Review() {

    // const feeling = useSelector(store => store.feeling);

    // const understanding = useSelector(store => store.understanding);

    // const support = useSelector(store => store.support);

    // const comments = useSelector(store => store.comments);

    const survey = useSelector(store => store.survey);

    const history = useHistory();


    const submitSurvey = () => {
        axios.post('/survey', survey)
            .then((response) => {
                console.log('success POSTing survey', response);
                history.push('/success');
            })
            .catch((error) => {
                console.log('error submitting survey via POST', error);

            })

    }

    return (
        <>
            <p>Feeling: {survey.feeling}</p>
            <p>Understanding: {survey.understanding}</p>
            <p>Support: {survey.support}</p>
            <p>Comments: {survey.comments}</p>
            <p>See something you need to fix?</p>
            <p>GO BACK AND FIX IT ALREADY!</p>
            <button type="submit" onClick={() => history.push('/comments')}>GO BACK</button>
            <p>-OR-</p>
            <p>if you got it right the first time,</p>
            <p>SUBMIT THAT SHIT!</p>
            <button type="button" onClick={submitSurvey}>SUBMIT</button>
        </>



    )
}

export default Review;