const helloWorld = () => {
  const hello = 'Hello World';
  console.log(hello);
};

helloWorld()
console.log(hello);

/****************************************************************/

// El ambito lexico: se refiere a que una funcion puede acceder a una funcion o variable fuera de ella. Cada nivel interno puede acceder a sus niveles externos hasta poder alcanzarlas.

var scope = 'I am global';

const functionScope = () => {
  var scope = 'I am just a local';
  const func = () => {
    return scope
  }
  console.log(func());
};

functionScope()
console.log(scope);