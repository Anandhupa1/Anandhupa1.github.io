let projectContainer = document.getElementById("projectContainer");


let data = [
    {
        title : "E-Buy",
        tag1  : "Individual Project",
        description : "A dynamic e-commerce web application delivering a seamless shopping experience.",
        image : "Role Based Access control.png",
        deployedLink : "https://silver-liger-211a68.netlify.app/",
        githubLink : "https://github.com/Anandhupa1/EBuy-e-commerce-Node-Backend-Project-1",
        techStack : [
          {name : "React.js",image:"react.svg"},
          {name : "Redux",image:"redux.png"},
           
          {name:"Node.js",image:"node.svg"},
          {name:"Express.js",image:"express.png"},
          {name:"MongoDB",image:"mongodb.svg"},
                     
                    ]

    },
    {
        title : "Codemate",
        tag1  : "Group Project",
        tag1Color:"#093A57",
        description : "An appointment booking app for students to efficiently schedule and manage sessions with instructors.",
        image : "codemate.jpg",
        deployedLink : "https://tutor-track.vercel.app",
        githubLink : "https://github.com/Anandhupa1/TutorTrack",
        techStack : [{name : "HTML",image:"html.svg"},{name : "CSS",image:"css.svg"},{name:"Javascript",image:"javascript.svg"},
                    {name:"Nodejs",image:"node.svg"},
                    {name:"Express.js",image:"express.png"},
                    {name:"MySQL",image:"mysql.svg"},
                    ]

    },
    {
        title : "Horizon Health",
        tag1  : "Group Project",
        tag1Color:"#66aaf1",
        description : "An online platform created to streamline the procedure of arranging appointments with healthcare specialists within a hospital setting.",
        image : "horizonhealth.jpg",
        deployedLink : "https://hospitalappointmentmanagementsystem-ilahiamaan606-gmailcom.vercel.app/",
        githubLink : "https://github.com/Anandhupa1/Horizon-Health",
        techStack : [
          {name : "React.js",image:"react.svg"},
         
          {name:"Node",image:"node.svg"},
          {name:"Express",image:"express.png"},
          {name:"Chakra-UI",image:"chakraui.png"},
          {name:"MySQL",image:"mysql.svg"},
                     
                    ]

    },
    {
        title : "Sephora-clone",
        tag1  : "Group Project",
        tag1Color:"#b61852",
        description : "A replica of the renowned e-commerce site Sephora closely mirrors its features, design, and functionality, offering customers a similar online shopping experience in an online retail platform.",
        image : "sephora.jpg",
        deployedLink : "https://timely-wisp-f8d982.netlify.app",
        githubLink : "https://github.com/varun2696/faithful-night-9583",
        techStack : [
          {name : "HTML",image:"html.svg"},{name : "CSS",image:"css.svg"},{name:"Javascript",image:"javascript.svg"}
                     
                    ]

    },
    {
        title : "RBAC",
        tag1  : "Individual Project",
        tag1Color:"#48485a",
        description : "A web application that demonstrates role-based access control.",
        image : "Role Based Access control.jpg",
        days : 3,
        deployedLink : "https://rbac-4f09.onrender.com/",
        githubLink : "https://github.com/Anandhupa1/Role-Based-Access-Controll",
        techStack : [
                    {name:"Nodejs",image:"node.svg"},
                    {name:"Express.js",image:"express.png"},
                    {name:"EJS",image:"ejs.png"},
                  
                   
                    ]

    },


]


displayProjects(data)

function displayProjects(arr){
projectContainer.innerHTML=null;
    arr.forEach((item)=>{

    let dayCount=item.days || 5;
    let div = document.createElement("div");
    div.classList.add("project-card");
    div.innerHTML=`
    <div  class="box">

    <img class="projectImage" src="./images/${item.image}" alt=${item.title} width="100%" height="120%">
    <div class="project-title text"  >
     
      <h5>${item.title}</h5>
      <span style="color:${item.tag1Color};"  class="badge1">${item.tag1||""}</span>

    </div>
    <p class="project-description">
     ${item.description}
    </p>
    <div class="project-tech-stack">
     
    
  
    ${
        item.techStack.map((elem)=>{
        return techBadge(elem)
        }).join("")
    }

    </div>
    
    <div class="sourceCodeBtn">
        <button onclick="window.open('${item.deployedLink}','_blank')" class="viewBtn project-deployed-link">
          <i id="viewIcon" class="fa-solid fa-eye"></i>  view 
        </button>
        <button onclick="window.open('${item.githubLink}','_blank')" class="viewBtn project-github-link">
          <i id="viewIcon" class="fa-brands fa-github"></i>  Github
        </button>
        <button style="color:${item.tag1Color};" class="projectDuration">
         <i style="color:${item.tag1Color};" id="durationIcon" class="fa-regular fa-clock"></i>  ${dayCount} Days
        </button>
    </div>
</div>
    `
    projectContainer.append(div);
    })
}


function techBadge(obj){
    return (`  <div class="badge">
    <img src="./images/${obj.image}" alt="HTML Logo">
    <span class="badge-name">${obj.name}</span>
  </div>`
  )
}