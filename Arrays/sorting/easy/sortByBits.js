/**
 * You are given an integer array arr. Sort the integers in the array in ascending order by the number of 1's in their binary representation and in case of two or more integers have the same number of 1's you have to sort them in ascending order.

Return the array after sorting it.
 */

var sortByBits = (arr) => {
  return arr.sort(sortFn);
};

function sortFn(a, b) {
  let aBits = numberOfBits(a);
  let bBits = numberOfBits(b);
  //   console.log("a,b", a, aBits, b, bBits);
  if (aBits > bBits) {
    return 1;
  } else if (bBits > aBits) {
    return -1;
  } else {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  }
}

function countSetBits(n) {
  // base case
  if (n == 0) return 0;
  else return 1 + countSetBits(n & (n - 1));
}

function numberOfBits(num) {
  return num
    .toString(2)
    .split("")
    .filter((el) => el === "1").length;
}

const arr = [1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1];

console.log("SOrt by bits", sortByBits(arr));
