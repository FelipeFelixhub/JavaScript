// Closure é o escopo criado quando uma funcao é declarada
// Esse escopo permite a funcao acessar e manipular variaveis externas à funçao

//Contexto léxico em ação!

const x = 'Global'

function fora () {
    const x = 'Local'
    function dentro () {
        return x
    }
    return dentro

}

const minhaFuncao = fora()
console.log(minhaFuncao())