export const rot13 = str => {
  return typeof str === 'string'
    ? str.replace(/[A-Z]/g, shiftStr =>
        String.fromCharCode(shiftStr.charCodeAt(0) % 26 + 65)
      )
    : 'ERROR: Input must be a string.';
}