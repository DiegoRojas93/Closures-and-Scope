var hello = 'Hello';
let world = 'Hello World';
const helloWorld = 'Hello World!';

const anotherFunction = () => {
  console.log(hello);
  console.log(world);
  console.log(helloWorld);
}

anotherFunction();

/****************************************************************/

/*las varables inicializadas en Var NO pueden volverse a reasignar o a declarar.
ESTO ES UNA MALA PRACTICA*/
var hello = 'Hello';
var hello = 'Hello Plus';
let world = 'Hello World';
const helloWorld = 'Hello World!';

const anotherFunction = () => {
  console.log(hello);
  console.log(world);
  console.log(helloWorld);
}

anotherFunction();


/****************************************************************/

/*las varables inicializadas en Let NO pueden volverse a declarar*/

var hello = 'Hello';
let world = 'Hello World';
let world = 'Hello World Plus';
const helloWorld = 'Hello World!';

const anotherFunction = () => {
  console.log(hello);
  console.log(world);
  console.log(helloWorld);
}

anotherFunction();

/*las varables inicializadas en Let solo pueden volverse a reasignar siempre y cuando no vulva a utilizar la parabra resercada let para volverlas a declarar*/

var hello = 'Hello';
let world = 'Hello World';
world = 'Hello World Plus';
const helloWorld = 'Hello World!';

const anotherFunction = () => {
  console.log(hello);
  console.log(world);
  console.log(helloWorld);
}

anotherFunction();

/****************************************************************/
/*las varables inicializadas en const NUNCA podrar volverse a de declarar o cambiar su valor*/

var hello = 'Hello';
let world = 'Hello World';
const helloWorld = 'Hello World!';
helloWorld = 'Hello World! Plus';

const anotherFunction = () => {
  console.log(hello);
  console.log(world);
  console.log(helloWorld);
}

anotherFunction();

/****************************************************************/
// ESTAS SON MUY MALAS PRACTICAS

//-------------------------------

const helloWorld = () => {
  fdsg = 'Im Global'
}

helloWorld()
console.log(fdsg);
//-------------------------------

const anotherFunction = () => {
  var localVar = globalVar = 'Im Global'
}

anotherFunction()

console.log(globalVar);
console.log(localVar);