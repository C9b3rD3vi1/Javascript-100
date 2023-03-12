function checkCashRegister(price, cash, cid) {
  var currencyUnit = [
    {name: "ONE HUNDRED", value: 100.00},
    {name: "TWENTY", value: 20.00},
    {name: "TEN", value: 10.00},
    {name: "FIVE", value: 5.00},
    {name: "ONE", value: 1.00},
    {name: "QUARTER", value: 0.25},
    {name: "DIME", value: 0.10},
    {name: "NICKEL", value: 0.05},
    {name: "PENNY", value: 0.01}
  ];
  var cashRegister = {status: "", change: []};
  var changeDue = cash - price;
  var cidTotal = 0;
  var filteredCid = cid.filter(function(elem) {
    return elem[1] !== 0;
  }).reverse();
  filteredCid.forEach(function(elem) {
    var cidValue = elem[1];
    cidTotal += cidValue;
    var cidName = elem[0];
    var cidUnit = currencyUnit.find(function(currency) {
      return currency.name === cidName;
    }).value;
    var cidQuantity = cidValue / cidUnit;
    var change = 0;
    while (changeDue >= cidUnit && cidQuantity > 0) {
      changeDue -= cidUnit;
      changeDue = Math.round(changeDue * 100) / 100;
      cidQuantity--;
      change++;
    }
    if (change > 0) {
      cashRegister.change.push([cidName, change * cidUnit]);
    }
  });
  if (changeDue > 0) {
    cashRegister.status = "INSUFFICIENT_FUNDS";
    return cashRegister;
  }
  if (cidTotal < cash - price) {
    cashRegister.status = "INSUFFICIENT_FUNDS";
    return cashRegister;
  }
  cashRegister.status = "OPEN";
  return cashRegister;
}

var price = 19.50;
var cash = 20.00;
var cid = [  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.10],
  ["QUARTER", 4.25],
  ["ONE", 90.00],
  ["FIVE", 55.00],
  ["TEN", 20.00],
  ["TWENTY", 60.00],
  ["ONE HUNDRED", 100.00]
];
var result = checkCashRegister(price, cash, cid);
console.log(result);
