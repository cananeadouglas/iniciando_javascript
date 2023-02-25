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
//setTimeout(DezSegundos, 60000) 

var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()
let diasemana = data.getDay();
console.log(diasemana)


let n5 = 123456
let cpfarray = [n5]

for (let pos = 0; pos < cpfarray.length; pos++) {
  console.log(cpfarray[pos])
  console.log(pos)
  console.log(n5.valueOf.length)
}

var str = 'asdfghjkl';
var strReverse = str.split('').join(''); // 'lkjhgfdsa'
// split() returns an array on which reverse() and join() can be applied
console.log(strReverse[2])