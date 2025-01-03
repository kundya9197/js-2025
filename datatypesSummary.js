// How can data store in memory and how can we access it on these basis there is two major categories
// 1. Primitive datatypes
// 2. Non-Primitive datatypes / reference type

// 1. Primitive Datatypes
// these are all call by values means copy of reference is provided rather than original data.
// And the changes we made are happen in copy not in original values
// 7- types 
// String, Number, Boolean, Null, Undefined, Symbol, BigInt

// Number
const score = 100
// Number (It also include floating point value)
const marks = 99.99

//String
const name = "Kundan"

// Boolean
const isLoggedIn = true

// null
const address = null

// Symbol
const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId)

// BigInt 
const bigNumber = 1234567887654321n

// JavaScript is Dynamically typed language
// This means value of a variable can be declared during runtime not during compile time

// 2. Non-Primitive (Reference Type)
// Return type of all non-primitive datatypes is object

// Arrays, Objects, Functions

//Array
const Bikes = ["Apache", "Yamaha", "Moped"]

// Object
let myObj = {
    name: "Kundan",
    age: 23
}

//Function 

const myFunction = function () {
    console.log("Hello Wrold")
    console.log("return type of function is object function")
}
console.log(myFunction);
