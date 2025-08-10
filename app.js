const express = require("express")
const app = express()
// const PORT = 3000;

app.use(express.json());

app.get ("/",(req,res)=>{
    res.json({
        message: "welcome to the first API"
    })
})

app.get("/users", (req, res)=>{
    res.json([
        {id:1, name:"Suhas"},
        {id:2, name:"Kirini"},
        {id:3, name:"Ranganth"}
    ]
    )}
);
app.post("/users", (req,res)=>{
    const newUser = req.body
    res.json({
        message:"user add successfully",
        user: newUser   // we are declaring qa property(property decalration)
    })
})

// app.listen(PORT,()=>{
//     comnsole.log(`server running on http://localhost:${PORT}`)
// })

app.listen(3000);
