import React from 'react';
import useReactRouter from 'use-react-router';

import OverviewDisplay from './OverviewDisplay';

function OverviewContainer() {
  const { match } = useReactRouter();
  const { token, id } = match.params;

  if (token && token !== 'false') {
  }

  if (id) {
  }

  return <OverviewDisplay />;
}

export default OverviewContainer;
