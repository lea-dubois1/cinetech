const whenSubmit = async (form, lequel, e) => {

    e.preventDefault();
    const formData = new FormData(form);

    const response = await fetch('/cinetech/' + lequel, {method: "POST", body: formData});
    const dataJSON = await response.json();

    console.log(dataJSON, lequel);

    if(lequel === 'register') {
        displayErrorsRegister(dataJSON);
    }

    if(lequel === 'login') {
        displayErrorsLogin(dataJSON);
    }
}

const displayErrorsRegister = async(dataJSON) => {

    const errorLoginDiv = document.querySelector('.errorLogin');
    errorLoginDiv.innerHTML = "";

    const errorPassDiv = document.querySelector('.errorPass');
    errorPassDiv.innerHTML = "";

    if(dataJSON['errorLogin']) {
        const errorLogin = document.createElement("p");
        errorLogin.textContent = dataJSON['errorLogin'];
        errorLogin.className = 'error';
        errorLoginDiv.append(errorLogin);
    }
    if(dataJSON['errorPass']) {
        const errorPass = document.createElement("p");
        errorPass.textContent = dataJSON['errorPass'];
        errorPass.className = 'error';
        errorPassDiv.append(errorPass);
    }
    if(dataJSON['okReg']) {

        alert(dataJSON['okReg']);

        const getFormLog = await fetch('/cinetech/login');
        const formLog = await getFormLog.text();

        divForm.innerHTML = "";
        divForm.innerHTML = formLog;

        toLogin.style.display = "none";
        toRegister.style.display = "block";
    }
}

const displayErrorsLogin = (dataJSON) => {
    const errorDiv = document.querySelector('.error');
    errorDiv.innerHTML = "";
    
    if(dataJSON['error']) {
        const error = document.createElement("p");
        error.textContent = dataJSON['error'];
        error.className = 'error';
        errorDiv.appendChild(error);
    }

    if(dataJSON['okConn']) {
        alert(dataJSON['okConn']);
        document.location.href="/cinetech/"; 
    }
}


const main = document.getElementsByTagName('main')[0];
const toRegister = document.querySelector('.toRegister');
const toLogin = document.querySelector('.toLogin');
const divForm = document.querySelector('.divForm');

window.addEventListener('load', async() => {

    const getFormLog = await fetch('/cinetech/login');
    const formLog = await getFormLog.text();

    divForm.innerHTML = formLog;
    
    const loginForm = document.querySelector('.loginForm');
    console.log(loginForm);

    toLogin.style = "display: none";

    loginForm.addEventListener('submit', (e) => {

        whenSubmit(loginForm, 'login', e);
    })
})

toRegister.addEventListener('click', async() => {

    const getFormReg = await fetch('/cinetech/register');
    const formReg = await getFormReg.text();

    divForm.innerHTML = "";
    divForm.innerHTML = formReg;

    toRegister.style.display = "none";
    toLogin.style.display = "block";
        
    const registerForm = document.querySelector('.registerForm');
    
    registerForm.addEventListener('submit', (e) => {

        whenSubmit(registerForm, 'register', e);
    })
})

toLogin.addEventListener('click', async() => {

    const getFormLog = await fetch('/cinetech/login');
    const formLog = await getFormLog.text();

    divForm.innerHTML = "";
    divForm.innerHTML = formLog;

    toLogin.style.display = "none";
    toRegister.style.display = "block";
    
    const loginForm = document.querySelector('.loginForm');

    loginForm.addEventListener('submit', (e) => {

        whenSubmit(loginForm, 'login', e);
    })
})