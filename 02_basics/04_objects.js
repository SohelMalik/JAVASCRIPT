//const tinderUser = new Object()  //singleton obj
const tinderUser = {}    //non-singleton-object

tinderUser.id = "123abc"
tinderUser.name= "sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "abc@gmail.com",
    fullname :{
        userfullname:{
             firstname: "sohel",
             lastname: "malik"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}


//const obj3 = {obj1,obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3={...obj1,...obj2}
// console.log(obj3);

const users = [
    {
        id:1,
        email: "abc@gmail.com"
    },
    {
        id:1,
        email: "abc@gmail.com"
    },
    {
        id:1,
        email: "abc@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursname: "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

//course.courseInstructor

const {courseInstructor: instructor} = course  //:instructor karne se ab hum use isi name se access kar sakte hain, ye destructured ho gaya

// console.log(courseInstructor);

console.log(instructor);

// {
//     "name" : "sohel",
//     "coursename" : "js in hindi",
//     "price" : "free"                   //JSON mein key aur value pair dono strings hote hain
// }

[                                  //API array ke form mein bhi milte hain 
    {},
    {},
    {}
]




