const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validar email
    let email = document.getElementById('email');
    let emailError = document.getElementById('email-error');
    let patternEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === '') {
        emailError.textContent = 'Por favor ingrese un email';
    } else if (!patternEmail.test(email.value.trim())) {
        emailError.textContent = 'Ingrese un email valido';
    } else {
        emailError.textContent = '';
    }

    // Validar contrasena
    let pass = document.getElementById('password').value;
    let passError = document.getElementById('password-error');


    if(pass.trim() === '') {
        passError.textContent = 'Ingrese la contraseña';
    } else {
        passError.textContent = '';
    }

    if(!emailError.textContent && !passError.textContent) {
        alert("Sesion iniciada correctamente");
        form.reset();
    }

})