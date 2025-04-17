const name="sohel"
const repoCount = 50

console.log(name + repoCount + " value");
const gameName= new String('sohel-malik-com'); //new way to define string 
// console.log(`hello my name is ${name} and my repocount is ${repoCount} and iam smart ${gameName}`);

//const gameName= new String('sohel malik');  //new way to define string 

// console.log(gameName.length); //length of string
// console.log(gameName[6]);
// console.log(gameName.__proto__);

console.log(gameName.charAt(9)); //character at index 9
console.log(gameName.indexOf('a')); //index of character a

const newString =gameName.substring(0,4); //substring from 0 to 4
console.log(newString); //sohe

const anotherString = gameName.slice(-8,4); 
console.log(anotherString);

const newStringOne = "  sohel     "
console.log(newStringOne); 
console.log(newStringOne.trim()); //remove spaces from start and end of string

const url= "https://sohel.com/sohel%20malik"
console.log( url.replace('%20', '-')); //replace %20 with -

console.log(url.includes('.com')); //check if .com is present in url

console.log(url.startsWith('.com')); //check if url starts with https


console.log(gameName.split('-')); //split string by -








