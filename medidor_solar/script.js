/*
const range1 = document.getElementById("range1");
const output1 = document.getElementById("demo1");
output1.innerHTML = range1.value;
range1.oninput = function() {
    output1.innerHTML = this.value;
  }



const range2 = document.getElementById("range2");
const output2 = document.getElementById("demo2");
output2.innerHTML = range2.value;
range2.oninput = function() {
  output2.innerHTML = this.value;
}

*/

const range1 = document.getElementById("range1");
const range2 = document.getElementById("range2");
const output1 = document.getElementById("demo1");
const output2 = document.getElementById("demo2");
const divisaoOutput = document.getElementById("divisao");

output1.innerHTML = range1.value;
output2.innerHTML = range2.value;

range1.oninput = function() {
  output1.innerHTML = this.value;
  const valor1 = parseFloat(this.value);
  const valor2 = parseFloat(range2.value);
  const resultado = valor1 / valor2;
  divisaoOutput.innerHTML = resultado.toFixed(2);
}

range2.oninput = function() {
  output2.innerHTML = this.value;
  const valor1 = parseFloat(range1.value);
  const valor2 = parseFloat(this.value);
  const resultado = valor1 / valor2;
  divisaoOutput.innerHTML = resultado.toFixed(2);
}

