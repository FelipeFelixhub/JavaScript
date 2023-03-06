console.log(soma(3,4)) //posso imprimir antes de declarar

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3,4))

// named function expression  - uso reduzido
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3,4))
