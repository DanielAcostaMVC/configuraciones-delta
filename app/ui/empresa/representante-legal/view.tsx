//import { useQueryClient } from '@tanstack/react-query';
//import { useShallow } from 'zustand/react/shallow';
import { Grid, Stack } from '@mui/material';

//import GridEstilos from '../../../components/General/Grid/GridStyle';

//import { useRepresentanteLegalStore } from '../../stores';
import { DataEmpresa } from '../../../lib/empresa/definitions';
import { DataLabel } from '../../../ui/index';

//const { GridContainerCustom } = GridEstilos();

export const ViewRepresentanteLegal = () => {
  const representanteLegal = {NombreCompleto:"a",
    NumeroIdentificacion:"b",
    TipoDocumento:{id:"CC", nombre:"Cédula"},
    LugarExpedicion:"c",
    Firma:"d"
  }/*useRepresentanteLegalStore(
    useShallow((state) => state.representanteLegal)
  );*/
/*
  const queryClient = useQueryClient();
  const queryData: DataEmpresa | undefined = queryClient.getQueryData([
    'empresa',
  ]);
  const cachedData = (queryData ?? representanteLegal) as DataEmpresa;
*/
  const {
    NombreCompleto,
    TipoDocumento,
    NumeroIdentificacion,
    LugarExpedicion,
  } = representanteLegal;

  return (
    <Grid container spacing={0.5}>
      <Grid item xs={12}>
        <DataLabel title="Nombre" text={NombreCompleto} />
      </Grid>
      <Grid item xs={3}>
        <Stack flexDirection="row" alignItems="center" gap={0.5}>
          <DataLabel title="Tipo de documento" text={TipoDocumento.id} />
        </Stack>
      </Grid>
      <Grid item xs={5}>
        <Stack flexDirection="row" alignItems="center" gap={0.5}>
          <DataLabel
            title="Número de identificación"
            text={NumeroIdentificacion}
          />
        </Stack>
      </Grid>
      <Grid item xs={4}>
        <Stack flexDirection="row" alignItems="center" gap={0.5}>
          <DataLabel title="Lugar de expedición" text={LugarExpedicion} />
        </Stack>
      </Grid>
    </Grid>
  );
};
