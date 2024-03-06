/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (isEvenDigitsNumber(nums[i])) {
      count++;
    }
  }
  return count;
};

function isEvenDigitsNumber(num) {
  let digit = Math.log10(num);

  if (Number.isInteger(digit)) {
    console.log("isEvenDigitsNumber", digit, digit % 2);
    return (digit + 1) % 2 === 0;
  } else {
    return Math.ceil(digit) % 2 === 0;
  }
}
const nums = [100000];

console.log(findNumbers(nums));
