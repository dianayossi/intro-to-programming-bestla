const today = new Date();
let thisYear = today.getFullYear();

const footer = document.querySelector('footer');

const copyright = document.createElement('p');

copyright.innerHTML = `Diana Carachure ${thisYear}`;

footer.appendChild(copyright);

const skills = ['JavaScript', 'HTML', 'CSS', 'Access', 'Excel','Data Entry', 'Apricot by Social Solutions'];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul'); //replace document with skillsSection -only "looking" in that section

for (let i = 0; i < skills.length; i++){
    let skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
};

//code below will handle the messages submitted in the form section of the page
let messageForm = document.getElementsByName("leave_message");
messageForm.addEventListener('submit', (e) => {
    e.preventDefault();

//retrieving the value from each event
let name = e.target.name;
let email = e.target.email;
let message = e.target.message;

console.log(name);
console.log(email);
console.log(message);

//is not logging values in console when it should be

//following section will display messages in a list
<<<<<<< HEAD
=======
//not displaying messages. unsure how to proceed
>>>>>>> main

let messageSection = document.getElementById("messages");
let messageList = messageSection.querySelector("ul");
let newMessage = document.createElement("li");

newMessage.innerHTML = `<a href= "mailto: ${email}"> ${name} </a> wrote: <span> ${message} </span>`;

//creates a new buttom named remove

let removeButton = document.createElement("button");
removeButton.innerText = "remove";
removeButton.type = "button";
removeButton.addEventListener('click', () => {
    let entry = removeButton.parentNode;
    entry.remove();
});

newMessage.appendChild(removeButton);

messageList.append(messageList);

e.target.reset();
});
