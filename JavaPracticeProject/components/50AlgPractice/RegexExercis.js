//Regex
const text = "That's not up to $300 -- that's $300, period, when you trade in an eligible phone. And that list includes nearly three dozen models";
const isContainDigits = /[0-9]/g
const isContainAlphabets = /[a-zA-z]/g
const isContainWord = /whene/g
const email = "kalidas@gmail.com";
//const isEmail = /^\w+([._-])?+@[a-zA-z]/g



console.log(text.match(isContainDigits).join(''));
console.log(text.match(isContainAlphabets).join(' '));

console.log(text.search(isContainWord) != -1);
//console.log(isEmail.test(email));