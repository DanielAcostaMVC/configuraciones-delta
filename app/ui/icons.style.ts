'use client';

import { styled } from "@mui/material"
import { CloseOutlined, EditOutlined } from '@mui/icons-material';

export  const CloseCustom = styled(CloseOutlined) (({theme}) => ({
    color: theme.palette.primary.main,
    fontSize: '16px',
  }));
export  const EditCustom = styled(EditOutlined) (({theme}) => ({
    color: theme.palette.primary.main,
    fontSize: '16px',
  }));
  

