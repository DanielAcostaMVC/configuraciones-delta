import { FC } from 'react';
//import { useQueryClient } from '@tanstack/react-query';
import { Grid, Typography } from '@mui/material';
import { DataLabel } from '../../../ui/data-label';

import { DataEmpresa, Poliza } from '../../../lib/empresa/definitions';
import { Ciudad } from '../../../lib/definitions';

interface ViewDatosEmpresaProps {
  Direccion: string;
  ConstitucionEmpresa: string;
  Ciudad: Ciudad;
  Poliza: Poliza;
}
export const ViewDatosEmpresa: FC = () => {
  //const queryClient = //useQueryClient();
  /*const queryData: DataEmpresa | undefined = queryClient.getQueryData([
    'empresa',
  ]);*/
  //const cachedData = queryData as DataEmpresa;

  //const { Direccion, ConstitucionEmpresa, Ciudad, Poliza } = cachedData ?? {};

  const { Direccion, ConstitucionEmpresa, Ciudad, Poliza } = {Direccion: "a", ConstitucionEmpresa: "b", Ciudad: {id: "c", nombre: "d"}, Poliza: {Numero: "e", Valor: "f"}};

  return (
    <Grid container spacing={0.5}>
      <Grid item xs={4}>
        <DataLabel title="Dirección" text={Direccion} />
      </Grid>
      <Grid item xs={6}>
        <DataLabel title="Ciudad" text={Ciudad.nombre} />
      </Grid>

      <Grid item xs={4}>
        <DataLabel
          title="Póliza"
          text={Poliza.Numero || Poliza.Valor ? 'Si' : 'No'}
        />
      </Grid>
      <Grid item xs={4}>
        <DataLabel
          title="Número"
          text={Poliza.Numero ? Poliza.Numero : 'N/A'}
        />
      </Grid>
      <Grid item xs={4}>
        <DataLabel title="Valor" text={Poliza.Valor ? Poliza.Valor : 'N/A'} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle2">
          Información constitución empresa:
        </Typography>
        <Typography variant="body1">{ConstitucionEmpresa}</Typography>
      </Grid>
    </Grid>
  );
};
