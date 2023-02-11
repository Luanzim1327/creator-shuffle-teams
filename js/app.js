const formTeam = document.querySelector("form");
const waitingList = document.getElementById("waiting-list");
const btnShuffleNames = document.getElementById("btn-shuffle");

let names = [];
let sortNames = [];

btnShuffleNames.addEventListener("click" , shuffleNames);

formTeam.addEventListener("submit" , (e) => {
    e.preventDefault();
    let inputName = formTeam.querySelector("input");
    
    if(inputName.value !== "") {
        names.push({id:generateRandom() , name:inputName.value});
        validateArrayNames(names);
        createWaitingList(names);
    }

    inputName.value = "";
})

function generateRandom () {
    return Math.random().toString(36).substring(2 , 9);
}

function createWaitingList (item) {
    waitingList.innerHTML = 
        item.map((name) => {
           return `<li>${name.name}</li>`
        }).join("");
}

function validateArrayNames (arrayNames) {
    if(arrayNames.length > 10) {
        arrayNames.splice(10 , 1);
        btnShuffleNames.classList.remove("hide");
        alert("Sua lista de jogadores está cheia");
        return;
    }
}

function shuffleNames () {

    names.map(name => {
        sortNames.push(name.name);

        if(sortNames.length > 10) {
            sortNames.splice(10 , 1);
        }
    })
    let currentIndex = sortNames.length
    
    while (currentIndex != 0) {
        currentIndex--;
        let randomIndex = Math.floor(Math.random() * currentIndex);
        [sortNames[currentIndex], sortNames[randomIndex]] = [
            sortNames[randomIndex], sortNames[currentIndex]];
        }
    return sortNames;

}

// feature/teste-1
//feature/teste-2

// layout dos times
// editar nome dos jogadores
// excluir jogadores
