const express = require("express")
const jwt = require("jsonwebtoken")
const JWT_SECRET = "harikirat123";

const app = express();

app.use(express.json());

const users = [];

app.post("/signup", function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    
    users.push({
        username: username,
        password: password
    })

    res.json({
        msg: "you are signed up"
    })
    console.log("users")
})

app.post("/signin", function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;

    for(let i = 0; i < users.length; i++){
        if (users[i].username == username && users[i].password == password) {
            foundUser = users[i]
        }
    }

    if(!foundUser) {
        res.json({
            msg:"Credential are mismatch"
        })
        return
    } else {
        
        const token = jwt.sign({
            username
        }, JWT_SECRET);

        res.json({
            token: token
        })
    }

})

app.get("/me", function(req, res) {
    const token = req.headers.token;

    const decodedData = jwt.verify(token, JWT_SECRET)

    // const decodedData = jwt.decode(token)
    if (decodedData.username) {
        let foundUser = null;

        for(let i = 0; i < users.length; i++){
            if (users[i].username == decodedData.username) {
                foundUser = users[i];
            }
        }

        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    }
})

app.listen(3000, function(){
    console.log("server started on port 3000")
})
