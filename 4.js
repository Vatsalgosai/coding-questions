let coins = [5, 7, 1, 1, 2, 3, 22];
coins.sort((a, b) => a - b);

function min(coins) {
  let s = 0;

  for (let i = 0; i < coins.length; i++) {
    if (coins[i] > s + 1) {
      return s + 1;
    }
    s += coins[i];
  }

  return s + 1;
}

console.log(min(coins));
