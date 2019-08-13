import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
// Internal Routs
import LandingPage from '../../Components/LandingPage';
import InnerContainer from '../../Components/InnerContainer';
import FeedbackPage from '../../Components/FeedbackPage';

const Routs = withRouter(({ location }) => (
  <Switch location={location}>
    <Route exact path="/" component={LandingPage} />
    <Route path="/overview" component={InnerContainer} />
    <Route path="/feedback/:productId" component={FeedbackPage} />
  </Switch>
));

export default Routs;
