// scope of a variable or any other function, method is defined between {}
// let a = 300 // global scope variable
// if(true){
//     let a = 10 // local scope variable
//     const b = 20
//     console.log("Inner: ", a);
    
// }
// console.log(a);
// console.log(b);

// Nested scopes
// function one(){
//     const name = "Kundan"
     
//     function two(){
//        const website = "Google"
//         console.log(name);
//     }
//     console.log(website);
//     two()
// }
// one()

// scope levels and hoisting

// normal function
console.log(addone(5));
function addone(num){
    return num + 1
}

// concept of hoisting comes here when we declare function in a variable
// hoisting means how function is created and where it is placed
addTwo(5)
const addTwo = function(num){
    return num + 2
}