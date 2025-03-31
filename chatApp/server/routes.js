const express = require("express");
const app = express.Router();
const socketIN = require("./socket.js");

app.get("/", (req, res) => {
    res.render("../views/index.ejs");
});

app.get("/makeRoom", (req, res) => {
    res.render("../views/create_room.ejs");
})

app.get("/join_room", (req, res) => {
    res.render("../views/joinAlreadyRoom.ejs");
})

app.post("/createRoom", (req, res) => {
    const {roomName} = req.body; 
    console.log(roomName);
    res.redirect("/join_room");
})

app.post("/joinRoom", (req, res)=> {
    const {roomName} = req.body;
    const io = socketIN.getIO();
    io.emit("join-room", roomName);
    console.log(roomName);
    res.redirect("/sendMessage", {roomName});
})

app.get("/sendMessage", (req, res) => {
    res.render("messages.ejs");
})

app.post("bark_dog", (req, res) => {
    const {dogs_bark, room_name} = req.body;
    const io = socketIN.getIO();
    io.to(room_name).emit("message", {dogs_bark});
})

module.exports = app;
