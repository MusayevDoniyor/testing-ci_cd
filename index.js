const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is working");
});

app.get("/hello", (req, res) => {
  res.status(200).json({ message: "Hello World, Coder!" });
});

app.post("/sum", (req, res) => {
  const { a, b } = req.body;

  res.status(200).json({ sum: +a + +b });
});

app.listen(3000, () => {
  console.log("🚀 Server is running on port 3000");
});

module.exports = app;
