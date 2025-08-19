const express = reqiure("express");
const jwt = reqire("jsonwebtoken");
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
            password:password
        })
    }
})