import { FC, useContext, useEffect } from 'react';
//import { useShallow } from 'zustand/react/shallow';

//import { FormRepresentanteLegal, ViewRepresentanteLegal } from '.';

import { FormRepresentanteLegal } from './representante-legal/form';

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
/*
  const setRepresentanteLegal = useRepresentanteLegalStore(
    (state) => state.setRepresentanteLegal
  );
  const isEdit = useRepresentanteLegalStore((state) => state.isEdit);

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
      isEdit={true/*isEdit*/}
      isAction={true/*isEdit && camposModificados.size > 0 ? false : true*/}
    >
        <FormRepresentanteLegal RepresentanteLegal={RepresentanteLegal} />
      {/*isEdit ? (
        <FormRepresentanteLegal RepresentanteLegal={RepresentanteLegal} />
      ) : (
        <ViewRepresentanteLegal />
      )*/}
    </CardCustom>
  );
};
