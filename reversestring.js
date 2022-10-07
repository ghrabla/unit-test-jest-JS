const reverseString = str => // it take str as a param
  str
    .toLowerCase()
    .split('') // for convert into an array
    .reverse()
    .join('');

module.exports = reverseString;
