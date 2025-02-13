
/* let numList = [];

for (let i = 0; i < 10; i++) {
    const ask_number = Number(prompt("scrivi un numero"));
    console.log(ask_number);
    numList.push(ask_number);
}

console.log(numList);

let total = 0;

for (let index = 0; index < numList.length; index++) {
    total += parseInt(numList[index]);
}

console.log(total);

alert("La somma dei numeri inseriti è: " + total) */

let total = 0;

for (let i = 0; i < 10; i++) {
    const ask_number = Number(prompt("scrivi un numero"));
    console.log(ask_number);
    total += ask_number;
}

console.log(total);

alert("La somma dei numeri inseriti è: " + total)