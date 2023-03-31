let coins = [5, 7, 1, 1, 2, 3, 22];
//sort the array to check the sum
coins.sort((a, b) => a - b);

function min(coins) {
  let s = 0; //initialize a variable called current_sum to 0.

  //if the coin value is greater than the sum + 1 then return
  //Otherwise, update current_sum by adding the coin value to it.
  for (let i = 0; i < coins.length; i++) {
    if (coins[i] > s + 1) {
      return s + 1;
    }
    s += coins[i];
  }
  //if we create all pairs of value then return sum + 1
  return s + 1;
}
console.log(min(coins));
