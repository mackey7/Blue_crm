import React from 'react';
import {
  BrowserRouter as Router,
  Route

} from "react-router-dom";
import { AuthProvider } from './Components/Auth/index'
import { LoginPage } from './Page/Login/index'
import { HomePage } from './Page/HomePage/index'
import SignUp from './Components/SignUp'
import PrivateRoute from './Components/PrivateRoute/index.js'
import { ChartsPage } from './Page/Charts'
import { ClientsPage } from './Page/Clients'
import { CalendarPage } from './Page/Calendar'
import { TasksPage } from './Page/Tasks'
import { CostsPage } from './Page/Costs'
import { Provider, useSelector } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import { store } from './Store/store'
import firebase from 'firebase/app';
import app from './base'
function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <ReactReduxFirebaseProvider
          firebase={firebase}
          config={app}
          dispatch={store.dispatch}
          createFirestoreInstance={createFirestoreInstance}>
          <Router>
            <div>
              <PrivateRoute exact path="/" component={HomePage} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/charts" component={ChartsPage} />
              <Route exact path="/clients" component={ClientsPage} />
              <Route exact path="/calendar" component={CalendarPage} />
              <Route exact path="/tasks" component={TasksPage} />
              <Route exact path="/costs" component={CostsPage} />
            </div>
          </Router>
        </ReactReduxFirebaseProvider>
      </Provider>
    </AuthProvider >
  );
}

export default App;
