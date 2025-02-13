let word1 = prompt("Scrivi una parola")
let word2 = prompt("Scrivi una seconda parola")

if (word1 === "" || word2 === "") {
    alert("Attenzione, scrivi qualcosa di valido")
    console.log(word1, word2);
} else if (word1.length > word2.length) {
    alert("La parola più lunga tra le due è: " + word1)
    console.log(word1);
} else if (word1.length < word2.length) {
    alert("La parola più lunga tra le due è: " + word2)
    console.log(word2);
} else if (word1.length = word2.length) {
    alert("La parola sono ugualmente lunghe!")
    console.log(word1, word2);
}  
