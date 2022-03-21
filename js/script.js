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
        name: 'Alex',
        role: 'Web dev',
        imgFile: 'img/angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Angela',
        role: 'Web dev',
        imgFile: 'img/angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Alex',
        role: 'Web dev',
        imgFile: 'img/angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Alex',
        role: 'Web dev',
        imgFile: 'img/angela-caroll-chief-editor.jpg',
    },
];
console.log(team);

// Functions
function createCard() {
    for (let i = 0; i < team.length; i++) {
        // team-card
        const teamCard = document.createElement('div');
        teamCard.className = 'team-card';
        container.appendChild(teamCard);
        // card-text
        const cardText = document.createElement('div');
        cardText.className = 'card-text';
        teamCard.appendChild(cardText);
        cardText.innerHTML = `<h3>${team[i].name}</h3><p>${team[i].role}</p>`;
        // card-img
        const cardImg = document.createElement('div');
        cardImg.className = 'card-image';
        teamCard.appendChild(cardImg);
        cardImg.innerHTML = `<img src="${team[i].imgFile}"/>`;
    }
}
createCard();