export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal, data) => {
  // debugger
  return {
    type: OPEN_MODAL,
    modal,
    data
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};