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
        username:username,
        password: password
    })
    res.json({
    msg: "you are signed in"
  })
})

//we should check if a user with this username already exist



app.post("/signin", function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;

    for (let i = 0; i<users.length; i++){
        if(users[i].username == username && users[i].password == password){
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
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);

    if(decodedData.username){
        //req = {status, headers....,, username, password, userFirstName, random, ":123123"}
        req.username = decodedData.usernamenext()
    } else {
        res.json({
            msg: "you are not logged in"
        })
    }
}

app.get("/me",  auth, function(req, res){
    //req = {status, headers...., username, password, userFirstName, random, ":123123"}
    const currentUser = req.username;
    //const token = req.heders.token;
    //const decodedData = jwt.verify(token, JWT_SECRET);
    //const currrentUser = decodedData.username

    for (let i=0; i< users.length; i++) {
        if (users[i].username == currentUser) {
            foundUser = users[i];
        }
    }

    res.json({
        username: foundUser.username,
        password: foundUser.password
    })
})

app.listen(3000, function(){
    console.log("server is running on port 3000");
})