
/*
    Script.js that will handle the logic of the Front-end
    
        -- Code Written by Haytham Rahem
*/

const form_register = document.querySelector('.form_register');
const form_login = document.querySelector('.form_login');


// Event that is triggered by pressing the submit of the register form
form_register.addEventListener('submit', event => {
    event.preventDefault();

    // Creating the data format the API understand's
    const register_data = new FormData(form_register);
    const user_object = Object.fromEntries(register_data);

    fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user_object)
    })
    .then(res => res.json())
    .then(data => console.log(data));
});

// Event that is triggered by pressing the submit of the login form
form_login.addEventListener('submit', event => {
    event.preventDefault();

    // Creating the data format the API understand's
    const login_data = new FormData(form_login);
    const user_object = Object.fromEntries(login_data);

    fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user_object)
    })
    .then(res => res.json())
    .then(data => console.log(data));
});