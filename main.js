function fib(n) { return n === 0 ? 0 : (n === 1 ? 1 : fib(n - 1) + fib(n - 2)) }

console.log("  n = 0, 1, 2, 3, 4, 5, 6,  7,  8,  9, 10");
console.log("-----------------------------------------");
console.log("fib = " + fib(0) + ", " + fib(1) + ", " + fib(2) + ", " + fib(3) + ", " + fib(4) + ", " + fib(5) + ", " + fib(6) + ", " + fib(7) + ", " + fib(8) + ", " + fib(9) + ", " + fib(10));
