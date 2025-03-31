const accountId= 14452
let accountEmail="sohe123@gmail.com"
var accounPassoword="12345"
accountCity="jaipur"
let accountState;

// accountId=2  not allowed

accountEmail="hc@FontFace.com";
accounPassoword="3424";
accountCity="pune";

console.log(accountId);

/*
prefer not to use var because of issue in block scope and functional scope.
*/
console.table([accountId,accounPassoword,accountEmail,accountCity,accountState])


