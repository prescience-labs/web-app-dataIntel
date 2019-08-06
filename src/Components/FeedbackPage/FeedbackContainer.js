import React from 'react';

import FeedbackDisplay from './FeedbackDisplay';
import useReactRouter from 'use-react-router';

function FeedbackContainer() {
  const { match } = useReactRouter();
  const { id } = match.params;

  return <FeedbackDisplay productId={id} />;
}

export default FeedbackContainer;
