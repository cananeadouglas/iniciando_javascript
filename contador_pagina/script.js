// Verificar se o contador já existe no localStorage
if (localStorage.getItem('contadorVisualizacoes')) {
    // Obter o valor atual do contador armazenado no localStorage
    var contador = parseInt(localStorage.getItem('contadorVisualizacoes'));
  } else {
    // Iniciar o contador com 0 se ainda não existir no localStorage
    var contador = 0;
  }
  
  // Incrementar o contador em 1 a cada vez que a página é carregada
  contador++;
    
  // Exibir o valor do contador na página
  document.getElementById('contador').innerHTML = contador;
  
  // Armazenar o valor atual do contador no localStorage
  localStorage.setItem('contadorVisualizacoes', contador.toString());
