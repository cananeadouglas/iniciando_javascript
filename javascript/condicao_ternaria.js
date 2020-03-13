
function saber() {

    var sexo = 'M'

    var retorno = (sexo == 'M') ? 'Masculino' : 'Feminino'

    //console.log(retorno)
    console.log(retorno)

}

setTimeout (saber, 1000) // espera 2 segundos para executar
//setInterval (saber, 2000) // executa várias fezes por 2segundos de espera

    var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
    };

console.log(`O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na ${endereco.rua} com n° ${endereco.numero}.`)

