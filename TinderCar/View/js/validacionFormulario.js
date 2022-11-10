'use strict';

const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

const expresiones = {
    name_lastname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    password: /^.{4,12}$/,
    email: /^[a-zA-Z0-9_.+-]*@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{7,14}$/
}

const field = {
    Firstname: false,
    Lastname: false,
    Email: false,
    Phone: false,
    Password: false
}

const formValidate = e => {
    switch (e.target.name) {
        case 'firstName':
            inputValidate(expresiones.name_lastname, e.target, 'Firstname');
            break;
        case 'lastname':
            inputValidate(expresiones.name_lastname, e.target, 'Lastname');
            break;
        case 'email':
            inputValidate(expresiones.email, e.target, 'Email');
            break;
        case 'phone':
            inputValidate(expresiones.phone, e.target, 'Phone');
            break;
        case 'password':
            inputValidate(expresiones.password, e.target, 'Password');
            password2Validate();
            break;
        case 'password2':
            password2Validate();
            break;
    }
}

const inputValidate = (expresion, input, group) => {
    if (expresion.test(input.value)) {
        document.getElementById(`group${group}`).classList.remove('form-group-error');
        document.querySelector(`#group${group} .form-group-errorText`).classList.remove('form-group-errorText-active');
        document.getElementById(`group${group}`).classList.add('form-group-done');
        field[group] = true;
    } else {
        document.getElementById(`group${group}`).classList.remove('form-group-done');
        document.getElementById(`group${group}`).classList.add('form-group-error');
        document.querySelector(`#group${group} .form-group-errorText`).classList.add('form-group-errorText-active');
        field[group] = false;
    }
}

const password2Validate = () => {
    const inputPassword = document.getElementById('password');
    const inputConfirmPassword = document.getElementById('password2');

    if (inputPassword.value !== inputConfirmPassword.value) {
        document.getElementById('groupPassword2').classList.remove('form-group-done');
        document.getElementById('groupPassword2').classList.add('form-group-error');
        document.querySelector('#groupPassword2 .form-group-errorText').classList.add('form-group-errorText-active');
        field['password'] = false;
    } else {
        document.getElementById('groupPassword2').classList.remove('form-group-error');
        document.querySelector('#groupPassword2 .form-group-errorText').classList.remove('form-group-errorText-active');
        document.getElementById('groupPassword2').classList.add('form-group-done');
        field['password'] = true;
    }
}

inputs.forEach(input => {
    input.addEventListener('keyup', formValidate);
    input.addEventListener('blur', formValidate);
});

form.addEventListener('submit', e => {
    e.preventDefault();
    const terms = document.getElementById('terms');
    if (field.Firstname && field.Lastname && field.Email && field.Phone && field.Password && terms.checked) {
        form.reset();
        document.getElementById('formMessaje').classList.remove('form-messaje-error-active');
        document.getElementById('formDone').classList.add('form-messaje-done-active');
        setTimeout(() => {
            document.getElementById('formDone').classList.remove('form-messaje-done-active');
        }, 5000);
    } else {
        document.getElementById('formMessaje').classList.add('form-messaje-error-active');
    }
});