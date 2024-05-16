'use client';

import { Container, Grid /*, Stack*/ } from '@mui/material';
import Link from 'next/link';
import {
  Auditoria,
 /* CardFirma,
  CardRepresentanteLegal,
  DatosEmpresa,
  FooterActions,*/
  LogoEmpresa,
  NombreEmpresa,
//  SkeletonEmpresa,
} from '../ui/empresa';

import { UIProvider } from '../context/ui/provider'
import { ThemeProvider } from '@mui/material/styles';
import { SincoTheme, PageHeader } from '@sinco/react';
//import { PageHeader } from '@sinco/react';

import {
  BoxCustomView, 
 /* EmptyStateError,
  EmptyStateSearch,*/
} from '../ui/box-custom-view';
import {BoxCustomScroll} from '../ui/box-custom.style';
import { Box, Stack } from '@mui/material';
//const { BoxCustomScroll } = BoxEstilos();

export default function LayoutEmpresa  ({ children }: { children: React.ReactNode })  {
  return (
    <ThemeProvider theme={SincoTheme}>
    <UIProvider>
      <BoxCustomView>
      <PageHeader title="Configuración de la Empresa" />
      

      <Container maxWidth="md">
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} md={12} lg={12}>
            <NombreEmpresa razonSocial={'RazonSocial'} nit={'NitXz'} />
          </Grid>
          <Grid container justifyContent="center">
            <Grid item xs={2} sm={2} md={2} lg={2}>
<Link href="../">
              <LogoEmpresa logo={"/logo-empresa.png"} />
              </Link>
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
    </UIProvider>
    </ThemeProvider>
  );
};