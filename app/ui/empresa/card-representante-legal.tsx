'use client';

import { FC, useContext } from 'react';


import { FormRepresentanteLegal, ViewRepresentanteLegal } from './representante-legal/index';

import { CardCustom } from '@/app/ui/card-custom';

import { UIContext } from '@/app/context/ui/index';
import { RepresentanteLegal } from '@/app/lib/empresa/definitions';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';


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
  
  const handleOpenCloseForm = () => {

    const params = new URLSearchParams(searchParams);

    let editSection = params.get('editSection');
    
    if (isEdit) {

      editSection = editSection === 'all'? 'empresa':'none';

      params.set('editSection', editSection);

    } else {

      editSection = editSection === 'empresa'? 'all':'representante';
      
      params.set('editSection', editSection);
      
    }

    replace(`${pathname}?${params.toString()}`);

    if (isEdit) {
      
      closeFooter();
      setUnsavedChanges(false);
    } else {
      
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
