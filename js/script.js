// Debug
console.log('JS OK!');

// Aggiungere un file js in cui definire *un array di oggetti* che rappresentano
// i membri del team.
// Ogni membro ha le informazioni necessarie per stampare la relativa card:
// *Nome, Ruolo e Foto*.
// Una volta definita la struttura dati, prendendo come riferimento la card di
// esempio presente nell'html, stampare dinamicamente una card per ogni membro
// del team.
// BONUS:
// Utilizzare gli input presenti nella pagina per permettere all'utente
// di aggiungere nuovi membri del team: cliccando sul pulsante "add" viene
// creato un *nuovo oggetto*, il quale viene *inserito nell'array iniziale* e
// viene stampata una nuova card con tutte le informazioni inserite dall'utente.

// Config
const container = document.querySelector('.team-container');
const team = [
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        imgFile: 'img/angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        imgFile: 'img/angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        imgFile: 'img/barbara-ramos-graphic-designer.jpg',
    },
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        imgFile: 'img/wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        imgFile: 'img/walter-gordon-office-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        imgFile: 'img/scott-estrada-developer.jpg',
    },
];

//  // new member
const addButton = document.getElementById('addMemberButton');

addButton.addEventListener('click', function () {
    const newMember = {
        name: document.getElementById('name').value,
        role: document.getElementById('role').value,
        imgFile: document.getElementById('image').value,
    }
    team.push(newMember);
    createCard();
})

// Functions
function createCard() {
    for (let i = 0; i < team.length; i++) {
        // team-card
        const teamCard = document.createElement('div');
        teamCard.className = 'team-card';
        container.appendChild(teamCard);
        // card-img
        const cardImg = document.createElement('div');
        cardImg.className = 'card-image';
        teamCard.appendChild(cardImg);
        cardImg.innerHTML = `<img src="${team[i].imgFile}"/>`;
        // card-text
        const cardText = document.createElement('div');
        cardText.className = 'card-text';
        teamCard.appendChild(cardText);
        cardText.innerHTML = `<h3>${team[i].name}</h3><p>${team[i].role}</p>`;
    }
}
createCard();