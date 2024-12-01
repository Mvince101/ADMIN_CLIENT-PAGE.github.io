const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

forget-passwordBtn.addEventListener('click', () => {
    container.classList.add("active");
});

function showMessage() {
    alert("You will be redirected to the login page to re-enter your email and password.");
    window.location.href = 'LoginPage.html'; // Redirect after alert
}

function showMessagetoSignUp() {
    alert("You will be redirected to the login page to enter your newly created email and password.");
    window.location.href = 'LoginPage.html'; // Redirect after alert
}

document.addEventListener('DOMContentLoaded', function () {
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('signUpPassword');

    togglePassword.addEventListener('click', function () {
        // Check the current type of the password input
        const isPasswordVisible = passwordInput.type === 'text';

        // Toggle the input type between 'text' and 'password'
        passwordInput.type = isPasswordVisible ? 'password' : 'text';

        // Toggle the icon class
        togglePassword.classList.toggle('lni-eye'); // Show password icon
        togglePassword.classList.toggle('lni-eye-off'); // Hide password icon
    });
});

