// par nome/valor
const saudacao ='AOBA' //contexto léxico 1

function exec(){
    const saudacao = 'Salvee' //contexto lexico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    Idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Sabugo de Milho',
        numero: 123
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)