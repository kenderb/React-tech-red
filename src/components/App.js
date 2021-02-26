import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import Logout from './Logout';
import Catalog from './Catalog';

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
