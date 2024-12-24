/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  function func(s, index, arr) {
    if (index === -1) return arr;

    arr.push(s[index]);
    s = s.slice(0, index);
    return func(s, --index, arr);
  }
  return func(s, s.length - 1, []);
};

function reverseStringInPlace(s) {
  function helper(arr, s, e) {
    let temp;
    if (s > e) return arr;

    temp = arr[e];
    arr[e] = arr[s];
    arr[s] = temp;

    return helper(arr, ++s, --e);
  }
  return helper(s, 0, s.length - 1);
}
const s = ["h", "e", "l", "l", "o"];

console.log(reverseStringInPlace(s));
