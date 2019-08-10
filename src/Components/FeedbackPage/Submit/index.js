import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { feedbackStyle } from '../FeedbackStyled';

const Submit = ({
  ratingValue,
  handleSetRatingValue,
  comment,
  handleSetComment,
  handleSetSubmitted,
  openSnackBar,
}) => {
  const { buttonStyle, textAreaStyle } = feedbackStyle();
  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <Box component="fieldset" mb={1} borderColor="transparent">
          <Typography component="h3">Rating</Typography>
          <Rating
            name="simple-controlled"
            value={ratingValue}
            size="large"
            onChange={(event, newValue) => {
              handleSetRatingValue(newValue);
            }}
          />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="outline-textarea"
          label="Comments / Suggestions"
          multiline
          fullWidth
          rows="12"
          value={comment}
          onChange={handleSetComment}
          className={textAreaStyle}
          margin="normal"
          variant="outlined"
          helperText="We appreciate your feedback"
          error={openSnackBar}
        />
      </Grid>
      <Grid item xs={12}>
        <Button className={buttonStyle} onClick={handleSetSubmitted}>
          Submit Feedback
        </Button>
      </Grid>
    </Grid>
  );
};

export default Submit;
