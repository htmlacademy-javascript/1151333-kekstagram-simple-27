function getRandomNumber(min, max) {
  if (min < 0 || max < 0 || max < min) {
    return NaN;
  } else {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

function checkMaxString(str, maxStr) {
  const result = str.length > maxStr.length ? false : true;
  return result;
}

getRandomNumber(4, 7);
checkMaxString('Hi', 'Hello');
