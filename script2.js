
class Pet {
    constructor(_petName, _ownerName, _species, _breed) {
        this.petName = _petName;
        this.ownerName = _ownerName;
        this.species = _species;
        this.breed = _breed;
    }

    compareOwner(otherPet) {
        if (this.ownerName === otherPet.ownerName) {
            return true;
        } else {
            return false
        }
    }
}

const pets = [];

function addPet(event) {
    event.preventDefault();

    // cominciamo raccogliendo dal form i riferimenti ai singoli <input />
    const petName = document.getElementById("petName").value;
    const ownerName = document.getElementById("ownerName").value;
    const species = document.getElementById("species").value;
    const breed = document.getElementById("breed").value;

    // raccolgo i dati dal form e li utilizzo per creare un oggetto di tipo Pet
    const newPet = new Pet(petName, ownerName, species, breed);
    pets.push(newPet);

    console.log("Animale aggiunto:", newPet);
    console.log("Lista attuale:", pets);

    aggiornaLista();
    document.getElementById("petForm").reset();
}

function aggiornaLista() {
    const lista = document.getElementById("lista;");
    lista.innerHTML = ""  //in questo modo la lista si ripulisce//

}

