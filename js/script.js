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

const teamContainer = document.getElementById('our-team-members');
const memberProp = [...teamMembers]

function createMemberCard (name, role, email, img){
  
  const cardForAnyMember = document.createElement("div");
  cardForAnyMember.classList.add("col-md-4");

  cardForAnyMember.innerHTML= `<div class="card mb-3 bg-black text-white  m-3" id="member-card" style="max-width: 540px;">
          <div class="row">
            <div class="col-md-4">
              <img src="./${img}" class="img-fluid rounded-start" id="member-photo" alt="">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title" id="full-name-member">${name}</h5>
                <p class="card-text" id="role-member">${role}</p>
                <a href="#" class="card-text" id="email-member"> ${email}</a>
              </div>
            </div>
          </div>`;
         
          

          teamContainer.appendChild(cardForAnyMember)
}
document.addEventListener("DOMContentLoaded", createMemberCard);



