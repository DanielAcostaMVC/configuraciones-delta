import { FC, useContext, useEffect } from 'react';
//import { useShallow } from 'zustand/react/shallow';

//import { FormRepresentanteLegal, ViewRepresentanteLegal } from '.';

import { FormRepresentanteLegal, ViewRepresentanteLegal } from '../../ui/empresa/representante-legal/index';

import { CardCustom } from '../../ui/card-custom';

//import { UIContext } from '../../../context/ui';

import { RepresentanteLegal } from '../../lib/empresa/definitions';

/*
import {
  useRepresentanteLegalStore,
  useCamposModificadosStore,
} from '../../stores';
*/
interface PageViewRepresentanteLegal {
  searchParams?: {
    isEdit?: boolean;
  };
  Representante: RepresentanteLegal;
}

export default async function PageViewRepresentanteLegal() {
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


  return (
    <CardCustom
      title="Datos del Representante Legal"
      //handleChange={handleOpenCloseForm}
      isEdit={false}
      isAction={true/*isEdit && camposModificados.size > 0 ? false : true*/}
    >
        
    
        <ViewRepresentanteLegal />
     
    </CardCustom>
  );
};
