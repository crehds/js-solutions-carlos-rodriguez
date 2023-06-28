// This function takes an array and a number, and returns a new array. The new array is the result of applying the Josephus permutation to the original array.

// The Josephus permutation is a way to reorder the elements of an array. It starts by removing the kth element from the array, and then it removes the kth element from the array again. It continues doing this until there is only one element left in the array.

export default function josephusPermutation(arr, k) {
  if (arr.length === 0 || k < 1) {
    return [];
  }

  const permutation = [...arr];
  let index = 0;

  while (permutation.length > 1) {
    index = (index + k - 1) % permutation.length;
    permutation.splice(index, 1);
  }

  return permutation;
}
