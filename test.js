const mongoose = require("mongoose");
const request = require("supertest");
const app = require("./server");
const taskRoutes = require('./routes/task-routes');
const taskApiRoutes = require('./routes/api-task-routes');
const express = require('express');
const authMiddleware = require('./middleware/authMiddleware');

const { 
  getTask, 
  getTasks,
} = require('./controllers/api-task-controller');

const router = express.Router();

require("dotenv").config();

/* Connecting to the database before each test. */
beforeEach(async () => {
  await mongoose.connect(process.env.MONGO_URL);
});

/* Closing database connection after each test. */
afterEach(async () => {
  await mongoose.connection.close();
});

describe("GET /tasks", () => {
  it("should return all tasks", async () => {
    const res = router.get('/api/tasks',authMiddleware, getTasks);
    console.log(res);
    console.log(res.statusCode);
    // expect(res.statusCode).toBe(200);
    // expect(res.body.name).toBe("Task 1");
  });
});

// describe("POST /add-task", () => {
//   it("should create a task", async () => {
//     const res = await request(app).post("/add-task").send({
//       name: "Task12345",
//       status: "In progress",
//       author: "mikhail.starkov@tul.cz",
//     });
//     expect(res.statusCode).toBe(201);
//     expect(res.task.text).toBe("Task12345");
//   });
// });

// describe("PUT /api/products/:id", () => {
//   it("should update a task", async () => {
//     const res = await request(app)
//       .patch("/api/tasks/6331abc9e9ececcc2d449e44")
//       .send({
//         text: "Change text from test"
//       });
//     expect(res.statusCode).toBe(200);
//     expect(res.body.price).toBe(104);
//   });
// });

// describe("DELETE /tasks/:id", () => {
//   it("should delete a task", async () => {
//     const res = await request(app).delete(
//       "/api/tasks/6331abc9e9ececcc2d449e44"
//     );
//     expect(res.statusCode).toBe(200);
//   });
// });
