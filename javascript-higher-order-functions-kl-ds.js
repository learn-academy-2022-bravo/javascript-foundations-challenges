// Copy the challenges into your JavaScript file.Comment out the instructions and code the solution to each problem beneath the prompt.Use.map() or.filter() to complete all of the following exercises.
//     Don't forget to pseudo code.

// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
var arr1 = [3, 9, 15, 4, 10]
// --> [30, 90, 150, 40, 100]

// Psuedo Coding
// Write a function called multiplier
//take in an array of numbers
// iterate over numbers .forEach()
// multiply each number by 10
// return an array 

const multiplier = (array) => {
    return array.map(value => {
        return value * 10
    })
}
console.log(multiplier(arr1))



// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
var arr2 = [2, 7, 3, 5, 8, 10, 13]
// // --> [7, 3, 5, 13]

// Pseduo Coding
// Write a function called oddFinder
// function takes in a parameter called an array
// iterate over each item in the array with .length 
// filter only odd number with modulo %2 ! ==0
// return a new array of odd numbers using .map()

const oddFinder = (array) => {
    return array.filter(value => {
        if( value % 2 !== 0){
            return value 
        }
    })
}
console.log(oddFinder(arr2))

// Write a function that takes in an array of numbers and letters and returns a string with only the letters.HINT: Use typeof method
var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // --> "nicework"

// Psuedo Coding
// Write a function called letterFinder
// Take in an array of mixed data types that include numbers, letter and boolean values
// Itertion must occur over each 
// filter using.typeOf() to extract the letters
// use .join()

const letterFinder =(array,dataType)=> {
     return array.filter(value =>{
         return typeof value === dataType
     })
}

console.log(letterFinder(comboArr, "string").join(""))


// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
// var filterArrayValues = [58, " ", "abcd", true, null, false, 0]
// // --> [58, "abcd", true]
// STRETCH Challenges

// Create a function that takes in a string and returns a new string with all the vowels removed.
// var str = "javascript is awesome"
// // --> "jvscrpt s wsm"
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3]
// var arr2 = [7, 8, 2, 1, 5, 4]
// // --> [3, 7, 10, 5, 4, 8, 2, 1]