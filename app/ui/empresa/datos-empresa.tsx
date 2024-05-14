import { FC, useContext, useEffect } from 'react';
import { FormDatosEmpresa, ViewDatosEmpresa } from './datos-empresa/index';
import { CardCustom } from '../card-custom';
import { UIContext } from '../../context/ui/index';
import { Poliza } from '../../lib/empresa/definitions';
import { Ciudad } from '../../lib/definitions';
/*
import {
  useCamposModificadosStore,
  useDatosEmpresaStore,
  usePolizaStore,
} from '../../stores';
*/
interface DatosEmpresaProps {
  Direccion: string;
  ConstitucionEmpresa: string;
  Ciudad: Ciudad;
  Poliza: Poliza;
}
export const DatosEmpresa: FC<DatosEmpresaProps> = ({
  Direccion,
  ConstitucionEmpresa = '',
  Ciudad,
  Poliza,
}) => {
  const { closeFooter } = useContext(UIContext);
/*
  const camposModificados = useCamposModificadosStore(
    (state) => state.camposModificados
  );

  const { setIsPolizaActive } = usePolizaStore();

  const setDatosEmpresa = useDatosEmpresaStore(
    (state) => state.setDatosEmpresa
  );
  
  const setOpenEdit = useDatosEmpresaStore((state) => state.setOpenEdit);
  const setCloseEdit = useDatosEmpresaStore((state) => state.setCloseEdit);*/
  const isEdit = false; //useDatosEmpresaStore((state) => state.isEdit);
/*
  useEffect(() => {
    setDatosEmpresa({
      Direccion: Direccion,
      Ciudad: { id: Ciudad.id, nombre: Ciudad.nombre },
      Descripcion: ConstitucionEmpresa,
      Poliza: Poliza,
    });
  }, [Direccion, Ciudad, ConstitucionEmpresa, Poliza]);
*/
const handleOpenCloseForm = () => {
    if (isEdit) {
      //setCloseEdit();
      closeFooter();
    } else {
      //setOpenEdit();
      console.log('open edit');
    }
  };
/*

  useEffect(() => {
    if (Poliza.Numero) {
      setIsPolizaActive(true);
    }
  }, [Poliza]);
*/
  return (
    <CardCustom
      title="Datos de la Empresa"
      handleChange={handleOpenCloseForm}
      isEdit={false}
      isAction={true/*isEdit && camposModificados.size > 0 ? false : true*/}
    >
      {isEdit ? (
        <FormDatosEmpresa />
      ) : (
        <ViewDatosEmpresa
        // Direccion={Direccion}
        // ConstitucionEmpresa={ConstitucionEmpresa}
        // Ciudad={Ciudad}
        // Poliza={Poliza}
        />
      )}
    </CardCustom>
  );
};
