let arr = [3, 5, -4, 8, 11, 1, -1, 6];

function tosum(arr, sum) {
  //create array to store the output
  let output = [];
  //now i take first element of arry
  for (let i = 0; i < arr.length; i++) {
    //here j takes i+1 means second element of array
    for (let j = i + 1; j < arr.length; j++) {
      /*now check if bth element sum is equal to given sum then add in output
      other go in loop and check for remaing element of arrat*/
      if (arr[i] + arr[j] == sum) {
        output.push([arr[i], arr[j]]);
      }
    }
  }
  return output;
}

console.log(tosum(arr, 10));
