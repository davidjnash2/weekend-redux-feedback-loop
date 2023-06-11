import React from 'react';
import axios from 'axios';

function SurveyListItem({ survey, getSurveyList }) {

    console.log('survey says! ', survey);


    const deleteSurvey = () => {
        axios.delete(`/survey/${survey.id}`)
            .then((response) => {
                console.log(response);
                getSurveyList();
            }).catch((error) => {
                console.log(error);
            });
    };

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
}

export default SurveyListItem;