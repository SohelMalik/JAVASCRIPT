//dates

let myDate = new Date(); //current date and time

// console.log(myDate.toString()); //current date and time

// console.log(myDate.toDateString()); //current date

// console.log(myDate.toTimeString()); //current time

// console.log(myDate.toLocaleDateString()); //current date in local format

// console.log(myDate.toLocaleTimeString()); //current time in local format

// console.log(myDate.toISOString()); //current date and time in ISO format

// console.log(myDate.toJSON()); //current date and time in JSON format

// console.log(typeof(myDate));

//let myCreatedDate = new Date(2023,0,23); //date in string format

let myCreatedDate = new Date(2023,0,23,5,2); 

console.log(myCreatedDate.toLocaleString()); //date in local format


// let myTimestamp = Date.now(); //current timestamp in milliseconds
// console.log(myTimestamp);

console.log(myCreatedDate.getTime()); //timestamp of myCreatedDate in milliseconds


console.log(Date.now());

let newDate= new Date()

console.log(newDate.getMonth()+1);

console.log(newDate.getDay());

//${newDate.getDay()} and true the time

newDate.toLocaleString('default',{
    weekday: 'long',
})



