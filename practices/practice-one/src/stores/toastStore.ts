// Libraries
import { create } from 'zustand';

// Types
import type { ToastType } from '@/types';

interface IToastState {
  message: string;
  type: ToastType;
  isVisible: boolean;
  timeoutDuration?: number;
  showToast: (
    message: string,
    type: ToastType,
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
