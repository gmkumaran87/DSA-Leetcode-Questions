/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let wealth = -1;
  for (let i = 0; i < accounts.length; i++) {
    let total = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      total += accounts[i][j];
    }
    wealth = Math.max(wealth, total);
  }
  return wealth;
};

const accounts = [
  [2, 8, 7],
  [7, 1, 3],
  [1, 9, 5],
];

console.log("Maximum wealth: ", maximumWealth(accounts));
