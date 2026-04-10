const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./assets/img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./assets/img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./assets/img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./assets/img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./assets/img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./assets/img/female3.png"
  }
];

/*Dato un array di oggetti rappresentante un team di un’azienda,
creare una pagina dedicata in cui mostrare una card per ciascun componente. */

const teamContainer = document.getElementById("team-container");


for (let i = 0; i < teamMembers.length; i++) {
  const member = teamMembers[i];

// Creiamo la struttura HTML della card usando i template literals (gli apici inversi ` )
  const cardHTML = `
    <div class="card">
      <img src="${member.img}" alt="Foto di ${member.name}">
      <h3>${member.name}</h3>
      <p class="role">${member.role}</p>
      <p class="email">${member.email}</p>
    </div>
  `;

  //Aggiungiamo la card appena creata dentro il contenitore
  teamContainer.innerHTML += cardHTML;
}