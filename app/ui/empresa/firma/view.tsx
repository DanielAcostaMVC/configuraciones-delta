import { Dispatch, FC, SetStateAction } from 'react';

import { Button } from '@mui/material';
import { EditOutlined } from '@mui/icons-material';
import FirmaEstilos from './view-firma-custom.style';

interface FirmaProps {
  src?: string;
  isOpenDialog: boolean;
  setIsOpenDialog: Dispatch<SetStateAction<boolean>>;
  handleDelete?: () => void;
}
const { StackCustom, BoxCustom } = FirmaEstilos();

export const ViewFirma: FC<FirmaProps> = ({
  src,
  isOpenDialog,
  setIsOpenDialog,
  handleDelete,
}) => {
  const handleOpen = () => {
    setIsOpenDialog(!isOpenDialog);
  };
  return (
    <>
      <BoxCustom>
        <img
          src={src}
          alt="Imagen seleccionada"
          height={83}
          style={{ maxWidth: '100%', height: '110px' }}
        />
        <StackCustom className="button-container">
          <Button
            size="small"
            variant="outlined"
            startIcon={<EditOutlined fontSize="small" />}
            onClick={handleOpen}
          >
            Editar
          </Button>
          <Button
            size="small"
            variant="outlined"
            color="error"
            onClick={handleDelete}
          >
            Eliminar
          </Button>
        </StackCustom>
      </BoxCustom>
    </>
  );
};
