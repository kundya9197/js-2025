// Immediately Invoked Function Expressions (IIFE)

// global variables creates pollution many times to avoid that pollution we use iife function 
// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()

// named iifi
(function chai(){
    console.log(`DB CONNECTED`);
})(); // use semicolon to seperate function to avoid errors

// unnamed iifi
(() => {
    console.log(`DB TWO CONNECTED`);
})();

// unnamed iifi with arguments
// passing argument to arrow function
((name) => {
    console.log(`DB TWO CONNECTED ${name}`);
})("kundan")