const fruits = () => {
  if (true) {
    var fruit_1 = 'Apple';
    let fruit_2 = 'Banana';
    const fruit_3 = 'Kiwi';
    console.log(fruit_2);
    console.log(fruit_3);
  }
  console.log(fruit_1);
  // console.log(fruit_2);
  // console.log(fruit_3);
}

fruits()

/****************************************************************/

let x = 1

{
  let x = 2

  console.log(x);
}

console.log(x);

//-------------------------------

x = 1

{
  x = 2

  console.log(x);
}

console.log(x);

/****************************************************************/

const anotherFunction = () => {
  for (var i = 0; i < 10; i++) {
    setTimeout(() =>{
      console.log(i);
    },1000)
  }
}

anotherFunction()

//-------------------------------

const anotherFunction = () => {
  for (var i = 0; i < 10; i++) {
    setTimeout(() =>{
      console.log(i);
    },1000)
  }
}

anotherFunction()