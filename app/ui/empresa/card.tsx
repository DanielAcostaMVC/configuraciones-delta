'use client';

import { FC, useContext, useEffect } from 'react';
//import { useShallow } from 'zustand/react/shallow';

//import { FormRepresentanteLegal, ViewRepresentanteLegal } from '.';

import { FormRepresentanteLegal, ViewRepresentanteLegal } from './representante-legal/index';

import { CardCustom } from '../card-custom';

import { UIContext } from '../../context/ui/index';

import { RepresentanteLegal } from '../../lib/empresa/definitions';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';

/*
import {
  useRepresentanteLegalStore,
  useCamposModificadosStore,
} from '../../stores';
*/
interface CardRepresentanteLegalProps {
  isEdit?: boolean;
  Representante: RepresentanteLegal;
}

export const CardRepresentanteLegal: FC<CardRepresentanteLegalProps> = ({
  isEdit,
  Representante, 
}) => {

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const { closeFooter, setUnsavedChanges } = useContext(UIContext);
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
  const handleOpenCloseForm = () => {
    console.log("Redirigir a la página de edición de datos del representante legal");
    console.log(isEdit);
    console.log(searchParams);
    console.log(pathname);
    console.log(replace);

    
    const params = new URLSearchParams(searchParams);
    console.log(['editSection->', params.get('editSection')]);

    let editSection = params.get('editSection');
    //params.set('editSection', 'representante');
    if (isEdit) {

      editSection = editSection === 'all'? 'empresa':'none';

      params.set('editSection', editSection);

      
      //params.set('otro', '50');
    } else {

      editSection = editSection === 'empresa'? 'all':'representante';
      //params.delete('editSection');
      params.set('editSection', editSection);
      params.delete('otro');
    }

    console.log(['editSectionX->', params.get('editSection')]);

    replace(`${pathname}?${params.toString()}`);



    //const isEditX = !!searchParams?.isEdit//?true:!searchParams?.isEdit;
    
    //console.log("isEditX: ", isEditX);

    if (isEdit) {
      //setCloseEdit();
      closeFooter();
      setUnsavedChanges(false);
    } else {
      //setOpenEdit();
    }
  };

  return (
    <CardCustom
      title="Datos del Representante Legal"
      handleChange={handleOpenCloseForm}
      isEdit={isEdit} 
      isAction={true/*isEdit && camposModificados.size > 0 ? false : true*/}
    >
        
      {isEdit ? (
        <FormRepresentanteLegal />
      ) : (
        <ViewRepresentanteLegal />
      )}
    </CardCustom>
  );
};
