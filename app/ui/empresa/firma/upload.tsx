import DeleteIcon from '@mui/icons-material/Delete';
import InsertPhotoIcon from '@mui/icons-material/InsertPhotoOutlined';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Stack,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import { Dispatch, DragEvent, FC, SetStateAction, useState } from 'react';

import Logo from '../../../../public/upload.svg';
import {
  convertirBase64,
  getFileExtension,
} from '../../../lib/tipos-archivos';
import useNotification from '../../hooks/use-notification';
import { Firma } from '../../../lib/empresa/definitions';
//import { FileType } from '../../../lib/definitions'
import { UploadFirmaEstilos } from '../../../ui/upload-firma-custom.style';

interface TabPanelProps {
  children?: React.ReactNode;
  value: number;
  index: number;
  className?: string;
}
interface UploadFirmaProps {
  isOpenDialog: boolean;
  setIsOpenDialog: Dispatch<SetStateAction<boolean>>;
  handleSave?: () => void;
  setFirmaAdjunta?: Dispatch<SetStateAction<Firma>>;
  image?: string | null;
}
const { StackTabCustom, StackContentCustom } = UploadFirmaEstilos();

export const UploadFirma: FC<UploadFirmaProps> = ({
  isOpenDialog,
  setIsOpenDialog,
  handleSave,
  setFirmaAdjunta,
  image,
}) => {
  const { showNotification } = useNotification();
  const [valueTab, setValueTab] = useState(0);
  const [imageUpload, setImageUpload] = useState<string | null | undefined>(
    image
  );

  const handleClose = () => {
    setIsOpenDialog(false);
  };
  const handleChange = (
    _: React.SyntheticEvent<Element, Event>,
    newValue: number
  ) => {
    setValueTab(newValue);
  };

  const handleChangeInput = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    const file = files?.[0];
    if (file) {
      const extensionFile = getFileExtension(file);
      if (!extensionFile) {
        showNotification(
          'warning',
          'Archivo no permitido, solo se permiten imagenes con la extensión: png, jpg, jpeg'
        );
        return;
      }
      const imageUrl = URL.createObjectURL(file);
      setImageUpload(imageUrl);
      saveDataImg(files);
    }
  };

  const saveDataImg = async (files: FileList) => {
    if (files) {
      const imgBase64 = await convertirBase64(files);
      const imgName = files?.[0]?.name;
      if (setFirmaAdjunta) {
        setFirmaAdjunta({
          Nombre: imgName,
          Imagen: imgBase64[0],
        });
      }
    }
  };

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    const { files } = event.dataTransfer;
    if (files.length > 0) {
      //const file = [...files];
      const file = Array.isArray(files) ? [...files] : [];
      const extensionFile = getFileExtension(file[0]);

      if (!extensionFile) {
        showNotification(
          'warning',
          'Archivo no permitido, solo se permiten imagenes con la extensión: png, jpg, jpeg'
        );
        return;
      }
      const imageUrl = URL.createObjectURL(file[0]);
      setImageUpload(imageUrl);
      saveDataImg(files);
    }
  };

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };
  const onDragStart = (event: DragEvent<HTMLDivElement>) => {
    const targetId: string = (event.target as HTMLDivElement).id;
    event.dataTransfer.setData('text/plain', targetId);
  };

  const removeImage = () => {
    setImageUpload(null);
  };
  const handleSaveData = () => {
    if (handleSave) {
      handleSave();
    }

    handleClose();
  };
  return (
    <Dialog
      open={isOpenDialog}
      onClose={handleClose}
      aria-labelledby="dialog-load-firma"
      aria-describedby="dialog-load-firma-user"
    >
      <DialogContent
        id="dialog-load-firma"
        sx={{ gap: 2, display: 'flex', flexDirection: 'column', margin: 2.4 }}
      >
        <StackTabCustom>
          <Tabs value={valueTab} aria-label="tab firma" onChange={handleChange}>
            <Tab
              sx={{ width: '600px' }}
              icon={<InsertPhotoIcon color="primary" />}
              label="Imagen"
            />
          </Tabs>
        </StackTabCustom>
        <CustomTabPanel value={valueTab} index={0}>
          {imageUpload ? (
            <Stack
              width={255}
              minHeight={83}
              draggable
              onDragStart={onDragStart}
            >
              <Stack sx={{ position: 'relative' }} alignItems="center" gap={2}>
                <img src={imageUpload} alt="Imagen seleccionada" height={83} />
                <Stack alignItems="flex-start" width={350}>
                  {removeImage && (
                    <Button
                      variant="text"
                      color="error"
                      startIcon={<DeleteIcon color="error" fontSize="small" />}
                      onClick={() => removeImage()}
                    >
                      Borrar firma
                    </Button>
                  )}
                </Stack>
              </Stack>
            </Stack>
          ) : (
            <Stack
              onDrop={onDropEntry}
              onDragOver={allowDrop}
              width="30vw"
              sx={{
                border: 'solid 1px #E7E7E7',
                borderRadius: '4px',
                width: '387px',
              }}
            >
              <Stack alignContent="center" alignItems="center" p={2}>
                <label htmlFor="upload-input" style={{ cursor: 'pointer' }}>
                  <img src={Logo} alt="Logo upload" />
                  <input
                    type="file"
                    id="upload-input"
                    accept="image/png, image/jpeg, image/jpg"
                    style={{ display: 'none' }}
                    onChange={handleChangeInput}
                  />
                </label>
                <Typography color="text.secondary">
                  Adjunta o suelta una archivo
                </Typography>
              </Stack>
            </Stack>
          )}
        </CustomTabPanel>
      </DialogContent>
      <DialogActions sx={{ marginBottom: 0.7 }}>
        <Button size="small" onClick={handleClose}>
          Cancelar
        </Button>
        <Button
          size="small"
          variant="contained"
          onClick={handleSaveData}
          disabled={!imageUpload}
        >
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, className, ...other } = props;
  return (
    <Stack
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-firma-${index}`}
      aria-labelledby={`panel-firma-${index}`}
      {...other}
      alignItems="center"
      alignContent="center"
      className={className}
    >
      {value == index && <StackContentCustom>{children}</StackContentCustom>}
    </Stack>
  );
};
