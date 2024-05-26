const express = require("express"); //require is part of node.js
const dotenv = require("dotenv"); //to hide port
const { chats } = require("./data/data"); //uses destructuring assignment to import a specific property (chats) from a module
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

dotenv.config(); //to hide port

connectDB();
const app = express();

app.use(express.json()); // to accept JSON data

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 5000; //to hide port

app.listen(PORT, console.log(`Server Started on PORT ${PORT}`));
