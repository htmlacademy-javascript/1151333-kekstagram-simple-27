import {isEscapeKey, isEnterKey} from './util.js';

const userUploadField = document.querySelector('#upload-file');
const overlayModal = document.querySelector('.img-upload__overlay');
const overlayModalCloseButton = document.querySelector('#upload-cancel');

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

function openUserModal () {
  overlayModal.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onPopupEscKeydown);
}

function closeUserModal() {
  overlayModal.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keyDown', onPopupEscKeydown);
  userUploadField.reset();
}

userUploadField.addEventListener('change', () => {
  openUserModal();
});

overlayModalCloseButton.addEventListener('click', () => {
  closeUserModal();
});

userUploadField.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt) && userUploadField.change) {
    openUserModal();
  }
});
