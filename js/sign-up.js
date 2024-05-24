let form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validacion del username
    let username = document.getElementById('username')
    let usernameError = document.getElementById('username-error')

    if(username.value.trim() === '') {
        usernameError.textContent = "Ingrese un nombre de usuario"
    } else {
        usernameError.textContent = ''
    }

    // Validacion del email
    let email = document.getElementById('email')
    let emailError = document.getElementById('email-error')
    let patternEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === '') {
        emailError.textContent = 'Por favor ingrese un email';
    } else if (!patternEmail.test(email.value.trim())) {
        emailError.textContent = 'Ingrese un email valido';
    } else {
        emailError.textContent = '';
    }

    // Validacion del password
    let password = document.getElementById('password')
    let passwordError = document.getElementById('password-error')
    let patternPassword = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if(password.value.trim() === '') {
        passwordError.textContent = 'Ingrese una contraseña'
    } else if(!patternPassword.test(password.value)) {
        passwordError.textContent = 'La contraseña debe  contenes mayuscula, minuscula, numero y un simbolo'
    } else {
        passwordError.textContent = ''
    }

    // Validacion de la fecha
    let date = document.getElementById('date')
    let dateError = document.getElementById('date-error')
    
    if(date.value.trim() === '') {
        dateError.textContent = 'Ingrese la fecha de nacimiento'
    } else {
        dateError.textContent = ''
    }

    // Validacion terminos y condiciones
    let termsCheck = document.getElementById('terms-and-conditions')
    let termsAccept = document.getElementById('terms-accept')

    if(!termsCheck.checked) {
        termsAccept.textContent = 'Debes aceptar los terminos y condiciones para continuar' 
    } else {
        termsAccept.textContent = ''
    }

    
    if(!usernameError.textContent && !emailError.textContent && !passwordError.textContent && !dateError.textContent && !termsAccept.textContent) {
        alert('Cuenta creada con exito')
        form.reset()
    }

})
