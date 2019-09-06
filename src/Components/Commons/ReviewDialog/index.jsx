import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  dialogStyle: {},
  reviewStyle: {
    padding: '2rem',
    minHeight: '250px',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  pStyle: {
    margin: '5px 3px',
  },
});

function ReviewDialog({ open, handleClose, reviewText = '' }) {
  const classes = useStyles();

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      maxWidth="xl"
      className={classes.dialogStyle}
      fullWidth
    >
      {open && (
        <div className={classes.reviewStyle}>
          {reviewText.split(' ').map((element, index) => {
            return (
              <Typography
                key={index}
                variant="body1"
                className={classes.pStyle}
              >
                {element}
              </Typography>
            );
          })}
        </div>
      )}
    </Dialog>
  );
}

export default ReviewDialog;
