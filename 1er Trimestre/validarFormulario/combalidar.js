let nameInput = document.querySelector("#nameUser");
let subnameInput = document.querySelector("#subname");
let yoInput = document.querySelector("#yo");
let passwordInput = document.querySelector("#password");
const form = document.querySelector('#signup');

//funciones para validar requisistos.
const isRequired = value => value === '' ? false : true;

const isBetween = (length, min, max) => length < min || length > max ? false : true;

const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}

//funciones para validar diferentes campos del formularo.
const checkName = () => {
    let valid = false;
    const min = 3, max = 10;
    const username = nameInput.value.trim();

    if(!isRequired(username)){
        showError(nameInput, 'Nombre de usuario en blanco.');
    }else if(isBetween(username.lenght,min,max)){
        showError(nameInput,`Debe estar entre ${min} y ${max}`);
    }else{
        showSuccess(nameInput);
        valid = true;
    }
    return valid;
}

form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields
    let isUsernameValid = checkName();

    let isFormValid = isUsernameValid;

    // submit to the server if the form is valid
    if (isFormValid) {
        e.submit();
    }
});

form.addEventListener('input', function (e) {
    switch (e.target.id) {
        case 'nameUser':
            checkName();
            break;
    }
});