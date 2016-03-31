function fib(n) {
  var answer = 0;

  if(n === 0)
    answer = 0;
  else if(n === 1 || n === 2)
    answer = 1;
  else
    answer = fib(n - 1) + fib(n - 2);

  return answer;
}

console.log(fib(6));
