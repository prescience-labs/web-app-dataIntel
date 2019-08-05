import React from 'react';

import Grid from '@material-ui/core/Grid';

import InfoCard from './InfoCard';
import OverviewTable from './OverviewTable';

function OverviewDisplay() {
  return (
    <div>
      <Grid container justify="center">
        <Grid item>
          <InfoCard title="500 reviews send" />
        </Grid>
        <Grid item>
          <InfoCard title="45 reviews collected" />
        </Grid>
        <Grid item>
          <InfoCard title="350 +/ 150 -" />
        </Grid>
      </Grid>
      <OverviewTable />
    </div>
  );
}

export default OverviewDisplay;
