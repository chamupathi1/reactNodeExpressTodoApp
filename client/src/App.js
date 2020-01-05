import React from 'react';
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import './App.css';
import TaskWrapper from './Components/TaskWrapper/TaskWrapper';

function App() {
  return (
    <div className="row">
      <div className="col s12 m8 offset-m2 l6 offset-l3">
        <BrowserRouter>
          <Route component={TaskWrapper} />
          <Redirect to={'/all'} />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
