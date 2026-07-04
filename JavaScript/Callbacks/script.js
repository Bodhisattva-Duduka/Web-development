// Callback function

// function greet(name) {
//     console.log(`Hello, ${name}!`);
// }

// function processUserInput(callback) {
//     const name = prompt("Enter your name:");
//     callback(name);
// }

// Pass `greet` as a callback:
// processUserInput(greet);




// add 10 function

function add10(num) {
    return num + 10;
}

function divideWith2(callback) {
    let num = Number(prompt("Enter number here: "))
    return (callback(num) / 2);
}

console.log(divideWith2(add10))