function validSubsequence(array, sequence) {
  let j = 0;
  for (i = 0; i < array.length; i++) if (array[i] === sequence[j]) j++;

  return j === sequence.length;
}
console.log(validSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
