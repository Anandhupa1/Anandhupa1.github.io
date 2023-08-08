let projectContainer = document.getElementById("projectContainer");


let data = [
    {
        title : "E-Buy",
        tag1  : "Individual Project",
        description : "A dynamic e-commerce web application delivering a seamless shopping experience.",
        image : "Role Based Access control.png",
        deployedLink : "https://github.com/Anandhupa1/EBuy-e-commerce-Node-Backend-Project-1",
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
        tag1Color:"#000",
        description : "An appointment booking app for students to efficiently schedule and manage sessions with instructors.",
        image : "codemate.png",
        deployedLink : "https://tutor-track.vercel.app",
        githubLink : "https://github.com/Anandhupa1/TutorTrack",
        techStack : [{name : "HTML",image:"html.svg"},{name : "CSS",image:"css.svg"},{name:"Javascript",image:"javascript.svg"},
                    {name:"Nodejs",image:"node.svg"},
                    ]

    },
    {
        title : "Codemate",
        tag1  : "Individual Project",
        tag1Color:"#000",
        description : "An appointment booking app for students to efficiently schedule and manage sessions with instructors.",
        image : "Role Based Access control.png",
        deployedLink : "https://tutor-track.vercel.app",
        githubLink : "https://github.com/Anandhupa1/TutorTrack",
        techStack : [{name : "HTML",image:"html.svg"},{name : "CSS",image:"css.svg"},{name:"Javascript",image:"javascript.svg"},
                    {name:"Nodejs",image:"node.svg"},
                    ]

    },
    {
        title : "Codemate",
        tag1  : "Individual Project",
        tag1Color:"#000",
        description : "An appointment booking app for students to efficiently schedule and manage sessions with instructors.",
        image : "Role Based Access control.png",
        deployedLink : "https://tutor-track.vercel.app",
        githubLink : "https://github.com/Anandhupa1/TutorTrack",
        techStack : [{name : "HTML",image:"html.svg"},{name : "CSS",image:"css.svg"},{name:"Javascript",image:"javascript.svg"},
                    {name:"Nodejs",image:"node.svg"},
                    ]

    },
    {
        title : "Codemate",
        tag1  : "Individual Project",
        tag1Color:"#000",
        description : "An appointment booking app for students to efficiently schedule and manage sessions with instructors.",
        image : "Role Based Access control.png",
        deployedLink : "https://tutor-track.vercel.app",
        githubLink : "https://github.com/Anandhupa1/TutorTrack",
        techStack : [{name : "HTML",image:"html.svg"},{name : "CSS",image:"css.svg"},{name:"Javascript",image:"javascript.svg"},
                    {name:"Nodejs",image:"node.svg"},
                    ]

    },

]


displayProjects(data)

function displayProjects(arr){
projectContainer.innerHTML=null;
    arr.forEach((item)=>{
    let div = document.createElement("div");
    div.classList.add("project-card");
    div.innerHTML=`
    <div  class="box">

    <img class="projectImage" src="./images/${item.image}" alt=${item.title} width="100%" height="120%">
    <div class="project-title text"  >
     
      <span>${item.title}</span>
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
         <i style="color:${item.tag1Color};" id="durationIcon" class="fa-regular fa-clock"></i>  5 Days
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