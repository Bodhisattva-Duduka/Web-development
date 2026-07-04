let n = Number(prompt("Enter a number to find it's factorial: "));
let prod = n;
for (let i = 1; i < n; i++) {
        prod = prod * i
}
if (prod == 0) {
    prod = 1
    console.log(1)
    alert(`The factorial of ${n} is ${prod}`)
} else {
    console.log(prod)
    alert(`The factorial of ${n} is ${prod}`)
}