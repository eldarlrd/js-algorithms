export const spinalCaseObj = {
  name: 'Spinal Tap Case',
  placeholder: 'String',
  myFunc(str) {
    return str
           .join()
           .replace(/([a-z])([A-Z])/g, '$1 $2')
           .split(/(?:_|\s)/)
           .join('-')
           .toLowerCase()
  },
  raw:
`const spinalCase = str =>
  str.replace(/([a-z])([A-Z])/g, '$1 $2')
     .split(/(?:_|\\s)/)
     .join('-')
     .toLowerCase();`
}