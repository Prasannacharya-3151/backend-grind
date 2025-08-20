const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "kirat123123"

const app = express();
app.use(express.json());

const users = [];

function logger(req, res, next){
    console.log(req.method + " request came");
        next();
}

//localhost:3000
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
} )

app.post("/signup", function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    users.push({
        useraname:username,
        password: password
    })
})

res.json({
    msg: "you are signed in"
})


app.post("/signin", function(req, res){
    const username = req.body.usrename;
    const password = req.body.password;

    let foundUser = null;

    for (let i = 0; i<users.length; i++){
        if(users[i].useraname == username && users[i].password == password){
            foundUser = users[i];
        }
    }

    if(!foundUser){
        res.json({
            msg: "credential incorrect"
        })
        return
    } else {
        const token = jwt.sign({
            username: users[i].username
        }, JWT_SECRET);
        res.header("jwt", token);

        res.header("random", "harikirat");

        res.json({
            token: token
        })
    }
})

function auth(req, res, next) {
    
}