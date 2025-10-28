const input = document.querySelector("#usernameInput");
const suggestions = document.querySelector("#suggestions");
const result = document.querySelector("#result");
const themeToggle = document.querySelector("#themeToggle");

let debounceTimer;

// --- THEME TOGGLE ---
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

// Load last theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

// --- LIVE SEARCH (Debounce) ---
input.addEventListener("input", () => {
  clearTimeout(debounceTimer);
  const query = input.value.trim();
  if (!query) {
    suggestions.classList.remove("active");
    return;
  }
  debounceTimer = setTimeout(() => liveSearch(query), 500);
});

async function liveSearch(query) {
  const res = await fetch(`https://api.github.com/search/users?q=${query}&per_page=5`);
  const data = await res.json();
  if (data.items) {
    suggestions.innerHTML = data.items
      .map(user => `<div data-username="${user.login}">@${user.login}</div>`)
      .join("");
    suggestions.classList.add("active");
  }
}

// --- SELECT USER ---
suggestions.addEventListener("click", e => {
  const username = e.target.getAttribute("data-username");
  if (username) {
    input.value = username;
    suggestions.classList.remove("active");
    fetchUser(username);
  }
});

// --- FETCH USER + REPOS ---
async function fetchUser(username) {
  result.classList.remove("visible");
  result.innerHTML = `<p>Loading...</p>`;

  try {
    const userRes = await fetch(`https://api.github.com/users/${username}`);
    if (!userRes.ok) throw new Error("User not found");
    const user = await userRes.json();

    const reposRes = await fetch(`${user.repos_url}?sort=updated&per_page=100`);
    const repos = await reposRes.json();

    renderUser(user, repos);
  } catch (err) {
    result.innerHTML = `<p>${err.message}</p>`;
  }
}

function renderUser(user, repos) {
  const repoList = repos
    .map(repo => `
      <li>
        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
        <span>⭐ ${repo.stargazers_count}</span>
      </li>
    `)
    .join("");

  result.innerHTML = `
    <div class="user-card fade-in">
      <img src="${user.avatar_url}" alt="${user.login}" />
      <h2>${user.name || user.login}</h2>
      <p>${user.bio || ""}</p>
      <p><strong>${user.followers}</strong> followers · <strong>${user.following}</strong> following</p>
      <a href="${user.html_url}" target="_blank">View on GitHub</a>
      <h3>Repositories (${repos.length})</h3>
      <ul class="repo-list">${repoList}</ul>
    </div>
  `;
  result.classList.add("visible");
}
