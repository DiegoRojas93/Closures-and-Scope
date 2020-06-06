var saveName =  undefined
const person = () => {
  var saveName = 'name';
  return{
    getName: () => {return saveName},
    setName: (name) => {saveName = name}
  }
}

console.log(saveName);

newPerson = person()
console.log(newPerson.getName());
newPerson.setName('Diego');
console.log(newPerson.getName());