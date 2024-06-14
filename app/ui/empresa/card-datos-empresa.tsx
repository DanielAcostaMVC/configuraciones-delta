'use client';

import { FC, useContext, useEffect } from 'react';
import { FormDatosEmpresa, ViewDatosEmpresa } from './datos-empresa/index';
import { CardCustom } from '@/app/ui/card-custom';
import { UIContext } from '@/app/context/ui/index';
import { Poliza } from '@/app/lib/empresa/definitions';
import { Ciudad } from '@/app/lib/definitions';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';

interface DatosEmpresaProps {
  isEdit?: boolean;
  Direccion: string;
  ConstitucionEmpresa: string;
  Ciudad: Ciudad;
  Poliza: Poliza;
}

export const CardDatosEmpresa: FC<DatosEmpresaProps> = ({
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

const handleOpenCloseForm = () => {

  const params = new URLSearchParams(searchParams);

    let editSection = params.get('editSection');

    if (isEdit) {

      editSection = editSection === 'all'? 'representante':'none';

      params.set('editSection', editSection);
      closeFooter();
      
    } else {

      editSection = editSection === 'representante'? 'all':'empresa';

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
