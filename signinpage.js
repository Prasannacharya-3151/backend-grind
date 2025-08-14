const express = require("express");

const app = express();

app.use(express.json());

const users = [];

function generateToken(){
    return Math.random()
}

app.post("/signup", function (req, res){
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username : username,
        password : password
    })

    res.json({
        msg: "you are signed up"
    })

})

app.post("/signin", function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;

    for (let i = 0; i < users.length; i++){
        if(users[i].username == username && users[i].password == password){
            foundUser = users[i]
        }
        console.log(users)
      
    }

    if (foundUser){
        const token = generateToken();
        foundUser.token = token;
        res.json({
            token: token
        })
    } else {
        res.status(403).send({
            msg: "Invalid username or password"
        })
    }
    console.log(users)
    
})

app.get("/me", function(req, res){
    const token = req.headers.token;
    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].token == token) {
        foundUser = users[i]
        }
    }

    if (foundUser) {
        res.json({
            username : foundUser.username,
            password : foundUser.password
        })
    } else {
        res.json({
            msg: "token is invalid"
        })
    }
    
})

app.listen(3000, function(){
    console.log("Server is running on port 3000");
})