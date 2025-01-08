const marvelHeroes = ["thor","hulk","ironman"]
const dcHeroes = ["Superman","Batman","flash"]
// console.log(marvelHeroes.push(dcHeroes))
// console.log(marvelHeroes); // this will print the dcHeroes array in a simgle element to avoid it
// we can merge the arrays with .concat() method
const allHeroes = marvelHeroes.concat(dcHeroes)
// console.log(allHeroes)

// we can also merge two arrays using spread operator as you see below
// Spread operator
// it seperates/spreads the value of array
 const all_new_heros = [...marvelHeroes,...dcHeroes]
//  console.log(all_new_heros);
 
// .flat() this method seperates the mixed arrays 
// like below example
const another_array = [1,2,3,[4,5,6],[7,8,[9,10]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)
// .flat() method have parameter which decides how many arrays we have to seperate .flat(1),(2),(3)...(n)
// but this method have parameter named .flat(Infinity) which seperate infinite arrays

// .isArray([1]), isArray([]), isArray(["Kundan"]), isArray(new Array(1,2,3,4))
// check whether the passed argument/value is array or not
// console.log(Array.isArray(new Array(1,2,3,4)));

// .from() & 

// .of()
console.log(Array.of('foo', 2, 'bar', true));
// Expected output: Array ["foo", 2, "bar", true]