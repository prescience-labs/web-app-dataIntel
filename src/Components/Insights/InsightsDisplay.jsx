import React from 'react';
import Grid from '@material-ui/core/Grid';

import ResultsList from './ResultsList';
import Chart from './Chart';

const mockInsight = ['boots are AWSOME', 'best purchese ever'];

function InsightsDisplay() {
  return (
    <Grid container justify="center">
      <Grid item>
        <Chart />
      </Grid>
      <Grid container justify="center">
        <Grid item>
          <ResultsList title="Posite" results={mockInsight} />
        </Grid>
        <Grid item>
          <ResultsList title="Negative" results={mockInsight} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default InsightsDisplay;
