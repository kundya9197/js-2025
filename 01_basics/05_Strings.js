// String is collection of characters
// It similar to arrays/works like arrays
// Index of string always starts from 0
// If we starts from reverse index starts from -1
// We can only iterate string from left to right

const name = "Kundan";
const study = "Masters";

//using backticks ` ` called string interpolation/template literal
// This is the modern way to print string in js
console.log(`Name of candidate is ${name} and he has ${study} degree.`);

// Declaring String in another way
const gameName = new String('Siddharth');
// we can also access the string via index numbers like
 console.log(gameName[0])

 // here are some basic methods of stirng methods

 // this way string is treated like object
 console.log(gameName.__proto__); // o/p - {}

 // printing the length of string
 console.log(gameName.length);

 // converting the string to uppercase and lowercase
 console.log(gameName.toUpperCase());
 console.log(gameName.toLowerCase());
 
 // for searching a character's position
 console.log(gameName.charAt(3));

 // searching the index number of a character
 console.log(gameName.indexOf('h'));
    
 // printing substring
 // to print substring we have to give starting number and ending number example-(1,5).
 // form which position we have to print a string and after that give the end position of string
 // Output is stored in new string   
 const newString = gameName.substring(0,3);
 console.log(newString);
 
 // Slice method is like substring but we can give negative values into it 
 // for example
 // -9 to 4
 // here -9 means 's' is starting positon and till 4 means h
 // s  i  d  d  h  a  r  t  h
 // 1  2  3  4  5  6  7  8  9
 //-9 -8 -7 -6 -5 -4 -3 -2 -1
 // o/p - Sidd
   
 const anotherString = gameName.slice(-8,5)
 console.log(anotherString)


