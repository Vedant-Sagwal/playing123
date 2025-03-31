const express = require("express");
const app = express();
const http = require("http").createServer(app);
const path = require("path");
const { setupSocket } = require("./socket");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");

const indexRoute = require("./routes.js");

app.use("/", indexRoute);

setupSocket(http)

var portNo = http.listen(3000, ()=> {
    console.log(`port no. : ${portNo.address().port}`);
});
