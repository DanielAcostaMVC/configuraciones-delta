import { Box, Typography } from '@mui/material';
import { FC } from 'react';

interface NombreEmpresaProps {
  razonSocial: string;
  nit: string;
}
export const NombreEmpresa: FC<NombreEmpresaProps> = ({ razonSocial, nit }) => {
  return (
    <Box height={64} sx={{ p: 1 }}>
      <Typography
        variant="h6"
        color="primary.dark"
        sx={{ textTransform: 'uppercase' }}
      >
        {razonSocial}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        NIT. {nit}
      </Typography>
    </Box>
  );
};
