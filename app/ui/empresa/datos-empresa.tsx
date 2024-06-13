'use client';

import { FC, useContext, useEffect } from 'react';
import { FormDatosEmpresa, ViewDatosEmpresa } from './datos-empresa/index';
import { CardCustom } from '../card-custom';
import { UIContext } from '../../context/ui/index';
import { Poliza } from '../../lib/empresa/definitions';
import { Ciudad } from '../../lib/definitions';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
/*
import {
  useCamposModificadosStore,
  useDatosEmpresaStore,
  usePolizaStore,
} from '../../stores';
*/
interface DatosEmpresaProps {
  isEdit?: boolean;
  Direccion: string;
  ConstitucionEmpresa: string;
  Ciudad: Ciudad;
  Poliza: Poliza;
}
export const DatosEmpresa: FC<DatosEmpresaProps> = ({
  isEdit,
  Direccion,
  ConstitucionEmpresa = '',
  Ciudad,
  Poliza,
}) => {

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

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
  //const isEdit = false; //useDatosEmpresaStore((state) => state.isEdit);
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

  console.log("Redirigir a la página de edición de datos empresa");
  console.log(isEdit);
  console.log(searchParams);
  console.log(pathname);
  console.log(replace);
  const params = new URLSearchParams(searchParams);

  console.log(['editSection->', params.get('editSection')]);

    let editSection = params.get('editSection');

    if (isEdit) {
      //setCloseEdit();

      editSection = editSection === 'all'? 'representante':'none';

      params.set('editSection', editSection);
      closeFooter();
      
    } else {
      //setOpenEdit();

      editSection = editSection === 'representante'? 'all':'empresa';

      console.log('open edit');
      params.set('editSection', editSection);
    }

    replace(`${pathname}?${params.toString()}`);
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
      isEdit={isEdit}
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
