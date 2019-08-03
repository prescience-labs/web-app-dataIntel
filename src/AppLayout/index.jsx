import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// Internal Components
import Routes from './Routes';

/*React Router Wrap*/
const RouterWrapper = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default RouterWrapper;
