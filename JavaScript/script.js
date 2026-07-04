// console.log("Hello world")
// let b = 5;
// {
//     b = b + 4;
// }
// console.log(b)

// array = [3, 5, 7, 34, 2, 53]

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element)
// }


// document.body.querySelector(".box").removeAttribute("style")
// document.body.querySelector(".box").setAttribute("style", "padding: 5px")

// -------------------------------------------------------------------------

// function add_10(num) {
//     return num + 10;
// }

// function push_10(arr) {
//     arr.push(10);
// }

// a = [2, 4, 6, 32, 6, 35, 67, 3];

// console.log(a.map(add_10));

// setTimeout(push_10, 2000, a);
// console.log(a)

// let new_array = a.filter((key) => {
//     if (key > 10) {
//         return true
//     }
//     else {
//         false
//     }
// })

// console.log(new_array)

// -------------------------------------------------------------------------

// let timerid = setInterval(() => {
//     let count = 0;
//     console.log(`increasing ${count++}`);
// }, 1000);

// setTimeout(() => {
//     clearInterval(timerid);
// }, 5000);


// --------------------------------------------------------------------------

// let btn = document.body.firstElementChild.firstElementChild;
// btn.addEventListener('click',addDiv );

// function addDiv() {

//     let newDiv = document.createElement('div');
//     newDiv.className = 'box';
//     document.body.firstElementChild.lastElementChild.insertAdjacentElement('afterend', newDiv).insertAdjacentText('afterbegin', 'I am a Box')
// }

// -------------------------------------------------------------------------

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

// function add10(num) {
//     return num + 10;
// }

// function divideWith2(callback) {
//     let num = Number(prompt("Enter number here: "))
//     return (callback(num) / 2);
// }

// console.log(divideWith2(add10))

// -------------------------------------------------------------------------


// let x = 4;

// let p = new Promise((resolve, reject) => {
//     if (x + 2 == 6) {
//         resolve('success');
//     }
//     else {
//         reject('failed');
//     }
// })

// p.then((message) => {
//     console.log(message)
// }).catch((message) => {
//     console.log(message)
// })

// Promise.resolve('hello').then(console.log)



// Chaining Promises
// Chain multiple .then() calls:

// Start with a Promise that resolves with 2.

// Multiply it by 3, then add 4.

// Log the final result (should be 10).

// const p = new Promise((resolve, reject) => {
//     return resolve(2);
// })

// p.then((message) => {
//     return message * 3
// }).then((message) => {
//     return message + 4
// }).then((message)=>{
//     console.log(message)
// }).catch((error)=>{
//     console.error(error)
// })

// function waitFor4Seconds() {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {

//             const userWillWait = true
//             if (userWillWait == true) {
//                 resolve("Processing results...")
//             } else {
//                 reject("Failed")
//             }
//         }, 4000);
//     })
// }

// function waitFor2Seconds() {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {

//             const userWillWait = true
//             if (userWillWait == true) {
//                 resolve("Results found!")
//             } else {
//                 reject("Failed")
//             }
//         }, 2000);
//     })
// }

// async function fetchResults() {
//     try {
//         console.log('process started....')
//         const processResult = await waitFor4Seconds();

//         console.log(processResult);

//         const resultFound = await waitFor2Seconds();

//         console.log(resultFound);

//     } catch (error) {
//         console.error(error)
//     }
// }

// fetchResults();


async function test() {
        try {
                const data = await fetch('hello.json')
                const finalData = await data.json()
                console.log(finalData)

        } catch (error) {
                console.log(error)
                
        }
}

test()