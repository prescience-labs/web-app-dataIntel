import React from 'react';
import Grid from '@material-ui/core/Grid';

import ResultsList from './ResultsList';
import Chart from './Chart';

const mockInsight = ['Boots are AWSOME', 'Best purchese ever'];
const mockInsightBad = ['Boots are BADDDDD', 'Worst purchese ever'];

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
          <ResultsList title="Negative" results={mockInsightBad} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default InsightsDisplay;
