/* 4. Eventos HTML en JS */
const number1 = document.querySelector('#number1');
const number2 = document.querySelector('#number2');
const btnCalcular = document.querySelector('#btnCalcular');
const resultContainer = document.getElementById('result');

function calculate() {
  let result =  parseInt(number1.value) + parseInt(number2.value);
  resultContainer.innerHTML = result;
}