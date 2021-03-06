// Functions Loops and Arrays

// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
// var testArr1 = [3, 9, 15, 4, 10]
// // // --> [9, 27, 45, 12, 30]
//
// const arrayNum = (array) => {
//  let newArray = []
//   for(let i = 0; i < array.length; i++){
//     newArray.push(array[i] * 3)
//   }
//   return newArray
// }
//
// console.log(arrayNum(testArr1))
// console.log(arrayNum([5, 2, 93, 19]));



// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// // // --> [-7, 3, 5, 13]
//
// const array2 = (array) => {
//   let newArray2 = []
//   for(let i = 0; i < array.length; i++){
//     if(array[i] % 2 !== 0){
//       newArray2.push(array[i])
//     }
//   }
//   return newArray2
// }
//
// console.log(array2(testArr2));




// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
// var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]
// // // --> "nicework"
//
// const letters = (array) => {
//   let newArray2 = []
//   for(let i = 0; i < array.length; i++){
//     if(typeof array[i] === "string"){
//       newArray2.push(array[i])
//     }
//   }
//   return newArray2.join("")
// }
//
//
// console.log(letters(comboArr));






// // Create a function that takes in an array of numbers and returns the sum.
// var addThese1 = [1, 2, 3, 4]
// // // --> 10
// //
// var addThese2 = []
// // // --> 0
//
// const addNumbers = (array) => {
//   return array.reduce((a, b)=> a + b, 0)
// }
//
// console.log(addNumbers(addThese1));
// console.log(addNumbers(addThese2));






// // Create a function that takes in an array of numbers and returns the index of the largest number.
// var indexHighestNumber = [1, 4, 2, 3]
// // // --> 1
//
// const highestNumber = (array) => {
//   const max = Math.max(...indexHighestNumber)
//   const index = indexHighestNumber.indexOf(max)
//   return index
// }
//
// console.log(highestNumber(indexHighestNumber))






// // STRETCH Challenges
// //
// // Create a function that takes in two arrays and returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3, 3]
// var arr2 = [7, 8, 2, 3, 1, 5, 4]
// // // --> [3, 7, 10, 5, 4, 8, 2, 1]
//
// var newArr = arr1.concat(arr2)
//
// const noDupe = (array) =>{
//   let newArray = [...new Set(array)]
//   return newArray
// }
//
// console.log(noDupe(newArr));






// Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
var arrayLength = 6
var arrayValue = 0
// // --> [0, 0, 0, 0, 0, 0]
//
// var arrayLength = 4
// var arrayValue = 11
// // --> [11, 11, 11, 11]

// const returnFirstNum = (arrV,arrL) => {
// const newArray = [...Array(arrL)].map(x => arrV)
// return newArray

// }
// console.log(returnFirstNum(arrayValue,arrayLength))
var arrayLength = 4
var arrayValue = 11
// // --> [11, 11, 11, 11]

// const bob = (arrL,arrV) =>{
//     const newArray =[]
//     for(let i =0; i < arrL; i++){

//     }
// }
 
// newArray = new Array(arrayLength, arrayValue)
// const newArray = []
// for(let i =0; i < arrayLength;i++){
//     newArray.push(arrayValue)
// }
// console.log(newArray)

var arrayLength = 6
var arrayValue = 0

const number = (value, length) => {
  let numberLength = []
  for(let i = 0; i < length; i++){
    numberLength.push(value) //<---orders.push pushes that into the let orders = []
  }
  return numberLength //<--- this returns our array "orders"
}

// This function is dynamic because we can pass multiple variables
console.log(number(arrayValue, arrayLength));
console.log(number(arrayValue,arrayLength));
console.log(number(11,4));
console.log(number(0,6));

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
// var addUp1 = 4
// // 1 + 2 + 3 + 4 = 10
// // --> 10

const addUp = (num) => {
const arr1 = []
for(let i = 1; i <= num; i++){
    arr1.push(i)
}
return arr1.reduce((a, b)=> a + b, 0)
}
console.log(addUp(4))







//
// var addUp2 = 10
// // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// // --> 55
//
// var addUp3 = 600
// // --> 180300

// EPIC Challenges
//
// Create a function called highLow that takes in a number and returns whether the number is higher or lower than the "answer".

const highLow = (num) => {




}


// Create an HTML page and link your JavaScript file. More info here.
// As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive).
// As a user, I can see if my guess is too high or too low.
// As a user, if I guess the "answer" correctly I am notified that I won.
// As a user, I can continue to guess the "answer" until I am correct.
// STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message.
