function sentence(text1, delay) {

    return new Promise((resolve) => {

        setTimeout(() => {
            const p = document.createElement('p')
            document.body.appendChild(p)
            p.textContent = `${text1}`
            resolve(p)
    }, delay);
})
}

async function startText() {
    await sentence('Initializing Hacking...', 500)
    await sentence('Reading your Files...', 2000)
    await sentence('Password files Detected...', 3000)
    await sentence('Sending all passwords and personals to server...', 3000)
    await sentence('Cleaning up...', 3000)
    
}

startText()