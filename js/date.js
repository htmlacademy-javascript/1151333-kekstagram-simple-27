import {getRandomNumber, getRandomArrayElement} from './util.js';

const photoDescription = ['Новое фото', 'Еще одно', 'Выходные', 'Без комментариев',
  'Как-то так', 'Начало', 'День первый', 'День второй', 'Отлично!', 'Такое', 'Вот так',
  'Интересно', 'Это правда', 'Оставлю здесь'
];

const likesCount = {
  min: 15,
  max: 200
};

const commentsCount = {
  min: 0,
  max: 200
};

const OBJECT_COUNT = 25;

const createPhoto = (objectIndex) => ({
  id: objectIndex,
  url: `photos/${objectIndex}.jpg`,
  description: getRandomArrayElement(photoDescription),
  likes: getRandomNumber(likesCount.min, likesCount.max),
  comments: getRandomNumber(commentsCount.min, commentsCount.max)
});

const createPhotos = () => Array.from({length: OBJECT_COUNT}, (_, objectIndex) => createPhoto(objectIndex + 1));

export {createPhotos};
