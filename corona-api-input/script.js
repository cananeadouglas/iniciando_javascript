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

let casos = window.document.getElementById('casos')
let mortes = window.document.getElementById('mortes')
let recupera = window.document.getElementById('recupera')

let pais = document.getElementById('pais')
let titulo = document.getElementById('titulo')
let casos1 = document.getElementById('casos1')
let mortes1 = document.getElementById('mortes1')
let recupera1 = document.getElementById('recupera1')
let ativos = document.getElementById('ativos')
let criticos = document.getElementById('criticos')

function sovem(){


    document.body.style.background = '#e7ca0f'

    axios.get('http://coronavirus-19-api.herokuapp.com/all')
        .then(function(response){
            casos.innerHTML = `Casos confirmados: ${response.data.cases}`
            mortes.innerHTML = `Números de mortos: ${response.data.deaths}`
            recupera.innerHTML = `Pessoas recuperadas: ${response.data.recovered}`  
        })
        .catch(function(error) {
            console.warn(error);
        })

}

function manda(){

        if (pais.value.length == 0){
            window.alert('Error - dados faltantes')
        }else {
            //console.log(pais.value)
            
            axios.get('http://coronavirus-19-api.herokuapp.com/countries')
            .then(function(response){
            //console.log(response.data[16].country);
           
            let num = 0
            for (i = 0; i <= 200; i++){
                if (pais.value === response.data[i].country){
                    num = i
                    titulo.innerHTML = `Números do Coronavirus: ${response.data[num].country}`
                    casos1.innerHTML = `Casos confirmados: ${response.data[num].cases}<br>`
                    casos1.innerText += `Casos novos por dia: ${response.data[num].todayCases}`
                    mortes1.innerHTML = `Número de mortos: ${response.data[num].deaths}<br>`
                    mortes1.innerText += `Mortes no dia de hoje: ${response.data[num].todayDeaths}`
                    recupera1.innerHTML = `Pessoas recuperadas: ${response.data[num].recovered}`
                    ativos.innerHTML = `Pessoas ativas: ${response.data[num].active}`
                    criticos.innerHTML = `Casos criticos: ${response.data[num].critical}`
                }else{
                    
                }
                
            }
            //console.log(num)

        })
        .catch(function(error) {
            console.warn(error);
        })
        
        }

        

}

function exemplo(){

    let exemplot = document.getElementById('exemplot')
        
        axios.get('http://coronavirus-19-api.herokuapp.com/countries')
        .then(function(response){
            exemplot.innerHTML = '' 
            console.log(response.data);
            for (i = 0; i <= 200; i++){
                exemplot.innerHTML += `${response.data[i].country}, `
            } 
            
        
    })
    .catch(function(error) {
        console.warn(error);
    })

}
