// Consider this variable:
//
const person = {
  firstName: "Arthur",
  lastName: "Dent"
}
// Write the code that accesses the first name of the person object.
console.log(person.firstName)

// Write the code that accesses the last name of the person object.
console.log(person.lastName)

// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
person.homePlanet = "Earth"
console.log(person)

// Update the person object with a method that logs "Arthur Dent is from planet Earth".
person.fromPlanet = function () {
  return `${this.firstName} ${this.lastName} is from planet ${this.homePlanet}.`
}
console.log(person.fromPlanet())






// Consider this variable:
//
const product = {
  name: "chair",
  price: 24.99
}

// Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".
const describeProduct = (object) => {
  return `The product is a ${object.name}. It cost ${object.price}.`
}
console.log(describeProduct(product))


// Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.
const totalWithTax = (object) => {
  return (Math.round((object.price * .07) * 100) / 100) + object.price
}
console.log(totalWithTax(product))






// Consider this variable:
//
const lunch = {
  name: "PB and Banana",
  type: "sandwich",
  ingredients: ["bread", "peanut butter", "banana"]
}
// Write the code that accesses the ingredients property.
console.log(lunch.ingredients)
// Write the code that access the third ingredient of the lunch object.
console.log(lunch.ingredients[2])
// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
const lunchIng = (object) => {
  return `The ingredients for a ${lunch.name} ${lunch.type} are ${lunch.ingredients[0]}, ${lunch.ingredients[1]}, and ${lunch.ingredients[2]}.`
}
console.log(lunchIng(lunch))
// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
lunch.lunchIngred = function() {
  return `The ingredients for a ${this.name} ${this.type} are ${this.ingredients[0]}, ${this.ingredients[1]}, and ${this.ingredients[2]}.`
}
console.log(lunch.lunchIngred())






// Consider this variable:
//
const animals = [
  { name: "Waffles", type: "dog", age: 7 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 }
]
// Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.
const onlyCats = (object) => {
  return object.filter(value => value.type === "cat")
}
console.log(onlyCats(animals))


// Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.
const onlyNames = (object) => {
  return object.map(value => value.name)
}
console.log(onlyNames(animals))


// Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.
const animalAges = (array) => {
  newArray = array.filter(value => value.age > 10)
  return newArray.map(value => value.name)
}
console.log(animalAges(animals))






// Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.
const animalSentence = (array) => {
  return array.map(obj => {
    return `${obj.name} is a ${obj.age} year old ${obj.type}.`
  })
}
console.log(animalSentence(animals))
// Consider this variable:
//
const author = {
  name: "H. G. Wells",
  genre: "science fiction"
}
// Write the code that destructures the author object so that the following code snippet will run successfully:
let {name, genre} = author
console.log(`${name} is a ${genre} author`)
// // Output: "H. G. Wells is a science fiction author"





// Consider this variable:
//
const pokeOne = {
  species: "Charmandar",
  pokemon_type: "Fire"
}
//
const pokeTwo = {
  species: "Magikarp",
  pokemon_type: "Water"
}

// Create a function called describePokemon that take an object like the ones above and uses destructuring to return a description of the Pokemon so that the following code snippet will run successfully:

const describePokemon = (object) => {
  let {species, pokemon_type} = object
    return `${species} is a ${pokemon_type} pokemon`
}

console.log(describePokemon(pokeOne))
// // Output: "Charmandar is a Fire pokemon"

console.log(describePokemon(pokeTwo))
// // Output: "Magikarp is a Water pokemon"






// Consider this variable:
//
const triangleDimensions = {
  base: 2,
  height: 5
}

// Modify the triangleDimensions object to have a method that returns the area of the triangle.

triangleDimensions.triangleArea = function () {
  return this.base * this.height / 2
}

console.log(triangleDimensions.triangleArea())

// Write the code that will update the base to be the value of 6.

triangleDimensions.base = 6
console.log(triangleDimensions)

//console.log(triangleDimensions.triangleArea())

// Consider this variable:
//
// const learn = {
//   cohorts: {
//     "2021": ["Alpha", "Bravo", "Charlie", "Delta", "Echo"],
//     "2022": ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot"]
//   }
// }
// Write the code that logs the name of your cohort.


const learn = {
  cohorts: {
    "2021": ["Alpha", "Bravo", "Charlie", "Delta", "Echo"],
    "2022": ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot"]
  }
}

const cohortName = learn.cohorts[2022]
console.log(cohortName[1])

// console.log(learn.cohorts.2022)

let myCohort = learn.cohorts[2022].toString().substring(6, 11)
console.log(myCohort)

// Write the code that uses destructuring to log the name of your cohort.

let {"2022": arr} = learn.cohorts
console.log(arr[1])



// Create a function that takes an object like the one above and returns an array with a string of every cohort name and year.
// // Output: ["2021 Alpha", "2021 Bravo", "2021 Charlie", "2021 Delta", "2021 Echo", "2022 Alpha", "2022 Bravo", "2022 Charlie", "2022 Delta", "2022 Echo", "2022 Foxtrot"]

// function - everyCohort
// Input: two arrays
  // Combine key (year) with value (cohort)
// Output: one array



// const allCohorts = (object) => {
//   let cohort1 = learn.cohorts[2021]
//     return cohort1.map(value => "2021" + value)
// }


const allCohorts = (arr1, arr2) => {
  let yearCohort1 = arr1.map(value => " " + "2021" + " " + value)
  let yearCohort2 = arr2.map(value => " " + "2022" + " " + value)
    return yearCohort1 + yearCohort2
}

let cohortArray = allCohorts(learn.cohorts[2021], learn.cohorts[2022])
console.log(cohortArray.split())

