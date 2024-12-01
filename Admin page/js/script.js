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
      window.location.href = "admin-login.html";
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

// FOR CLIENT JS
// Handle edit button click
function editRow(button) {
  const row = button.closest("tr");
  const clientData = {
      name: row.children[0].textContent,
      services: row.children[1].textContent,
      date: row.children[2].textContent,
      time: row.children[3].textContent,
      payment: row.children[4].textContent
  };

  // Save client data to localStorage and redirect to edit page
  alert(`Editing client: ${clientData.name}`);
  localStorage.setItem("editClient", JSON.stringify(clientData));
  window.location.href = "edit-clients.html";
}

// Handle delete button click
function deleteRow(button) {
  const row = button.closest("tr");
  const clientName = row.children[0].textContent;

  // Confirm delete action
  if (confirm(`Are you sure you want to delete ${clientName}? This action cannot be undone.`)) {
      row.remove(); // Remove the row from the table
      alert(`${clientName} has been deleted.`);
  }
}

// Handle updating the table with saved changes
window.onload = function() {
  const updatedClient = JSON.parse(localStorage.getItem("updatedClient"));
  if (updatedClient) {
      const rows = document.querySelectorAll("#clientTable tr");
      rows.forEach((row) => {
          if (row.children[0].textContent === updatedClient.name) {
              row.children[1].textContent = updatedClient.services;
              row.children[2].textContent = updatedClient.date;
              row.children[3].textContent = updatedClient.time;
              row.children[4].textContent = updatedClient.payment;
          }
      });

      // Clear the updated client from localStorage
      localStorage.removeItem("updatedClient");
      alert("Client information updated successfully!");
  }
};

