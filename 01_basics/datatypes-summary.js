// primitive (call by value hote hain)
// 7 types: string, number, boolean, null, undefined, symbol, bigint


const score = 100
const scoreValue=100.3

const isLoggedIn = false
const outsideTemp=null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); // false, because they are unique

// const bigNumber= 345630093832372478293n


// reference type( non primitive)
// call by reference hote hain

//array, objects, functions

//  array:  
 const heroes=["spiderman", "batman", "superman"]

//  objects:
 let myObj={
    names:"sohel",
    age: 22
}

// functions:
const MyFunction=function(){
    console.log("hello world");

}

console.log(typeof MyFunction);

//+++++++++++++++

// stack (primitive), Heap(non-primitive)

let myYoutubename="sohelYT"
let anothername=myYoutubename
anothername="travels"

console.log(myYoutubename); 
console.log(anothername);

let userOne ={
           email:"user@yahoo.com",
           upi :"sohel@upi"
}

let userTwo = userOne
userTwo.email="sohel@google.com"

console.log(userOne.email);
console.log(userTwo.email); // both will be changed because they are reference types

