const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "ramadomharkiratilovekiara"
const app = express();
app.use(express.json());

const users = []

app.post("/signup", function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username:username,
        password: password
    })

    res.json({
        msg:"you are signed up"
    })
})

app.post("/signin", function(req, res){
    const username = req.body.usrename;
    const password = req.body.password;

    let foundUser = null

    for (let i = 0; i< users.length; i++){
        if(users[i].username == username && users[i].password === password){
            foundUser = users[i];

        }
    }

    if(foundUser){
        const token = jwt.sign({
            username:username,
            password:password,
            firstname,
            lastname,
            courses:[]
        }, JWT_SECRET);

        res.json({
            token: token
        })
    } else {
        res.status(403).json({
            msg: "inavlid username or password"
        })
    }
    console.log("users")
    
})

app.get("/me", function(req, res) {
    const token = req.headers.token
    const decodedInformation = jwt.verify(token, JWT_SECRET);
    const unAuthDecodeinfo = decodedInformation.username;

    let foundUser = null;

    for (let i = 0; i< users.length; i++){
        if (users[i].username == username){
            foundUser = users[i]
        }
    }

    if (foundUser) {
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    } else {
        res.json({
            message: "toke invalid"
        })
    }
})


app.listen(3000, function(){
    console.log("server is running on port 3000")
})

