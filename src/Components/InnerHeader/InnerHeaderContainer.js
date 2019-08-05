import React, { useState } from 'react';

import InnerHeaderDisplay from './InnerHeaderDisplay';

function InnerHeaderContainer() {
  const [anchorEl, setAnchorEl] = useState(null);

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  return (
    <InnerHeaderDisplay
      anchorEl={anchorEl}
      handleMenu={handleMenu}
      handleClose={handleClose}
    />
  );
}

export default InnerHeaderContainer;
