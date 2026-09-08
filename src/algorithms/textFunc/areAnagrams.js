export const areAnagramsObj = {
  myFunc(inputArr) {
    const strA = inputArr[0];
    const strB = inputArr[1];

    const cleanAndSort = (str) => str.replaceAll(' ', '').toLowerCase().split('').sort().join('');

    return cleanAndSort(strA) === cleanAndSort(strB);
  },
  name: 'Anagram Checker',
  placeholder: 'String A, String B',
  raw: `const areAnagrams = (strA, strB) => {
  const cleanAndSort = str =>
    str.replaceAll(' ', '')
       .toLowerCase()
       .split('')
       .sort()
       .join('');
  
  return cleanAndSort(strA) === cleanAndSort(strB);
}`,
};
