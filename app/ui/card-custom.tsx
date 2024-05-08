'use client';

import { FC } from 'react';
import CardEstilos from './card-data.style';
import IconsEstilos from './icons.style';
import ButtonEstilos from './button-custom.style';
import Link from 'next/link';

interface CardCustomProps {
  title: string;
  isAction?: boolean;
  isEdit?: boolean;
  handleChange?: () => void;
  children: React.ReactNode;
}
const { CardCustomView, CardHeaderCustom, CardContentCustom } = CardEstilos();
const { CloseCustom, EditCustom } = IconsEstilos();
const { IconButtonCustom } = ButtonEstilos();

export const CardCustom: FC<CardCustomProps> = ({
  title,
  isAction = true,
  isEdit,
  handleChange,
  children,
}: CardCustomProps) => {
  return (
    <CardCustomView>
      <CardHeaderCustom
        title={title}
        action={
          isAction && (
            <IconButtonCustom onClick={handleChange}>
              {isEdit ? <Link href="/empresa/view"><CloseCustom /></Link> : <Link href="/empresa/edit"><EditCustom /></Link>}
            </IconButtonCustom>
          )
        }
      />
      <CardContentCustom>{children}</CardContentCustom>
    </CardCustomView>
  );
};
