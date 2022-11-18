import {isEscapeKey} from './util.js';

const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const messageSuccess = successMessageTemplate.cloneNode(true);

const onClickSuccessMesssage = (evt) => {
  const divElement = evt.target.closest('div');
  const buttonElement = evt.target.closest('button');
  if (!divElement || buttonElement) {
    closeSuccessButton();
  }
};

const onMessageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeSuccessButton();
  }
};

const showSuccessMessage = () => {
  document.body.append(messageSuccess);
  messageSuccess.addEventListener('click', onClickSuccessMesssage );
  document.addEventListener('keydown', onMessageEscKeydown);
};


// Function Declaration, так как вызывается раньше определиния
function closeSuccessButton() {
  messageSuccess.remove();
  messageSuccess.removeEventListener('click', onClickSuccessMesssage );
  document.removeEventListener('keydown', onMessageEscKeydown);
}


export {showSuccessMessage};
