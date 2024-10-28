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

for (let i=0; i<teamMembers.length;i++) {
    rowTeamCards.innerHTML+=
    `<div class="col-33">
        <div class="card">
          <img class="block" src="./${teamMembers[i].img}" alt="">
          <div class="team-details">
              <h1>${teamMembers[i].name}</h1>
              <p>${teamMembers[i].role}</p>
              <p>${teamMembers[i].email}</p>
          </div>
        </div>
      </div>`
}