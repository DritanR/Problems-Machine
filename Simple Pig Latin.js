/* Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway ! */

function pigIt(str){
  let array = str.split(' ')
  
 return array.map(word => {
   if (word !== '!' && word !== '?' && word !== '.') {
         let firsLetter = word.charAt(0)
  return word.slice(1) + firsLetter + 'ay'
   }
return word
  }).join(' ')
}