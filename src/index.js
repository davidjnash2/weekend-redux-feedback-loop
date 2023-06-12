import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

// originally had a reducer for each input, but when building the 
// Review component, it became apparent I should look for a more 
// efficient way to combine them, which I did in survey reducer, so
// commented out these original four here

// const feeling = (state = [], action) => {
//     if (action.type === 'SET_FEELING') {
//         return action.payload
//     }
//     return state;
// }

// const understanding = (state = [], action) => {
//     if (action.type === 'SET_UNDERSTANDING') {
//         return action.payload
//     }
//     return state;
// }

// const support = (state = [], action) => {
//     if (action.type === 'SET_SUPPORT') {
//         return action.payload
//     }
//     return state;
// }

// const comments = (state = [], action) => {
//     if (action.type === 'SET_COMMENTS') {
//         return action.payload
//     }
//     return state;
// }

// survey reducer to capture inputs from all 4 user fields into 
// one object, which initial conditional statement for clearing 
// state from click of button on Success component
const survey = (state = [], action) => {
    if (action.type === 'SET_CLEAR') {
        return state = [];
    } else {
        switch (action.type) {
            case ('SET_FEELING'):
                return {
                    ...state,
                    feeling: action.payload
                };
            case ('SET_UNDERSTANDING'):
                return {
                    ...state,
                    understanding: action.payload
                };
            case ('SET_SUPPORT'):
                return {
                    ...state,
                    support: action.payload
                };
            case ('SET_COMMENTS'):
                return {
                    ...state,
                    comments: action.payload
                };
        }
    }
    return state;
} // end survey reducer

// reducer to create array holding all survey objects coming from database
const surveyList = (state = [], action) => {
    if (action.type === 'SET_SURVEY_LIST') {
        return action.payload
    }
    return state;
} // end surveyList reducer

// create state store to hold all reducer data
const storeInstance = createStore(
    combineReducers({
        // feeling,
        // understanding,
        // support,
        // comments,
        survey,
        surveyList

    }),
    applyMiddleware(logger) // still not exactly clear on what this does
);


// main render holder for entire SPA with all components, wrapped in Provider to 
// allow state store access across all components
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={storeInstance}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);
