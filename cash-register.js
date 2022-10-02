const checkCashRegister = (price, cash, cid) => {
// Declaring the Default Currencies
  const currArr = [
    {name: "ONE HUNDRED", val: 100},
    {name: "TWENTY", val: 20},
    {name: "TEN", val: 10},
    {name: "FIVE", val: 5},
    {name: "ONE", val: 1},
    {name: "QUARTER", val: .25},
    {name: "DIME", val: .1},
    {name: "NICKEL", val: .05},
    {name: "PENNY", val: .01}
  ];
// Declaring the Change
  let change = cash - price;
// Transforming the Drawer Array into an Object
  const drawer = cid.reduce((drwObj, curr) => {
    drwObj[curr[0]] = curr[1];
    drwObj.total += curr[1];
    return drwObj;
  }, {total: 0});
// Checking for the Exact Change
  if (drawer.total === change) {
    return {status: "CLOSED", change: cid};
  }
// Declaring the Change Array
  const changeArr = currArr.reduce((drwObj, curr) => {
    let tmpVal = 0;
    while (drawer[curr.name] !== 0 && change >= curr.val) {
      drawer[curr.name] -= curr.val;
      tmpVal += curr.val;
      change -= curr.val;
      change = change.toFixed(2); // Rounding the Change
    } if (tmpVal !== 0) {
      drwObj.push([curr.name, tmpVal]);
    } return drwObj;
  }, []);
// Checking for the Due Change
  return change <= 0 ? {status: "OPEN", change: changeArr}
    : {status: "INSUFFICIENT_FUNDS", change: []};
}