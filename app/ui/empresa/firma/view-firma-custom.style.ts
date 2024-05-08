import { Box, Stack, styled } from '@mui/material';

const FirmaEstilos = () => {
  const BoxCustom = styled(Box)(() => ({
    width:"350px",


    position: 'relative',
    '&:hover .button-container': {
      display: 'flex',
      visibility: 'visible',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  }));
  const StackCustom = styled(Stack)(() => ({
    gap: '12px',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',

    visibility: 'hidden',
  }));
  return {
    StackCustom,
    BoxCustom,
  };
};
export default FirmaEstilos;
