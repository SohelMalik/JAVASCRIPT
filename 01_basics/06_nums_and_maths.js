const score = 400
// console.log(score);


const balance= new Number(100)
// console.log(balance);

// console.log(balance.toString().length); //convert number to string and gives length

// console.log(balance.toFixed(2)); //convert number to string with 2 decimal places

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4)); //convert number to string with 3 decimal places


const hundreds= 1000000
//console.log(hundreds.toLocaleString('en-IN')); //convert number to string with 3 decimal places and add commas

//++++++++++++++++++ maths ++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); //absolute value of -4   (-ve to +ve kar dega value ko)
// console.log(Math.round(4.6)); //round off value to nearest integer (4.6 to 5)
// console.log(Math.ceil(4.2)); //round off value to nearest great integer (4.2 to 5)
// console.log(Math.floor(4.9)); //round off value to nearest low integer (4.9 to 4)
// console.log(Math.sqrt(16)); //square root of 16 (4)
// console.log(Math.pow(2, 3)); //2^3 (8)
// console.log(Math.min( 2, 3, 1, 4, 5)); //minimum value from given numbers (1)
// console.log(Math.max( 2, 3, 1, 4, 5, 6)); //maximum value from given numbers (6)


console.log(Math.random()); //random number between 0 and 1 (0.123456)
console.log((Math.random()*10) +1); //random number between 0 and 100 (0.123456*100)
console.log(Math.floor(Math.random()*10) +1);

const min = 10
const max = 20
console.log (Math.floor(Math.random() * (max - min + 1)) + min); //random number between 10 and 20