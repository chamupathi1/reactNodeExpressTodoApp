import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import rootReducer from "./reducers";


/**
 * Root component designed to fix the invariant issues when testing
 *
 */
export default ({ initialState = {}, children }) => {
    return (
        <Provider
            store={createStore(rootReducer, initialState, applyMiddleware(reduxThunk))}
        >
            {children}
        </Provider>
    );
};
