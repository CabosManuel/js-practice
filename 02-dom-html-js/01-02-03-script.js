//console.log('Hello world!');

// QuerySelector usa selectores CSS
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const paragraph = document.querySelector('.paragraph');
const pId = document.querySelector('#pId');
const input = document.querySelector('input');

console.log(input.value);

console.log({
  h1,
  p,
  paragraph,
  pId,
  input
});

/* ************* 3. Escribiendo HTML dese JS ************* */
// Cambiando el HTML interno y texto de un elemento
h1.innerHTML = 'Titulo modificado <br> Break Row';
h1.innerText = 'Titulo modificado <br> Break Row <script>window.alert("LOL");</script>';

// Modificar atributos
console.log(h1.getAttribute('class'));
h1.setAttribute('class', 'red');

// Modificar las clases
h1.classList.add('big');
h1.classList.remove('green');
h1.classList.toggle('big');
console.log('contiene red?: ' + h1.classList.contains('red'));

// Modificar value
input.value = 'TestTest'

// Crear y agregar un nuevo elemento
const imgElement = document.createElement('img');
imgElement.setAttribute('src', 'https://static.platzi.com/media/achievements/practico-javascript_badge-fb533fa5-73c8-4f75-9d81-0294d9013ab5.png');
pId.append(imgElement);