import { STATUS_TYPES } from '@/constants';

export type ToastType = (typeof STATUS_TYPES)[keyof typeof STATUS_TYPES];
