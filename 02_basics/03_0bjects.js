//singleton

//object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "sohel",
  "full name": "sohel malik",
  [mySym]: "mykey1",
  age: 24,
  location: "pune",
  email: "sohel123@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["monday", "sunday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "sohel@yahoo.com";
// Object.freeze(JsUser);

JsUser.email = "sohel@hotmail.com"; // it won't override above enail since we just freezed JsUser above
console.log(JsUser);

JsUser.greeting = function () {
  console.log("hello js user");
};

JsUser.greetingTwo = function () {
  console.log("hello js user, ${this.name}");
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
