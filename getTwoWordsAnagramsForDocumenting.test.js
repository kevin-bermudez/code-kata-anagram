const getTwoWordsAnagramsForDocumenting = require('./getTwoWordsAnagramsForDocumenting'); 

describe('anagram suite tests',() => {
  const twoWordsAnagramsListForDocumenting = getTwoWordsAnagramsForDocumenting();
  it('test first element',() => {
    expect(String(twoWordsAnagramsListForDocumenting[0][0]).length+String(twoWordsAnagramsListForDocumenting[0][1]).length).toBe(11)
  })
  
  it('count "d" ocurrences in first anagrams pair',() => {
    const dOcurrencesInFirstAnagramsPair = ((twoWordsAnagramsListForDocumenting[0][0]+twoWordsAnagramsListForDocumenting[0][1]).match(/d/g)).length
    expect(dOcurrencesInFirstAnagramsPair).toBe(1)
  })

  it('count "o" ocurrences in first anagrams pair',() => {
    const oOcurrencesInFirstAnagramsPair = ((twoWordsAnagramsListForDocumenting[0][0]+twoWordsAnagramsListForDocumenting[0][1]).match(/o/g)).length
    expect(oOcurrencesInFirstAnagramsPair).toBe(1)
  })

  it('count "c" ocurrences in first anagrams pair',() => {
    const cOcurrencesInFirstAnagramsPair = ((twoWordsAnagramsListForDocumenting[0][0]+twoWordsAnagramsListForDocumenting[0][1]).match(/c/g)).length
    expect(cOcurrencesInFirstAnagramsPair).toBe(1)
  })

  it('count "u" ocurrences in first anagrams pair',() => {
    const uOcurrencesInFirstAnagramsPair = ((twoWordsAnagramsListForDocumenting[0][0]+twoWordsAnagramsListForDocumenting[0][1]).match(/u/g)).length
    expect(uOcurrencesInFirstAnagramsPair).toBe(1)
  })

  it('count "m" ocurrences in first anagrams pair',() => {
    const mOcurrencesInFirstAnagramsPair = ((twoWordsAnagramsListForDocumenting[0][0]+twoWordsAnagramsListForDocumenting[0][1]).match(/m/g)).length
    expect(mOcurrencesInFirstAnagramsPair).toBe(1)
  })

  it('count "e" ocurrences in first anagrams pair',() => {
    const eOcurrencesInFirstAnagramsPair = ((twoWordsAnagramsListForDocumenting[0][0]+twoWordsAnagramsListForDocumenting[0][1]).match(/e/g)).length
    expect(eOcurrencesInFirstAnagramsPair).toBe(1)
  })

  it('count "n" ocurrences in first anagrams pair',() => {
    const nOcurrencesInFirstAnagramsPair = ((twoWordsAnagramsListForDocumenting[0][0]+twoWordsAnagramsListForDocumenting[0][1]).match(/n/g)).length
    expect(nOcurrencesInFirstAnagramsPair).toBe(2)
  })

  it('count "t" ocurrences in first anagrams pair',() => {
    const tOcurrencesInFirstAnagramsPair = ((twoWordsAnagramsListForDocumenting[0][0]+twoWordsAnagramsListForDocumenting[0][1]).match(/t/g)).length
    expect(tOcurrencesInFirstAnagramsPair).toBe(1)
  })

  it('count "i" ocurrences in first anagrams pair',() => {
    const iOcurrencesInFirstAnagramsPair = ((twoWordsAnagramsListForDocumenting[0][0]+twoWordsAnagramsListForDocumenting[0][1]).match(/i/g)).length
    expect(iOcurrencesInFirstAnagramsPair).toBe(1)
  })

  it('count "g" ocurrences in first anagrams pair',() => {
    const gOcurrencesInFirstAnagramsPair = ((twoWordsAnagramsListForDocumenting[0][0]+twoWordsAnagramsListForDocumenting[0][1]).match(/g/g)).length
    expect(gOcurrencesInFirstAnagramsPair).toBe(1)
  })
})