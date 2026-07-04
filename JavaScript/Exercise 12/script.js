document.body.querySelectorAll(".box").forEach((e) => {
    let rn = Math.floor(Math.random()*190)
    e.style.backgroundColor = `rgb(${rn+80}, 505 , ${rn+20})`;
    let rn2 = Math.floor(Math.random()*200)
    e.style.color = `rgb(${rn2+20}, 150, ${rn2+70})`
})