import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
// Internal Routs
import LandingPage from '../../Components/LandingPage';
import InnerContainer from '../../Components/InnerContainer';

const Routs = withRouter(({ location }) => (
  <Switch location={location}>
    <Route exact path="/" component={LandingPage} />
    <Route path="/inner_app" component={InnerContainer} />
  </Switch>
));

export default Routs;
