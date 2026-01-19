// ESERCIZIO 1

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  compareAge = function (user) {
    if (this.age > user.age) {
      console.log(this.firstName + " è più vecchio di " + user.firstName);
    } else if (this.age < user.age) {
      console.log(user.firstName + " è più vecchio di " + this.firstName);
    } else {
      console.log(this.firstName + " e " + user.firstName + " sono coetanei");
    }
  };
}

const user1 = new User("Giovanni", "Esposito", 28, "Lazio"); // Istanza x
const user2 = new User("Mario", "Rossi", 40, "Lombardia"); // Istanza y
const user3 = new User("Giacomo", "Bianchi", 28, "Abruzzo"); // Istanza z

console.log("USER 1", user1);
console.log("USER 2", user2);
console.log("USER 3", user3);

user1.compareAge(user2); //Comparazione x-y
user1.compareAge(user3); //Comparazione x-z
user2.compareAge(user1); //Comparazione y-x
user2.compareAge(user3); //Comparazione y-z
user3.compareAge(user1); //Comparazione z-x
user3.compareAge(user2); //Comparazione z-y
