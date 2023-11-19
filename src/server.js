//Initialization
const express = require("express");
const app = express();

const mongoose = require("mongoose");
const Note = require("./models/Note");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json);

const mongoDbPath = "mongodb+srv://Taufiq:TaufiqXD07@cluster0.fitrsk0.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoDbPath).then(function () {
 // Home route
    app.get("/", function (req, res) {
        const response = { message: "Api Works" };
        res.json(response);
    });

    const noteRouter = require("./routes/Note")
    app.use("/notes", noteRouter);
});

//Startting the Server on Port

const Port = process.env.Port || 5000;
app.listen(Port, function () {
    console.log("Server has Started at port 5000" + Port);
}); 