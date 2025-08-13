const express = require("express")

const app = express()

const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) =>{
    res.json({
        message:"welcome to my first API"
    })
})

app.post("/", (req, res)=>{
    const userData = req.body;
    res.json({
        message: "user data recieved",
        data : userData
    })
})

app.listen(PORT, () =>{
    console.log(`server is running on http://localhost:${PORT}`)
})
