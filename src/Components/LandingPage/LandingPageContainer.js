import React, { useState } from 'react';

import LandingPageDisplay from './LandingPageDisplay';

function LandingPageContainer() {
  const [openDialog, setOpenDialog] = useState(false);

  function handleClickOpen() {
    setOpenDialog(true);
  }

  function handleClose() {
    setOpenDialog(false);
  }

  return (
    <LandingPageDisplay
      openDialog={openDialog}
      handleClickOpen={handleClickOpen}
      handleClose={handleClose}
    />
  );
}

export default LandingPageContainer;
