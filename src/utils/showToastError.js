import showToast from './showToast';

export const showToastError = (toast, error) => {
  // console.log(error);
  showToast(toast, 'error', error.message);
};
