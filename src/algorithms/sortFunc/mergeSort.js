export const mergeSortObj = {
  name: 'Merge Sort',
  placeholder: 'Numbers',
  myFunc(arr) {
    arr = arr.map(num => +num);
    if (!arr.every(n => n / 1 === n))
      return 'ERROR: Inputs must be numbers';
    if (arr.length <= 1) {
      return arr;
    } else {
      const halfPoint = ~~(arr.length / 2);
      return mergeSortObj.merge(
        mergeSortObj.myFunc(arr.slice(0, halfPoint)),
        mergeSortObj.myFunc(arr.slice(halfPoint))
      );
    }
  },
  merge(fstHalf, sndHalf) {
    const result = [];
    while (fstHalf.length && sndHalf.length) {
      if (fstHalf[0] < sndHalf[0]) {
        result.push(fstHalf.shift());
      } else if (fstHalf[0] > sndHalf[0]) {
        result.push(sndHalf.shift());
      } else {
        result.push(fstHalf.shift(), sndHalf.shift());
      }
    } return result.concat(fstHalf.concat(sndHalf));
  },
  raw:
`const merge = (fstHalf, sndHalf) => {
  const result = [];
  while (fstHalf.length && sndHalf.length) {
    if (fstHalf[0] < sndHalf[0]) {
      result.push(fstHalf.shift());
    } else if (fstHalf[0] > sndHalf[0]) {
      result.push(sndHalf.shift());
    } else {
      result.push(fstHalf.shift(), sndHalf.shift());
    }
  } return result.concat(fstHalf.concat(sndHalf));
}

const mergeSort = arr => {
  arr = arr.map(num => +num);
  if (!arr.every(n => n / 1 === n))
    return 'ERROR: Inputs must be numbers';
  if (arr.length <= 1) {
    return arr;
  } else {
    const halfPoint = ~~(arr.length / 2);
    return merge(
      mergeSort(arr.slice(0, halfPoint)),
      mergeSort(arr.slice(halfPoint))
    );
  }
}`
}