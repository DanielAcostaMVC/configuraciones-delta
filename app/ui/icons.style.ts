import { styled } from "@mui/material"
import { CloseOutlined, EditOutlined } from '@mui/icons-material';
const IconsEstilos = () => {
  const CloseCustom = styled(CloseOutlined) (({theme}) => ({
    color: theme.palette.primary.main,
    fontSize: '16px',
  }));
  const EditCustom = styled(EditOutlined) (({theme}) => ({
    color: theme.palette.primary.main,
    fontSize: '16px',
  }));
  return {
    CloseCustom,
    EditCustom
  }
}
export default IconsEstilos;