import React, { useState } from 'react';

import InnerContainerDisplay from './InnerContainerDisplay';

function InnerContainerContainer() {
  const [tabValue, setTabValue] = React.useState(0);

  function handleTabChange(event, newValue) {
    setTabValue(newValue);
  }

  return (
    <InnerContainerDisplay
      tabValue={tabValue}
      handleTabChange={handleTabChange}
    />
  );
}

export default InnerContainerContainer;
