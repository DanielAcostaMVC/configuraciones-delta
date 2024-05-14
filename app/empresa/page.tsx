'use client';

import  Link  from 'next/link';
import { CardCustom } from '../ui/index';
import BoxEstilos from '../ui/box-custom.style';
const { BoxCustomScroll } = BoxEstilos();

import IconsEstilos from '@/app/ui/icons.style';
import ButtonEstilos from '@/app/ui/button-custom.style';

import { CardRepresentanteLegal, CardFirma, DatosEmpresa } from '../ui/empresa/index';


import { Stack, Typography } from '@mui/material';

const { CloseCustom, EditCustom } = IconsEstilos();
const { IconButtonCustom } = ButtonEstilos();
 

export default async function EmpresaPage() {

const RepresentanteLegal = { NombreCompleto: "a", NumeroIdentificacion: "b", TipoDocumento: {id:"CC", nombre:"Cédula"}, LugarExpedicion: "c", Firma: ""};
const Direccion = "d";
const ConstitucionEmpresa = "e";
const Ciudad = {id: "f", nombre: "g"};
const Poliza = {Numero: "h", Valor: "i"};  

const isEdit = false;


    return (
<BoxCustomScroll>
                <Stack gap={1.5}>
                
      <Stack direction="row-reverse"> 
        <IconButtonCustom >
              {isEdit ? <Link href="/empresa/view"><CloseCustom /></Link> : <Link href="/empresa/edit"><EditCustom /></Link>}
        </IconButtonCustom>
        <Typography variant="h6" color="#2063A0">Editar todo</Typography>
      </Stack>
                  <CardRepresentanteLegal Representante={RepresentanteLegal} />
                  <CardFirma Firma={RepresentanteLegal.Firma} />
                  <DatosEmpresa
                    Direccion={Direccion}
                    ConstitucionEmpresa={ConstitucionEmpresa}
                    Ciudad={Ciudad}
                    Poliza={Poliza}
/>

                </Stack>
  </BoxCustomScroll>
 
    );
}