import {isEscapeKey} from './util.js';
import {onPopupEscKeydown} from './popup-photo.js';

const MISTAKE_SHOW_TIME = 8000;

const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const errorMessage = errorMessageTemplate.cloneNode(true);


const onClickErrorPopup = (evt) => {
  const divElement = evt.target.closest('div');
  const buttonElement = evt.target.closest('button');
  if (!divElement || buttonElement) {
    closeErrorButton();
  }
};

const onMessageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeErrorButton();
  }
};

const showErrorMessage = () => {
  document.removeEventListener('keydown', onPopupEscKeydown);

  document.body.append(errorMessage);
  errorMessage.addEventListener('click', onClickErrorPopup);
  document.addEventListener('keydown', onMessageEscKeydown);
};


// Function Declaration, так как вызывается раньше определиния
function closeErrorButton() {
  errorMessage.remove();
  errorMessage.removeEventListener('click', onClickErrorPopup);
  document.removeEventListener('keydown', onMessageEscKeydown);

  document.addEventListener('keydown', onPopupEscKeydown);
}


const showErrorLoadData = (message) => {
  const mistakeElement = document.createElement('div');
  mistakeElement.style.zIndex = '100';
  mistakeElement.style.position = 'absolute';
  mistakeElement.style.left = '0';
  mistakeElement.style.top = '0';
  mistakeElement.style.right = '0';
  mistakeElement.style.padding = '10px 3px';
  mistakeElement.style.fontSize = '30px';
  mistakeElement.style.textAlign = 'center';
  mistakeElement.style.backgroundColor = 'red';

  mistakeElement.textContent = message;

  document.body.append(mistakeElement);

  setTimeout(() => {
    mistakeElement.remove();
  }, MISTAKE_SHOW_TIME);
};

export {showErrorMessage, errorMessage, showErrorLoadData};
