function fib(n) { return n === 0 ? 0 : ((n === 1 || n === 2) ? 1 : fib(n - 1) + fib(n - 2)) }

console.log(fib(8));
