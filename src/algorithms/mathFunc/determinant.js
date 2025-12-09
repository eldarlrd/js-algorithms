export const determinantObj = {
  name: 'Matrix Determinant',
  placeholder: 'Numeric Arrays',
  myFunc(inputArr) {
    let matrix;

    try {
      matrix = determinantObj.getMatrix(inputArr);
    } catch (error) {
      if (error instanceof Error) return error.message;
    }

    const size = matrix.length;

    if (size === 1) return matrix[0][0];

    if (size === 2) {
      const firstDiagonal = matrix[0][0] * matrix[1][1];
      const secondDiagonal = matrix[0][1] * matrix[1][0];
      const subtraction = firstDiagonal - secondDiagonal;

      return subtraction;
    }

    let result = 0;

    for (let col = 0; col < size; col++) {
      const sign = col % 2 === 0 ? 1 : -1;
      const submatrix = matrix
        .slice(1)
        .map(row => row.filter((_, i) => i !== col));

      result += sign * matrix[0][col] * determinantObj.myFunc(submatrix);
    }

    return result;
  },
  getMatrix(inputArr) {
    if (
      Array.isArray(inputArr) &&
      inputArr.length > 0 &&
      Array.isArray(inputArr[0])
    )
      return inputArr;

    const rows = [];
    let buffer = '';

    for (const part of inputArr) {
      buffer += part;

      if (buffer.includes(']')) {
        const clean = buffer.replace(/\s+/g, ' ').trim();
        const jsonReady = clean.replace(/\s+/g, ',');

        try {
          rows.push(JSON.parse(jsonReady));
        } catch (error) {
          throw new Error('ERROR: Elements must be numeric');
        }

        buffer = '';
      }
    }

    const size = rows.length;
    if (size === 0) throw new Error('ERROR: Inputs must be arrays');
    if (size > 10) throw new Error('ERROR: Matrix is too large');

    for (const row of rows)
      if (row.length !== size) throw new Error('ERROR: Matrix must be square');

    return rows;
  },
  raw:
`const determinant = matrix => {
  const size = matrix.length;

  if (size === 1) return matrix[0][0];

  if (size === 2) {
    const firstDiagonal = matrix[0][0] * matrix[1][1];
    const secondDiagonal = matrix[0][1] * matrix[1][0];
    const subtraction = firstDiagonal - secondDiagonal;

    return subtraction;
  }

  let result = 0;

  for (let col = 0; col < size; col++) {
    const sign = col % 2 === 0 ? 1 : -1;
    const submatrix = matrix.slice(1).map(
      row => row.filter((_, i) => i !== col)
    );

    result += sign * matrix[0][col] * determinant(submatrix);
  }

  return result;
}`
};
