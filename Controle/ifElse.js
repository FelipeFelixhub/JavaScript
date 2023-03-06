const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado! sua nota foi: ' + nota)
    } else {
        console.log('Reprovado! sua nota foi: ' + nota)
    }
}

imprimirResultado(6)
imprimirResultado(8)