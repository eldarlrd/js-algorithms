const rot13 = str => {
  return str.replace(/[A-Z]/g, shiftStr =>
    String.fromCharCode(shiftStr.charCodeAt(0) % 26 + 65)
  );
}