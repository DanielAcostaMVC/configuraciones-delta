import { Dispatch, FC, SetStateAction } from 'react';
import { Button } from "@mui/material"
import EditIcon from '@mui/icons-material/EditOutlined';

interface BtnAddFirmaProps {
  title?: string;
  isDisabled?: boolean;
  isVisibleIcon?: boolean;
  setIsOpenDialog: Dispatch<SetStateAction<boolean>>;
}
export const BtnAddFirma: FC<BtnAddFirmaProps> = ({
  title = 'Firmar',
  isVisibleIcon,
  setIsOpenDialog,
  isDisabled,
}) => {
  return (
    <Button
      variant="outlined"
      size="small"
      startIcon={isVisibleIcon && <EditIcon color="primary" fontSize="small" />}
      onClick={() => setIsOpenDialog(true)}
      disabled={isDisabled}
    >
      {title}
    </Button>
  );
};
