/* Write a function that gets a sequence and value and returns true/false depending on whether the variable exists in a multidimentional sequence.

Example:

locate(['a','b',['c','d',['e']]],'e'); // should return true
locate(['a','b',['c','d',['e']]],'a'); // should return true
locate(['a','b',['c','d',['e']]],'f'); // should return false */

var locate = function(arr,value){
  arr = arr.join('')
  let newArr = []
  
  for (let i of arr) {
    if (i !== '[' && i !== ']') {
      newArr.push(i)
    }
  }
  
  if (newArr.includes(value)) {
    return true
  } else {
    return false
  }
}