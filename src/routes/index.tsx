import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Customers from '../pages/Customers';

import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/clientes" exact component={Customers} />
  </Switch>
);

export default Routes;
