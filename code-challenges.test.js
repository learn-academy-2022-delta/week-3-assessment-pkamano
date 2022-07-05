// ASSESSMENT 3: Coding Practical Questions with Jest

//const { array } = require("yargs")

// const { exportAllDeclaration } = require("@babel/types")
// const { isTypedArray } = require("util/types")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// const fibLength1 = 6
// // Expected output: [1, 1, 2, 3, 5, 8]

// const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe("fibiArray", () => {
    it("returns an array that length containing the numbers of the Fibonacci sequence", () => {
        const fibLength1 = 6
        expect(fibiArray(6)).toEqual([1, 1, 2, 3, 5, 8])
        const fibLength2 = 10
        expect(fibiArray(10)).toEqual([1, 1, 2, 3, 5, 6, 13, 21, 34, 55])
    })
})
//ReferenceError: fibiArray is not defined
// b) Create the function that makes the test pass.
//PsuedoCode: Before writing any code, I need to research what is the actual equation for the Fibonacci sequence. Seeing the equation can help me write the function for it. (Xn+2= Xn+1 + Xn)
//const fibiArray = (Number) => {
//     let onacciArray = []
//     for (let i = 1; i <= Number; i++) {
//     let nextTerm = onacciArray[i] + onacciArray[i]);
//     console.log(nextTerm)
//     onacciArray.push(nextTerm) 
//     }
// }
// console.log(fibiArray(6))
//This was where I left off. I have no idea how to write this. I know what is supposed to happen but with this problem and the next problem, I know what I want to write but every time I try to write it out as a function, it just doesn't work. I looked up different examples online but most of them were using logic that we didn't learn yet so I don't understand what the code is doing. 


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

// const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
//  // // Expected output: [-9, 7, 9, 199]

//  const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]
describe("oddLeastToGreatest", () => {
    it("returns a new array of only odd numbers sorted from least to greatest", () => {
        const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
        expect(oddLeastToGreatest1(fullArr1)).toEqual([-9, 7, 9, 199])
        const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
        expect(oddLeastToGreatest2(fullArr2)).toEqual([-823, 7, 23])
    })
})
//ReferenceError: oddLeastToGreatest is not defined

// b) Create the function that makes the test pass.
//PsuedoCode: The function has to iterate over the array and find the numbers and return those numbers ordered from least to greatest. Using a HOF such as .filter() and modulo will return the odd numbers in a new aray. Using .sort will order the new array values from least to greatest. ie:  filteredArr1.sort(function (a, b){return a - b})

//Parameters: const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
 //const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]

 //Return: Expected output: [-9, 7, 9, 199], Expected output: [-823, 7, 23]

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]

const onlyOdd1 = (array) => {
    return array.filter(value => typeof value === "number") 
}
let filteredArr = (onlyOdd1(fullArr1))
console.log(filteredArr)
const filteredArr1 = (array) => {
    return array.filter(value => value % 2 !== 0)
}
console.log(filteredArr1(filteredArr))
//When I just used modulo to try and get the odd numbers, the odd numbers in strings and boolean values were also being returned. Using typeof, I was able to get just the number values. Then use .filter and modulo on the return of that function to get the odd numbers.
const onlyOdd2 = (array) => {
    return array.filter(value => typeof value === "number")
}
let filteredArr2 = (onlyOdd2(fullArr2))
console.log(filteredArr2)
const filteredArr22 = (array) => {
    return array.filter(value => value % 2 !==0)
}
console.log(filteredArr22(filteredArr2))
//I'm sure there was an easier way than writing two seperate functions, however I could not figure it out. I was hoping that by writing two seperate functions and then sorting the returns of the seperate functions by least to greatest would work. It did, but I would like to learn the shorter way. 
const oddLeastToGreatest1 = (array) => {
    return (filteredArr1(filteredArr)).sort((a, b) => a - b)}
console.log(oddLeastToGreatest1(fullArr1))
const oddLeastToGreatest2 = (array) => {    
    return (filteredArr22(filteredArr2)).sort((a, b) => a - b)}
console.log(oddLeastToGreatest2(fullArr2))


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

// const numbersToAdd1 = [2, 4, 45, 9]
// // // Expected output: [2, 6, 51, 60]

// const numbersToAdd2 = [0, 7, -8, 12]
// // // Expected output: [0, 7, -1, 11]

// const numbersToAdd3 = []
// // Expected output: []

describe ("accumSum", () => {
    it('returns an array of the accumulating sum', () => {
        const numbersToAdd1 = [2, 4, 45, 9]
        expect(accumSum(numbersToAdd1)).toEqual([2, 6, 51, 60])
        const numbersToAdd2 = [0, 7, -8, 12]
        expect(accumSum2(numbersToAdd2)).toEqual([0, 7, -1, 11])
        const numbersToAdd3 = []
        expect(accumSum3(numbersToAdd3)).toEqual([])
    })
})
//ReferenceError: accumSum is not defined

// b) Create the function that makes the test pass.
//PsuedoCode:
//Create a function that will take the previous and current indexed digit in the array and return the sum of those two numbers. 
    //Since the function needs to iterate through the array, I will try using either a for loop or .map to get the desired result. 
    //Using a for loop, this was the function I came up with. The function logic was to use a for loop to iterate over the variable numbersToAdd1. accumSum would be the new Array with the desired results. addPrevious would be the mathematic portion of the logic with taking numbersTooAdd1 at each index and subtracting one place. The output shows that I was only subtracting one from each value in the array. 
    // const numbersToAdd1 = [2, 4, 45, 9]
    // let accumSum = [];
    // for(let i=0; [i]<numbersToAdd1.length; i++){
    //     let addPrevious = numbersToAdd1[i] - [i - 1];
    //     console.log(addPrevious);
    //     accumSum.push(addPrevious);
    // }  
    // console.log(accumSum)
    //Output: [ 3, 4, 44, 7 ] 
    //New Function logic: Use a for loop and take the second value (index 1) since the first value in the array does not change, and make an equation starting with the second value. Having the new array be the new variable and making a new for loop for each output until getting the final desired result. This seems like the long way but that is the only way I feel like I can break it down. 
    //The previous way I was able to get the correct output for the first variable (numbersToAdd1)however, I need to make a variable of all of the arrays and refactor the arguments to make them apply to all of the variables or use a HOF like .map
//Parameters: const numbersToAdd1 = [2, 4, 45, 9], const numbersToAdd2 = [0, 7, -8, 12],  const numbersToAdd3 = [], and any other number that is placed into the array.
//Return: Expected output: [2, 6, 51, 60], Expected output: [0, 7, -1, 11], Expected output: []
const numbersToAdd1 = [2, 4, 45, 9]
let accumSum = [];
for(let i=0; [i]<numbersToAdd1.length; i++){
    let addPrevious = (numbersToAdd1[0] + numbersToAdd1[1]);
    //console.log(addPrevious)
    let addPrevious2 = (addPrevious + numbersToAdd1[2]);
    //console.log(addPrevious2)
    let addPrevious3 = (addPrevious2 + numbersToAdd1[3]);
    //console.log(addPrevious3);
    accumSum.unshift(numbersToAdd1[0], addPrevious, addPrevious2, addPrevious3);
}  
console.log(accumSum)

const numbersToAdd2 = [0, 7, -8, 12]
let accumSum2 = [];
for(let i=0; [i]<numbersToAdd2.length; i++){
    let addPrevious = (numbersToAdd2[0] + numbersToAdd2[1]);
    //console.log(addPrevious)
    let addPrevious2 = (addPrevious + numbersToAdd2[2]);
    //console.log(addPrevious2)
    let addPrevious3 = (addPrevious2 + numbersToAdd2[3]);
    //console.log(addPrevious3);
    accumSum2.unshift(numbersToAdd2[0], addPrevious, addPrevious2, addPrevious3);
}
console.log(accumSum2)

const numbersToAdd3 = []
let accumSum3 = [];
for(let i=0; [i]<numbersToAdd3.length; i++){
    let addPrevious = (numbersToAdd3[0] + numbersToAdd3[1]);
    //console.log(addPrevious)
    let addPrevious2 = (addPrevious + numbersToAdd3[2]);
    //console.log(addPrevious2)
    let addPrevious3 = (addPrevious2 + numbersToAdd3[3]);
    //console.log(addPrevious3);
    accumSum.unshift(numbersToAdd3[0], addPrevious, addPrevious2, addPrevious3);
}
console.log(accumSum3)
//I was able to get the expected output but then they wouldn't stop repeating with the exception of const numbersToAdd3. I wanted to use .map but no matter where I put it, it would not return the results I wanted. I was hoping to use something like this for the Fibonacci sequence problem.



