function buscarCEP() {
    const input = document.getElementById('cep').value;
    const apiurl = 'https://cep.awesomeapi.com.br/json/';
    const endpoint = apiurl + input;

    

    axios.get(endpoint).then(response => {
        
        const cepResultado = document.getElementById('cepp');
        cepResultado.textContent = `CEP: ${response.data.cep}`; // atribui o valor do CEP ao conteúdo do elemento
        
        const tipo = document.getElementById('tipo');
        tipo.textContent = `Tipo: ${response.data.address_type}`;

        const rua = document.getElementById('rua');
        rua.textContent = `Endereco: ${response.data.address}`;

        const bairro = document.getElementById('bairro');
        bairro.textContent = `Bairro: ${response.data.district}`;
        
        const city = document.getElementById('city');
        city.textContent = `Cidade: ${response.data.city}`;

        const estado = document.getElementById('estado');
        estado.textContent = `Estado: ${response.data.state}`;

        const ddd = document.getElementById('ddd');
        ddd.textContent = `DDD: ${response.data.ddd}`;

        const lat = document.getElementById('lat');
        lat.textContent = `Latitude: ${response.data.lat}`;

        const lng = document.getElementById('lng');
        lng.textContent = `Longitude: ${response.data.lng}`;
        
        /*
        const googl = 'https://www.google.com.br/maps/@'+`${response.data.lat}`+`,`+`${response.data.lng}`;
        
        const btn = document.querySelector('#btn')

        function openInNewTab(googl){
            const win = window.open(googl, '_blank')
            win.focus()
        }

        btn.addEventListener('click', () => {
            openInNewTab(googl)
        })
        */

      })
      .catch(error => {
        console.log(error);
      });
  }