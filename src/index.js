import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';


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

const survey = (state = [], action) => {
    if(action.type === 'SET_CLEAR'){
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
}

const storeInstance = createStore(
    combineReducers({
        // feeling,
        // understanding,
        // support,
        // comments,
        survey

    }),
    applyMiddleware(logger)
);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={storeInstance}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);
