// function is a block of code which is executed when we call it
function sayMyName(){
    console.log("k")
    console.log("u")
    console.log("n")
    console.log("d")
    console.log("a")
    console.log("n")
}
// reference of function
// sayMyName
// execution of function
// sayMyName()

// here number1, number2 are parameters of function
// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
    
// }
// here 3 and 4 are arguments given to the function
// addTwoNumbers(3,4)

// another function
function addTwoNumbers(number1,number2){
    // let result = number1 + number2
    // return result;
    return number1+number2
}
const result = addTwoNumbers(5,8)
// console.log("Result: ",result);

// how can we give above value in another ways
// accessing parameters 
function loginUserMessage(username = "sam"){ // "sam" setting a by-default value to username i.e it should not be empty 

    if(username === undefined){ // we can do same with if(!username)
        console.log("please enter a valid username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Kundan"));
console.log(loginUserMessage("kundan")); //undefined
