'use client';
import { useContext, useEffect, useState } from 'react';
//import { useQueryClient } from '@tanstack/react-query';
//import { useShallow } from 'zustand/react/shallow';

import { Checkbox, FormControlLabel, Stack, TextField } from '@mui/material';
import { UIContext } from '../../../context/ui/index';
import { DataEmpresa, EmpresaUpdate } from '../../../lib/empresa/definitions';
import { Ciudad } from '../../../lib/definitions';
import { FormPoliza } from '../datos-empresa/poliza';

import { CiudadAutocomplete } from '../../../ui/ciudad-auto-complete';

/*
import {
  useCamposModificadosStore,
  useDatosEmpresaStore,
  usePolizaStore,
  useRepresentanteLegalStore,
} from '../../stores';
*/
export const FormDatosEmpresa = () => {
  const { openFooter, setIsEnabledBtn } = useContext(UIContext);
  //const queryClient = useQueryClient();

  /*const queryData: DataEmpresa | undefined = queryClient.getQueryData([
    'empresa',
  ]);*/
  //const cachedData = queryData as DataEmpresa;

  //const { checkFormRepresentante } = useRepresentanteLegalStore();
/*
  const setDatosEmpresa = useDatosEmpresaStore(
    (state) => state.setDatosEmpresa
  );
  const isEditRepresentante = useDatosEmpresaStore((state) => state.isEdit);

  const datosEmpresa = useDatosEmpresaStore(
    useShallow((state) => state.datosEmpresa)
  );*/
  /*const {
    Direccion,
    ConstitucionEmpresa: Descripcion,
    Ciudad,
    Poliza,
  } = cachedData;*/

  const datosEmpresa = {
    Direccion: "a",
    Ciudad: {id: "b", nombre: "c"},
    Descripcion: "d",
    Poliza: {Numero: "e", Valor: "f"},
  };

  const Direccion = "a";
    const Ciudad = {id: "b", nombre: "c"};
    const Descripcion = "d";
    const Poliza = {Numero: "e", Valor: "f"};

/*
  const camposModificados = useCamposModificadosStore(
    (state) => state.camposModificados
  );

  const incrementChanges = useCamposModificadosStore(
    (state) => state.incrementChanges
  );
  const decrementChanges = useCamposModificadosStore(
    (state) => state.decrementChanges
  );

  const isPolizaActive = usePolizaStore((state) => state.isPolizaActive);

  const actualizaPoliza = usePolizaStore((state) => state.actualizaPoliza);
  const setIsPolizaActive = usePolizaStore((state) => state.setIsPolizaActive);
*/

  const isPolizaActive = true;

  const [error, setError] = useState({
    Direccion: false,
    Ciudad: false,
    Descripcion: false,
    Poliza: false,
  });
  const [mensajeValidacion, setMensajeValidacion] = useState({
    Direccion: '',
    Ciudad: '',
    Descripcion: '',
    Poliza: '',
  });

  const [datosEmpresaOriginal] = useState<EmpresaUpdate>({
    Direccion: Direccion,
    Ciudad: Ciudad,
    Descripcion: Descripcion,
    Poliza: Poliza,
  });

  const handleChange = (
    valor: string | Ciudad,
    propiedad: keyof EmpresaUpdate
  ) => {
    const valorOriginal =
      propiedad === 'Ciudad'
        ? datosEmpresaOriginal[propiedad].id
        : datosEmpresaOriginal[propiedad];
    const valorComparar =
      propiedad === 'Ciudad' && typeof valor === 'object' ? valor.id : valor;
    if (propiedad == 'Ciudad' && typeof valor !== 'object') return;
/*
    if (valorOriginal !== valorComparar) {
      incrementChanges(camposModificados, propiedad);
    } else {
      decrementChanges(camposModificados, propiedad);
    }

    setDatosEmpresa({
      ...datosEmpresa,
      [propiedad]: valor,
    });
*/
    openFooter();
  };

  const handleBlur = (field: string) => {
    setError((prevErrors) => ({
      ...prevErrors,
      [field]: datosEmpresa[field as keyof EmpresaUpdate] === '',
    }));
    setMessajeError(field);
  };

  const setMessajeError = (field: string) => {
    setMensajeValidacion((prevErrors) => ({
      ...prevErrors,
      [field]:
        datosEmpresa[field as keyof EmpresaUpdate] === ''
          ? 'Este campo es obligatorio'
          : '',
    }));
  };
/*
  useEffect(() => {
    setIsPolizaActive(!!Poliza.Numero || !!Poliza.Valor);
  }, [Poliza]);
*/
  const handleClickPoliza = () => {
   // setIsPolizaActive(!isPolizaActive);

    const polizaModificada = { ...Poliza };

    const limpiaPoliza = () => {
      polizaModificada.Numero = '';
      polizaModificada.Valor = '0';
    };

    if (isPolizaActive) {
      limpiaPoliza();
    }
/*
    if (Poliza.Numero != polizaModificada.Numero) {
      incrementChanges(camposModificados, 'Numero');
    } else {
      decrementChanges(camposModificados, 'Numero');
    }

    if (Poliza.Valor != polizaModificada.Valor) {
      incrementChanges(camposModificados, 'Valor');
    } else {
      decrementChanges(camposModificados, 'Valor');
    }

    actualizaPoliza({
      Numero: polizaModificada.Numero,
      Valor: polizaModificada.Valor,
    });
*/
    openFooter();
  };
/*
  useEffect(() => {
    const conError = !datosEmpresa.Ciudad.nombre || !datosEmpresa.Direccion;

    setIsEnabledBtn(
      (!checkFormRepresentante(conError) && isEditRepresentante) || conError
    );
  }, [datosEmpresa]);

  useEffect(() => {
    setDatosEmpresa({
      Direccion: cachedData.Direccion,
      Ciudad: cachedData.Ciudad,
      Descripcion: cachedData.ConstitucionEmpresa,
      Poliza: cachedData.Poliza,
    });
  }, []);
*/
  return (
    <>
      <Stack gap={1.5} flexDirection="row" mb={1}>
        <TextField
          label="Dirección"
          id="txt-direccion"
          value={datosEmpresa.Direccion}
          fullWidth
          required
          onChange={(e) => handleChange(e.target.value, 'Direccion')}
          onBlur={() => handleBlur('Direccion')}
          helperText={mensajeValidacion.Direccion}
          error={error.Direccion}
          inputProps={{ maxLength: 200 }}
        />
        <CiudadAutocomplete
          label="Ciudad"
          value={datosEmpresa.Ciudad}
          onChange={(e) => handleChange(e, 'Ciudad')}
        />
      </Stack>

      <FormControlLabel
        sx={{ pl: 1 }}
        control={<Checkbox />}
        checked={isPolizaActive}
        label="Póliza"
        onChange={handleClickPoliza}
      />

      <Stack gap={1.5} flexDirection="row" mb={1}>
        {isPolizaActive && <FormPoliza Poliza={Poliza} />}
      </Stack>
      <TextField
        id="txt-descripcion"
        label="Constitución de empresa"
        value={datosEmpresa.Descripcion}
        multiline
        rows={4}
        fullWidth
        onChange={(e) => handleChange(e.target.value, 'Descripcion')}
        inputProps={{ maxLength: 8000 }}
      />
    </>
  );
};
