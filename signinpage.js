const express = require("express");

const app = express();

app.use(express.json());

app.post("/signup", function (req, res){
    res.json({
        msg:"you have signed up"
    })
})

app.post("/signin", function(req, res){


})

app.listen(3000, function(){
    console.log("Server is running on port 3000");
})