import React from 'react';

import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';

import { feedbackStyle } from '../FeedbackStyled';

function Submitted({ storeName, goToShopWeb }) {
  const { submittedStyle, thanksStyle } = feedbackStyle();

  return (
    <div className={submittedStyle}>
      <div className={thanksStyle}>
        <Typography variant="h4" align="center">
          Thank you for your feedback
        </Typography>
        <Typography variant="h5" align="center">
          We hope to serve you again in the near future.
        </Typography>
      </div>
      <Button onClick={goToShopWeb}>{`Shop ${storeName}`}</Button>
    </div>
  );
}

export default Submitted;
