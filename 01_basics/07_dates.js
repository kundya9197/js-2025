// Dates in JavaScript
// Date is object in javascript

// const myDate = new Date()

// console.log(myDate)
// console.log(myDate.toString());
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof(myDate));

// Months are start from 0 in javascript
// Only date
// let myCreatedDate = new Date(2025, 0 ,7)
// console.log(myCreatedDate.toDateString());

// Date include time
// let myCreatedDate = new Date(2025, 0 , 7, 1, 3)
// console.log(myCreatedDate.toLocaleString());

// Date with specific format DD-MM-YY
// Here month starts from 1 like normal date
// let myCreatedDate = new Date("2025-01-07") // MM-DD-YY
//  let myCreatedDate = new Date("07-01-2025") // DD-MM-YY
// console.log(myCreatedDate.toLocaleString());

// TimeStamp used to get realtime and date 
// Suppose we have created any poll/quiz competition 
// Where we have to see the exact time of submission date there we use TimeStamp
// let myTimeStamp = Date.now()
// console.log(myTimeStamp); // gives time in miliseconds

// console.log(myCreatedDate.getTime()); // gives output in miliseconds

//converting into seconds
// console.log(Math.floor(Date.now()/1000)) 

let newDate = new Date()
console.log(newDate);
// getting present month
console.log(newDate.getMonth()+1); // +1 to show months accurately
// Present day
console.log(newDate.getDay());

// Here we have defined the LocaleString() customly
newDate.toLocaleString('default',{
    weekday:"long"
});


