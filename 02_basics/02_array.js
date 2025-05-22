const marvel_heros =["thor", "ironman", "hulk", "spiderman", "black widow"];
const dc_heros = ["superman","batman", "flash"];

// marvel_heros.push(dc_heros); //adds dc_heros to the end of the array
// console.log(marvel_heros); // ["thor", "ironman", "hulk", "spiderman", "black widow", ["superman","batman", "flash"]]

// //yaha array ke andar array a gaya hai jo ki hum nahi chahte

// console.log(marvel_heros[5][1]); //accessing the array batman 

// const allheros = marvel_heros.concat(dc_heros); //adds dc_heros to the end of the array
// console.log(allheros); // ["thor", "ironman", "hulk", "spiderman", "black widow", "superman","batman", "flash"]

const all_new_heros= [...marvel_heros, ...dc_heros]; //adds dc_heros to the end of the array
console.log(all_new_heros); // ["thor", "ironman", "hulk", "spiderman", "black widow", "superman","batman", "flash"]

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const reall_another_array = another_array.flat(Infinity); //flattens the array to 1 level
console.log(reall_another_array); // [1,2,3,4,5,6,7,6,7,4,5]


console.log(Array.isArray("sohel")) //false
console.log(Array.from("sohel")) //["s", "o", "h", "e", "l"]
console.log(Array.from({name: "sohel"})) //intersting 

let score1= 100;
let score2= 200;
let score3= 300;
console.log((Array.of(score1, score2, score3))); // [100, 200, 300]

