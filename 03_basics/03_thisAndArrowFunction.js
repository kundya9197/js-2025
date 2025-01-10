// global object in browser is window  object
// .this keyword tells about current context/value

// const user = {
//     name : "Kundan",
//     price : 999,

//     welcomeMessage : function(){
//         console.log(`${this.name}, welcome to the website`);
//         console.log(this);
        
//     }
// }
// user.welcomeMessage()
// user.name = "sam"
// user.welcomeMessage()
// console.log(this);

// 1. normal function
// function chai(){
//     let username = "Kundan"
//     console.log(this.username); // we can't access this keyword under function
// }
// chai()

// 2. function using variable
// const chai = function(){
//     let username = "Kundan"
//     console.log(this.username); // we can't access this keyword under function
// }
// chai()


// 3. declaring functions through arrow function =()=>{}
//     const chai = () =>{
//         let username = "Kundan"
//         console.log(this.username);
        
//     }
//     chai()

// arrow function / explicit return
// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }
// console.log(addTwo(5,3));

// implicit return function
// just like arrow function but here we don't give return type and {} braces
// const addTwo = (num1,num2) => num1 + num2
// console.log(addTwo(3,4));

// we can also write implicit function this way in parantheses
// const addTwo = (num1,num2) => (num1 + num2)
// console.log(addTwo(8,7));

// returning object in arrow function
const addTwo = (num1,num2) => ({name : "kundan"})
console.log(addTwo(8,7));
