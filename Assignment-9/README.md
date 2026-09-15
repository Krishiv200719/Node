# Assignment 9

---

## Objective

Extend the Express.js and MongoDB application from Assignment 8 to add **update (PATCH)** and **delete (DELETE)** operations on users using Mongoose.

## Project Structure

```
Assignment-9/
├── server.js
├── model/
│   └── userModel.js
├── schema/
│   └── userSchema.js
└── router/
    └── userRouter.js
```

## User Schema

| Field  | Type   | Required |
|--------|--------|----------|
| name   | String | Yes      |
| email  | String | Yes      |
| age    | Number | Yes      |
| course | String | Yes      |

## API Endpoints

| Method | Endpoint          | Description             |
|--------|-------------------|--------------------------|
| POST   | `/api/users`      | Add a new user          |
| GET    | `/api/users`      | Retrieve all users      |
| PATCH  | `/api/users/:id`  | Update an existing user |
| DELETE | `/api/users/:id`  | Delete an existing user |

## Error Handling

- Invalid MongoDB ID → `400 Bad Request`
- Invalid request data → `400 Bad Request`
- User not found → `404 Not Found`
- Server/database error → `500 Internal Server Error`

## Running the Project

```bash
npm install
node server.js
```

## Output & Testing

**1. Server started and connected to MongoDB (from Assignment 8):**

![Server running - Assignment 8](./screenshots/1.png)

**2. Added a new user via POST `/api/users`:**

![POST add user](./screenshots/2.png)

**3. User document created in MongoDB (Compass):**

![New user in Compass](./screenshots/3.png)

**4. Updated the user's `age` and `course` via PATCH `/api/users/:id`:**

![PATCH update user](./screenshots/4.png)

**5. Updated document reflected in MongoDB (Compass):**

![Updated document in Compass](./screenshots/5.png)

**6. Deleted the user via DELETE `/api/users/:id`:**

![DELETE user](./screenshots/6.png)

**7. Collection empty after deletion (Compass):**

![Empty collection in Compass](./screenshots/7.png)

**8. Server console log confirming update and delete operations:**

![Server console log](./screenshots/8.png)

## Conclusion

The PATCH and DELETE endpoints work as expected — user records can be successfully updated and removed from the MongoDB database, with proper validation and error handling in place.