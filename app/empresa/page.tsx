
import { Stack } from '@mui/material';

import { BoxCustomScroll }from '@/app/ui/box-custom.style';
import EditarCerrarTodo from '@/app/ui/editar-cerrar-todo';
import { CardRepresentanteLegal, CardFirma, CardDatosEmpresa } from '@/app/ui/empresa/index';
import { Suspense } from 'react';

export default async function EmpresaPage({
  searchParams,
}: {
  searchParams?: {
    editSection?: string;
  };
}) {

  const RepresentanteLegal = { NombreCompleto: "a", NumeroIdentificacion: "b", TipoDocumento: {id:"CC", nombre:"Cédula"}, LugarExpedicion: "c", Firma: ""};
  const Direccion = "d";
  const ConstitucionEmpresa = "e";
  const Ciudad = {id: "f", nombre: "g"};
  const Poliza = {Numero: "h", Valor: "i"};  

    return (
            <BoxCustomScroll>
              <Stack gap={1.5}>
                <Suspense fallback={<div>Loading...</div>}>
                  <EditarCerrarTodo isEdit={searchParams?.editSection==='all'} />
                </Suspense>
                  <CardRepresentanteLegal isEdit={searchParams?.editSection==='all' || searchParams?.editSection==='representante'} Representante={RepresentanteLegal} />
                  <CardFirma Firma={RepresentanteLegal.Firma} />
                  <CardDatosEmpresa
                    isEdit={searchParams?.editSection==='all' || searchParams?.editSection==='empresa'}
                    Direccion={Direccion}
                    ConstitucionEmpresa={ConstitucionEmpresa}
                    Ciudad={Ciudad}
                    Poliza={Poliza}
/>
              </Stack>
            </BoxCustomScroll>
    );
}