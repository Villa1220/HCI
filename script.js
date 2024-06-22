document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');

    loginBtn.addEventListener('click', function() {
        alert('Iniciar Sesión clicked!');
    });

    registerBtn.addEventListener('click', function() {
        alert('Registrarse clicked!');
    });
});
