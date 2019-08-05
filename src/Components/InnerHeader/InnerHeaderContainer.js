import React, { useState } from 'react';
import useReactRouter from 'use-react-router';
import InnerHeaderDisplay from './InnerHeaderDisplay';

function InnerHeaderContainer() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { history } = useReactRouter();

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleLogOut(params) {
    setAnchorEl(null);
    history.push('/');
  }

  return (
    <InnerHeaderDisplay
      anchorEl={anchorEl}
      handleMenu={handleMenu}
      handleClose={handleClose}
      handleLogOut={handleLogOut}
    />
  );
}

export default InnerHeaderContainer;
