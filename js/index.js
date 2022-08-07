//will get current year
const today = new Date();
let thisYear = today.getFullYear();

const footer = document.querySelector("footer");

//creating a new element "paragraph" <p>
const copyright = document.createElement("p");

copyright.innerHTML = `Diana Carachure ${thisYear}`;

//will make name and year from line 9 show up in footer
footer.appendChild(copyright);

let skills = ['JavaScript', 'HTML', 'CSS']; 
let skillsSection = document.getElementById("skills");
let skillsList = skillsSection.querySelector("ul"); //replace document with skillsSection -only "looking" in that section

for (let i = 0; i < skills.length; i++){
    let skill = document.createElement("li");
    skill.innerHTML = `${skill}`; //skills are not showing up
    skillsList.appendChild(skill);
};