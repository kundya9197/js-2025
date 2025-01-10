// function is a block of code which is executed when we call it
function sayMyName() {
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
function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result;
    return number1 + number2 // another way to returning values
}
const result = addTwoNumbers(5, 8)
// console.log("Result: ",result);

// how can we give above value in another ways
// accessing parameters 
function loginUserMessage(username = "sam") { // "sam" setting a by-default value to username i.e it should not be empty 

    if (username === undefined) { // we can do same with if(!username)
        console.log("please enter a valid username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Kundan"));
// console.log(loginUserMessage("kundan")); //undefined

// creating a shopping cart
// use ... called rest operator to get multiple values in one variable
function calculateCartPrice(...num1) {
    return num1
}
// as you see we have used (... rest operator) to get multiple values in one variable/parameter
// console.log(calculateCartPrice(200,300,400)); // returns array of parameters we have passed

// passing object into function
const user = {
    name: "Kundan",
    price: 999
}

function handelObject(anyobject) {
    console.log(`username is ${anyobject.name} and price is ${anyobject.price}`);
}
// handelObject(user)

// direct passing object
handelObject({
    name : "sam",
    price : 399
})

// Array passing in function and returning value from it
// creating array
const myNewArray = [100,300,350,400]

// creating function to return it
function returnSecondValue(getValue){ // getValue is a parameter which is passed to function to store value coming from array  
    return getValue[1] // returning getValue[1] with its index number
}
// console.log(returnSecondValue(myNewArray)); // passed array in function to print it 
console.log(returnSecondValue([100,300,400,700])); // direct passing array values as we do for above object     

