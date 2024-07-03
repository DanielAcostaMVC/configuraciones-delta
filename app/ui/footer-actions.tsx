

import { useContext, useEffect, useState } from 'react';
import { FooterAction } from '@sinco/react';
//import { useShallow } from 'zustand/react/shallow';
import { Button, Typography } from '@mui/material';
import SaveIcon from '@mui/icons-material/SaveOutlined';

import { UIContext } from '@/app/context/ui/index';
//import { useEmpresa } from '../../hooks/useEmpresa';
import { AlertCancel } from '@/app/ui/alert-cancel';
/*import {
  useCamposModificadosStore,
  useDatosEmpresaStore,
  usePolizaStore,
  useRepresentanteLegalStore,
} from '../../stores';
*/

import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export const FooterActions = () => {
  const { closeFooter, isEnabledBtn, setUnsavedChanges } =
    useContext(UIContext);

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const isEditRepresentante = false;
    const isEditEmpresa = true;
/*  const isEditRepresentante = useRepresentanteLegalStore(
    (state) => state.isEdit
  );*/

  //const closeEdit =  true;//useRepresentanteLegalStore((state) => state.setCloseEdit);
/*
  const isEditEmpresa = useDatosEmpresaStore((state) => state.isEdit);

  const closeEditEmpresa = useDatosEmpresaStore((state) => state.setCloseEdit);

  const datosEmpresa = useDatosEmpresaStore(
    useShallow((state) => state.datosEmpresa)
  );

  const poliza = usePolizaStore((state) => state.poliza);

  const representanteLegal = useRepresentanteLegalStore(
    useShallow((state) => state.representanteLegal)
  );

  const camposModificados = useCamposModificadosStore(
    (state) => state.camposModificados
  );

  const resetChanges = useCamposModificadosStore((state) => state.resetChanges);
*/
  const [isOpenAlertCancel, setIsOpenAlertCancel] = useState(false);
  //const { representanteMutation, empresaMutation } = useEmpresa();

  const handleUpdateRepresentante = async () => {
   /* representanteMutation.mutateAsync({
      NombreCompleto: representanteLegal.NombreCompleto.trim(),
      TipoDocumento: representanteLegal.TipoDocumento.id,
      NumeroIdentificacion: representanteLegal.NumeroIdentificacion,
      LugarExpedicion: representanteLegal.LugarExpedicion,
    });*/

    //closeEdit();
    console.log('guardaRepresentante y closeEdit');
  };

  const handleUpdateDatosEmpresa = async () => {
   /* empresaMutation.mutateAsync({
      Direccion: datosEmpresa.Direccion,
      ConstitucionEmpresa: datosEmpresa.Descripcion,
      Numero: poliza.Numero,
      Valor: poliza.Valor,
      Ciudad: datosEmpresa.Ciudad.id,
    });*/

    //closeEditEmpresa();
    console.log('guardaEmpresa y closeEditEmpresa');
  };

  const handleSave = () => {
    if (isEditRepresentante) {
      handleUpdateRepresentante();
    }
    if (isEditEmpresa) {
      handleUpdateDatosEmpresa();
    }
    closeFooter();
   //resetChanges();
  };
/*
  useEffect(() => {
    if (camposModificados.size == 0) {
      closeFooter();
    }
  }, [camposModificados.size]);
*/
  const handleConfirmCancelAlert = () => {
    closeFooter();

    const params = new URLSearchParams(searchParams);

    params.set('editSection', 'none');

    replace(`${pathname}?${params.toString()}`);

    //closeEdit();
    //closeEditEmpresa();
    setUnsavedChanges(false);
    //resetChanges();
    setIsOpenAlertCancel(false);
  };

  const handleCloseAlert = () => {
    setUnsavedChanges(false);
    setIsOpenAlertCancel(false);
  };

  return (
    <>
      <FooterAction
        labelChangeCounter={
          <Typography color="text.secondary" variant="body2" display="flex">
            Cambiaste
            <Typography
              color="text.secondary"
              variant="body2"
              sx={{ fontWeight: 'bold', px: '2px' }}
            >
              {2/*camposModificados.size*/}
            </Typography>
            Campos de información
          </Typography>
        }
        rightContent={
          <>
            <Button onClick={() => setIsOpenAlertCancel(true)}>Cancelar</Button>
            <Button
              variant="contained"
              startIcon={<SaveIcon />}
              onClick={handleSave}
              disabled={isEnabledBtn}
            >
              Guardar
            </Button>
          </>
        }
      />
      <AlertCancel
        isOpenAlert={isOpenAlertCancel}
        handleConfirm={handleConfirmCancelAlert}
        handleCancel={handleCloseAlert}
      />
    </>
  );
};
