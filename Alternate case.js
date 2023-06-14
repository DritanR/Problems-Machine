/* Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD */

function alternateCase(s) {
  let a = ''
  for (let i of s) {
    if (i === i.toLowerCase()) {
      a += i.toUpperCase()
    }else {
      a += i.toLowerCase()
    }
  }
  return a
}