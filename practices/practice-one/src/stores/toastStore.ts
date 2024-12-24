// Libraries
import { create } from 'zustand';

interface IToastState {
  message: string;
  type: 'success' | 'danger' | 'warning';
  isVisible: boolean;
  timeoutDuration?: number;
  showToast: (
    message: string,
    type: 'success' | 'danger' | 'warning',
    timeoutDuration?: number,
    undoEnabled?: boolean,
  ) => void;
  hideToast: () => void;
}

export const ToastStore = create<IToastState>((set) => ({
  message: '',
  type: 'success',
  isVisible: false,
  timeoutDuration: 3000,

  showToast: (message, type, timeoutDuration = 3000) =>
    set({ message, type, isVisible: true, timeoutDuration }),

  hideToast: () => set({ isVisible: false }),
}));
