'use client';

import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import Button from '@mui/material/Button';
import BoxEstilos from '../ui/box-custom.style';
const { BoxCustomScroll } = BoxEstilos();


import { Stack } from '@mui/material';
 

export default async function EmpresaPage() {
    return (<><Stack spacing={2} justifyContent="center"
    alignItems="center" direction="column"  sx={{height:"700px", width:"500px"}}>

        <Button variant="text" endIcon={<AirportShuttleIcon  />}>Empresa1</Button> 
        
</Stack>
<BoxCustomScroll>
                <Stack gap={1.5}>
                  {/*<CardRepresentanteLegal Representante={RepresentanteLegal} />
                  <CardFirma Firma={RepresentanteLegal.Firma} />
                  <DatosEmpresa
                    Direccion={Direccion}
                    ConstitucionEmpresa={ConstitucionEmpresa}
                    Ciudad={Ciudad}
                    Poliza={Poliza}
/>*/}
                </Stack>
  </BoxCustomScroll>
  </>
 
    );
}