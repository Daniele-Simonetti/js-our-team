const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];
// console.log(team);

// Prendendo come riferimento la card di esempio presente nell’html, stampiamo dinamicamente una card per ogni membro del team.

// seleziono il mio team-container e all'interno andrò a creare la mia card

const teamContainer = document.querySelector('.team-container');
console.log(teamContainer);

// creo un ciclo for per creare le card in base hai nomi presenti nell'array
for (let i = 0; i < team.length; i++) {
  const member = team[i];
  // console.log(member);
  // creo dei div a cui darò la classe team-card
  const teamCard = document.createElement('div');
  teamCard.classList.add('team-card');
  teamContainer.appendChild(teamCard);
  // console.log(teamCard);
  // creo attraverso i backtick la struttura 

  
}