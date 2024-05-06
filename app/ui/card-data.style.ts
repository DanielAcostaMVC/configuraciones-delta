import { Card, CardContent, CardHeader, styled } from '@mui/material';

const CardEstilos = () => {
  const CardCustomView = styled(Card)(() => ({}));
  const CardHeaderCustom = styled(CardHeader)(({ theme }) => ({
    padding: '1rem 1rem 0.75rem 1rem',
    '& .MuiTypography-h5': {
      color: theme.palette.primary.main,
      fontSize: '16px',
    },
  }));
  const CardContentCustom = styled(CardContent)(() => ({
    padding: '0rem 1rem 0.75rem 1rem',
    '&:last-child': {
      paddingBottom: '16px',
    },
  }));

  return {
    CardCustomView,
    CardHeaderCustom,
    CardContentCustom,
  };
};

export default CardEstilos;
