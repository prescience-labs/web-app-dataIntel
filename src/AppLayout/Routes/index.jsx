import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
// Internal Routs
import LandingPage from '../../Components/LandingPage';

const Routs = withRouter(({ location }) => (
  <Switch location={location}>
    <Route exact path="/" component={LandingPage} />
  </Switch>
));

export default Routs;
