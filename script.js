
/*
    Script.js that will handle the logic of the Front-end
    
        -- Code Written by Haytham Rahem
*/

//form related variables
const form_register = document.querySelector('.form_register');
const form_login = document.querySelector('.form_login');

//Toast related variables
const toastLiveExample = document.getElementById('live_toast');
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);


// Event that is triggered by pressing the submit of the register form
form_register.addEventListener('submit', event => {
    event.preventDefault();

    //Setting up variables
    var adress = 'http://localhost:3000/api/register';
    var method = 'POST'
    var button = "register";
    var HTML = document.getElementById(button).innerHTML
    button_loading(button, HTML);

    // Creating the data format the API understand's
    const register_data = new FormData(form_register);
    const user_object = Object.fromEntries(register_data);

    //sending the request to the API and getting the response back
    fetch_request(adress, method, user_object);
});

// Event that is triggered by pressing the submit of the login form
form_login.addEventListener('submit', event => {
    event.preventDefault();

    //Setting up event variables
    var adress = 'http://localhost:3000/api/login';
    var method = 'POST'
    var button = "login";
    var HTML = document.getElementById(button).innerHTML
    button_loading(button, HTML);
    
    // Creating the data format the API understand's
    const login_data = new FormData(form_login);
    const user_object = Object.fromEntries(login_data);

    //sending the request to the API and getting the response back
    fetch_request(adress, method, user_object);
});

// Function of the query to the API
const fetch_request = async(adress, method, user_object) => {
    await sleep(1.5);
    fetch(adress, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user_object)
    })
    .then(res => res.json())
    .then(res => { 
            console.log(res);
            toast_model(res);
        });

    toastBootstrap.show()
}

// Function that will serve as the skeletton for a toast
const toast_model = (res) => {
    if (res.type == "Success") {
        document.getElementById('toast_message').style.backgroundColor = "#6EA8FE";
        document.getElementById('toast').style.backgroundColor = "#6EA8FE";
    } else {
        document.getElementById('toast_message').style.backgroundColor = "#DC3545";
        document.getElementById('toast').style.backgroundColor = "#DC3545";
    }
    document.getElementById('toast_message').innerHTML = "";
    const toast_message = `<h5>${res.message}</h5>`;
    document.querySelector('.toast-body').insertAdjacentHTML('beforeend', toast_message);
}

// Function that will replace any button with a loading
const button_loading = async(button, HTML) => {
    document.getElementById(button).disabled = true;
    document.getElementById(button).innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...';
    
    await sleep(1.5);

    document.getElementById(button).disabled = false;
    document.getElementById(button).innerHTML = HTML;   
}

//Sleep function for the fake loading 
const sleep = async(seconds) => {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}