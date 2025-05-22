//aray

const myArray = [0,1,2,3,4,5]; //array of numbers
const myHeroes = ["krish", "batman", "superman"]; //array of strings

// const myArray2 = new Array(1,2,3,4)
// console.log(myArray[4]);

//Array Methods

// myArray.push(6); //adds 6 to the end of the array
// console.log(myArray); // [0,1,2,3,4,5,6]

// myArray.pop(); //removes the last element of the array
// console.log(myArray); // [0,1,2,3,4,5]

// myArray.unshift(0); //adds 0 to the beginning of the array
// console.log(myArray); // [0,0,1,2,3,4,5]

// // myArray.shift(); //removes the first element of the array
// console.log(myArray); // [0,1,2,3,4,5]

// console.log(myArray.includes(9)); //false

// console.log(myArray.indexOf(3)); //3
 
// const newArr= myArray.join()

// console.log(myArray); //0,1,2,3,4,5
// console.log(typeof newArr);

//slice, splice

console.log("A", myArray); //0,1,2,3,4,5
const myn1= myArr.slice(1,3)

console.log(myn1);
console.log("B", myArray); //A [0,1,2,3,4,5]



const myn2= myArray.spliced(1,3) //removes 3 elements from index 1
console.log(myn2); // [1,2,3]

const myn2= myArray.spliced();
console.log("c",myArray);
console.log(myn2);

