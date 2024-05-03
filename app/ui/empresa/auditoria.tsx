import { FC } from 'react';
import { Grid, Stack, Typography } from '@mui/material';

interface AuditoriaProps {
  UltimaModificacion: {
    Fecha: string;
    Usuario: string;
  };
}

export const Auditoria: FC<AuditoriaProps> = ({ UltimaModificacion }) => {
  return (
    <Grid container sx={{ mt: 1 }}>
      <Stack flexDirection="row" alignItems="center" gap={0.5}>
        <Typography variant="caption" color="text.primary">
          Última modificación:
        </Typography>
        <Typography variant="caption" color="text.primary">
          {UltimaModificacion.Usuario} - {UltimaModificacion.Fecha}
        </Typography>
      </Stack>
    </Grid>
  );
};