'use client';

import { useState, FC, useEffect } from 'react';
import { Autocomplete, TextField, Skeleton } from '@mui/material';
//import { useCiudades } from './hooks/useCiudades';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { Ciudad } from '../lib/definitions';

interface CiudadAutocompleteProps {
  label?: string;
  value: Ciudad;
  onChange?: (event: Ciudad | string) => void;
  onBlur?: () => void;
  helperText?: string;
  error?: boolean;
}

export const CiudadAutocomplete: FC<CiudadAutocompleteProps> = ({
  label = 'Ciudad',
  value,
  onBlur,
  onChange,
}) => {
  const [valCiudad, setValCiudad] = useState<Ciudad | null>(value);
  const [inputVal, setInputVal] = useState(value.nombre);
  const ciudadesQuery = [{id:0, nombre:"Bogotá 🔥"},{id:1, nombre:"Cali 🔥"},{id:2, nombre:"Medellín 🔥"}]//useCiudades();

  useEffect(() => {
    setValCiudad(value);
  }, [value]);
/*
  if (!ciudadesQuery.isFetched) {
    ciudadesQuery.refetch();
  }
  if (ciudadesQuery.isLoading) {
    return <Skeleton variant="text" />;
  }

  if (!ciudadesQuery.data) {
    return <h6>No fue posible cargar la data</h6>;
  }
*/
  const handleChange = (newValue: Ciudad | string) => {
    if (onChange) {
      onChange(newValue || '');
    }
  };

  return (
    <Autocomplete
      fullWidth
      value={valCiudad}
      onChange={(_: any, newVal: Ciudad | null) => {
        const ciudad = newVal !== null ? newVal : { id: 0, nombre: '' };
        setValCiudad(newVal);
        handleChange(ciudad);
      }}
      onInputChange={(_, newInputVal) => {
        setInputVal(newInputVal);
      }}
      onBlur={onBlur}
      getOptionLabel={(option) => option.nombre || ''}
      isOptionEqualToValue={(option, value) => option.nombre === value.nombre}
      options={ciudadesQuery}
      renderOption={(props, option) => {
        return (
          <li {...props} key={option.id}>
            {option.nombre}
          </li>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          value={inputVal}
          required
          helperText={!inputVal ? 'Este campo es obligatorio' : ''}
          onChange={(e) => {
            setInputVal(e.target.value);
            handleChange(e.target.value);
          }}
          error={!inputVal}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};
