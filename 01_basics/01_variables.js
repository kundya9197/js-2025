const accountId = 11111
let accountEmail = "Kundanmahajan18@gmail.com"
var accountPassword = "12345"
accountCity = "Pune"

// accountId = 2 //values of constant variables cannot be changed once declared
console.log(accountId);

accountEmail = "kundyagk@gmail.com"
accountPassword = "2222"
accountCity = "Malegaon"

//we can print multiple values in one print statement by using [] brackets
console.log([accountEmail, accountPassword, accountCity])

//we can also print it by using console.table([]) to show output in tubular format
console.table([accountEmail, accountPassword, accountCity])