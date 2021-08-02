const email = document.querySelector('.email');
const password = document.querySelector('.password');
const button = document.querySelector('.submit-button');
email.addEventListener('input', inputEmail);
password.addEventListener('input', inputPassword);

function inputEmail(e) {
    const input = e.target.value;

    if (input && /(^\w.*@\w+\.\w)/.test(input)) {
        email.classList.add('success');
        email.classList.remove('failure');
    } else {
        email.classList.remove('success');
        email.classList.add('failure');
    }
    checkField ()
}

function inputPassword (e) {
    const input2 = e.target.value;

    if (input2.length < 6) {
        password.classList.remove('success');
        password.classList.add('failure');
    } else {
        password.classList.add('success');
        password.classList.remove('failure');
    }
    checkField ()
}

function checkField () {
    button.disabled = !(password.classList.contains('success') && email.classList.contains('success'));
}