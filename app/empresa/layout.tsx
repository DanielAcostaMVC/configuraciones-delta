'use client'
import { Container, Grid } from '@mui/material';
import Link from 'next/link';
import {
  Auditoria,
  LogoEmpresa,
  NombreEmpresa,
//  SkeletonEmpresa,
} from '@/app/ui/empresa';

import { UIProvider } from '@/app/context/ui/provider'
import { ThemeProvider } from '@mui/material/styles';
import { SincoTheme, PageHeader } from '@sinco/react';

import { Footer } from '@/app/ui/footer';

import {
  BoxCustomView, 
 /* EmptyStateError,
  EmptyStateSearch,*/
} from '@/app/ui/box-custom-view';

import { Suspense } from 'react'


export default function LayoutEmpresa  ({ children }: { children: React.ReactNode;  })  {

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
              <Auditoria UltimaModificacion={{Fecha:'aQuemado', Usuario:'bQuemado'}} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Suspense>
        <Footer />
      </Suspense>
    </BoxCustomView>
    </UIProvider>
    </ThemeProvider>
  );
};