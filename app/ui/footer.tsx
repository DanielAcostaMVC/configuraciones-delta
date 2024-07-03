'use client'

import { FooterActions } from '@/app/ui/footer-actions';
import { useSearchParams } from 'next/navigation';

export const Footer = () => {

    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    let editSection = params.get('editSection');
    const isActiveFooter = editSection === 'all' || editSection === 'empresa' || editSection === 'representante';
    
    return (
        <>
        {isActiveFooter && <FooterActions />}
        </>
        
    )


}