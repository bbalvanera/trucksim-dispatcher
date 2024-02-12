import React from 'react';
import { WithTranslation } from 'react-i18next';
import Actions from './Actions';
import JobForm from './JobForm';
import JobGrid from './JobGrid';
import JobList from './JobList';
import useSx from './sx';

export type BodyProps = WithTranslation;

const Body = () => {
  const sx = useSx();
  return (
    <JobGrid sx={sx}>
      <JobForm />
      <Actions />
      <JobList />
    </JobGrid>
  );
};

export default Body;
