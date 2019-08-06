import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ResultsList from './ResultsList';
import Chart from './Chart';
import { makeStyles } from '@material-ui/core/styles';

const mockInsight = ['boots are AWSOME', 'best purchese ever'];
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 0),
    margin: theme.spacing(4, 1),
  },
}));

function InsightsDisplay() {
  const { root } = useStyles();
  return (
    <Grid container justify="center">
      <Paper className={root}>
        <Grid item>
          <Chart />
        </Grid>
      </Paper>
      <Paper className={root}>
        <Grid container justify="center">
          <Grid item>
            <ResultsList title="Posite" results={mockInsight} />
          </Grid>
          <Grid item>
            <ResultsList title="Negative" results={mockInsight} />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default InsightsDisplay;
