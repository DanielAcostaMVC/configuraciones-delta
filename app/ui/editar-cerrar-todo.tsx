'use client';

import { Stack, Typography } from '@mui/material';
import { CloseCustom, EditCustom } from '@/app/ui/icons.style';
import {IconButtonCustom} from '@/app/ui/button-custom.style';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default async function EditarCerrarTodo({isEdit, formSection}: {isEdit:boolean; formSection: string}) {

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleOpenCloseForm = () => {
    console.log("Redirigir a la página de edición de todas las secciones");
    console.log(isEdit);
    console.log(searchParams);
    console.log(pathname);
    console.log(replace);
    const params = new URLSearchParams(searchParams);
    //params.set('editSection', 'representante');
    if (isEdit) {
      params.set('editSection', 'none');
      //params.set('otro', '50');
    } else {
      //params.delete('editSection');
      params.set('editSection', 'all');
      params.delete('otro');
    }
    replace(`${pathname}?${params.toString()}`);



    //const isEditX = !!searchParams?.isEdit//?true:!searchParams?.isEdit;
    
    //console.log("isEditX: ", isEditX);

    
  };

    return (
        <Stack direction="row-reverse"> 
        <IconButtonCustom onClick={handleOpenCloseForm}>
              {isEdit ? <CloseCustom /> : <EditCustom />}
              {/*<Link href="/empresa/view">*<CloseCustom /></Link> : <Link href="/empresa/edit"><EditCustom /></Link>*/}
        </IconButtonCustom>
        <Typography variant="h6" color="#2063A0">Editar todos</Typography>
      </Stack>
    )
}