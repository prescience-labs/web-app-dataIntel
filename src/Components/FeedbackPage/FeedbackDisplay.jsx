import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import Submit from './Submit';
import Submitted from './Submitted';
import InnerHeader from '../InnerHeader';

import ErrorSnackBar from '../Commons/ErrorSnackBar';

import { feedbackStyle } from './FeedbackStyled';

function FeedbackDisplay(props) {
  const {
    productInformation,
    isSubmitted,
    openSnackBar,
    setOpenSnackBar,
  } = props;
  const { rootStyle, imageStyle } = feedbackStyle();
  const {
    productName,
    productDescription,
    sellerName,
    productImage,
  } = productInformation;

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <InnerHeader isFeedBack />
      <Grid container justify="flex-start">
        <Grid container spacing={4} item xs={12} className={rootStyle}>
          <Grid
            item
            justify={matches ? 'flex-start' : 'center'}
            container
            alignItems="center"
            xs={12}
            sm={2}
          >
            <img src={productImage} alt={productName} className={imageStyle} />
          </Grid>
          <Grid item xs={12} sm={10}>
            <Grid item xs={12}>
              <Typography variant="h4">{`${productName} from ${sellerName}`}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">{productDescription}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item>
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
