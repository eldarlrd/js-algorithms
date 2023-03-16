const fibonacci = n => {
  let count = [0, 1];
  for (let i = 0; i < n - 1; i++) {
    count.push(count[i] + count[count.length - 1]);
  } return count[n];
}