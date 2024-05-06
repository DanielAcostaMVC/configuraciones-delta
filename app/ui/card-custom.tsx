import { FC } from 'react';
import CardEstilos from './card-data.style';
import IconsEstilos from './icons.style';
import ButtonEstilos from './button-custom.style';

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
              {isEdit ? <CloseCustom /> : <EditCustom />}
            </IconButtonCustom>
          )
        }
      />
      <CardContentCustom>{children}</CardContentCustom>
    </CardCustomView>
  );
};
