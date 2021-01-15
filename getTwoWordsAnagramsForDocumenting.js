const listOfPosibleWords = require('./listOfPosibleWords');

const checkAnagram = (word,word2) => {
  const dOcurrences = (word.match(/d/g) ? (word.match(/d/g)).length : 0) + (word2.match(/d/g) ? (word2.match(/d/g)).length : 0);
  const oOcurrences = (word.match(/o/g) ? (word.match(/o/g)).length : 0) + (word2.match(/o/g) ? (word2.match(/o/g)).length : 0);
  const cOcurrences = (word.match(/c/g) ? (word.match(/c/g)).length : 0) + (word2.match(/c/g) ? (word2.match(/c/g)).length : 0);
  const uOcurrences = (word.match(/u/g) ? (word.match(/u/g)).length : 0) + (word2.match(/u/g) ? (word2.match(/u/g)).length : 0);
  const mOcurrences = (word.match(/m/g) ? (word.match(/m/g)).length : 0) + (word2.match(/m/g) ? (word2.match(/m/g)).length : 0);
  const eOcurrences = (word.match(/e/g) ? (word.match(/e/g)).length : 0) + (word2.match(/e/g) ? (word2.match(/e/g)).length : 0);
  const nOcurrences = (word.match(/n/g) ? (word.match(/n/g)).length : 0) + (word2.match(/n/g) ? (word2.match(/n/g)).length : 0);
  const tOcurrences = (word.match(/t/g) ? (word.match(/t/g)).length : 0) + (word2.match(/t/g) ? (word2.match(/t/g)).length : 0);
  const iOcurrences = (word.match(/i/g) ? (word.match(/i/g)).length : 0) + (word2.match(/i/g) ? (word2.match(/i/g)).length : 0);
  const gOcurrences = (word.match(/g/g) ? (word.match(/g/g)).length : 0) + (word2.match(/g/g) ? (word2.match(/g/g)).length : 0);
  
  return  String(word).length+String(word2).length === 11 &&
          dOcurrences === 1 &&
          oOcurrences === 1 &&
          cOcurrences === 1 &&
          uOcurrences === 1 &&
          mOcurrences === 1 &&
          eOcurrences === 1 &&
          nOcurrences === 2 &&
          tOcurrences === 1 &&
          iOcurrences === 1 &&
          gOcurrences === 1
}

module.exports = () => {
  const twoWordsAnagramsList = [];

  listOfPosibleWords.forEach(word => {
    listOfPosibleWords.forEach(word2 => {
      if(word !== word2 && checkAnagram(word,word2)){
        twoWordsAnagramsList.push([word,word2])
      }
    })  
  })

  return twoWordsAnagramsList;
}