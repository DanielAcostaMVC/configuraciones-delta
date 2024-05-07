import { FC, useContext, useEffect } from 'react';
//import { useShallow } from 'zustand/react/shallow';

//import { FormRepresentanteLegal, ViewRepresentanteLegal } from '.';

import { FormRepresentanteLegal, ViewRepresentanteLegal } from './representante-legal/index';

import { CardCustom } from '../card-custom';

//import { UIContext } from '../../../context/ui';

import { RepresentanteLegal } from '../../lib/empresa/definitions';

/*
import {
  useRepresentanteLegalStore,
  useCamposModificadosStore,
} from '../../stores';
*/
interface CardRepresentanteLegalProps {
  Representante: RepresentanteLegal;
}

export const CardRepresentanteLegal: FC<CardRepresentanteLegalProps> = ({
  Representante: RepresentanteLegal,
}) => {
  //const { closeFooter, setUnsavedChanges } = useContext(UIContext);
  const isEdit = true;//useRepresentanteLegalStore((state) => state.isEdit);
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
   /* if (isEdit) {
      setCloseEdit();
      closeFooter();
      setUnsavedChanges(false);
    } else {
      setOpenEdit();
    }*/
  };

  return (
    <CardCustom
      title="Datos del Representante Legal"
      handleChange={handleOpenCloseForm}
      isEdit={isEdit}
      isAction={true/*isEdit && camposModificados.size > 0 ? false : true*/}
    >
        
      {isEdit ? (
        <FormRepresentanteLegal RepresentanteLegal={RepresentanteLegal} />
      ) : (
        <ViewRepresentanteLegal />
      )}
    </CardCustom>
  );
};
