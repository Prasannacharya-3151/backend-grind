const express = reqired("express")
const jwt = require("jsonwebtoken")

const app = express();

app.post("/signup", function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    
    users.push({
        username: username,
        password: password
    })

    res.jsn({
        msg: "you are signed up"
    })
})

app.post("/signin", function(req, res){


})

app.get("/me", function(req, res) {

})
