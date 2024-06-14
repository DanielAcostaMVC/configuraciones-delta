'use client';

import { FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { SubirFirma, UploadFirma, ViewFirma } from './firma/index';

//import { UploadFirma } from './firma/upload';

//import { UploadFirma, ViewFirma } from '../../../components/Firma';
import { CardCustom } from '../index';

//import useDatosSesion from '../../../sincoerp-core/marco/context';
//import { useEmpresa } from '../../hooks/useEmpresa';
import { Firma } from '../../lib/empresa/definitions';
//import { useFirmaStore } from '../../stores';

interface Props {
  Firma: string;
}
export const CardFirma: FC<Props> = ({ Firma }) => {
  const imageUpload = 'logo-empresa.png'//useFirmaStore((state) => state.imageUpload);
 /* const setSelectedImage = useFirmaStore((state) => state.setSelectedImage);
  const setImageUpload = useFirmaStore((state) => state.setImageUpload);*/

  const  URL_Entorno  = '';//useDatosSesion();

  const [firmaAdjuntaDB, setFirmaAdjuntaDB] = useState<string | null>('');

  const [isOpenDialog, setIsOpenDialog] = useState(false);
  //const { firmaMutation, firmaDeleteMutation } = useEmpresa();
  const [firmaAdjunta, setFirmaAdjunta] = useState<Firma>({
    Nombre: '',
    Imagen: '',
  });
  const [firma, setFirma] = useState<string | null>('');

  const handleSave = async () => {
    /*try {
      await firmaMutation.mutateAsync(firmaAdjunta);
      setSelectedImage(imageUpload);
    } catch (error) {
      setImageUpload(firmaAdjuntaDB);
    }*/
  };

  const handleDelete = async () => {
    /*try {
      await firmaDeleteMutation.mutateAsync();
      setImageUpload(null);
    } catch (error) {
      setImageUpload(firmaAdjuntaDB);
    }*/
  };
  useEffect(() => {
    setFirmaAdjuntaDB(imageUpload);
    //setImageUpload(firma);
  }, []);

  useEffect(() => {
    const firma =
      Firma !== '' ? `${URL_Entorno}/MAESTROS/Firmas/${Firma}` : imageUpload;
    setFirma(firma);
  }, [Firma, imageUpload]);

  return (
    <CardCustom title="Firma Digital del Representante Legal" isAction={false}>
      {Firma ? (
        <ViewFirma
          isOpenDialog={isOpenDialog}
          setIsOpenDialog={setIsOpenDialog}
          src={`${URL_Entorno}/MAESTROS/Firmas/${Firma}`}
          handleDelete={handleDelete}
        />
      ) : (
        <SubirFirma setIsOpenDialog={setIsOpenDialog} />
      )}
      {isOpenDialog &&
        createPortal(
          <UploadFirma
            isOpenDialog={isOpenDialog}
            setIsOpenDialog={setIsOpenDialog}
            handleSave={handleSave}
            setFirmaAdjunta={setFirmaAdjunta}
            image={firma}
          />,
          document.body
        )}
    </CardCustom>
  );
};
