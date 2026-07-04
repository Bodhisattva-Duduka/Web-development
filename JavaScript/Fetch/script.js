// Advice API

// fetch("https://api.adviceslip.com/advice").then((response) => {
//     return response.json()
// }).then((data) => {
//     return (data.slip.advice)
// }).then((dataAdvice) => {
//     document.body.querySelector('.advice').textContent = `${dataAdvice}`
//     console.log(dataAdvice)
// }).catch((error) => {
//     console.error(error)
// })

// async function adviceAPI() {

//     const apiData = await fetch('https://api.adviceslip.com/advice');

//     const apiAdvice = await (apiData.json())
//     console.log(apiAdvice.slip.advice)

// }
// adviceAPI()


// ------------------------------------------------------------------------------------------

// Cat API


async function fetchCatImage() {
    
    // getting cat image url

    const apiKey = "live_0YqmCL073ws03fPX7Rc1N8j7bzuVLy8BjF9ZXU7V1F1T7LZSemnrb46vLpXzMflG"
    const apiData = await fetch('https://api.thecatapi.com/v1/images/search', {
        headers: {
            'x-api-key': apiKey
        }
    })

    const apiResponse = await apiData.json();
    const urlOfCatImage = await apiResponse[0].url;

    // adding image url into img

    document.body.querySelector('img').src = `${urlOfCatImage}`
}

// adding onClick for button

document.body.querySelector('.button').addEventListener('click', fetchCatImage)