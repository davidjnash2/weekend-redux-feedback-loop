import React from 'react';

function SurveyListItem({ survey }) {

    console.log('survey says! ', order);

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
                <td><button type="delete">🗑️</button></td>
        </>
    )
}

export default SurveyListItem;