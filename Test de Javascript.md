### ++Variables y operaciones++

**1️⃣ Preguntas:**
- Es un espacio en memoria para almacenar datos.
- Cuando declaras estás separando el espacio en memoria y cuando inicializas ocupas ese 	espacio en memoria.
- El tipo de dato, un tipo número con numeró sumará y un string con string concatenará (teniendo en cuenta la Coerción).
 - **`+`**

**2️⃣ Tipo de dato y variables:**
- Nombre / *String*
- Apellido / *String*
- Nombre de usuario en Platzi / *String*
- Edad / *Number*
- Correo electrónico / *String*
- Mayor de edad / *Boolean*
- Dinero ahorrado / *Number*
- Deudas / *Number*

**3️⃣ Traducir variables a código:**
```javascript
let name = "Manuel";
let lastName = "Cabos";
let userName = "cabosmanuel"
let age = 22;
let email = "cabos.apolaya@gmail.com";
let isLegalAge = true;
let moneySaved = 666.6;
let debts = 123.4;
```

**4️⃣ Calcular e imprimir variables:**
```javascript
let fullName = `${name} ${lastName}`;
let realMoney = moneySaved - debts;
console.log(`Nombre completo: ${fullName}`);
console.log(`Dinero real: ${realMoney}`);
```
**[👨‍💻 Ejecutar código en runJS](https://runjs.co/s/mBWY@HJrJ)**

.

### ++Funciones++
**1️⃣ Preguntas:**
- El una porción de código *reutilizable* .
- Cuando el código es muy extenso y se necesite organizar y segmentar, para entenderlo mejor. Y cuando se repita partes del código iguales, evitando la *duplicidad*.
- Sí, puedes llamar funciones dentro de alguna condicional o utilizar condicionales dentro de una función.

**2️⃣ Comvertir el código en función:**
```javascript
function message(name, lastName, nickname) {
	let fullName = `${name} ${lastName}`;
	console.log(`Mi nombre es ${fullName}, pero prefiero que me digas ${nickname}.`);
}

message("Manuel Alejandro", "Cabos Apolaya", "kboss");
```
**[👨‍💻 Ejecutar código en runJS](https://runjs.co/s/KxTG2opW9)**

.

### ++Condicionales++
**1️⃣ Preguntas:**
- Una porción de código que se ejecuta solo cuando se cumple la condición.
- Existe el `if` (que incluye `if else` y `else`) y `switch`
	- El `if` evalúa una condición y las alternativas que agreguemos, para ejecutar el código.
	- El `switch` evalúa una variable y sus diferentes casos / valores y cuando cumpla con alguno ejecuta el código.
- Sí se puede, una condicional dentro de una función y viceversa.

**2️⃣ Replicar el código usando `if`, `else` y `else if`:**
```javascript
const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion == "Free") {
	console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == "Basic") {
	console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion == "Expert") {
	console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else {
	console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} 
```
**[👨‍💻 Ejecutar código en runJS](https://runjs.co/s/Z@l2x@UQJ)**

.

**3️⃣ Replicar el código usando solo `if`:**
```javascript
const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion == "Free") {
	console.log("Solo puedes tomar los cursos gratis");
}
if (tipoDeSuscripcion == "Basic") {
	console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
if (tipoDeSuscripcion == "Expert") {
	console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
if (tipoDeSuscripcion == "ExpertPlus") {
	console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} 
```
**[👨‍💻 Ejecutar código en runJS](https://runjs.co/s/pWTMdQC3g)**

.

**4️⃣ Replicar el código usando arrays u objectos y un solo condicional**
```javascript
let subscriptionTypes = [
	{name: "Free", message: "Solo puedes tomar los cursos gratis"},
	{name: "Basic", message: "Puedes tomar casi todos los cursos de Platzi durante un mes"},
	{name: "Expert", message: "Puedes tomar casi todos los cursos de Platzi durante un año"},
	{name: "ExpertPlus", message: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"}
];

const tipoDeSuscripcion = "Basic";

for (const subscription of subscriptionTypes) {
	if (tipoDeSuscripcion == subscription.name)
		console.log(subscription.message);
}
```
**[👨‍💻 Ejecutar código en runJS](https://runjs.co/s/$USgJuOAT)**

.

### ++Ciclos++
**1️⃣ Preguntas:**
- Una porción de código que se repite mientras la condicional de este se cumpla.
- `for`, `for of` y `while`
- Es un ciclo que su condicional siempre se cumple, es un problema porque se queda ejecutando esa porción de código en bucle por siempre y no permite continuar con el resto del código.
- Sí, una condicional puede estar dentro de un ciclo y viceversa. 

**2️⃣ Replicar usando `while`:**
```javascript
let i = 0;
while (i < 5) {
  console.log("El valor de i es: " + i);
  i++;
}

i = 10;
while (i >= 2) {
  console.log("El valor de i es: " + i);
  i--;
}
```
**[👨‍💻 Ejecutar código en runJS](https://runjs.co/s/65Xph1NkE)**

.

**3️⃣ Escribir código:**
```javascript
let userResult = 0;

while (userResult !== 4) {
  userResult = parseInt( prompt("¿Cuánto es 2+2? 🤨") );
}
```
**[👨‍💻 Ejecutar código en runJS](https://runjs.co/s/WuPBNb@RS)**

.

### ++Listas++
**1️⃣ Preguntas:**
- Es un tipo de dato que almacena grupos de objetos en formación tipo vector o matriz.
- Es un tipo de dato que almacena datos y funciones definidos.
- Objetos cuando quieras almacenar datos y funciones con una estructura definida, y arrays cuando quieras almacenar objetos o datos (no funciones), con una estructura no definida.
- Sí, los arrays pueden almacenar objetos y los objetos puede tener datos de tipo array.

**2️⃣ Función que imprima el primer elemento de cualquier array:**
```javascript
function printFirstElement(array) {
  console.log(array[0]);
}

let arrayTest = ["a", "b", "c"];
printFirstElement(arrayTest);
```
**[👨‍💻 Ejecutar código en runJS](https://runjs.co/s/cOx7xsC5X)**

.

**3️⃣ Función que reciba un array e imprima uno por uno sus elementos:**
```javascript
function printAllElements(array) {
 array.forEach(function (element) {
  	console.log(element);
  });
}

let arrayTest = ["a", "b", "c"];
printAllElements(arrayTest);
```
**[👨‍💻 Ejecutar código en runJS](https://runjs.co/s/4E9JaR8Ic)**

.

**4️⃣ Función que reciba un objeto e imrpima uno por uno sus elementos**
```javascript
function printAllElements(object) {
	for (const key in object) {
		console.log(object[key]);
	}
}

let objectTest = {
	title: "La magia del orden",
  	author: "Marie Kondo",
  	year: 2019
};
printAllElements(objectTest);
```
**[👨‍💻 Ejecutar código en runJS](https://runjs.co/s/MwLSUXjb@)**