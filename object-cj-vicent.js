// Consider this variable:

// const person = {
//   firstName: "Arthur",
//   lastName: "Dent"
// }


// Write the code that accesses the first name of the person object.

// console.log(person.firstName)


// Write the code that accesses the last name of the person object.

// console.log(person.lastName)

// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.

// const person = {
//     firstName: "Arthur",
//     lastName: "Dent",
//     homePlanet: "Earth",
//   }

// Update the person object with a method that logs "Arthur Dent is from planet Earth".

// const person = {
//     firstName: "Arthur",
//     lastName: "Dent",
//     homePlanet: "Earth",
//     nameAndPlanet: function() {
//         return this.firstName + " " + this.lastName + " " + 'is from planet' + " " + this.homePlanet
//     }
// }
// console.log(person.nameAndPlanet())

// Consider this variable:

// const product = {
//   name: "chair",
//   price: 24.99,
//     describeProduct: function() {
//         return "The product is a "+ this.name + ". It costs $" + this.price
//     }

// }

// Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".

// console.log(product.describeProduct())

// Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.

// const product = {
//   name: "chair",
//   price: 24.99,
//     totalWithTax: function() {
//         let totalPrice = (this.price * 1.07).toFixed(2)
//         let finalTotalPrice = parseFloat(totalPrice)
//         return finalTotalPrice
//     }
// }

// console.log(product.totalWithTax())

// 26.7393
// Pseudo Code
// create a function called totalWithTax

// Consider this variable:

// const lunch = {
//   name: "PB and Banana",
//   type: "sandwich",
//   ingredients: ["bread", "peanut butter", "banana"]
// }
// Write the code that accesses the ingredients property.
// console.log(lunch.ingredients);
// [ 'bread', 'peanut butter', 'banana' ]

// Write the code that access the third ingredient of the lunch object.
// console.log(lunch.ingredients[2])
// banana

// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
// howTo: function() {
//       return "The ingredients for a " + this.name + " " + this.type + " are " + this.ingredients
// console.log(lunch.howTo())
// The ingredients for a PB and Banana sandwich are bread, peanut butter, banana.

// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
// const lunch = {
//   name: "PB and Banana",
//   type: "sandwich",
//   ingredients: ["bread", " peanut butter", " banana."],
//     howTo: function() {
//           return "The ingredients for a " + this.name + " " + this.type + " are " + this.ingredients
// }
// }
// Consider this variable:

// const animals = [
//   { name: "Waffles", type: "dog", age: 7 },
//   { name: "Fluffy", type: "cat", age: 14 },
//   { name: "Spelunky", type: "dog", age: 4 },
//   { name: "Hank", type: "cat", age: 11 }
// ]
// // // Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.
//
// // const catsOnly = animals.filter(value => value.type === "cat")
//
// // console.log(catsOnly)
//
// // Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.
// const animalsNames =(array) => {
//   return array.map(obj => {
//     return obj.name
//   })
// }
// console.log(animalsNames(animals))
// [ 'Waffles', 'Fluffy', 'Spelunky', 'Hank' ]

// Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.
// const animalsNames =(array) => {
//   return array.filter(obj => {
//     if (obj.age > 10){
//     return obj.name
// }
// })
// }
// console.log(animalsNames(animals))
// { name: 'Fluffy', type: 'cat', age: 14 },
// { name: 'Hank', type: 'cat', age: 11 }
// Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.
// const animals = [
//   { name: "Waffles", type: "dog", age: 7 },
//   { name: "Fluffy", type: "cat", age: 14 },
//   { name: "Spelunky", type: "dog", age: 4 },
//   { name: "Hank", type: "cat", age: 11 }
// ]
// const animalSentence = array.map(sentenceMaker(array.name)) => {
//   return "This pet is named " + array.name + "  and they are " + array.age + " years old."
// }

// console.log(animalSentence(animals));
// Consider this variable:

// const author = {
//   name: "H. G. Wells",
//   genre: "science fiction"
// }

// Write the code that destructures the author object so that the following code snippet will run successfully:

// const {name, genre} = author 

// console.log(` ${author.name} is a ${author.genre} author. `)


// // Output: "H. G. Wells is a science fiction author"
// Consider this variable:

// const pokeOne = {
//   species: "Charmandar",
//   pokemon_type: "Fire"
// }
// const pokeTwo = {
//   species: "Magikarp",
//   pokemon_type: "Water"
// }

// Create a function called describePokemon that take an object like the ones above and uses destructuring to return a description of the Pokemon so that the following code snippet will run successfully:

// const describePokemon = (pokemon) => {
//   return `${pokemon.species} is a ${pokemon.pokemon_type} pokemon`
// }

// console.log(describePokemon(pokeOne))
// // Output: "Charmandar is a Fire pokemon"
// console.log(describePokemon(pokeTwo))
// // Output: "Magikarp is a Water pokemon"
// Consider this variable:

const triangleDimensions = {
  base: 2,
  height: 5,
    calculator: function() {
      let subResult = this.base * this.height
      let result = subResult * 0.5
      return  `The area of this triangle is ${result}`
    }
}
console.log(triangleDimensions.calculator())
// Modify the triangleDimensions object to have a method that returns the area of the triangle.

// Write the code that will update the base to be the value of 6.
triangleDimensions ["base"] = 6

console.log(triangleDimensions.calculator())
// Consider this variable:



// const learn = {
//   cohorts: {
//     "2021": ["Alpha", "Bravo", "Charlie", "Delta", "Echo"],
//     "2022": ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot"]
//   }
// }
// Write the code that logs the name of your cohort.
// Write the code that uses destructuring to log the name of your cohort.
// Create a function that takes an object like the one above and returns an array with a string of every cohort name and year.
// Output: ["2021 Alpha", "2021 Bravo", "2021 Charlie", "2021 Delta", "2021 Echo", "2022 Alpha", "2022 Bravo", "2022 Charlie", "2022 Delta", "2022 Echo", "2022 Foxtrot"]
