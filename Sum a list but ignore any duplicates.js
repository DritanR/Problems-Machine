/* Please write a function that sums a list, but ignores any duplicate items in the list.

For instance, for the list [3, 4, 3, 6] , the function should return 10. */

function sumNoDuplicates(numList) {
  let sum = 0
  
  numList.forEach(e => {
    if (numList.indexOf(e) === numList.lastIndexOf(e)) {
      sum += e
    }
  })
  return sum
}