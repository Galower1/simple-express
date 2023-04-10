import express from "express";

const app = express();

app.get("/", (_req, res) => {
  res.sendStatus(200);
});

app.listen(3000, () => console.log("Server Started on 3000"));
