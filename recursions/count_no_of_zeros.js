function countZeros(num) {
  function fn(num, zeros) {
    let currNum = Math.floor(num / 10);
    if (currNum === 0) return zeros;

    if (num % 10 === 0) {
      zeros = zeros + 1;
    }

    return fn(currNum, zeros);
  }
  return fn(num, 0);
}

console.log("Count Zeros", countZeros(302040));
