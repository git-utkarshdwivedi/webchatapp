const express = require("express"); //require is part of node.js
const dotenv = require("dotenv"); //to hide port
const { chats } = require("./data/data"); //uses destructuring assignment to import a specific property (chats) from a module

const app = express();
dotenv.config(); //to hide port

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  console.log(req.params.id);
  const singleChat = chats.find((c) => c._id === req.params.id);
  //find method is a handy built-in function in JavaScript that efficiently searches
  //an array for the first element that meets a specified test condition
  res.send(singleChat);
});

const PORT = process.env.PORT || 5000; //to hide port

app.listen(PORT, console.log(`Server Started on PORT ${PORT}`));
