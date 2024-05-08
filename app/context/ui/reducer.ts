import { UIState } from './provider';

type UIActionType =
  | { type: 'UI - Start Dragging' }
  | { type: 'UI - End Dragging' }
  | { type: 'UI - Open Dialog Firma' }
  | { type: 'UI - Close Dialog Firma' }
  | { type: 'UI - Open Footer' }
  | { type: 'UI - Close Footer' }
  | { type: 'UI - Open Notification'; tipo: string; message: string }
  | { type: 'UI - Close Notification' }
  | { type: 'UI - Enabled Save' }
  | { type: 'UI - Disabled Save' };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case 'UI - Open Footer':
      return {
        ...state,
        isActiveFooter: true,
      };
    case 'UI - Close Footer':
      return {
        ...state,
        isActiveFooter: false,
      };
    case 'UI - Open Notification':
      return {
        ...state,
        isOpenNotification: true,
        notificationMessage: action.message,
        notificationType: action.tipo,
      };
    case 'UI - Close Notification':
      return {
        ...state,
        isOpenNotification: false,
        notificationMessage: '',
        notificationType: '',
      };

    default:
      return state;
  }
};
