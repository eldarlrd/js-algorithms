const palindrome = str => {
  const fwd = str.replace(/[\W_]/g, "").toLowerCase();
  const bwd = fwd.split("").reverse().join("");
  return fwd === bwd ? true : false;
}