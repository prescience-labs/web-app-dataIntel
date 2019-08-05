import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(8, 6),
    margin: theme.spacing(5, 3),
  },
}));

function InfoCard({ title }) {
  const { root } = useStyles();

  return (
    <Paper className={root}>
      <Typography variant="h4" component="h3">
        {title}
      </Typography>
    </Paper>
  );
}

export default InfoCard;
