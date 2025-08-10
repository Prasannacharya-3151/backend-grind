const express = require("express")
const app = express()
const PORT = 3000;

app.use(express.json());

app.get ("/",(req,res)=>{
    res.json({
        message: "welcome to the first API"
    })
})

app.get("/users", (req, res)=>{
    res.json([
        {id:1, name:"suhas"},
        {id:2, name:"kirini"}
    ]
    )}
)
