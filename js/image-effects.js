import {imgPreview} from './image-scale.js';

const imageEffectsList = document.querySelector('.effects__list');

const changeImgPreviewClass = (evt) => {
  imgPreview.removeAttribute('class');
  imgPreview.classList.add('img-upload__preview');
  imgPreview.classList.add(`effects__preview--${evt.target.value}`);
};

imageEffectsList.addEventListener('change', changeImgPreviewClass);

export {imageEffectsList};

