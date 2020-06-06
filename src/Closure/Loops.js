/*----------------Como NO deberia usarse un loop----------------*/
const anotherFunction = () => {
  debugger
  for (var i = 0; i < 10; i++) {
    setTimeout(() =>{
      console.log(i);
    },1000)
  }
}

anotherFunction()

/*-----------------Como deberia usarse un loop-----------------*/
const anotherFunction = () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() =>{
      console.log(i);
    },1000)
  }
}

anotherFunction()