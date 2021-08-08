const app = require("../app");
const supertest = require("supertest");

test("GET /api", async () => {
  const title = "Welcome to todo api";
  await supertest(app)
    .get("/api")
    .expect(200)
    .then(response => {
      // Check type and length
      expect(Array.isArray(response.body)).toBeTruthy();
      expect(response.body.length).toEqual(1);

      // Check data
      expect(response.body[0].title).toBe(title);
    });
});
