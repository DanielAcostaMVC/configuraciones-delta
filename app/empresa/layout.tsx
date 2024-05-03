'use client';

import { ConfiguracionEmpresa } from '../ui/empresa/configuracion-empresa';
import {
  BoxCustomView, 
 /* EmptyStateError,
  EmptyStateSearch,*/
} from '../ui/box-custom-view';
import BoxEstilos from '../ui/box-custom.style';
import { Box, Stack } from '@mui/material';
const { BoxCustomScroll } = BoxEstilos();

export default function LayoutEmpresa  ({ children }: { children: React.ReactNode })  {
  return (
    <BoxCustomView>
      <Box>
      <ConfiguracionEmpresa children = {children} />
      
      </Box>
    </BoxCustomView>
  );
};