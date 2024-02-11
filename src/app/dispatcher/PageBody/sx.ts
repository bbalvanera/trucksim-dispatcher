import SxDef from '@core/types/SxDef';

const useSx = (): SxDef => ({
  p: 8,
  mb: 4,
  display: 'grid',
  gridTemplateColumns: '[left] 1fr [right] 1fr [end]',
  gridTemplateRows: 'auto',
  gap: 2,
  '& .left': {
    gridColumn: 'left',
  },
  '& .right': {
    gridColumn: 'right',
  },
  '& .fullWidth': {
    gridColumn: 'left / end',
  },
});

export default useSx;
