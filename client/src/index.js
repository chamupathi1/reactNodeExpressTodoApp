import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from "redux-thunk";
import { Provider } from "react-redux";

import rootReducer from "./reducers";
import { createLogger } from "redux-logger";

const loggerMiddleware = createLogger();


const store = process.env.PRODUCTION
    ? createStore(rootReducer, applyMiddleware(reduxThunk))
    : createStore(rootReducer, applyMiddleware(reduxThunk,
        loggerMiddleware
    ));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
