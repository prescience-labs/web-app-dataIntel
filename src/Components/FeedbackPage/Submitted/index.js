import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { feedbackStyle } from '../FeedbackStyled';

function Submitted({ productInformation, goToShopWeb }) {
  const { submittedStyle } = feedbackStyle();
  const { sellerName } = productInformation;

  return (
    <Grid container spacing={2} justify="center" className={submittedStyle}>
      <Grid item>
        <Typography variant="h5">Thank you for your feedback</Typography>
      </Grid>
      <Grid item>
        <Typography variant="p">
          We hope to serve you again in the near future.
        </Typography>
      </Grid>
      <Grid item>
        <Button onClick={goToShopWeb}>{`Shop ${sellerName}`}</Button>
      </Grid>
    </Grid>
  );
}

export default Submitted;
