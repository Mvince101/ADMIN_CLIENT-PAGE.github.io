const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});
// JavaScript to highlight the active sidebar item
window.onload = function() {
  // Get the current URL
  const currentPage = window.location.pathname.split('/').pop();

  // Get all sidebar links
  const sidebarLinks = document.querySelectorAll('.sidebar-link');

  // Loop through each sidebar link
  sidebarLinks.forEach(link => {
      // Check if the link's href matches the current page
      if (link.getAttribute('href').includes(currentPage)) {
          link.classList.add('active'); // Add the 'active' class
      } else {
          link.classList.remove('active'); // Remove the 'active' class if not
      }
  });
};

// Ensure this script is either in the <head> or just before closing </body> tag
document.addEventListener('DOMContentLoaded', function () {
  // Get the logout link element
  const logoutLink = document.getElementById('logoutLink');

  // Attach a click event listener
  logoutLink.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default anchor link behavior
      logout(); // Call the logout function
  });
});

function logout() {
  // Show an alert message before logging out
  const userConfirmed = confirm("Are you sure you want to logout?");
  
  if (userConfirmed) {
      // Clear logged-in user data from localStorage
      localStorage.removeItem("loggedInUser");

      // Redirect to the login page
      window.location.href = "index.html";
  }
}


document.getElementById('editForm').addEventListener('submit', (e) => {
  e.preventDefault();

  // Update account details
  account.name = document.getElementById('editName').value;
  account.birthday = document.getElementById('editBirthday').value;
  account.email = document.getElementById('editEmail').value;
  account.password = document.getElementById('editPassword').value;

  // Save updated accounts to localStorage
  localStorage.setItem('accounts', JSON.stringify(accounts));

  // Notify the user and redirect to the account list
  alert('Account updated successfully!');
  
  // Use window.location.reload() to refresh the account list
  window.location.href = 'account.html';  // Redirecting to account page
});

//// DISPLAY THE NAME
document.addEventListener('DOMContentLoaded', function () {
  // Get the logged-in user's name from localStorage
  const loggedInUser = localStorage.getItem('loggedInUser');

  // Get the userNameDisplay element
  const userNameDisplay = document.getElementById('userNameDisplay');

  if (loggedInUser) {
      // Update the sidebar logo with the user's name
      userNameDisplay.textContent = `Welcome, ${loggedInUser}`;
  } else {
      // If no user is logged in, redirect to login page
      window.location.href = "admin-login.html";
  }
});
