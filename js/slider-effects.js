import {imgPreview} from './image-scale.js';
import {imageEffectsList} from './image-effects.js';

const levelEffectValue = document.querySelector('.effect-level__value');
const sliderElement = document.querySelector('.effect-level__slider');


const EFFECTS = {
  none: {
    range: {
      min: 0,
      max: 100,
    },
    step: 1,
    filter: 'none',
    units: '',
  },
  chrome: {
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    filter: 'grayscale',
    units: '',
  },
  sepia: {
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    filter: 'sepia',
    units: '',
  },
  marvin: {
    range: {
      min: 0,
      max: 100,
    },
    step: 1,
    filter: 'invert',
    units: '%',
  },
  phobos: {
    range: {
      min: 0,
      max: 3,
    },
    step: 0.1,
    filter: 'blur',
    units: 'px',
  },
  heat: {
    range: {
      min: 0,
      max: 3,
    },
    step: 0.1,
    filter: 'brightness',
    units: '',
  },
};


noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});

sliderElement.noUiSlider.on('update', () => {
  levelEffectValue.value = sliderElement.noUiSlider.get();

  const currentValue = levelEffectValue.value;
  const currentEffectName = imageEffectsList.querySelector('input:checked').value;


  if (currentEffectName === 'none') {
    sliderElement.classList.add('hidden');
    sliderElement.setAttribute('disabled', true);
    sliderElement.value = '';
    imgPreview.style.filter = '';
  } else {
    sliderElement.classList.remove('hidden');
    sliderElement.removeAttribute('disabled');
    sliderElement.value = levelEffectValue.value;

    const effect = EFFECTS[currentEffectName];
    imgPreview.style.filter = `${effect.filter}(${currentValue}${effect.units})`;
  }
});

imageEffectsList.addEventListener('change', (evt) => {
  const value = evt.target.value;
  const effect = EFFECTS[value];

  sliderElement.noUiSlider.updateOptions({
    range: effect.range,
    step: effect.step,
  });

  sliderElement.noUiSlider.set(effect.range.max);
});

const resetEffect = () => {
  sliderElement.classList.add('hidden');
  imgPreview.style.filter = '';
  imgPreview.className = 'img-upload__preview';
};

export {resetEffect};
