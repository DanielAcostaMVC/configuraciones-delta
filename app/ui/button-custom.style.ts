import { IconButton, styled } from "@mui/material";

const ButtonEstilos = () => {
  const IconButtonCustom = styled(IconButton) (({theme}) => ({
    color: theme.palette.primary.main,
    size: 'small',
  }));
  return {
    IconButtonCustom,
  }
}
export default ButtonEstilos;