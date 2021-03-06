// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
// var arr1 = [3, 9, 15, 4, 10]
// // --> [30, 90, 150, 40, 100]

// pseudo code
// create a function - mult10
// Parameters - array (because it will be a set of numbers)
// do something to every item in the array - iteration, map because return an array same lenght
// multiple variable by 10

// const mult10 = (array) => {
//   let mult10 = arr1.map(value => {
//   return value * 10
//   })
// console.log("multiplied by 10", mult10);

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// var arr2 = [2, 7, 3, 5, 8, 10, 13]
// // --> [7, 3, 5, 13]
// pseudo code
// create a function - oddNum
// Parameters - array (because it will be a set of numbers)
// do something to every item in the array - iteration, filter because return certain criteria
// conditional statement with a modulo %

// let oddNum = arr2.filter(value => {
//   return value % 2 !== 0
// })
// console.log("Odd arrays", oddNum);

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
//  var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // // --> "nicework"
//
// //psuedo code
// //create function - strainer
// //parameters will be an arrays
// //typOf is what were going to do
// //need a filter
// //data type will be an object
//
// const strainer = (array, dataType) => {
//   return array.filter(value => {
//     return typeof value === dataType
//   } )
// }
// console.log(strainer(comboArr, "number"))

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
// var filterArrayValues = [58, " ", "abcd", true, null, false, 0]
// // --> [58, "abcd", true]

//create a function - strain2
//parameters will be an array
//typeof
//using the .filter functions
// data type will be mixed -  boolean , number and string

// const strain2 = (array) => {
//   return array.filter(value =>
//  value !== " " && value !== null && value !== false && value !== 0)
// }
// console.log(strain2(filterArrayValues))

// Create a function that takes in a string and returns a new string with all the vowels removed.
// var str = "javascript is awesome"
// // --> "jvscrpt s wsm"
//
// const strain3 = (array) => {
//   return array.replace(/a/g, "").replace(/e/g ,"").replace(/i/g ,"").replace(/o/g ,"").replace(/u/g ,"")
// }
// console.log(strain3(str));

// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3]
// var arr2 = [7, 8, 2, 1, 5, 4]
// --> [3, 7, 10, 5, 4, 8, 2, 1]
// var arrCombine = arr1.concat(arr2.filter((item) => arr1.indexOf(item) < 0))
// myFinalArray = myArray1.concat(myArray2.filter((item) => myArray1.indexOf(item) < 0));

// console.log(arrCombine);

// var arr1 = [3, 7, 10, 5, 4, 3]
// var arr2 = [7, 8, 2, 1, 5, 4]
// // var arrCombine = arr1.concat(arr2.filter((item) => arr1.indexOf(item) < 0));
// // console.log(arrCombine);
//
// let arr3 = arr1.concat(arr2);
// arr3 = arr3.filter((item,index)=>{
//    return (arr3.indexOf(item) == index)
//    })
//
// console.log(arr3);
