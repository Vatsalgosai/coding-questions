let coins = [5, 7, 1, 1, 2, 3, 22];
coins.sort((a, b) => a - b);
function min(coins) {
  let currentSum = 0;
  for (let i = 0; i < coins.length; i++) {
    if (coins[i] > currentSum + 1) {
      return currentSum + 1;
    }
    currentSum += coins[i];
  }
  return currentSum + 1;
}

console.log(min(coins));
