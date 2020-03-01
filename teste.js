var data = new Date()
var hora = data.getHours()

var inicio;
for (inicio = 7; inicio < hora; inicio++) {
  console.log(`${inicio}h:00`);
  for (seco = 0; seco < 1; seco++) {
    console.log(`${inicio}h:15`);
    for (seco = 0; seco < 1; seco++) {
        console.log(`${inicio}h:30`);
        for (seco = 0; seco < 1; seco++) {
            console.log(`${inicio}h:45`);
          }
      }
  }
}

function DezSegundos(){
    console.log("Já temos dez segundos.")
}
setTimeout(DezSegundos, 60000) 

var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()
let diasemana = data.getDay();
console.log(diasemana)