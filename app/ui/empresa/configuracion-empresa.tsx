//import { useContext } from 'react';
//import { useQuery } from '@tanstack/react-query';
//import { PageHeader } from '@sinco/react';
import { Container, Grid /*, Stack*/ } from '@mui/material';

import {
  Auditoria,
 /* CardFirma,
  CardRepresentanteLegal,
  DatosEmpresa,
  FooterActions,*/
  LogoEmpresa,
  NombreEmpresa,
//  SkeletonEmpresa,
} from '../../ui/empresa';

import {
  BoxCustomView, 
 /* EmptyStateError,
  EmptyStateSearch,*/
} from '../../ui/box-custom-view';
//import BoxEstilos from '../ui/box-custom.style';

//import { UIContext } from '../../context/ui';
//import { getDatosEmpresa } from './service';

//const { BoxCustomScroll } = BoxEstilos();

/*type UltimaModificacion = {
    Fecha: string;
    Usuario: string;
  };*/

export const ConfiguracionEmpresa = ({ children }: { children: React.ReactNode }) => {
    
 
   /* const { isActiveFooter } = useContext(UIContext);

  const empresaQuery = useQuery(['empresa'], getDatosEmpresa);

  if (empresaQuery.isLoading) {
    return <SkeletonEmpresa />;
  }

  if (empresaQuery.error instanceof Error) {
    return <EmptyStateError message={empresaQuery.error.message} />;
  }

  if (!empresaQuery.data) {
    return <EmptyStateSearch />;
  }
*/
 /* const {
    RazonSocial,
    Nit,
    UrlLogo,
    RepresentanteLegal,
    Direccion,
    ConstitucionEmpresa,
    Ciudad,
    Poliza,
    UltimaModificacion,
  } = empresaQuery.data;*/

  

  return (
    <BoxCustomView>
      {/* <PageHeader title="Configuración de la Empresa" />*/}
      

      <Container maxWidth="md">
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} md={12} lg={12}>
            <NombreEmpresa razonSocial={'RazonSocial'} nit={'Nit'} />
          </Grid>
          <Grid container justifyContent="center">
            <Grid item xs={2} sm={2} md={2} lg={2}>
              <LogoEmpresa logo={"/logo-empresa.png"} />
            </Grid>
            <Grid item xs={10} sm={10} md={10} lg={10}>
              {children}
              {/*<BoxCustomScroll>
                <Stack gap={1.5}>
                  <CardRepresentanteLegal Representante={RepresentanteLegal} />
                  <CardFirma Firma={RepresentanteLegal.Firma} />
                  <DatosEmpresa
                    Direccion={Direccion}
                    ConstitucionEmpresa={ConstitucionEmpresa}
                    Ciudad={Ciudad}
                    Poliza={Poliza}
                  />
                </Stack>
  </BoxCustomScroll>*/}
              <Auditoria UltimaModificacion={{Fecha:'aQuemado', Usuario:'bQuemado'}} />
            </Grid>
          </Grid>
        </Grid>
      </Container>

      {/*isActiveFooter && <FooterActions />*/}
    </BoxCustomView>
  );
};