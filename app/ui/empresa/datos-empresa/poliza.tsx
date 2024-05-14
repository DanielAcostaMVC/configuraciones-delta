import { Stack, TextField } from '@mui/material';
import { ChangeEvent, FC, useContext, useEffect, useState } from 'react';

import { UIContext } from '../../../context/ui';
import { NumericFormatCustom } from '../../../ui/helpers/numeric-format';
import { Poliza } from '../../../lib/empresa/definitions';
//import { useCamposModificadosStore, usePolizaStore } from '../../stores';

interface FormPolizaProps {
  Poliza: Poliza;
}
export const FormPoliza: FC<FormPolizaProps> = ({ Poliza }) => {
  const { openFooter } = useContext(UIContext);

  const poliza = {Numero:"a", Valor:"b"} //usePolizaStore((state) => state.poliza);
/*
  
  const actualizaPoliza = usePolizaStore((state) => state.actualizaPoliza);

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
  const [polizaOriginal] = useState<Poliza>({
    Numero: Poliza.Numero,
    Valor: Poliza.Valor || 0,
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    propiedad: keyof Poliza
  ) => {
    const { value } = event.target;
    const valor = propiedad == 'Valor' && value == '' ? 0 : value;
    const valorOriginal = polizaOriginal[propiedad];

    /*if (valorOriginal != valor) {
      incrementChanges(camposModificados, propiedad);
    } else {
      decrementChanges(camposModificados, propiedad);
    }*/
/*
    if (propiedad == 'Valor') {
      actualizaPoliza({ ...poliza, Valor: valor });
    }

    if (propiedad == 'Numero') {
      actualizaPoliza({ ...poliza, Numero: valor.toString() });
    }*/

    openFooter();
  };
/*
  useEffect(() => {
    actualizaPoliza({ Numero: Poliza.Numero, Valor: Poliza.Valor });
  }, [Poliza]);*/

  return (
    <Stack gap={1} flexDirection="row">
      <TextField
        label="Póliza"
        value={poliza.Numero}
        fullWidth
        onChange={(event) => {
          handleChange(event, 'Numero');
        }}
        inputProps={{ maxLength: 15 }}
      />
      <TextField
        label="Valor de la Póliza"
        value={poliza.Valor}
        InputProps={{
          inputComponent: NumericFormatCustom as any,
        }}
        fullWidth
        onChange={(event) => {
          handleChange(event, 'Valor');
        }}
        inputProps={{ maxLength: 19 }}
      />
    </Stack>
  );
};
