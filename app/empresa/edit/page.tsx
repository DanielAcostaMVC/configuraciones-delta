import { FC, useContext, useEffect } from 'react';
//import { useShallow } from 'zustand/react/shallow';
import{ Stack } from '@mui/material';
//import { FormRepresentanteLegal, ViewRepresentanteLegal } from '.';

import { FormRepresentanteLegal, ViewRepresentanteLegal } from '../../ui/empresa/representante-legal/index';
import { FormDatosEmpresa } from '@/app/ui/empresa/datos-empresa/index';

import { CardCustom } from '../../ui/card-custom';

//import { UIContext } from '../../../context/ui';

import { RepresentanteLegal } from '../../lib/empresa/definitions';

/*
import {
  useRepresentanteLegalStore,
  useCamposModificadosStore,
} from '../../stores';
*/
interface PageEditRepresentanteLegal {
  searchParams?: {
    isEdit?: boolean;
  };
  Representante: RepresentanteLegal;
}

export default async function PageEditRepresentanteLegal() {
  //const { closeFooter, setUnsavedChanges } = useContext(UIContext);
  //const isEdit = !!searchParams?.isEdit;//useRepresentanteLegalStore((state) => state.isEdit);
  
/*
  const setRepresentanteLegal = useRepresentanteLegalStore(
    (state) => state.setRepresentanteLegal
  );
  

  const setOpenEdit = useRepresentanteLegalStore((state) => state.setOpenEdit);
  const setCloseEdit = useRepresentanteLegalStore(
    (state) => state.setCloseEdit
  );

  const camposModificados = useCamposModificadosStore(
    useShallow((state) => state.camposModificados)
  );
*/
 /* useEffect(() => {
    setRepresentanteLegal(RepresentanteLegal);
  }, [RepresentanteLegal]);
*/
 // const handleOpenCloseForm = () => {
  //  console.log("Redirigir a la página de edición de datos del representante legal");

  //  const isEditX = !!searchParams?.isEdit//?true:!searchParams?.isEdit;
    
   // console.log("isEditX: ", isEditX);

   /* if (isEdit) {
      setCloseEdit();
      closeFooter();
      setUnsavedChanges(false);
    } else {
      setOpenEdit();
    }*/
//  };

  return (
    <Stack gap={1.5}>
    <CardCustom
      title="Datos del Representante Legal"
     // handleChange={handleOpenCloseForm}
      isEdit={true}
      isAction={true/*isEdit && camposModificados.size > 0 ? false : true*/}
    >
        
      
        <FormRepresentanteLegal />
      
    </CardCustom>
    <CardCustom
    title="Datos de la Empresa"
    //handleChange={handleOpenCloseForm}
    isEdit={true}
    isAction={true/*isEdit && camposModificados.size > 0 ? false : true*/}
  >
    <FormDatosEmpresa />
    </CardCustom>
    </Stack>
  );
};
