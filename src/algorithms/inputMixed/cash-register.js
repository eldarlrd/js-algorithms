export const checkCashRegisterObj = {
  name: 'Cash Register',
  placeholder: 'Price, Cash, Cash in Drawer',
  myFunc(inputArr) {
    console.log(inputArr)
    console.log(inputArr[2])
    // Type Checking
    const price = +inputArr[0];
    const cash = +inputArr[1];
    const cid = inputArr[2];
    const error =
  'ERROR: Inputs must be (number, number, array[9 × [string, number]])';
    if (inputArr.length !== 3 ||
        price < 0 || cash < 0 ||
        !price || !cash ||
        cid.length !== 9)
      return error;
    for (let i of cid) {
      i[1] = +i[1];
      if (i[1] < 0) return error;
    }
    // Declaring the Default Currencies
    const currArr = [
      {name: 'ONE HUNDRED', val: 100},
      {name: 'TWENTY', val: 20},
      {name: 'TEN', val: 10},
      {name: 'FIVE', val: 5},
      {name: 'ONE', val: 1},
      {name: 'QUARTER', val: .25},
      {name: 'DIME', val: .1},
      {name: 'NICKEL', val: .05},
      {name: 'PENNY', val: .01}
    ];
    // Declaring the Change
    let change = cash - price;
    if (change < 0)
      return
        `The customer owes you $${-change.toFixed(2)}`;
    // Transforming the Drawer Array into an Object
    const drawer = cid.reduce((drwObj, curr) => {
      drwObj[curr[0]] = curr[1];
      drwObj.total += curr[1];
      return drwObj;
    }, {total: 0});
    // Checking for the Exact Change
    if (drawer.total === change)
      return {status: 'CLOSED', change: cid};
    // Declaring the Change Array
    const changeArr = currArr.reduce((drwObj, curr) => {
      let tmpVal = 0;
      while (drawer[curr.name] > 0 && change >= curr.val) {
        drawer[curr.name] -= curr.val;
        tmpVal += curr.val;
        change -= curr.val;
        // Rounding the Change
        tmpVal = +tmpVal.toFixed(2);
        change = change.toFixed(2);
      } if (tmpVal > 0) {
        drwObj.push([curr.name, tmpVal]);
      } return drwObj;
    }, []);
    // Checking for the Due Change
    return change <= 0
      ? {status: 'OPEN', change: changeArr}
      : {status: 'INSUFFICIENT_FUNDS', change: []};
  },
  raw:
`const checkCashRegister = (price, cash, cid) => {
  // Type Checking
  price = +price;
  cash = +cash;
  const error =
'ERROR: Inputs must be (number, number, array[9 × [string, number]])';
  if (price < 0 || cash < 0 ||
      !price || !cash ||
      cid.length !== 9)
    return error;
  for (let i of cid) {
    i[1] = +i[1];
    if (i[1] < 0) return error;
  }
  // Declaring the Default Currencies
  const currArr = [
    {name: 'ONE HUNDRED', val: 100},
    {name: 'TWENTY', val: 20},
    {name: 'TEN', val: 10},
    {name: 'FIVE', val: 5},
    {name: 'ONE', val: 1},
    {name: 'QUARTER', val: .25},
    {name: 'DIME', val: .1},
    {name: 'NICKEL', val: .05},
    {name: 'PENNY', val: .01}
  ];
  // Declaring the Change
  let change = cash - price;
  if (change < 0)
    return
      \`The customer owes you $\${-change.toFixed(2)}\`;
  // Transforming the Drawer Array into an Object
  const drawer = cid.reduce((drwObj, curr) => {
    drwObj[curr[0]] = curr[1];
    drwObj.total += curr[1];
    return drwObj;
  }, {total: 0});
  // Checking for the Exact Change
  if (drawer.total === change)
    return {status: 'CLOSED', change: cid};
  // Declaring the Change Array
  const changeArr = currArr.reduce((drwObj, curr) => {
    let tmpVal = 0;
    while (drawer[curr.name] > 0 && change >= curr.val) {
      drawer[curr.name] -= curr.val;
      tmpVal += curr.val;
      change -= curr.val;
      // Rounding the Change
      tmpVal = +tmpVal.toFixed(2);
      change = change.toFixed(2);
    } if (tmpVal > 0) {
      drwObj.push([curr.name, tmpVal]);
    } return drwObj;
  }, []);
  // Checking for the Due Change
  return change <= 0
    ? {status: 'OPEN', change: changeArr}
    : {status: 'INSUFFICIENT_FUNDS', change: []};
}`
}