# 🔍 GitHub Viewer

A clean and interactive web app that lets you **search GitHub users in real time**, view their profiles, and explore their repositories — all in one place.

🔗 **Live Demo:** https://nerdblud.github.io/GithubViewer/

---

## ✨ Features

- 🔎 **Live user search** with debounce (GitHub API)
- 👤 View **GitHub user profiles** (avatar, bio, followers, following)
- 📦 List **all public repositories**, sorted by last update
- ⭐ See repository **star counts**
- 🌗 **Dark / Light mode** with saved preference
- ⚡ Fast, minimal, and responsive UI
- 🧠 No frameworks — **pure HTML, CSS, and JavaScript**

---

## 🛠️ Built With

- **JavaScript (Vanilla)**
- **GitHub REST API**
- **HTML5**
- **CSS3**
- **LocalStorage** (for theme persistence)

---

## 🚀 How It Works

1. Start typing a GitHub username
2. Live suggestions appear using GitHub’s search API
3. Select a user to fetch:
   - Profile information
   - Followers & following
   - Public repositories
4. Toggle between **dark and light themes** anytime

---

## 📂 Project Structure

```

github-viewer/
│
├── index.html
├── style.css
└── script.js

```

---

## ⚠️ API Notes

- Uses the **public GitHub API**
- No authentication required
- Subject to GitHub’s unauthenticated rate limits

---

## 👨‍💻 Author

**NerdBlud**  
GitHub: https://github.com/NerdBlud

---

## 📜 License

This project is open-source and available under the **MIT License**.
