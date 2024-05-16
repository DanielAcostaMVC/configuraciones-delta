'use client';

import { createContext } from 'react';

interface ContextProps {
  isActiveFooter: boolean;

  isOpenNotification: boolean;
  notificationMessage: string;
  notificationType: string;

  openFooter: () => void;
  closeFooter: () => void;

  openNotification: (tipo: string, mensaje: string) => void;
  closeNotification: () => void;

  isEnabledBtn: boolean;
  setIsEnabledBtn: (image: boolean) => void;

  unsavedChanges: boolean;
  setUnsavedChanges: (image: boolean) => void;
}

export const UIContext = createContext({} as ContextProps);
