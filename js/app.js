// - chiedere all'utente il numero di chilometri che vuole percorrere
//   - dichiarare una variabile e assegnarle il valore restituito da un prompt
const numKilometers = parseFloat(prompt('Quanti chilometri devi percorrere?'))
console.log(numKilometers)
// - chiedere all'utente l'età
//   - dichiarare una variabile e assegnarle il valore restituito da un prompt
const userAge = parseInt(prompt('Qual è la tua età'))
console.log(userAge)
// - definire il prezzo base del biglietto
//   - inizializzare una variabile con numero chilometri moltiplicato per 0.21 euro
let basePrice = numKilometers * 0.21
console.log(basePrice)
// - calcolare il prezzo totale del viaggio 
//   - applicare lo sconto
let discount = 0
if (userAge < 18 ) {
//     - SE l'utente è < di 18 anni 
//       - l'utente avrà uno sconto del 20%
    let discount20 = basePrice * 20 / 100
    console.log(discount20)
} else if (userAge > 65) {
//     - ALTRIMENTI SE l'utente è > di 65 anni
//       - l'utente avrà uno sconto del 40%
    let discount40 = basePrice * 40 / 100
    console.log(discount40)
} 

const finalPrice = basePrice - discount
//     - ALTRIMENTI il prezzo sarà quello base
 // - stampare il prezzo nella pagina 
 const priceDomElement = document.getElementById('final-price')
 priceDomElement.innerHTML = finalPrice.toFixed(2)