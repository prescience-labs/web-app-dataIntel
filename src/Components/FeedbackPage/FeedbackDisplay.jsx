import React, { useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import InnerHeader from '../InnerHeader';

import { feedbackStyle } from './FeedbackStyled';

function FeedbackDisplay({ productId }) {
  const [value, setValue] = useState(3);
  const [multiline, setMultiline] = useState('');

  const { rootStyle, buttonStyle } = feedbackStyle();

  function handleChange(event) {
    setMultiline(event.target.value);
  }

  return (
    <>
      <InnerHeader isFeedBack />
      <div className={rootStyle}>
        <Typography variant="h3">{productId}</Typography>
        <Box component="fieldset" mb={1} borderColor="transparent">
          <Typography component="h3">Rating</Typography>
          <Rating
            name="simple-controlled"
            value={value}
            size="large"
            onChange={(event, newValue) => {
              console.log(newValue);
              setValue(newValue);
            }}
          />
        </Box>
        <TextField
          label="Comments / Suggestions"
          multiline
          rowsMin="4"
          value={multiline}
          onChange={handleChange}
          fullWidth
          margin="normal"
          helperText="We appreciate your feedback"
          variant="outlined"
        />
        <Button className={buttonStyle}>Submit Feedback</Button>
      </div>
    </>
  );
}

export default FeedbackDisplay;
