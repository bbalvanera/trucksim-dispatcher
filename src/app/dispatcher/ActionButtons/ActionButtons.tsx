import React from 'react';
import { withTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useSx from './sx';

export interface ActionButtonsProps {
  t: any;
  onUpdateGame?: VoidFunction;
  onLaunchGame?: VoidFunction;
}

const ActionButtons = ({ t, onUpdateGame, onLaunchGame }: ActionButtonsProps) => {
  const sx = useSx();

  return (
    <Box sx={sx}>
      <Button variant="contained" color="secondary" onClick={onUpdateGame}>
        {t('updateGameBtn')}
      </Button>
      <Button variant="outlined" color="secondary" onClick={onLaunchGame}>
        {t('launchGameBtn')}
      </Button>
    </Box>
  );
};

export default withTranslation()(ActionButtons);
