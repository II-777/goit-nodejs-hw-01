---
title: README
date: 2024-09-17 22:50
author: II-777
gitea: none
include_toc: true
tags: goit-nodejs hw-01
---

# goit-nodejs-hw-01

A simple contact management CLI project built with Node.js.
It uses the `@faker-js/faker` library to generate fake contact data and allows you to add, list, count, or remove contacts via various utility scripts.

## 📚 Table of Contents

* [🛠 Features](#-features)
* [📁 Project Structure](#-project-structure)
* [📦 Installation](#-installation)
* [🧪 Usage](#-usage)
* [📚 Tech Stack](#-tech-stack)
* [⚙️ Scripts in Detail](#️-scripts-in-detail)
* [🧹 Code Style](#-code-style)
* [👤 Author](#-author)


## 🛠 Features

* Add a single or multiple fake contacts
* List all saved contacts
* Count existing contacts
* Remove the last contact
* Clear all contacts from the database
* Read/write operations on a local JSON "database"


## 📁 Project Structure

```plaintext
.
├── eslint.config.js
├── package.json
├── README.md
└── src
    ├── constants            # Constants like path definitions
    ├── db                   # JSON file acting as a local database
    ├── index.js             # Entry point (optional/extendable)
    ├── scripts              # CLI utility scripts
    ├── test                 # Testing scripts (currently basic)
    └── utils                # Helper functions for reading/writing/creating contacts
```


## 📦 Installation

```bash
git clone https://github.com/your-username/goit-nodejs-hw-01.git
cd goit-nodejs-hw-01
npm install
```


## 🧪 Usage

Run scripts via `npm run` (configured in `package.json`) or manually with `node`:

| Action              | Command               |
| ------------------- | --------------------- |
| Generate 5 contacts | `npm run generate`    |
| Add one contact     | `npm run add-one`     |
| List all contacts   | `npm run get-all`     |
| Count contacts      | `npm run count`       |
| Remove last contact | `npm run remove-last` |
| Remove all contacts | `npm run remove-all`  |

Or manually:

```bash
node src/scripts/generateContacts.js
node src/scripts/addOneContact.js
node src/scripts/getAllContacts.js
node src/scripts/countContacts.js
node src/scripts/removeLastContact.js
node src/scripts/removeAllContacts.js
```


## 📚 Tech Stack

* **Node.js** (ES Modules)
* **Faker** – [@faker-js/faker](https://www.npmjs.com/package/@faker-js/faker)
* **ESLint** – For linting and code quality
* **EditorConfig / Prettier** – For consistent formatting


## ⚙️ Scripts in Detail

Each script in the `src/scripts` folder performs a specific task related to contact management.
Contacts are stored in `src/db/db.json`.

Example contact structure:

```json
{
  "id": "uuid",
  "name": "John Doe",
  "phone": "+123456789",
  "email": "john@example.com",
  "job": "Software Developer"
}
```


## 🧹 Code Style

This project includes:

* `.eslintrc` using `@eslint/js`
* `.editorconfig`
* `.prettierrc`

Linting:

```bash
npx eslint src/
```


## 👤 Author

**II-777**
Project for GoIT Node.js Homework #1
