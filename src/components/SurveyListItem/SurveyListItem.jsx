import React from 'react';
import axios from 'axios';

// component function, with props for survey variable 
// and getSurveyList functions to pass through for access
function SurveyListItem({ survey, getSurveyList }) {

    // log to test and insure survey prop passed
    console.log('survey says! ', survey);

    // function to delete survey item by id and re-render DOM
    const deleteSurvey = () => {
        axios.delete(`/survey/${survey.id}`)
            .then((response) => {
                console.log(response);
                getSurveyList();
            }).catch((error) => {
                console.log(error);
            });
    } // end deleteSurvey function

    // render data for survey results table
    return (
        <>
            <td>
                {survey.feeling}
            </td>
            <td>
                {survey.understanding}
            </td>
            <td>
                {survey.support}
            </td>
            <td>
                {survey.comments}
            </td>
            <td>
                {survey.date}
            </td>
            <td><button type="delete" onClick={deleteSurvey}>🗑️</button></td>
        </>
    )
} // end SurveyListItem function

export default SurveyListItem;