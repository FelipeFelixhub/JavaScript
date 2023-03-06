const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ...',
        numero: 3000
    }
}

const {nome, idade } = pessoa
console.log(nome, idade)

const{nome: n, idade: i} = pessoa
console.log (n, i)

const {sobrenome, zuada = true} = pessoa
console.log(sobrenome, zuada)

const { endereco:{logradouro, numero, cep}} = pessoa
console.log(logradouro,numero,cep)

