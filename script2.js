
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
            return false;
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
}
aggiornaLista();

// Resettiamo il form dopo aver aggiunto l'animale
document.getElementById("petForm").reset();


function aggiornaLista() {
    const petLista = document.getElementById("lista");
    petLista.innerHTML = "";

    pets.forEach(pet => {
        const listItem = document.createElement("li");
        listItem.innerText = pet.petName + " - " + pet.ownerName + " - " + pet.species + " - " + pet.breed;
        petLista.appendChild(listItem);
    });
}


document.getElementById("petForm").addEventListener("submit", addPet);
