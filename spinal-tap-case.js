const spinalCase = str => {
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .split(/(?:_|\s)/)
    .join("-")
    .toLowerCase();
}