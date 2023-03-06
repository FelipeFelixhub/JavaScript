const nums = [1, 2, 3, 4, 5]

//For com proposito
let resultado = nums.map(function(e) {
    return e * 2
})

console.log(resultado)

// const num2 = [ 10, 20, 30, 40, 50]
// let triplo = num2.map(function(e){
//     return e * 3
// })

// console.log(triplo)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)