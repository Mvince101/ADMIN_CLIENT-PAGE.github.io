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