/*
var minhaPromise = function (){
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://coronavirus-19-api.herokuapp.com/countries');
        xhr.send(null);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    reject('Erro na requisição');
                }
            }
        }
    });

}

// exemplo github usuario
var axios = require("axios");
var dados;

function usuarioGitHub() {
    return axios.get("https://api.github.com/users/cananeadouglas")
}

dados = usuarioGitHub();

dados.then(function(resposta){
    console.log(resposta.data);
}).catch(function(error){
    if(error){
        console.log(error);
    }
})

*/

function manda(){
  
        let pais = window.document.getElementById('pais')
        let titulo = window.document.getElementById('titulo')
        let casos1 = window.document.getElementById('casos1')
        let mortes1 = window.document.getElementById('mortes1')
        let recupera1 = window.document.getElementById('recupera1')
        let ativos = window.document.getElementById('ativos')
        let criticos = window.document.getElementById('criticos')

        axios.get('https://corona.lmao.ninja/countries')
            .then(function(response){
            console.log(response);
           
                for(i = 0; i <= 99; i++){
                    if (pais.value == response.data[i].country){
                        console.log(pais)
                        titulo.innerHTML = `Números do Coronavirus no: ${response.data[i].country}`
                        casos1.innerHTML = `Casos confirmados: ${response.data[i].cases}`
                        mortes1.innerHTML = `Número de mortos: ${response.data[i].deaths}`
                        recupera1.innerHTML = `Pessoas recuperadas: ${response.data[i].recovered}`
                        ativos.innerHTML = `Pessoas ativas: ${response.data[i].active}`
                        criticos.innerHTML = `Casos criticos: ${response.data[i].critical}`
                    }
                    else{
                        //titulo.innerHTML = 'error'
                    }
                }
            
            
        })
        .catch(function(error) {
            console.warn(error);
        })

}
