import {isEscapeKey, isEnterKey} from './util.js';
import {resetEffect} from './slider-effects.js';
import {scaleImage} from './image-scale.js';


const userUploadField = document.querySelector('#upload-file');
const overlayModal = document.querySelector('.img-upload__overlay');
const overlayModalCloseButton = document.querySelector('#upload-cancel');
const form = document.querySelector('#upload-select-image');


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
  form.reset();
  resetEffect();
  scaleImage();
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

export {openUserModal, closeUserModal, onPopupEscKeydown};
