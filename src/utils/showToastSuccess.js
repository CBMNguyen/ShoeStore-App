import {unwrapResult} from '@reduxjs/toolkit';
import showToast from './showToast';

export const showToastSuccess = async (toast, asyncAction) => {
  const result = await asyncAction;
  if (!unwrapResult(result)) return;
  showToast(toast, 'success', result.payload.message);
  return result.payload;
};
