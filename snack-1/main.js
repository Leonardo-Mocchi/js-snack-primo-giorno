let number1 = Number(prompt("Inserisci il primo numero"))

let number2 = Number(prompt("Inserisci il secondo numero"))


if (isNaN(number1) || isNaN(number2)) {
    alert("OH OOOH, TYPOOOO")
} else if (number1 > number2) {
    alert(number1 + " " + "è il maggiore dei due")
    console.log(number1);
} else if (number2 > number1) {
    alert(number2 + " " + "è il maggiore dei due")
    console.log(number2);
} else if (number2 = number1) {
    alert("IT'S A TIE")
    console.log(number1, number2);
} else {
    alert("Write something man!")
    console.log(number1, number2);
}