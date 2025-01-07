// array
// index starts from 0
// typeof array is object
// Numbers/Strings present in arrays are called elements
// arrays can be of mixed type includes boolean values, numbers and strings
// arrays in javascript are resizable/
// we can add elements into it after declare it 
// it can be of mixed different Datatype(String,Numbers...)

// creating an number type array
const myArr = [0, 1, 2, 3, 4, 5]
// console.log(typeof(myArr));

// another way to declare array
const myArr2 = new Array(1, 2, 3, 4, 5)
// Here we have given values in parentheses() 
// it will automatically convert it into square brackets[]

// Array Methods
// myArr.push(6)
// myArr.push(7) // it adds 6 and 7 in array
// console.log(myArr); 

// myArr.pop() // It removes last element/value from array

// myArr.unshift(7) // it adds value at the starting of array

// myArr.shift() // removes first element of array 
// which we have added with help of .unshift() method

// console.log(myArr.includes(5))
// needs argument - checks whether the value is present in array or not
// it gives answer in boolean values true/false

// console.log(myArr.indexOf(5))
// gives the index of number
// if we are asking for the value which is not exist in array then that time it will give -1 

// .join()
// converts the value into string seperated by commas ,,,
// const newArr = myArr.join()
// console.log(myArr); 
// console.log(newArr); 
// console.log(typeof newArr); 

// slice, splice
// console.log("A", myArr);

const myn1 = myArr.slice(1,3); // It only prints starting value and not ending value 

// console.log(myn1);
// console.log("B", myArr);

const myn2 = myArr.splice(1,3) // changes original value and and store remaining value 
// console.log("c", myArr); 
// console.log(myn2)
// we can see it below when we print original array values are changed
// console.log(myArr) 

const ary = [7, 8, 9, 10, 11, 12]
// console.log("A",ary);

const ary1 = ary.slice(2,4) // This method does not print last value
// console.log(ary1);
// console.log(`again printing array1 to check whether values are changed or not 
//     after doing slice operation on it`);
// console.log("B",ary)

const ary2 = ary.splice(1,2)
// console.log(`array2 after using .splice() operation on it`);
// console.log(ary2)
// console.log(`original array now `);
// console.log("C",ary);
// console.log(`Again printing arrays A and B`);
 
// console.log("A",ary1);
// console.log("B",ary2);

// console.log(`here we can see that the values of original arrays are changed 
    // after performing .splice() operation on it`);
// console.log(ary1);
// console.log(ary2);


// accessing even/odd values from array
// let ary = [7, 8, 9, 10, 11, 12]
// for( let i = 0; i<=ary.length; i++){
//     if(i%2!=0){
//         console.log(ary[i]);
        
//         // console.log(ary[0])
//     }
// }

// by splice method accessing specific value from array 
const array = [11, 22, 33, 44, 55];
// const valueToRemove = 44;

const index = 2;
if (index > -1) {
  array.splice(index, 2);
}

console.log(array); // [1, 2, 4, 5]