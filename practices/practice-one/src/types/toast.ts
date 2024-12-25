import { TOAST_TYPES } from '@/constants';

export type ToastType = (typeof TOAST_TYPES)[keyof typeof TOAST_TYPES];
