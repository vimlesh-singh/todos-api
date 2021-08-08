const app = require("../app");
const supertest = require("supertest");

test("GET /api/todos", async () => {
  const todos = { task: "walking dog", id: 1, isCompleted: false };

  await supertest(app)
    .get("/api/todos")
    .expect(200)
    .then(response => {
      // Check type and length
      expect(Array.isArray(response.body)).toBeTruthy();
      expect(response.body.length).toEqual(7);

      // Check data
      expect(response.body[0].id).toBe(todos.id);
      expect(response.body[0].task).toBe(todos.task);
      expect(response.body[0].isCompleted).toBe(todos.isCompleted);
    });
});
