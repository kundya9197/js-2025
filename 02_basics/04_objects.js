// creating object with construtor
// both tinderUser returns empty object {}
// const tinderUser = new Object()// this is singleton
const tinderUser = {} //normal object
// giving values to the object
tinderUser.id = "123abc"
tinderUser.name = "kundan"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

// creating nested object
const regularUser = {
    email:"kundanmahajan18@gmail.com",
    fullname:{
        userfullname:{
            firstname:"kundan",
            lastname:"mahajan"
        }
    }
}
// accessing values of above nested object
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname.userfullname.lastname);

// merging objects
//  const obj1 = {1:"a",2:"b"} 
//  const obj2 = {3:"a",4:"b"} 
//  const obj3 = {obj1,obj2}
//  console.log(obj3);
// under one object it returns two objects like: 
// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// merging object in another way
// assign() method it have two parameters .target(target,source)
// const obj3 = Object.assign(obj1,obj2) // both print same result
// const obj4 = Object.assign({},obj1,obj2,obj3)  // {} are optional in this case but it's good practice to give it
//{} means values can merge in one object
// console.log(obj3);
// console.log(obj4);

// using spread[...] method to seperate the objects
// const obj4 = {...obj1,...obj2}
// console.log(obj4);

// complex object values which comes from database
// we can access them like
const users = [
    {
        id:1,
        email:"k@gmail.com"
    },
    {
        id:1,
        email:"k@gmail.com"
    },
    {
        id:1,
        email:"k@gmail.com"
    },
]
users[1].name
// console.log(tinderUser);

// returns an array
// console.log(Object.keys(tinderUser)); // gives keys
// console.log(Object.values(tinderUser)); // gives values
// console.log(Object.entries(tinderUser)); // converts in arrays // rarely used

// to check the values present in array we use .hasOwnPropert
// console.log(tinderUser.hasOwnProperty('name'));

// objct de-structuring and JSON API Intro

const course = {
    courseName: "JavaScript",
    price: "999",
    courseInstructor: "Hitesh"
}
// general way to access object vales
// console.log(course.courseInstructor);

// another way
// const {courseInstructor} = course
// we can also modify the name of keys like we can access above value like
const {courseInstructor:instructor} = course
// console.log(courseInstructor);
console.log(instructor);

// creating a react component
// destructuring of object
// const navbar = ({company}) => {
// }
// navbar(company = "Mahajan's")

// API's
// basic structure of API
// how data comes from database
// data always comes in JSON(javascript object notation) format
// {
//     "name":"kundan",
//     "coursename":"js in hindi",
//     "price":"free"
// }