import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Review() {

    // realized as I was bringing in all these reducers, that there was 
    // probably a more efficient way to do it, so found way to combine 
    // them all into one reducer, and commented these out
    // const feeling = useSelector(store => store.feeling);
    // const understanding = useSelector(store => store.understanding);
    // const support = useSelector(store => store.support);
    // const comments = useSelector(store => store.comments);

    // bring survey reducer data from data store
    const survey = useSelector(store => store.survey);

    // make history available for url routing
    const history = useHistory();

    // function to submit all survey data from state to server & DB
    const submitSurvey = () => {
        axios.post('/survey', survey)
            .then((response) => {
                console.log('success POSTing survey', response);
                history.push('/success');
            })
            .catch((error) => {
                console.log('error submitting survey via POST', error);
                alert('Submission incomplete. Please go back and complete all fields.')
            })

    } // end submitSurvey function

    // render all captured input data from state for review prior to submitting
    return (
        <>
            <h2>How's it look? Is this right?</h2>
            <p>Feeling: {survey.feeling}</p>
            <p>Understanding: {survey.understanding}</p>
            <p>Support: {survey.support}</p>
            <p>Comments: {survey.comments}</p>
            <p>No? See something you need to fix?</p>
            <p>GO BACK AND FIX IT ALREADY!</p>
            <button type="submit" onClick={() => history.push('/comments')}>GO BACK</button>
            <p>-OR-</p>
            <p>If you got it right the first time,</p>
            <p>SUBMIT THAT SHIT!</p>
            <button type="button" onClick={submitSurvey}>SUBMIT</button>
        </>
    );
} // end Review function

export default Review;