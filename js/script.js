const km = parseFloat(prompt('Quanti km vuoi percorrere?'))
const age = parseInt(prompt('Quanti anni hai?'))
const twenty = 0.20;
const forty = 0.40;
let price = parseFloat(km * 0.21)
let sales = 0

if (age < 18){
    sales = parseFloat(price * twenty)
}else if (age>65){
    sales = parseFloat(price * forty)
}
 console.log((price-sales).toFixed(2))