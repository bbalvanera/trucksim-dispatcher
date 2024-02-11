import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import example from '@assets/img/aport_pcc.png';
import articulated from '@assets/img/articulated.png';
import useSx from './sx';

const options = [
  { label: 'The Godfather', id: 1 },
  { label: 'Pulp Fiction', id: 2 },
];

const PageBody = () => {
  const sx = useSx();
  const [selected, setSelected] = useState('Standard');

  return (
    <Paper variant="outlined" sx={sx}>
      <Box className="left">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={options}
          renderInput={(params) => <TextField {...params} label="Movie" helperText="help" />}
        />
      </Box>
      <Box className="right">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={options}
          renderInput={(params) => <TextField {...params} label="Movie" helperText="help" />}
        />
      </Box>
      <Box className="left">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={options}
          renderInput={(params) => <TextField {...params} label="Movie" helperText="help" />}
        />
      </Box>
      <Box className="right">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={options}
          renderInput={(params) => <TextField {...params} label="Movie" helperText="help" />}
        />
      </Box>{' '}
      <Box className="left">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={options}
          renderInput={(params) => <TextField {...params} label="Movie" helperText="help" />}
        />
      </Box>
      <Box className="right">
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
      </Box>
      <Box className="left" sx={{ display: 'flex', gap: 2, mt: 4 }}>
        <Button variant="contained">Add Job</Button>
        <Button variant="outlined">Add random job</Button>
      </Box>
      <Box className="right" sx={{ justifySelf: 'end', mt: 4 }}>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete job list
        </Button>
      </Box>
      <Box className="fullWidth">
        <Card
          variant="outlined"
          sx={(theme) => ({
            bgcolor: theme.palette.background.default,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          })}
        >
          <CardContent sx={{ display: 'flex', justifyContent: 'space-between', flex: '1 0 auto' }}>
            <img src={example} alt="example" height="32px" width="auto" />
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}
            >
              <Typography variant="h6" color="secondary" fontWeight="bold">
                Title
              </Typography>
              <Typography variant="h6" fontWeight="bold">
                Description
              </Typography>
            </Box>
            <Box
              sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 2 }}
            >
              <img src={example} alt="example" height="32px" width="auto" />
              <Box
                sx={{
                  display: 'flex',
                  maxWidth: '128px',
                  justifyContent: 'flex-end',
                }}
              >
                <img src={articulated} alt="articulated" />
                <img src={articulated} alt="articulated" />
                <img src={articulated} alt="articulated" />
                <img src={articulated} alt="articulated" />
                <img src={articulated} alt="articulated" />
                <img src={articulated} alt="articulated" />
              </Box>
            </Box>
          </CardContent>
          <Box sx={{ bgcolor: 'red', flex: '0 0 32px' }}>D</Box>
        </Card>
      </Box>
      <Box className="fullWidth">
        <Card variant="outlined" sx={(theme) => ({ bgcolor: theme.palette.background.default })}>
          <CardContent>Content goes here</CardContent>
        </Card>
      </Box>
    </Paper>
  );
};

export default PageBody;
