import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Submit from './Submit';
import Submitted from './Submitted';
import InnerHeader from '../InnerHeader';

import ErrorSnackBar from '../Commons/ErrorSnackBar';

import { feedbackStyle } from './FeedbackStyled';

function FeedbackDisplay(props) {
  const { productId, isSubmitted, openSnackBar, setOpenSnackBar } = props;
  const { rootStyle } = feedbackStyle();

  return (
    <>
      <InnerHeader isFeedBack />
      <Grid container justify="flex-start" className={rootStyle}>
        <Grid item xs={12}>
          <Typography variant="h3">{productId}</Typography>
        </Grid>
        <Grid item xs={12}>
          {isSubmitted ? <Submitted {...props} /> : <Submit {...props} />}
        </Grid>
      </Grid>
      <ErrorSnackBar
        open={openSnackBar}
        setOpen={setOpenSnackBar}
        message={'Please add a comment or suggestion'}
      />
    </>
  );
}

export default FeedbackDisplay;
