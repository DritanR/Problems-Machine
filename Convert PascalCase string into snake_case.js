/* Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.

Examples
"TestController"  -->  "test_controller"
"MoviesAndBooks"  -->  "movies_and_books"
"App7Test"        -->  "app7_test"
1                 -->  "1" */

function toUnderscore(string) {
  string = string.toString()
    const alphabetLetters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];
 
  let results = ''
  
  for (let i = 0; i < string.length; i++) {
    if (string[i - 1] !== undefined && alphabetLetters.includes(string[i])) {
      results += '_' + string[i].toLowerCase()
    } else {
      results += string[i].toLowerCase()
    }
  }
  return results
}