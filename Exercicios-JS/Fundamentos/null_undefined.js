let valor //não inicializado

console.log(valor);

valor = null //ausencia de valor

console.log(valor);
//console.log(valor.tostring()) //Erro

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.45
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
delete produto.preco
//delete produto.reco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)