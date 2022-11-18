import {showMistakeLoadData} from './error-message-popup.js';


const getData = (onSuccess) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => {
      if (response.ok) {
        response.json()
          .then((photos) => {
            onSuccess(photos);
          });
      } else {
        showMistakeLoadData('Ошибка получения данных с сервера. Попробуйте еще');
      }
    })
    .catch(() => {
      showMistakeLoadData('Ошибка получения данных с сервера. Попробуйте еще');
    });
};


const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

export {getData, sendData};
