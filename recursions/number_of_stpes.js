function numberOfSteps(num) {
  function fn(num, step) {
    if (num === 0) return step;

    if (num % 2 === 0) {
      return fn(num / 2, step + 1);
    }
    return fn(num - 1, step + 1);
  }

  return fn(num, 0);
}

console.log("Number of steps", numberOfSteps(8));
