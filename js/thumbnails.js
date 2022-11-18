const container = document.querySelector('.container');
const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');


const renderSimilarPhotos = (similarPhotos) => {
  const similarListFragment = document.createDocumentFragment();

  similarPhotos.forEach(({url, likes, comments}) => {
    const photoElement = photoTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments;
    similarListFragment.appendChild(photoElement);
  });

  container.appendChild(similarListFragment);
};

export {renderSimilarPhotos};

