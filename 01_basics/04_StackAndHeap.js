// Stack Memory (Primitive Datatypes)
// Heap Memory (Non-primitive datatype)

// Stack example
let name = "Kundan"

let name1 = name //now value of name1 is Kundan name1=kundan

name1 = "Siddharth" //now assigning value siddharth to name1 //name1=siddharth

// console.log(name) //gives original value to name variable o/p is => Kundan
// console.log(name1) // gives another value to name1 o/p => Siddharth

// Heap example

let userOne = {
    email : "kundanmahajan18@gmail.com",
    password : 12345
}

let userTwo = userOne
userTwo.email = "kundyagk@gmail.com"
 console.log(userOne.email);
 console.log(userTwo.email);
 
 