import React from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import JobGridCell from '../JobGridCell';

const Actions = () => {
  const { t } = useTranslation();
  return (
    <>
      <JobGridCell align="left" className="TsdJobGridCell-leftActionButton">
        <Button variant="contained">{t('dispatcher.addJobBtn')}</Button>
        <Button variant="outlined">{t('dispatcher.addRandomJobBtn')}</Button>
      </JobGridCell>
      <JobGridCell align="right" className="TsdJobGridCell-rightActionButton">
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          {t('dispatcher.deleteJobListBtn')}
        </Button>
      </JobGridCell>
    </>
  );
};

export default withTranslation()(Actions);
