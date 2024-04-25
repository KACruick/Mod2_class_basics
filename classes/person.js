// Your code here 

class Person{
  constructor(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }
  introduce() {
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`)
  }
  static introducePeople(array){
    if(!Array.isArray(array)) {
      return "introducePeople only takes an array as an argument."
    }
    for (let i = 0; i < array.length; i++) {
      let person = array[i];
      if(person instanceof Person) {  //if any of the items in the array are not instances of the `Person` class.
        return "All items in array must be Person class instances."
      }
      else {
        introduce(person);
      }
    }

  }
}










/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
