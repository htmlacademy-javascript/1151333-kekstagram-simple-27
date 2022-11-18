import {renderSimilarPhotos} from './thumbnails.js';
import {closeUserModal} from './popup-photo.js';
import {setUserFormSubmit} from './form.js';
import {getData} from './api.js';

getData((photos) => {
  renderSimilarPhotos(photos);
});

setUserFormSubmit(closeUserModal);
