var average = function (salary) {
  let minEl = Number.MAX_SAFE_INTEGER;
  let maxEl = Number.MIN_SAFE_INTEGER;
  let totalEl = salary.length;

  var totalSum = salary.reduce((accum, curr) => accum + curr);

  for (let num of salary) {
    minEl = Math.min(minEl, num);
    maxEl = Math.max(maxEl, num);
  }

  console.log(minEl, maxEl, totalEl, totalSum);
  let avg = (totalSum - minEl - maxEl) / (totalEl - 2);
  return avg;
};

const salary = [4000, 3000, 1000, 2000];

console.log(average(salary));
