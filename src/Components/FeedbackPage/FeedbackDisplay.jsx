import React from 'react';
import Typography from '@material-ui/core/Typography';

import Submit from './Submit';
import Submitted from './Submitted';
import InnerHeader from '../InnerHeader';

import { feedbackStyle } from './FeedbackStyled';

function FeedbackDisplay(props) {
  const { productId, isSubmitted } = props;
  const { rootStyle } = feedbackStyle();

  return (
    <>
      <InnerHeader isFeedBack />
      <div className={rootStyle}>
        <Typography variant="h3">{productId}</Typography>
        {isSubmitted ? <Submitted {...props} /> : <Submit {...props} />}
      </div>
    </>
  );
}

export default FeedbackDisplay;
