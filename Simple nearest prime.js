/* In this Kata, you will be given a number and your task will be to return the nearest prime number.

solve(4) = 3. The nearest primes are 3 and 5. If difference is equal, pick the lower one. 
solve(125) = 127
We'll be testing for numbers up to 1E10. 500 tests.

More examples in test cases.

Good luck!

If you like Prime Katas, you will enjoy this Kata: Simple Prime Streaming

 */

function primeNumber (num) {
  if (num < 2) {
    return false
  }
  
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

function solve (num) {
  if (primeNumber(num)) {
    return num
  }
  let lower = num - 1
  let upper = num + 1
  
  while (true) {
    if (primeNumber(lower)) {
      return lower
    }else if (primeNumber(upper)) {
      return upper
    }
    lower --
    upper ++
  }
}