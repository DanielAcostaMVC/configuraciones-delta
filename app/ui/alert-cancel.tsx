import CloseIcon from '@mui/icons-material/Close';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
  Box
} from '@mui/material';
import { FC } from 'react';
//import Warning from '../../public/warning.svg';
//import { BoxModalAlertView } from '../../../components/General/Modal/ModalAlertView';

interface Props {
  isOpenAlert: boolean;
  handleConfirm?: () => void;
  handleCancel?: () => void;
}

export const AlertCancel: FC<Props> = ({
  isOpenAlert,
  handleConfirm,
  handleCancel,
}) => {
  return (
    <Dialog open={isOpenAlert} maxWidth="sm">
      <DialogTitle sx={{ m: 0, p: 2 }}>
        <Stack flexDirection="row" gap={1.5} alignItems="center" width={350}>
          <Box>
            <img src={"/warning.svg"} alt="Logo advertencia" />
          </Box>
          <Typography variant="h6">
            ¿Estás seguro que deseas cancelar?
          </Typography>
        </Stack>
        <IconButton
          aria-label="close"
          onClick={handleCancel}
          sx={{
            position: 'absolute',
            right: 0,
            top: 0,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Typography variant="body2">
          Si cancelas, perderás la información ingresada.
        </Typography>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleCancel}>Cancelar</Button>
        <Button variant="contained" color="primary" onClick={handleConfirm}>
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
