const express = require('express');
const bodyParser = require('body-parser');
const notesRoutes = require("./routes/NoteRoutes")
const mongoose = require('mongoose');

const SERVER_PORT = 3001

const DB_URL = "mongodb+srv://101277841_Renzzi:qw12345@cluster0.prgemqj.mongodb.net/f2022_fullstack?retryWrites=true&w=majority"
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.Promise = global.Promise;

// TODO - Update your mongoDB Atals Url here to Connect to the database
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.use("/", notesRoutes)

app.get('/', (req, res) => {
    res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
});


app.listen(SERVER_PORT, () => {
    console.log("Server is listening on port 3000");
});