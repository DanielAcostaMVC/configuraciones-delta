'use client';

import { FC, useContext, useEffect, useState } from 'react';
//import { useShallow } from 'zustand/react/shallow';
import { Grid, TextField } from '@mui/material';


import { TipoDoc, CiudadAutocomplete } from '../../index';


//import { UIContext } from '../../../context/ui';

import { RepresentanteLegal } from '../../../lib/empresa/definitions';
import { Ciudad } from '../../../lib/definitions';
/*
import {
  useCamposModificadosStore,
  useDatosEmpresaStore,
  useRepresentanteLegalStore,
} from '../../stores';
*/
interface FormRepresentanteLegalProps {
  RepresentanteLegal: RepresentanteLegal;
}

export const FormRepresentanteLegal = () => {
  //const { openFooter, setIsEnabledBtn } = //useContext(UIContext);
/*
  const isEditEmpresa = useRepresentanteLegalStore((state) => state.isEdit);
*/
  const representanteLegal = { NombreCompleto: "a",
    NumeroIdentificacion: "b",
    TipoDocumento: {id:"CC", nombre:"Cédula"},
    LugarExpedicion: "c",
    Firma: "d" 
  } /*useRepresentanteLegalStore(
    useShallow((state) => state.representanteLegal)
  );
*/
 /* const {
    NombreCompleto,
    NumeroIdentificacion,
    TipoDocumento,
    LugarExpedicion,
    Firma,
  } = RepresentanteLegal;*/
/*
  const { checkFormEmpresa } = useDatosEmpresaStore();

  const setRepresentanteLegal = useRepresentanteLegalStore(
    (state) => state.setRepresentanteLegal
  );

  const camposModificados = useCamposModificadosStore(
    (state) => state.camposModificados
  );

  const incrementChanges = useCamposModificadosStore(
    (state) => state.incrementChanges
  );
  const decrementChanges = useCamposModificadosStore(
    (state) => state.decrementChanges
  );
*/
  const [error, setError] = useState({
    NombreCompleto: false,
    TipoDocumento: false,
    NumeroIdentificacion: false,
    LugarExpedicion: false,
  });
  const [mensajeValidacion, setMensajeValidacion] = useState({
    NombreCompleto: '',
    TipoDocumento: '',
    NumeroIdentificacion: '',
    LugarExpedicion: '',
  });

  const [representanteOriginal] = useState<RepresentanteLegal>({
    NombreCompleto: representanteLegal.NombreCompleto,
    TipoDocumento: representanteLegal.TipoDocumento,
    NumeroIdentificacion: representanteLegal.NumeroIdentificacion,
    LugarExpedicion: representanteLegal.LugarExpedicion,
    Firma: representanteLegal.Firma,
  });

  const loadDataRepresentante = () => {
   /* setRepresentanteLegal({
      NombreCompleto: NombreCompleto,
      NumeroIdentificacion: NumeroIdentificacion,
      LugarExpedicion: LugarExpedicion,
      TipoDocumento: TipoDocumento,
      Firma: Firma,
    });*/
  };

  const handleChange = (
    value: string | Ciudad | object,
    propiedad: keyof RepresentanteLegal
  ) => {
    let valorNuevo: string | undefined;

    if (propiedad === 'LugarExpedicion') {
      if (typeof value === 'object' && 'nombre' in value) {
        valorNuevo = value.nombre;
      } else {
        valorNuevo = undefined;
      }
    } else {
      valorNuevo = value as string;
    }

    if (propiedad == 'LugarExpedicion' && typeof value !== 'object') return;

    const valorEvaluar =
      propiedad == 'TipoDocumento'
        ? representanteOriginal.TipoDocumento.nombre
        : representanteOriginal[propiedad as keyof RepresentanteLegal];
    const valorNuevoEvaluado =
      propiedad == 'TipoDocumento' ? valorNuevo : valorNuevo;

   /* if (valorEvaluar !== valorNuevoEvaluado) {
      incrementChanges(camposModificados, propiedad);
    } else {
      decrementChanges(camposModificados, propiedad);
    }

    setRepresentanteLegal({
      ...representanteLegal,
      [propiedad]: valorNuevo,
    });

    openFooter();*/
  };

  const validaNumeroIdentificacion = (valor: string) => {
    if (!/^[a-zA-Z0-9]+(\s|:?)+([.,-]*[0-9]*)*$/.test(valor)) {
      return [true, 'Ingrese un número de documento con formato válido'];
    }
    return [false, ''];
  };

  const handleBlur = (field: string) => {
    let arrayValida = [false, ''];
    if (field == 'NumeroIdentificacion') {
      arrayValida = validaNumeroIdentificacion(
        representanteLegal.NumeroIdentificacion
      );
    }
    setError((prevErrors) => ({
      ...prevErrors,
      [field]:
        arrayValida[0] ||
        representanteLegal[field as keyof RepresentanteLegal] === '',
    }));
    setMessajeError(field, arrayValida[1].toString());
  };

  const setMessajeError = (field: string, mensaje: string) => {
    setMensajeValidacion((prevErrors) => ({
      ...prevErrors,
      [field]:
        representanteLegal[field as keyof RepresentanteLegal] === ''
          ? 'Este campo es obligatorio'
          : mensaje,
    }));
  };

 /* useEffect(() => {
    loadDataRepresentante();
  }, [RepresentanteLegal]);*/

  useEffect(() => {
    const conError =
      error.NombreCompleto ||
      error.TipoDocumento ||
      error.NumeroIdentificacion ||
      error.LugarExpedicion ||
      /^\s*$/.test(representanteLegal.NombreCompleto) ||
      !representanteLegal.LugarExpedicion ||
      !representanteLegal.NumeroIdentificacion;

   // setIsEnabledBtn((!checkFormEmpresa(conError) && isEditEmpresa) || conError);
  }, [representanteLegal, error]);
  return (
    <Grid container spacing={1.5}>
      <Grid item xs={12}>
        <TextField
          id="txt-nombre"
          name="nombre-completo"
          label="Nombre completo"
          value={representanteLegal.NombreCompleto}
          required
          onChange={(e) => handleChange(e.target.value, 'NombreCompleto')}
          onBlur={() => handleBlur('NombreCompleto')}
          fullWidth
          helperText={mensajeValidacion.NombreCompleto}
          error={error.NombreCompleto}
          inputProps={{ maxLength: 50 }}
        />
      </Grid>
      <Grid item xs={6}>
        <TipoDoc
          tipoDocumento={representanteLegal.TipoDocumento}
          onChange={(e: object) => handleChange(e, 'TipoDocumento')}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="txt-documento"
          label="Número de Documento"
          value={representanteLegal.NumeroIdentificacion}
          required
          onChange={(e) =>
            handleChange(e.target.value.trim(), 'NumeroIdentificacion')
          }
          onBlur={() => handleBlur('NumeroIdentificacion')}
          fullWidth
          helperText={mensajeValidacion.NumeroIdentificacion}
          title="Formato: Puede contener números y alguno de los siguientes caracteres (-,.) Prefijo en letras opcional."
          error={error.NumeroIdentificacion}
          inputProps={{ maxLength: 20 }}
        />
      </Grid>
      <Grid item xs={6}>
        <CiudadAutocomplete
          label="Lugar de expedición"
          value={{
            id: representanteLegal.LugarExpedicion,
            nombre: representanteLegal.LugarExpedicion,
          }}
          onBlur={() => handleBlur('LugarExpedicion')}
          onChange={(e) => handleChange(e, 'LugarExpedicion')}
        />
      </Grid>
    </Grid>
  );
};
