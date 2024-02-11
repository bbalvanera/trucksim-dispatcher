import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import GridRow from '@components/GridRow';

const PageActions = () => {
  return (
    <GridRow spacing={2}>
      <Grid xs={6} display="flex" gap={2}>
        <Button variant="contained">Add Job</Button>
        <Button variant="outlined">Add random job</Button>
      </Grid>
      <Grid xs={6} display="flex" justifyContent="flex-end">
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete job list
        </Button>
      </Grid>
    </GridRow>
  );
};

export default PageActions;
