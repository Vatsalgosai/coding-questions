function validSubsequence(array, sequence) {
  let j = 0; //set a variable equal to j, this represents the index of the sequence array
  for (i = 0; i < array.length; i++) {
    /*if the number we are on in the first array matches
    the number  we are on in the second array then add 1 to the variable j*/
    if (array[i] === sequence[j]) {
      j++;
      //Add 1 to j
    }
  }
  if (j === sequence.length) {
    //if the final index of the sequence array is equal to the sequence's length then return true
    return true;
  } else {
    //in all other cases return false
    return false;
  }
}

console.log(validSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
