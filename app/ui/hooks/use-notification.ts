import { useContext } from 'react';
import { UIContext } from '../../context/ui';
import { MessageType } from '../../lib/definitions';

const useNotification = () => {
  const { openNotification, closeNotification } = useContext(UIContext);
  const showNotification = (type: MessageType, message: string) => {
    openNotification(type, message);

    setTimeout(() => {
      closeNotification();
    }, 8000);
  };

  return {
    showNotification,
  };
};
export default useNotification;
