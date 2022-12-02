# 👨‍💻 Trello clone

This repository houses a clone of a popular web app called [Trello](https://trello.com). This is my first project in React.js, so it might not have the best codebase, but the app is still in development and is currently barely functional.

## 📋 Project scope

As I mentioned earlier, the app is still in development and it lacks a lot of planned features.

### What is currently in the app? 🟢

- Basic page layout.
- Basic styling using **WindiCSS**.
- Stores, that support adding, removing, editing and other advanced mutators.
- Test buttons for adding and deleting test entries.

### What isn't currently in the app? 🔴

- UI 💻
  - Creating your own cards.
  - Editing cards.
  - *Drag & Drop* behaviour.
  - Searching and filtering cards.

- Stores 🏪
  - Saving created cards into **localStorage**.

## Tech Stack

- ⚡ **Vite, React.js 18.2** with Typescript
- **Redux**
- 🍃 **WindiCSS, Bootstrap icons**
- **uuid**

## How to run locally

Running the project locally is easy, *but* for the best experience it is recommended to use `yarn` as the package manager. You could probably just ignore/delete yarn.lock and use npm instead, but I it is not recommended to mix them.

```bash
# Clone this repository
git clone https://github.com/StanawalkaWorld/<this-repo-name>

# Go into it and install dependencies
cd <this-repo-name>
yarn

# To run the project in dev mode
yarn dev

# To build the project and test it
yarn build
yarn preview
```

## Other plans

- 🔈 Adding images and audio.
- 🍿 Embedded videos from url and youtube.
- ✅ Checklists.
- 💬 Comments.
- 🚛 Exporting/Importing projects (with optional encryption).
