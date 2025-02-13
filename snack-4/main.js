let odd = [];

for (let i = 0; i < 6; i++) {
    const userNumber = Number(prompt("Inserisci un numero", 1));
    console.log(userNumber);

    if ((userNumber + 1) % 2 === 0) {
        odd.push(userNumber)
    }
}

console.log(odd);

alert(odd + " sono numeri dispari")