
class User {
    constructor(_firstName, _lastName, _age, _location) {
        this.firstname = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this.location = _location;
    }
    compareAge(otherUser) {
        if (this.age > otherUser.age) {
            console.log(this.firstname + " " + this.lastName + " è più vecchio di " + otherUser.firstname + " " + otherUser.lastName);
        } else if (this.age < otherUser.age) {
            console.log(this.firstname + " " + this.lastName + " è più piccolo di " + otherUser.firstname + " " + otherUser.lastName);
        } else {
            this.console.log(this.firstname + " " + this.lastName + "ha la stessa età di " + otherUser.firstname + " " + otherUser.lastName);
        }

    }
}

const utente1 = new User("Marco", "Rossi", 25, "Roma");
console.log(utente1);
console.log(utente1.lastName);


const utente2 = new User("Aldo", "Baglio", 50, "Palermo");
console.log(utente2);
console.log(utente2.location)


const utente3 = new User("Giulia", "Bianchi", 22, "Bologna");
console.log(utente3);
console.log(utente3.age);


utente1.compareAge(utente2);
utente2.compareAge(utente3);
utente1.compareAge(utente3);
utente3.compareAge(utente1);
utente2.compareAge(utente1);

