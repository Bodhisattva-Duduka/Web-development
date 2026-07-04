const input = document.querySelector('.text-space')
const button = document.querySelector('.add-button')

document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault()
    const inputValue = input.value
    console.log(inputValue)
    buttonClicked(inputValue)
})

async function buttonClicked(inputValue) {
    try {
        let data = await fetch('http://localhost:3000/button-clicked', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({text : inputValue})
        })
        let dataJson = await data.json()
        console.log(dataJson)
    } catch (error) {
        console.log(error)
    }
}