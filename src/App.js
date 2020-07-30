import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import { LoginPage } from './Page/Login/index'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <LoginPage />
          </Route>

        </Switch>
      </div >
    </Router >
  );
}

export default App;
