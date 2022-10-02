const express = require("express")
const SERVER_PORT = 8088
const app = express()

//Displayed when accessing the server
app.get("/", (req, res) => {
    res.send("<h1>Lab 4 Exercise JS</h1>")
})

//GET request: /hello return "Hello Express JS"
app.get("/hello", (req, res) => {
    res.send("<h1>Hello Express JS")
})

// //GET request: /user return that uses QueryString to send values
//http://localhost:8088/user?firstname=Pritesh&lastname=Patel
app.get("/user", (req, res) => {
    const firstname = req.query.firstname
    const lastname = req.query.lastname

    res.send({
        firstname,
        lastname
    })
})

//POST request: /user return that uses Path Parameter to send values
//http://localhost:8088/user/Pritesh/Patel
app.post("/user/:firstname/:lastname", (req, res) => {
    //res.send(JSON.stringify(req.params))
    const user = req.params
    var firstname = user.firstname
    var lastname = user.lastname

    const newUser = {
        firstname,
        lastname
    }
    res.json(newUser)
})

app.listen(SERVER_PORT, () => {
    console.log(`Server Started at http://localhost:${SERVER_PORT}`)
})