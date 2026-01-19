// ESERCIZIO 1

/* class User {
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
user3.compareAge(user2); //Comparazione z-y */

// ESERCIZIO 2

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  compareOwners = function (pet) {
    return this.ownerName === pet.ownerName;
  };
}

const petsList = [];

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const petName = document.getElementById("petNameInput").value;
  const ownerName = document.getElementById("ownerNameInput").value;
  const petSpecies = document.getElementById("petSpeciesInput").value;
  const petBreed = document.getElementById("petBreedInput").value;

  const newPet = new Pet(petName, ownerName, petSpecies, petBreed);

  console.log(newPet);

  petsList.push(newPet);

  console.log(petsList);

  if (petsList.length > 1) {
    console.log(petsList[petsList.length - 1].compareOwners(petsList[petsList.length - 2]));
  }

  form.reset();
});
