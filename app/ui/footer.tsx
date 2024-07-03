'use client'

import { FooterActions } from '@/app/ui/footer-actions';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export const Footer = () => {

    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    let editSection = params.get('editSection');
    const isActiveFooter = editSection === 'all' || editSection === 'empresa' || editSection === 'representante';
    console.log('editSection-layoutFun', editSection);
    
    return (
        <>
        {isActiveFooter && <FooterActions />}
        </>
        
    )


}