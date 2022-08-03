const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector('footer');

const copyright = document.createElement('p');

copyright.innerHTML = `Diana Carachure ${thisYear}`;

footer.appendChild(copyright);

const skills = ['JavaScript', 'HTML', 'CSS', 'Access', 'Excel','Data Entry', 'Apricot by Social Solutions'];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul'); //replace document with skillsSection -only "looking" in that section

for (let i = 0; i < skills.length; i++){
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
};

//start of lesson-4-3

const messageForm = document.getElementsByName('leave_message');

messageForm.addEventListener('submit', (event) => {
        event.preventDefault(); //values should be logging in the console.

        const name = event.target.name; //changed const to let since string will change
        const email = event.target.email;
        const message = event.target.message;

        console.log(name);
        console.log(email);
        console.log(message);

        const messageSection = document.getElementById('messages');
        const messageList = messageSection.querySelector('ul'); 
        const newMessage = document.createElement('li');

         newMessage.innerHTML = `<a href = mailto: ${email}> ${name}</a> Wrote : <span> ${message} </span>`;

        const removeButton = document.createElement('button');
        removeButton.innerText = 'remove';
        removeButton.type = 'button';

        removeButton.addEventListener('click', () => {
            const entry = removeButton.parentNode;
            entry.remove();
        });

        newMessage.appendChild('removeButton');
        messageList.appendChild('newMessage');

        event.target.reset();
});
