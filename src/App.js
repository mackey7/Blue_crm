import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import { LoginPage } from './Page/Login/index'
import { HomePage } from './Page/HomePage/index'
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>

        </Switch>
      </div >
    </Router >
  );
}

export default App;
