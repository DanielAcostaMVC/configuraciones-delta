import { FC } from 'react';
import { Paper } from '@mui/material';
//import useDatosSesion from '../../../../sincoerp-core/marco/context';
interface LogoEmpresaProps {
  logo: string;
}
export const LogoEmpresa: FC<LogoEmpresaProps> = ({ logo }) => {
 // const { URL_Entorno } = //useDatosSesion();
  return (
    <Paper
      elevation={1}
      sx={{
        width: 140,
        height: 140,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        src={logo}
        alt="Logo empresa"
        width="90%"
        height="auto"
      />
    </Paper>
  );
};