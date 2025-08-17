const express = require("express")
const jwt = require("jsonwebtoken")
const JWT_SECRET = "ramdamharikiratloverkirar"
const app = express()

app.use(express.json())

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
})

app.post("/signin", function(req, res) {

    const username = req.body.username;
    const password = req.body.password;

//maps and filter

    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username == username && users[i].password == password) {
            foundUser = users[i];
        }
    }

    if (foundUser) {
        const token = jwt.sign({
            username : username,
        }, JWT_SECRET);

        // foundUser.token = token;

        res.json({
            token : token
        })
    } else {
        res.status(403).send({
            msg : "invalid useranem or password"
        })
    }
    console.log(users)
})

app.get("/me", function(req, res) {
    const token = req.headers.token;

    if (!token) {
        return res.status(401).send({ msg: "Token is required" });
    }

    let username;
    try {
        const decodedInformation = jwt.verify(token, JWT_SECRET);
        username = decodedInformation.username;
    } catch(err) {
        return res.status(403).send({ msg: "Invalid token" });
    }
    let foundUser = null;
    for (let i=0; i < users.length; i++) {
        if(users[i].username == username){
            foundUser = users[i];
        }
    }

    if (foundUser) {
        res.json({
            username: foundUser.username
        });
    } else {
        res.status(403).send({ msg: "Invalid token" });
    }
});


app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
