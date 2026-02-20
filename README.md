# CU Fest Website — Experiment 4

This project is an extension of Experiment 3 and demonstrates advanced React concepts including global state management, reducer-based state transitions, and performance optimization.

---

## 🎯 Objective

The objective of this experiment is to:

* Implement global state using Context API
* Manage complex state using useReducer
* Optimize derived calculations using useMemo
* Extend a multi-page React application
* Maintain consistent UI/UX across pages

---

## 🚀 Features Implemented

### ✅ Multi-Page Navigation

React Router is used for seamless navigation between pages:

* Home
* Event Details
* Contact
* RSVP (New Page for Experiment 4)

---

### ✅ Global State Management (Context API)

Global state is implemented using Context API.

**Stores:**

* Light/Dark theme
* Task state

**Used in:**

* Navbar
* ThemeToggle
* HeroSection
* RSVP Page

---

### ✅ State Management using useReducer

A task manager is implemented using useReducer.

**Actions implemented:**

* ADD_TASK
* TOGGLE_TASK
* DELETE_TASK

This demonstrates structured and scalable state transitions.

---

### ✅ Performance Optimization using useMemo

useMemo is used to optimize derived calculations:

* Completed task count
* Total task display

This prevents unnecessary recalculations.

---

### ✅ Theme Toggle (Light/Dark Mode)

* Implemented using Context API
* Applies theme globally
* UI adapts using Bootstrap utility classes

---

### ✅ RSVP Page (Experiment 4 Page)

This page demonstrates:

* reducer usage
* context usage
* memo optimization
* real-time UI updates

---

## 🧩 UI & Design

* Clean and modern Bootstrap layout
* Consistent design across pages
* Responsive for mobile & desktop
* Proper spacing and typography

---

## 📁 Folder Structure

```
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── HeroSection.jsx
│   ├── EventCards.jsx
│   └── ThemeToggle.jsx
│
├── context/
│   └── AppContext.jsx
│
├── reducer/
│   └── appReducer.js
│
├── pages/
│   ├── Home.jsx
│   ├── EventDetails.jsx
│   ├── Contact.jsx
│   └── RSVP.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🛠 Technologies Used

* React (Vite)
* React Router DOM
* Bootstrap
* Context API
* useReducer Hook
* useMemo Hook

---

## 📸 Screenshots

Screenshots of the application pages are available in the `/screenshots` folder.

Suggested screenshots:

* Home page
* RSVP page
* Dark mode view

---

## ▶️ Run the Project

```bash
npm install
npm run dev
```

---

## 🌐 Deployment

This project is deployed using **Vercel**.

Deployment format:

```
{uid}-4-{name}.vercel.app
```

Example:

```
23bai70354-4-rijuta.vercel.app
```

---

## 🎓 Learning Outcomes

* Understanding global state with Context API
* Managing state transitions using reducers
* Optimising performance using useMemo
* Building scalable multi-page React applications
* Creating responsive modern UI

---

## 👩‍💻 Author

**Rijuta Sharma**
UID: 23BAI70354
