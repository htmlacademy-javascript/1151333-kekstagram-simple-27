const imageScaleControl = document.querySelector('.img-upload__scale');
const buttonReduce = document.querySelector('.scale__control--smaller');
const buttonIncrease = document.querySelector('.scale__control--bigger');

const scaleValue = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview');

const minStep = 25;
const maxStep = 100;
const step = 25;


const scaleReduce = function(element) {
  const currentValue = parseFloat(element.value);

  if (currentValue === minStep) {
    return minStep; // просто return линтер почему-то не хочет оставлять
  } else {
    const newValue = currentValue - step;
    scaleValue.value = `${newValue}%`;
    imgPreview.style.transform = (`scale(${newValue / 100})`);
  }
};

const scaleIncrease = function(element) {
  const currentValue = parseFloat(element.value);

  if (currentValue === maxStep) {
    return maxStep; // просто return линтер почему-то не хочет оставлять
  } else {
    const newValue = currentValue + step;
    scaleValue.value = `${newValue}%`;
    imgPreview.style.transform = (`scale(${newValue / 100})`);
  }
};


imageScaleControl.addEventListener('click', (evt) => {
  const target = evt.target;

  if (target.tagName !== 'BUTTON') {
    return target; // просто return линтер почему-то не хочет оставлять
  } else if (target === buttonReduce) {
    scaleReduce(scaleValue);
  } else if (target === buttonIncrease) {
    scaleIncrease(scaleValue);
  }
});

export {imgPreview};
