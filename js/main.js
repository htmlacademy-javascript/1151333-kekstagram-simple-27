function getRandomNumber(min, max) {
  if (min < 0 || max < 0 || max < min) {
    return NaN;
  } else {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

function checkMaxString(str, maxStr) {
  if (str.length > maxStr.length) {
    return false;
  } else {
    return true;
  }
}


checkMaxString('Hi', 'Hello');


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

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];


function arrayShuffle(array) {
  array.sort(() => Math.random() - 0.5);
}


const createPhoto = (objectIndex) => ({
  id: objectIndex,
  url: `photos/${objectIndex}.jpg`,
  description: getRandomArrayElement(photoDescription),
  likes: getRandomNumber(likesCount.min, likesCount.max),
  comments: getRandomNumber(commentsCount.min, commentsCount.max)
});

//const similarObjects = Array.from({length: OBJECT_COUNT}, createPhoto);

const similarObjects = Array.from({length: OBJECT_COUNT}, (_, objectIndex) => createPhoto(objectIndex + 1));

arrayShuffle(similarObjects);

similarObjects();
