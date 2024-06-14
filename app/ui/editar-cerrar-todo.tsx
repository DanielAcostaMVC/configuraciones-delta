'use client';

import { Stack, Typography } from '@mui/material';
import { CloseCustom, EditCustom } from '@/app/ui/icons.style';
import {IconButtonCustom} from '@/app/ui/button-custom.style';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default async function EditarCerrarTodo({isEdit}: {isEdit:boolean}) {

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleOpenCloseForm = () => {
    
    const params = new URLSearchParams(searchParams);
    
    if (isEdit) {
      params.set('editSection', 'none');
    } else {
      params.set('editSection', 'all');
    }

    replace(`${pathname}?${params.toString()}`);

  };

    return (
        <Stack direction="row-reverse"> 
        <IconButtonCustom onClick={handleOpenCloseForm}>
              {isEdit ? <CloseCustom /> : <EditCustom />}
        </IconButtonCustom>
        <Typography variant="h6" color="#2063A0">Editar todos</Typography>
      </Stack>
    )
}