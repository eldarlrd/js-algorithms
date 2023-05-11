const spinalCase = str => {
  return typeof str === 'string'
    ? str
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .split(/(?:_|\s)/)
      .join('-')
      .toLowerCase()
    : 'ERROR: Input must be a string.';
}