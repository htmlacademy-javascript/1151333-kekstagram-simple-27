function getRandomNumber(min, max) {
  if (min < 0 || max < 0 || max < min) {
    return NaN;
  } else {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';
const isEnterKey = (evt) => evt.key === 'Enter';


export {getRandomNumber, getRandomArrayElement, isEscapeKey, isEnterKey};
