'use client';

import { useEffect, useState } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  FormHelperText,
  TextField,
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material';
//import { useTiposDoc } from './hooks/useTipoDoc';
import { TipoDocumento } from '../lib/definitions';

interface TipoDocProps {
  tipoDocumento: TipoDocumento;
  onChange?: (event: object) => void;
  label?: string;
  useIdAsValue?: boolean;
  isFormEdit?: boolean;
  isDisabled?: boolean;
}

export const TipoDoc = ({
  tipoDocumento,
  onChange,
  label = 'Tipo de documento',
  useIdAsValue = false,
  isFormEdit = true,
  isDisabled = false,
}: TipoDocProps) => {
  const [selectTipoDoc, setSelectTipoDoc] = useState<TipoDocumento | undefined>(
    tipoDocumento
  );

  useEffect(() => {
    setSelectTipoDoc(tipoDocumento);
  }, [tipoDocumento]);

  const tiposDocQuery = [{id:"CC", nombre:"Cédula"}, {id:"Nit", nombre:"Nit"}, {id:"CE", nombre:"Extranjero"}] //useTiposDoc();
/*
  if (!tiposDocQuery.isFetched) {
    tiposDocQuery.refetch();
  }
  if (tiposDocQuery.isLoading) {
    return <TextField label="Loading" />;
  }

  if (!tiposDocQuery.data) {
    return <h6>No fue posible cargar la data</h6>;
  }
*/
  const handleChange = (event: SelectChangeEvent<string>) => {
    const newTipoDocId = event.target.value;
    const newTipoDoc = tiposDocQuery.find(
      (tipoDoc) => tipoDoc.id === newTipoDocId
    );

    setSelectTipoDoc(newTipoDoc);

    if (onChange && newTipoDoc) {
      onChange(newTipoDoc);
    }
  };

  return (
    <FormControl
      disabled={isDisabled && isFormEdit}
      sx={{ minWidth: 70 }}
      fullWidth
    >
      <InputLabel id="select-tipodoc-label" required>
        {label}
      </InputLabel>
      <Select
        labelId="select-tipodoc-label"
        id="select-tipodoc"
        value={selectTipoDoc ? selectTipoDoc.id : ''}
        onChange={handleChange}
        label="Tipo de documento"
        error={selectTipoDoc ? false : true}
      >
        {tiposDocQuery.map((tipoDoc) => (
          <MenuItem key={tipoDoc.id} value={tipoDoc.id}>
            {useIdAsValue ? tipoDoc.id : tipoDoc.nombre}
          </MenuItem>
        ))}
      </Select>
      {!selectTipoDoc && (
        <FormHelperText error>Este campo es obligatorio</FormHelperText>
      )}
    </FormControl>
  );
};
