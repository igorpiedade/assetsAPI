import express from "express";

const app = express();

app.get("/", (request, response) =>
  response.json({
    message: "AssestAPI - Manage your investments and leave it work for you.",
  })
);

app.listen(3333, () => console.log("Server Running!"));
