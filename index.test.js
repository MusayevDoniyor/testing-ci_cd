const request = require("supertest");
const app = require("./index");

describe("Hello Coder", () => {
  it("Returns Hello World, Coder", async () => {
    const response = await request(app).get("/hello");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("message");
    expect(response.body.message).toBe("Hello World, Coder!");
  });
});
describe("Calculate sum", () => {
  it("Returns sum of two numbers", async () => {
    const body = { a: 5, b: 7 };
    const response = await request(app).post("/sum").send(body);

    expect(response.body).toHaveProperty("sum");
    expect(typeof response.body.sum).toBe("number");
    expect(response.body.sum).toBe(body.a + body.b);
  });
});
