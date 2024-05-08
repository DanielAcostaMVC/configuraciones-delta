'use client';


import BoxEstilos from '../ui/box-custom.style';
const { BoxCustomScroll } = BoxEstilos();

import { CardRepresentanteLegal } from '../ui/empresa/index';


import { Stack } from '@mui/material';
 

export default async function EmpresaPage() {

const RepresentanteLegal = { NombreCompleto: "a", NumeroIdentificacion: "b", TipoDocumento: {id:"CC", nombre:"Cédula"}, LugarExpedicion: "c", Firma: "d"
}

    return (
<BoxCustomScroll>
                <Stack gap={1.5}>
                  <CardRepresentanteLegal Representante={RepresentanteLegal} />
                  {/*<CardFirma Firma={RepresentanteLegal.Firma} />
                  <DatosEmpresa
                    Direccion={Direccion}
                    ConstitucionEmpresa={ConstitucionEmpresa}
                    Ciudad={Ciudad}
                    Poliza={Poliza}
/>*/}
                </Stack>
  </BoxCustomScroll>
 
    );
}