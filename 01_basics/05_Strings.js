// String is collection of characters
// It similar to arrays/works like arrays
// Index of string always starts from 0
// If we starts from reverse index starts from -1
// We can only iterate string from left to right

const name = "Kundan";
const study = "Masters";

//using backticks ` ` called string interpolation/template literal
// This is the modern way to print string in js
// console.log(`Name of candidate is ${name} and he has ${study} degree.`);

// Declaring String in another way
const gameName = new String('Siddharth');
// we can also access the string via index numbers like
//  console.log(gameName[0])

 // here are some basic methods of stirng methods

 // this way string is treated like object
//  console.log(gameName.__proto__); // o/p - {}

 // printing the length of string
//  console.log(gameName.length);

 // converting the string to uppercase and lowercase
//  console.log(gameName.toUpperCase());
//  console.log(gameName.toLowerCase());
 
 // for searching a character's position
//  console.log(gameName.charAt(3));

 // searching the index number of a character
//  console.log(gameName.indexOf('h'));
    
 // printing substring
 // to print substring we have to give starting number and ending number example-(1,5).
 // form which position we have to print a string and after that give the end position of string
 // Output is stored in new string   
 const newString = gameName.substring(0,3);
//  console.log(newString);
 
 // Slice method is like substring but we can give negative values into it 
 // for example
 // -9 to 4
 // here -9 means 's' is starting positon and till 4 means h
 // s  i  d  d  h  a  r  t  h
 // 1  2  3  4  5  6  7  8  9
 //-9 -8 -7 -6 -5 -4 -3 -2 -1
 // o/p - Sidd
   
 const anotherString = gameName.slice(-9,5)
//  console.log(anotherString)

// .trim() method
// It removes extra spaces from String for example
// It also have .trimStart() and .trimEnd() methods which specifies from where to remove spaces in string
const anotherStringOne = "    Kundan    "
//This is normal string which dosen't removes spaces
console.log(anotherStringOne)

// And this is string with .trim() method which removes all extra spaces from the string
console.log(anotherStringOne.trim())

// .trimStrat() which removes spaces from starting of string example:-
console.log(anotherStringOne.trimStart())

// .trimEnd() which removes spaces from ending of string example:-
console.log(anotherStringOne.trimEnd())

// .replace() method example
const anotherStringTwo = "Kundan is a bachelor's degree holder student"
console.log(anotherStringTwo.replace('bachelor\'s' , 'Master\'s' ));
// You see here when we have to use apostrophe ('s) we can use (\') to add it 
// Similar with the double quotation mark (\")
 // here we have replace the bachelor's with master's

 // another method is .includes('letter we are searching for')
 // which describes that the letter we are searching for is present in string or not
 // which gives answer in true or false value
 // for example
 console.log(anotherStringTwo.includes('Kundan'))

 // .split() method 
 // It divides the string on the basis of some specific characters 
 // for example
 const splitString = "Kundan have '7.15-cgpa' in MCA"
 console.log(splitString.split("' '"));
 console.log(splitString.split(" "));
 
 // NOTE : USE BACKTICKS TO PRINT STRING THIS IS THE MODERN WAY TO PRINT THE STRING
 // " name " + " anothername " // This is the old way to print a string
 // EXAMPLE : 
 // const backtickString = "Kundan";
 // console.log(`Hello ${backtickString}`)
 // o/p: 'Hello Kundan'
 
 // for accessing variables into it we can use ${variable name}