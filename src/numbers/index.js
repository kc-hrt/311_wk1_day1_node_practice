const isEven = (num) => {
  // write code for numbers.isEven
  return (num % 2 === 0) ? true : false;
}

const sum = (arr) => {
  // write code for numbers.sum
  return arr.reduce((total, amount) => total + amount);
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  return (arr.reduce((total, amount) => { return total + amount }) == sum) ? true : false;
}


module.exports = {
  isEven,
  sum,
  comboSum
}