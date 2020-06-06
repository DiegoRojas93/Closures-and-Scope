/* ----------------------No es un Closure---------------------- */

const moneyBox = (coins) => {
  var saveCoins = 0
  saveCoins += coins
  console.log(`MoneyBox:  $${saveCoins}`);
}

moneyBox(4)
moneyBox(6)
moneyBox(10)
/* ----------------------SI es un Closure---------------------- */
const moneyBox = () => {
  let saveCoins = 0
  const countCoins = (coins) => {
    saveCoins += coins

    console.log(`MoneyBox: $${saveCoins}`);
  }
  return countCoins;
}

let myMoneyBox = moneyBox();

myMoneyBox(4)
myMoneyBox(6)
myMoneyBox(10)