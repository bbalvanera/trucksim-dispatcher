import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import GridRow from '@components/GridRow';

const JobItem = () => {
  return (
    <GridRow spacing={2}>
      <Grid xs={12}>
        <Card variant="outlined">
          <CardContent>Content goes here</CardContent>
        </Card>
      </Grid>
    </GridRow>
  );
};

export default JobItem;
