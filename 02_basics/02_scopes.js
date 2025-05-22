
// var c=300
 let a= 300
if(true){

let a = 10;
const b= 20;
//console.log("INNER: ", a); // 10

}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
     const username = "sohel";

     function two(){
        const website = "youtube";
        console.log(username);
        
     }
    //  console.log(website);

    two()
     
}

// one()

if(true){
    const username = "sohel"
    if(username === "sohel"){
        const website = " youtube";
       // console.log(username + website);
    }
    // console.log(website);
    
}
// console.log(username);

// ++++++++++++++++++++ intresting ++++++++++++++++

console.log(addone(5))
function addone(num){
    return num + 1
}


// const addtwo: (num: any) => any
addtwo(5)
const addtwo = function(num){
    return num + 2
}





