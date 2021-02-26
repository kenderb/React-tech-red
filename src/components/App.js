import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../containers/Login';
import Logout from '../containers/Logout';
import Catalog from '../containers/Catalog';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={Catalog} exact />
      <Route path="/loging" component={Login} />
      <Route path="/logout" component={Logout} />
    </Switch>
  </Router>
);

export default App;
