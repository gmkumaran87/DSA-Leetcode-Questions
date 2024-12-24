function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

const num = factorial(5);
console.log("Factorial", num);

function fact(n) {
  if (n <= 1) {
    return 1;
  }

  return n + fact(n - 1);
}

console.log(fact(15));

function fib(n) {
  if (n === 1) return 1;
  if (n === 0) return 0;

  return fib(n - 1) + fib(n - 2);
}

console.log("Fibonacci", fib(6));

function sumOfDigits(num) {
  if (num === num % 10) return num;

  return (num % 10) + sumOfDigits(Math.floor(num / 10));
}

console.log("Sum of Digits", sumOfDigits(3464));
