import express from "express";
export const message = "Hello from backend!";

const app = express();
app.get("/hello", (req, res) => {
  res.json({ message });
});

app.listen(3000);