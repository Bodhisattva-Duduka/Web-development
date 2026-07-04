// Using Callbacks

// function watchTutorialCallback(callback, errorCallback) {
//     let userLeft = false
//     let userWatchingCatMeme = false

//     if (userLeft) {
//         errorCallback({
//             name: 'User Left',
//             message: ':('
//         })
//     } else if (userWatchingCatMeme) {
//         errorCallback({
//             name: 'User Watching Cat Meme',
//             message: 'WebDevSimplified < Cat'
//         })
//     } else {
//         callback('Thumbs up and Subscribe')
//     }
// }

// watchTutorialCallback(message => {
//     console.log(message)
// }, error => {
//     console.log(error.name + ' ' + error.message)
// })

// ---------------------------------------------------------------------------------------

// Using Promises

function watchTutorialPromise() {
    let userLeft = false
    let userWatchingCatMeme = false
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'User Left',
                message: ':('
            })
        } else if (userWatchingCatMeme) {
            reject({
                name: 'User Watching Cat Meme',
                message: 'WebDevSimplified < Cat'
            })
        } else {
            resolve('Thumbs up and Subscribe')
        }
    })
}


watchTutorialPromise().then(message => {
    console.log(message)
}).catch(error => {
    console.log(error.name + ' ' + error.message)
})



// -----------------------------------------------------------------------------------------

// Promise methods

// const recordVideoOne = new Promise((resolve, reject) => {
//     resolve('Video 1 Recorded')
// })

// const recordVideoTwo = new Promise((resolve, reject) => {
//     resolve('Video 2 Recorded')
// })

// const recordVideoThree = new Promise((resolve, reject) => {
//     resolve('Video 3 Recorded')
// })

// Promise.all([
//     recordVideoOne,
//     recordVideoTwo,
//     recordVideoThree
// ]).then(messages => {
//     console.log(messages)
// })

// Promise.race([
//     recordVideoOne,
//     recordVideoTwo,
//     recordVideoThree
// ]).then(message => {
//     console.log(message)
// })

// Promise.allSettled([
//     recordVideoOne,
//     recordVideoTwo,
//     recordVideoThree
// ]).then((messages) => {
//     console.log(messages)
// })

// | Method                      | Type     | Description                     |
// | --------------------------- | -------- | ------------------------------- |
// | `Promise.resolve(val)`      | Static   | Returns resolved Promise        |
// | `Promise.reject(err)`       | Static   | Returns rejected Promise        |
// | `Promise.all([...])`        | Static   | Waits for all to fulfill        |
// | `Promise.allSettled([...])` | Static   | Waits for all to settle         |
// | `Promise.race([...])`       | Static   | Settles with first result       |
// | `Promise.any([...])`        | Static   | Resolves with first fulfillment |
// | `.then(success, fail?)`     | Instance | Handles success/failure         |
// | `.catch(fail)`              | Instance | Handles only failure            |
// | `.finally(fn)`              | Instance | Called after settle (cleanup)   |

// ------------------------------------------------------------------------------------------------------------------------------------

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
