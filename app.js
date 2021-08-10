const express = require("express");
const app = express();
const PORT = 3000;
const socket = require("socket.io");

const server = app.listen(PORT, () =>
  console.log(`Listening on port ${PORT}!`)
);

// Static files
app.use(express.static("public"));

// Socket setup
const io = socket(server);

io.on("connection", (socket) => {
  console.log("Made Socket Connection", socket.id);
});
