// Q1

// first method

// let numbers = [2, 5, 6, 3, 4, 8];
// let inputNum = Number(prompt("Enter a number: "));
// numbers.push(inputNum);
// console.log(numbers)

// second method

// let numbers = [2, 5, 6, 3, 4, 8];
// let newElement = Number(prompt("Enter a number: "))
// numbers[numbers.length] = newElement;
// console.log(numbers)


// Q2

// let numbers = [2, 5, 6, 3, 4, 8];
// let newElement = Number(prompt("Enter a number: "))
// while (newElement != 0) {
//     numbers.push(newElement)
//     newElement = Number(prompt("Enter a number: "))
// }
// console.log(numbers)


// Q3

// let numbers = [3, 4, 5, 8, 9, 10, 34, 46, 20, 30, 34, 54, 40, 52, 50]
// let newArray = numbers.filter((value, index, array) => {
//     if (value % 10 == 0) {
//         return true
//     }
//     else {
//         return false
//     }
    
// })
// console.log(newArray)


// Q4

// let numbers = [3, 4, 5, 8, 9, 10 ,2, 6, 12]
// let newArray = numbers.map((value, index, array) => { 
//     return value**2
// })
// console.log(newArray)


// Q5

// let naturalNumbers = [1,2,3,4,5,6]
// let factorial = naturalNumbers.reduce((pr, cr) => {
//     return pr*cr
// })
// console.log(factorial)