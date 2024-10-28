const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


const rowTeamCards= document.getElementById("row-team-cards");
const formAdd = document.getElementById("form-add");
const name = document.getElementById("name");
const role = document.getElementById("role");
const email = document.getElementById("email");
const img = "./img/immagineacaso.jfif"


for (let i=0; i<teamMembers.length;i++) {
  const { name, role, email, img } = teamMembers[i];
    rowTeamCards.innerHTML+=
    `<div class="col-33">
        <div class="card">
          <img class="block" src="./${img}" alt="">
          <div class="team-details">
              <h1>${name}</h1>
              <p>${role}</p>
              <p>${email}</p>
          </div>
        </div>
      </div>`
}

formAdd.addEventListener("submit", function(event){
  event.preventDefault();
  rowTeamCards.innerHTML+=
  `<div class="col-33">
        <div class="card">
          <img class="block" src="./${img}" alt="">
          <div class="team-details">
              <h1>${name.value}</h1>
              <p>${role.value}</p>
              <p>${email.value}</p>
          </div>
        </div>
      </div>`


})




