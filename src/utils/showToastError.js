import showToast from './showToast';

export const showToastError = (toast, error) => {
  showToast(toast, 'error', error.message);
};
