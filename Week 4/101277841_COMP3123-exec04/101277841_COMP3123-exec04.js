const express = require("express")
const SERVER_PORT = 8088
const app = express()

app.get("/", (req,res) => {
    res.send("<h1>Lab 4 Exercise JS</h1>")
})

app.get("/hello", (req, res) => {
    res.send("<h1>Hello Express JS")
})

app.get("/user", (req, res) => {
    var user = {
        firstname: "Pritesh", 
        lastname: "Patel"
    }
    res.send(JSON.stringify(user))
})

app.post("/user/:firstname/:lastname", (req,res) => {
    res.send(JSON.stringify(req.params))
})


app.listen(SERVER_PORT, () => {
    console.log(`Server Started at http://localhost:${SERVER_PORT}`)  
})