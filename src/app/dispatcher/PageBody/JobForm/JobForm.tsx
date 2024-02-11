import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import GridRow from '@components/GridRow';

const options = [
  { label: 'The Godfather', id: 1 },
  { label: 'Pulp Fiction', id: 2 },
];

const JobForm = () => {
  const [selected, setSelected] = useState('Standard');
  return (
    <>
      <GridRow columnSpacing={3} rowSpacing={1}>
        <Grid xs={6}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={options}
            renderInput={(params) => <TextField {...params} label="Movie" helperText="help" />}
          />
        </Grid>
        <Grid xs={6}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={options}
            renderInput={(params) => <TextField {...params} label="Movie" />}
          />
        </Grid>
      </GridRow>
      <GridRow columnSpacing={3} rowSpacing={1}>
        <Grid xs={6}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={options}
            renderInput={(params) => <TextField {...params} label="Movie" helperText=" " />}
          />
        </Grid>
        <Grid xs={6}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={options}
            renderInput={(params) => <TextField {...params} label="Movie" />}
          />
        </Grid>
      </GridRow>
      <GridRow columnSpacing={3} rowSpacing={1}>
        <Grid xs={6}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={options}
            renderInput={(params) => <TextField {...params} label="Movie" helperText=" " />}
          />
        </Grid>
        <Grid xs={6} display="flex" alignItems="baseline">
          <ButtonGroup
            aria-label="Basic button group"
            fullWidth
            disableElevation
            disableRipple
            disableFocusRipple
            sx={{ height: '54px' }}
          >
            <Button
              variant={selected == 'Standard' ? 'contained' : 'outlined'}
              onClick={() => setSelected('Standard')}
            >
              Standard
            </Button>
            <Button
              variant={selected == 'Important' ? 'contained' : 'outlined'}
              onClick={() => setSelected('Important')}
            >
              Important
            </Button>
            <Button
              variant={selected == 'Urgent' ? 'contained' : 'outlined'}
              onClick={() => setSelected('Urgent')}
            >
              Urgent
            </Button>
          </ButtonGroup>
        </Grid>
      </GridRow>
    </>
  );
};

export default JobForm;
