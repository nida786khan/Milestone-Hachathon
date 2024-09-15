"use strict";
const toggleButton = document.getElementById('toogle-skills');
const skills = document.getElementById('skills');
toggleButton.addEventListener('click', () => {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
