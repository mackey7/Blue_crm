import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";
import { AuthProvider } from './Components/Auth/index'
import { LoginPage } from './Page/Login/index'
import { HomePage } from './Page/HomePage/index'
import SignUp from './Components/SignUp'
import PrivateRoute from './Components/PrivateRoute/index.js'
import { ChartsPage } from './Page/Charts'
import { ClientsPage } from './Page/Clients'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/charts" component={ChartsPage} />
          <Route exact path="/clients" component={ClientsPage} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
