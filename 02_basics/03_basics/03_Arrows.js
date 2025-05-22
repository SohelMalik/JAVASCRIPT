const user = {
    username: "sohel",
    price : 100,

    welcomeMessage: function(){
        console.log( ` ${this.username}, Welcome to the website`);
        console.log(this);
               
    }
    
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

function chai(){
    console.log(this);

    
}
chai()  