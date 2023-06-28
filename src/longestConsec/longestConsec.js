// This function returns the longest substring of a variable that has a length of R or greater.
// strArr: an array of strings
// r: a number
// The function returns a string.

export default function longestString(strArr, r) {
  if (r <= 0 || strArr.length < r) {
    return null;
  }

  let longestStr = '';
  for (let i = 0; i <= strArr.length - r; i += 1) {
    const currentStr = strArr.slice(i, i + r).join('');
    if (currentStr.length > longestStr.length) {
      longestStr = currentStr;
    }
  }

  return longestStr;
}
