import React from 'react';

import Grid from '@material-ui/core/Grid';

import InfoCard from './InfoCard';
import OverviewTable from './OverviewTable';

import ReviewDialog from '../Commons/ReviewDialog';

function OverviewDisplay({ dialogProps }) {
  return (
    <>
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
      <OverviewTable dialogProps={dialogProps} />
      <ReviewDialog
        open={dialogProps.open}
        handleClose={dialogProps.handleClose}
        reviewText={dialogProps.reviewText}
      />
    </>
  );
}

export default OverviewDisplay;
