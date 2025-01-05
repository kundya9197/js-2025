// Operations on Numbers
// Creating a normal number
const score = 400;
// console.log(score); // 400

// Creating object of a number
const balance = new Number(100)
// console.log(balance)  // [Number: 100]

// it will now convert into a string
// console.log(balance.toString()) // 100

// creating a fixed number 
// used when we are working on some enterprise application like banking application
// where we need some fixed number/precision value like 200.00
const newNum = new Number(200)
// console.log(newNum.toFixed(2)); //200.00

// precision value
const newNumOne = 123.8745
// console.log(newNumOne.toPrecision(4)); // 123.9

// .toLocaleString()
// It shows by-default us dollar value like 1,000,000
// We can convert it into indian currency by defining .toLocaleString('en-IN') 
// now it shows 10,00,000
const newNumTwo = 1000000
// console.log(newNumTwo.toLocaleString('en-IN')); // 10,00,000

// Numbers have many methods 
// like MAX_VALUE, MIN_VALUE

// -------------Oprations on Maths--------------------

// Math library comes with javascript bydefault
// console.log(Math);
// It is by-default an object

// Some common Math methods like 
// .pi(), .sqrt(), .log(), .pow()

// .abs() gives an absolute value 
// It only converts negative value to positive example absolute value of -6 is 6
// Not positive values into negative
// console.log(Math.abs(-6)) // 6 gives only positive value
// console.log(Math.abs(6)) //  gives positive value

// .round() gives roundoff value 
// Mostly used in real world application
// console.log(Math.round(4.3)) // gives 4
// console.log(Math.round(4.6)) // gives 5

// .ceil() gives upper value
// console.log(Math.ceil(4.1)) // gives 5

// .floor() gives lower value
// console.log(Math.floor(6.7)); // gives 6

// .min() gives minimum value
// console.log(Math.min(5,6,7,4,2,10)); // gives 2

// .max() gives maximum value
// console.log(Math.max(23,11,2,3,4,87)); // gives 87

// .random() Gives a random value
// It always gives value between range of 0.000 to 1
// And comes mostly in decimals
// console.log(Math.random())
// console.log(Math.random()*10) // to get positive values
// console.log((Math.random()*10)+1);

const min = 10
const max = 20


console.log(Math.floor(Math.random()*(max-min+1))+min);
// Explanation of above formula
// Math.random() gives random value between 0.8233 & 1 
// Math.random()*10 Then we multiply it by 10 
// now the value will shift at left side something like 6.7624583
// but in some cases value can come in 0.8993753 to avoid that we have add +1 into it now formuls is
// console.log((Math.random()*10)+1)
// Now we have added a Math.floor() which gives us value 0 to avoid we have add +1 into it
// cause we have minimun case of getting value above 1 and so on..
// now it will give value 1 to 9
// but now we have case that the value should be greater than 10 
// so we have used Math.random() here + now we have multiply it by 10 
// so in another way rather than multiplying it by 10 
// we have multiply it by (max-min) to get the range of number between 10 to 20 and +1 to avoid 0 case
// now to get minimun value of 10 we have added +min which is 10 into it
// this way we het Math.floor(Math.random()*(max-min+1)+min)
// so final formula is 
console.log(Math.floor(Math.random()*(max-min+1))+min);

//Youtube Comment
// Formula for generating random number : 
// Math.floor(Math.random() * (total no. in the range)) + min_number