import { FC, PropsWithChildren, useReducer, useState } from 'react';
import { uiReducer } from './reducer';
import { UIContext } from './context';

export interface UIState {
  isActiveFooter: boolean;

  selectedImage: string;

  isOpenNotification: boolean;
  notificationMessage: string;
  notificationType: string;
}

const UI_INITIAL_STATE = {
  isActiveFooter: false,

  selectedImage: '',

  isOpenNotification: false,
  notificationMessage: '',
  notificationType: '',
};
export const UIProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const [isEnabledBtn, setIsEnabledBtn] = useState(false);

  const [unsavedChanges, setUnsavedChanges] = useState(false);

  const openFooter = () => dispatch({ type: 'UI - Open Footer' });
  const closeFooter = () => dispatch({ type: 'UI - Close Footer' });

  const openNotification = (tipo: string, message: string) =>
    dispatch({ type: 'UI - Open Notification', tipo, message });
  const closeNotification = () => dispatch({ type: 'UI - Close Notification' });

  return (
    <UIContext.Provider
      value={{
        ...state,

        openFooter,
        closeFooter,

        openNotification,
        closeNotification,

        isEnabledBtn,
        setIsEnabledBtn,
        unsavedChanges,
        setUnsavedChanges,

        notificationMessage: state.notificationMessage,
        notificationType: state.notificationType,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
