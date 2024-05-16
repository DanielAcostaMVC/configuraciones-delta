'use client';

import { Box, styled } from '@mui/material';
interface BoxCustomScrollProps {
    heightToReduce?: number;
}
const BoxEstilos = () => {
    const BoxCustom = styled(Box)(({ theme }) => ({
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: theme.palette.background.default,
    }));

    const BoxStepperCustom = styled(Box)(() => ({
        height: 24,
        margin: '25px 0px 35px 0px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }));
    

    return {
        BoxCustom,
        BoxStepperCustom,
    };
};

export const BoxCustomScroll = styled(Box)<BoxCustomScrollProps>(
    ({ theme, heightToReduce = 200 }) => ({
        overflowY: 'auto',
        maxHeight: `calc(100vh - ${heightToReduce}px)`,
        '&::-webkit-scrollbar': {
            width: '8px', // Ancho del scrollbar
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: theme.palette.primary.light, // Color del thumb (parte desplazable)
            borderRadius: '4px', // Borde del thumb
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: '#f1f1f1', // Color del track (fondo del scrollbar)
        },
    })
);

export default BoxEstilos;
