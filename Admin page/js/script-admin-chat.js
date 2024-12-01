const searchBar = document.querySelector(".search input"),
  searchIcon = document.querySelector(".search button");
const usersList = document.querySelector(".users-list");
const chatWindow = document.querySelector(".chat-window");
const messagesDiv = document.getElementById("messages");
const messageInput = document.getElementById("messageInput");
const sendMessageButton = document.getElementById("sendMessage");
const closeChatButton = document.querySelector(".close-chat");


// Example static data for users
const users = [
  { id: 1, name: "Alice Johnson", status: "Online", img: "img/profile.svg" },
  { id: 2, name: "Bob Smith", status: "Offline", img: "img/profile.svg" },
  { id: 3, name: "Charlie Brown", status: "Online", img: "img/profile.svg" },
  { id: 4, name: "Diana Prince", status: "Away", img: "img/profile.svg" },
  { id: 5, name: "Daniel Daniel", status: "Away", img: "img/profile.svg" },
  { id: 6, name: "Dylan Rodrguez", status: "Away", img: "img/profile.svg" },
  { id: 7, name: "Kobe Bryant", status: "Away", img: "img/profile.svg" },
];

// Function to render users dynamically
function renderUsers(userList) {
  usersList.innerHTML = ""; // Clear current list
  userList.forEach((user) => {
    const userItem = `
      <div class="user-item" onclick="startChat(${user.id}, '${user.name}')">
        <img src="${user.img}" alt="User Image">
        <div class="details">
          <span>${user.name}</span>
          <p>${user.status}</p>
        </div>
      </div>
    `;
    usersList.innerHTML += userItem;
  });
}
// Function to handle the chat initiation
function startChat(userId, userName) {
  // Redirect to chat page with user data in the query string
  window.location.href = `chatroom.html?id=${userId}&name=${userName}`;
}

// Initial render of all users
renderUsers(users);

// Add click event to each user item
usersList.addEventListener("click", (e) => {
  if (e.target.closest(".user-item")) {
    const userId = e.target.closest(".user-item").getAttribute("data-id");
    const user = users.find(u => u.id == userId);
    
    // Show the chat window and update its content
    document.querySelector(".chat-username").textContent = user.name;
    document.querySelector(".chat-status").textContent = user.status;
    chatWindow.style.display = "block";

    // Optionally, clear previous messages
    messagesDiv.innerHTML = "";
  }
});

// Send message functionality
sendMessageButton.addEventListener("click", () => {
  const message = messageInput.value.trim();
  if (message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.textContent = message;
    messagesDiv.appendChild(messageElement);

    // Clear the input field after sending the message
    messageInput.value = "";
  }
});

// Close the chat window
closeChatButton.addEventListener("click", () => {
  chatWindow.style.display = "none";
  messagesDiv.innerHTML = ""; // Clear messages when closing
});
// Toggle search bar visibility
searchIcon.onclick = () => {
  searchBar.classList.toggle("show");
  searchIcon.classList.toggle("active");
  searchBar.focus();
  if (searchBar.classList.contains("active")) {
    searchBar.value = "";
    searchBar.classList.remove("active");
    renderUsers(users); // Reset user list
  }
};

// Filter users based on search input
searchBar.onkeyup = () => {
  const searchTerm = searchBar.value.toLowerCase();
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm)
  );
  renderUsers(filteredUsers);
};

// Optional: Update user statuses every 5 seconds
setInterval(() => {
  // Simulate status changes
  users.forEach((user) => {
    user.status = Math.random() > 0.5 ? "Online" : "Offline";
  });
  if (!searchBar.classList.contains("active")) {
    renderUsers(users);
  }
}, 5000);

