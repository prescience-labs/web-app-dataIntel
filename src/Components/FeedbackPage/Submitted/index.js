import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { feedbackStyle } from '../FeedbackStyled';

function Submitted({ storeName, goToShopWeb }) {
  const { submittedStyle, thanksStyle, h4ThanksStyle } = feedbackStyle();

  return (
    <Grid container className={submittedStyle}>
      <Grid item className={thanksStyle}>
        <Typography variant="h4" align="center" className={h4ThanksStyle}>
          Thank you for your feedback
        </Typography>
        <Typography variant="h5" align="center">
          We hope to serve you again in the near future.
        </Typography>
      </Grid>
      <Grid item>
        <Button onClick={goToShopWeb}>{`Shop ${storeName}`}</Button>
      </Grid>
    </Grid>
  );
}

export default Submitted;
