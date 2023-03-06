function tratarErroELancar(erro){
    //throw new Error('...')
    throw "Mensagem"
}

function imprimirNome(obj) {
    try{

    
    console.log(obj.name.toUpperCase() + '!!')
    } catch (e) {
        tratarErroELancar(e)
    }
}

const obj = { nome : 'Felipe'}
imprimirNome(obj)