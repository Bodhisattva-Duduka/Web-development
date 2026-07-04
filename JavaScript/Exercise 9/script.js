// Faulty Calculator

/* 

+ ---> -
* ---> +
- ---> /
/ ---> **

*/

// first method

// let random_number = Math.floor(Math.random() * 11);
// let num1 = prompt("Enter a first number: ")
// let num2 = prompt("Enter a second number: ")
// const asNumber1 = Number(num1);
// const asNumber2 = Number(num2);
// console.log(asNumber1 , "and" , asNumber2)

// if (random_number == 1) {
//     console.log("sum is", asNumber1 - asNumber2)
//     console.log("product is", asNumber1*asNumber2)
//     console.log("subtraction is", asNumber1/asNumber2)
//     console.log("quotient is", asNumber1**asNumber2)
// }
// else {
//     console.log("sum is", asNumber1+asNumber2)
//     console.log("product is", asNumber1*asNumber2)
//     console.log("subtraction is", asNumber1-asNumber2)
//     console.log("quotient is", asNumber1/asNumber2)
// }



// second method

// let random_number = Math.floor(Math.random() * 11);
// let num1 = prompt("Enter a first number: ")
// let num2 = prompt("Enter a second number: ")
// let operation = prompt("Enter operation: ")
// const a = Number(num1);
// const b = Number(num2);

// const obj = {
//     "+" : "-",
//     "*" : "+",
//     "-" : "/",
//     "/" : "**"
// }
// if (random_number == 1) {
//     alert(`answer is ${eval(`${a} ${obj[operation]} ${b}`)}`)
// } else {
//     alert(`answer is ${eval(`${a} ${operation} ${b}`)}`)
// }
