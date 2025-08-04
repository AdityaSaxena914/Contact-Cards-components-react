# 📇 Contact Cards SPA - React

A React-based Single Page Application (SPA) to create and display contact cards using reusable components.

## 🚀 Features

- Modular component structure: `AddUser`, `UserCard`, `UserList`
- User form with input validation
- Dynamic card rendering based on user input
- Conditional image rendering (male/female)
- Dark gradient background
- Responsive layout using CSS Flexbox

## 🗂️ Folder Structure

```
contact-cards/
├── node_modules/
├── public/
│ └── vite.svg
├── src/
│ ├── assets/
│ ├── components/
│ │ ├── AddUser/
│ │ │ └── AddUser.js
│ │ ├── UserCard/
│ │ │ └── UserCard.js
│ │ └── UserList/
│ │ └── UserList.js
│ ├── App.css
│ ├── App.jsx
│ ├── index.css
│ ├── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vite.config.js
```


## 🛠️ Tech Stack 

- React
- JavaScript (ES6+)
- Vite
- CSS (Vanilla)

## 📝 Validation Rules

- All fields (name, gender, age) are required
- Name must be a string (not just numbers)
- Age must be a positive number (no zero/negative)
- Gender must be either **male** or **female**

## 📦 Setup & Run

```
npm install
npm run dev
```
🧑‍💻 Author
```
Aditya Saxena
```