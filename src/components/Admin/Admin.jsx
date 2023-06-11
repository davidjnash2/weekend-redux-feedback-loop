import react from 'react';
import SurveyListItem from '../SurveyListItem/SurveyListItem';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

function Admin() {

    const dispatch = useDispatch();

    const history = useHistory();

    const surveyList = useSelector(store => store.surveyList);



    const getSurveyList = () => {
        axios.get('/survey')
            .then((response) => {
                console.log('response from getSurveyList is:', response.data);
                dispatch({
                    type: 'SET_SURVEY_LIST',
                    payload: response.data
                })
            })
            .catch((error) => {
                console.log('error getting surveyList', error);
            })
    }

    useEffect(() => {
        getSurveyList()
    }, []);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>
                            Feeling
                        </th>
                        <th>
                            Understanding
                        </th>
                        <th>
                            Support
                        </th>
                        <th>
                            Comments
                        </th>
                        <th>
                            Date Submitted
                        </th>
                        <th>
                            Delete?
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {surveyList.map((survey, i) => (
                        <tr key={i}> <SurveyListItem survey={survey} getSurveyList={getSurveyList} /></tr>
                    ))}
                </tbody>
            </table>
            <p></p>
            <button type="button" onClick={() => history.push('/')}>GO BACK HOME!</button>
        </>

    );

}

export default Admin;