

import { Box, Typography } from "@mui/material";
import { Dispatch, FC, SetStateAction } from "react";
import { BtnAddFirma } from './btn-add';

interface Props {
  setIsOpenDialog: Dispatch<SetStateAction<boolean>>
}
export const SubirFirma: FC<Props> = ({ setIsOpenDialog }) => {
  return (
    <Box>
      <Typography variant="subtitle1">Subir Firma</Typography>
      <BtnAddFirma setIsOpenDialog={setIsOpenDialog} isVisibleIcon={true} />
    </Box>
  )
}
