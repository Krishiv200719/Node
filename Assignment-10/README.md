## Assignment 10

A RESTful backend API built with **Express.js**, **Firebase Admin SDK (Cloud Firestore)**, and **Joi Validation**, following a clean modular architecture.

---

## Objective

The objective of this assignment is to:
- Connect an Express.js backend application to **Google Firebase Firestore** using the **Firebase Admin SDK**.
- Implement schema-based request validation using **Joi** to validate input data before database insertion.
- Build a `POST /api/users` endpoint to store validated user details in the Firestore `users` collection.
- Return appropriate HTTP status codes and structured responses for both success (`201 Created`) and validation failures (`400 Bad Request`).
- Organize the project into dedicated modules: `config/`, `schema/`, and `router/`.
- Test and verify the API using **Thunder Client** and inspect stored documents in the **Firebase Cloud Firestore Console**.


## Screenshots

### 1. Successful Firebase Connection and Server Startup
Server initialization on port 5000 confirming successful Firebase connection.

![Firebase Connection and Server Startup](./screenshots/1.png)

---

### 2. Successful POST Request (Thunder Client)
Thunder Client executing a `POST` request to `/api/users` with valid data, returning `201 Created` with a new `userId`.

![Successful POST Request](./screenshots/2.png)

---

### 3. Stored Document in Firebase Firestore Console
Firebase Cloud Firestore console verifying the new document saved inside the `users` collection.

![Firestore Document](./screenshots/3.png)

---

### 4. Schema Validation Error Handling
Thunder Client testing `POST /api/users` with invalid inputs, returning `400 Bad Request` with specific validation error messages.

![Validation Error Response](./screenshots/4.png)

---

