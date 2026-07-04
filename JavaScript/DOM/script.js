document.getElementsByClassName("box")[0].style.backgroundColor = "red"
document.querySelectorAll(".box").forEach((element) => {
    element.style.backgroundColor = "blue" 
})
document.getElementById("lastbox").style.backgroundColor = "red"