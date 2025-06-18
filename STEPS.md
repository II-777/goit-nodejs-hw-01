---
title: steps
date: 2025-06-18 16:07
author: II-777
---
tags: #

### ✅ Підготовка

1. **Клонуй шаблон проєкту.**
2. **Створи репозиторій `nodejs-hw-01` на GitHub.**
3. **Не змінюй назви змінних/функцій у шаблоні.**
4. **У `src/constants/contacts.js`:**

   * Ініціалізуй `PATH_DB` = `'src/db/db.json'`
5. **Встанови faker:**

   ```
   npm i -D @faker-js/faker
   ```

---

### 📦 Скрипти в `package.json`

| Команда               | Опис                           |
| --------------------- | ------------------------------ |
| `npm run get-all`     | Показати всі контакти          |
| `npm run generate`    | Згенерувати кілька контактів   |
| `npm run add-one`     | Додати один контакт            |
| `npm run count`       | Порахувати кількість контактів |
| `npm run remove-last` | Видалити останній контакт      |
| `npm run remove-all`  | Видалити всі контакти          |

---

### 🔧 Кроки реалізації

#### 🔹 Крок 1: Faker

Використовуй у `createFakeContact.js`:

* `faker.string.uuid()`
* `faker.person.fullName()`
* `faker.phone.number()`
* `faker.internet.email()`
* `faker.person.jobTitle()`

---

#### 🔹 Крок 2: Утиліти

* **`readContacts.js`**: зчитує масив контактів з `db.json`
* **`writeContacts.js`**: записує масив у `db.json`

---

#### 🔹 Крок 3: `generateContacts.js`

* Створи функцію `generateContacts(count)`
* Створює `count` нових контактів
* Додає їх до наявного масиву в `db.json`
* Зберігає масив назад

✅ Перевірка: `npm run generate`

---

#### 🔹 Крок 4: `addOneContact.js`

* Створи функцію `addOneContact()`
* Додає **1 новий контакт** до `db.json`

✅ Перевірка: `npm run add-one`

---

#### 🔹 Крок 5: `getAllContacts.js`

* Створи функцію `getAllContacts()`
* Повертає всі контакти з `db.json`

✅ Перевірка: `npm run get-all`

---

#### 🔹 Крок 6: `countContacts.js`

* Створи функцію `countContacts()`
* Повертає кількість контактів у `db.json`

✅ Перевірка: `npm run count`

---

#### 🔹 Крок 7: `removeAllContacts.js`

* Створи функцію `removeAllContacts()`
* Очищає весь масив у `db.json`

✅ Перевірка: `npm run remove-all`

---

#### 🔹 Крок 8: `removeLastContact.js`

* Створи функцію `removeLastContact()`
* Видаляє останній елемент із масиву, якщо є

✅ Перевірка: `npm run remove-last`

---

### 🔚 Готово!

Не забудь **залити код на GitHub** та надіслати **посилання на репозиторій**.
