const telephoneCheck = str => {
  if (typeof str === 'string') {
    const check = /^(\+?\d{1,3}\s?)?(\(\d{2,3}\)|\d{2,3})[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/;
    return check.test(str);
  } return 'ERROR: Input must be a string.';
}