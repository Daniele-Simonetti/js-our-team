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

// fuznione di creazione del mio div
function teamCard(name, role, image) {
  const teamCard = document.createElement('div');
  teamCard.classList.add('team-card');
  teamContainer.appendChild(teamCard);
  const teamMember = `
  <div class="card-image">
    <img
      src="img/${image}"
      alt="${name}"
    />
  </div>
  <div class="card-text">
    <h3>${name}</h3>
    <p>${role}</p>
  </div>
`;
  teamCard.innerHTML += teamMember;
}

// seleziono il mio team-container e all'interno andrò a creare la mia card
const teamContainer = document.querySelector('.team-container');
console.log(teamContainer);

// creo un ciclo for per creare le card in base ai nomi presenti nell'array
for (let i = 0; i < team.length; i++) {
  const member = team[i];
  // console.log(member);
  teamCard(member.name, member.role, member.image);
}

// creo le costanti per gli inpiy value
const inputName = document.getElementById('name');
const inputRole = document.getElementById('role');
const inputImage = document.getElementById('image');
const button = document.getElementById('addMemberButton');

// creo l'evento del click
button.addEventListener('click', function () {
  const name = inputName.value;
  const role = inputRole.value;
  const image = inputImage.value;

  const obj = {
    name: name,
    role: role,
    image: image
  }

  team.push(obj);
});