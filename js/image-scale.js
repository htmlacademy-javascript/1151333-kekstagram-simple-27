const MIN_STEP = 25;
const MAX_STEP = 100;
const STEP = 25;
const DEFAULT_VALUE = 100;

const imageScaleControl = document.querySelector('.img-upload__scale');
const buttonReduce = document.querySelector('.scale__control--smaller');
const buttonIncrease = document.querySelector('.scale__control--bigger');

const scaleValue = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview');


const scaleImage = () => {
  const value = DEFAULT_VALUE;
  imgPreview.style.transform = (`scale(${value / 100})`);
};


const scaleReduce = function(element) {
  const currentValue = parseFloat(element.value);

  if (currentValue !== MIN_STEP) {
    const newValue = currentValue - STEP;
    scaleValue.value = `${newValue}%`;
    imgPreview.style.transform = (`scale(${newValue / 100})`);
  }
};

const scaleIncrease = function(element) {
  const currentValue = parseFloat(element.value);

  if (currentValue !== MAX_STEP) {
    const newValue = currentValue + STEP;
    scaleValue.value = `${newValue}%`;
    imgPreview.style.transform = (`scale(${newValue / 100})`);
  }
};

imageScaleControl.addEventListener('click', (evt) => {
  const target = evt.target;

  if (target.tagName !== 'BUTTON') {
    return target;
  } else if (target === buttonReduce) {
    scaleReduce(scaleValue);
  } else if (target === buttonIncrease) {
    scaleIncrease(scaleValue);
  }
});


export {imgPreview, scaleImage};
