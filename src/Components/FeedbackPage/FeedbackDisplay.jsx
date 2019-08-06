import React, { useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import InnerHeader from '../InnerHeader';

import { feedbackStyle } from './FeedbackStyled';

function FeedbackDisplay({ productId }) {
  const [value, setValue] = useState(2);

  const { rootStyle } = feedbackStyle();

  return (
    <>
      <InnerHeader isFeedBack />
      <div className={rootStyle}>
        <Typography variant="h3">{productId}</Typography>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend">Rating</Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              console.log(newValue);
              setValue(newValue);
            }}
          />
        </Box>
      </div>
    </>
  );
}

export default FeedbackDisplay;
