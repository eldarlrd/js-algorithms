export const mergeSortObj = {
  name: 'Merge Sort',
  placeholder: 'Numbers',
  myFunc(arr) {
    arr = arr.map(num => +num);
    if (!arr.every(n => n / 1 === n))
      return 'ERROR: Inputs must be numbers';
    let isDone = false;
    while (!isDone) {
      isDone = true;
      for (const i in arr)
        if (arr[i - 1] > arr[i]) {
          const lesserNum = arr[i - 1];
          arr[i - 1] = arr[i];
          arr[i] = lesserNum;
          isDone = false;
        }
    } return arr;
  },
  raw:
`const mergeSort = arr => {
  arr = arr.map(num => +num);
  if (!arr.every(n => n / 1 === n))
    return 'ERROR: Inputs must be numbers';
  let isDone = false;
  while (!isDone) {
    isDone = true;
    for (const i in arr)
      if (arr[i - 1] > arr[i]) {
        const lesserNum = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = lesserNum;
        isDone = false;
      }
  } return arr;
}`
}