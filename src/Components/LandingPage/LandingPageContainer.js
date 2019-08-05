import React, { useState } from 'react';
import useReactRouter from 'use-react-router';
import LandingPageDisplay from './LandingPageDisplay';

function LandingPageContainer() {
  const [openDialog, setOpenDialog] = useState(false);

  function handleClickOpen() {
    setOpenDialog(true);
  }

  function handleClose() {
    setOpenDialog(false);
  }
  const { history } = useReactRouter();

  function handleSingIng() {
    setOpenDialog(false);
    history.push('/inner_app');
  }

  return (
    <LandingPageDisplay
      openDialog={openDialog}
      handleClickOpen={handleClickOpen}
      handleClose={handleClose}
      handleSingIng={handleSingIng}
    />
  );
}

export default LandingPageContainer;
