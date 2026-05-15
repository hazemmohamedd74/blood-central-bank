# 🩸 Blood Central Bank

A back-end REST API for managing a blood bank system. Enables donor registration, blood inventory tracking, blood type search, and an admin dashboard — built with **Node.js**, **Express**, and **MongoDB**.

---

## 🚀 Features

- **Donor Registration & Management** — Register donors with personal info and blood type
- **Blood Inventory Tracking** — Monitor available blood units by type in real time
- **Blood Requests & Search** — Search for available blood by type to fulfill requests
- **Admin Dashboard** — Admins manage donors, inventory, and incoming requests
- **Secure Authentication** — JWT-based login with protected routes

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB + Mongoose |
| Authentication | JWT |

---

## 📁 Project Structure

```
blood-central-bank/
│
├── src/
│   ├── modules/
│   │   ├── auth/
│   │   ├── donor/
│   │   ├── inventory/
│   │   ├── request/
│   │   └── admin/
│   ├── middlewares/
│   ├── utils/
│   └── app.js
│
├── .env.example
├── package.json
└── README.md
```

---

## 📡 API Endpoints

### 🔑 Auth
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new donor |
| POST | `/api/auth/login` | Login and receive tokens |
| POST | `/api/auth/refresh` | Refresh access token |
| POST | `/api/auth/logout` | Logout |

### 🧑🤝🧑 Donors
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/donors` | Get all donors *(Admin only)* |
| GET | `/api/donors/:id` | Get donor profile |
| PUT | `/api/donors/:id` | Update donor info |
| DELETE | `/api/donors/:id` | Delete donor *(Admin only)* |

### 🩸 Blood Inventory
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/inventory` | Get full blood inventory |
| GET | `/api/inventory/:bloodType` | Search available units by blood type |
| PUT | `/api/inventory/:bloodType` | Update inventory units *(Admin only)* |

### 📋 Blood Requests
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/requests` | Submit a blood request |
| GET | `/api/requests` | Get all requests *(Admin only)* |
| GET | `/api/requests/:id` | Get request details |
| PUT | `/api/requests/:id` | Update request status *(Admin only)* |

---

## 🩸 Blood Types Supported

`A+` `A-` `B+` `B-` `AB+` `AB-` `O+` `O-`

---

## 👤 Author

**Hazem Mohamed Abo Okil**
- GitHub: [@hazemmohamedd74](https://github.com/hazemmohamedd74)
- Email: Hazemmmohamedd74@gmail.com

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

