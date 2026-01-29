# GitHub Viewer

A clean and interactive web application that allows users to search GitHub profiles in real time, view user details, and explore public repositories in a single interface.

Live Demo: [https://nerdblud.github.io/GithubViewer/](https://nerdblud.github.io/GithubViewer/)

---

## Features

* Live GitHub user search with debounce
* View GitHub user profiles (avatar, bio, followers, following)
* List all public repositories sorted by last update
* Display repository star counts
* Dark and light mode with saved user preference
* Fast, minimal, and responsive user interface
* Built with pure HTML, CSS, and JavaScript (no frameworks)

---

## Built With

* JavaScript (Vanilla)
* GitHub REST API
* HTML5
* CSS3
* LocalStorage (for theme persistence)

---

## How It Works

1. Enter a GitHub username
2. Live suggestions are fetched using the GitHub Search API
3. Selecting a user retrieves:

   * Profile information
   * Followers and following
   * Public repositories
4. Theme can be toggled between dark and light modes

---

## Project Structure

```
github-viewer/
│
├── index.html
├── style.css
└── script.js
```

---

## API Notes

* Uses the public GitHub API
* No authentication required
* Subject to GitHub unauthenticated rate limits

---

## Author

Name: NerdBlud
GitHub: [https://github.com/NerdBlud](https://github.com/NerdBlud)

---

## License

This project is open-source and available under the MIT License.

---
