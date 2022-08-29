const firstName = document.getElementById('first')
const email = document.getElementById('email')
const comment = document.getElementById('comn')
const time = document.getElementById('ampm')
const form = document.getElementById('form')
const button = document.querySelector('.sub-btn');


    form.addEventListener('text', (e) =>{ //change the 'submit ' to the 'value' fields
        if (firstName.value === "" || email.value === "" || comment.value === "" ) {
            button.disabled = true; //button disabled
        }
        else {
            button.disabled = false; //button is enabled
        }
        e.preventDefault()
    });