// we can declare object in two ways
// by literal and by constructor(singleton)

// Object.create // creating object by constructor

// creating Symbol
const mySym = Symbol("Key1")
// object literal
const jsUser = {
    name:"Kundan",
    [mySym]:"myKey1",
    age: 23,
    location: "Pune",
    email: "kundanmahajan18@gmail.com",
    isLoggedIn:true,
    lastLoginDays:["Monday","Saturday"]
}
// we can acces the values of above object like
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// printing Symbol()
// console.log(jsUser[mySym]);

// object freezing
// value of object will not change after freezing the object
jsUser.email = "kundan@Yahoo"
// Object.freeze(jsUser)
jsUser.email="kundan@Microsoft"
// console.log(jsUser); // o/p: 'kundan@Yahoo'

// function 
jsUser.greeting = function(){
    console.log("Hello JS user");
}

// console.log(jsUser.greeting);
// console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);   
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

