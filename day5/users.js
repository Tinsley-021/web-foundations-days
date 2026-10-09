const loadButton = document.querySelector("#load-users");
const filterInput = document.querySelector("#filter-input");
const status = document.querySelector("#status");
const usersList = document.querySelector("#users-list");

let users = [];

function renderUsers() {
  const query = filterInput.value.trim().toLowerCase();

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(query)
  );

  usersList.replaceChildren();

  for (const user of filteredUsers) {
    const item = document.createElement("li");
    const name = document.createElement("span");
    const details = document.createElement("span");

    name.className = "user-name";
    name.textContent = user.name;

    details.className = "user-details";
    details.textContent =
      `${user.email} · ${user.address.city} · ${user.company.name}`;

    item.append(name, details);
    usersList.append(item);
  }

  if (filteredUsers.length === 0) {
    status.textContent = users.length
      ? "No users match your filter."
      : "No users loaded yet.";
  } else {
    status.textContent =
      `Showing ${filteredUsers.length} of ${users.length} users.`;
  }
}

async function loadUsers() {
  loadButton.disabled = true;
  status.textContent = "Loading users...";
  usersList.replaceChildren();

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error("Invalid user data received.");
    }

    users = data;
    renderUsers();
  } catch (error) {
    users = [];
    usersList.replaceChildren();
    status.textContent =
      "Could not load users. Check your connection and try again.";
  } finally {
    loadButton.disabled = false;
  }
}

loadButton.addEventListener("click", loadUsers);

filterInput.addEventListener("input", renderUsers);
