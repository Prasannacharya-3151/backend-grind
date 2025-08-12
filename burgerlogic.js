const express = require("express")
const app = express();

app.use(express.json());

let burgers = ["cheesBurger"]

app.get("/",(req,res)=>{
    
    res.json({
        message:`available burger ${burger}`
    })
})

app.post("/",(req,res)=>{
    const newBurger = req.body.burger;
    burgers.push(newBurger)
    console.log(burgers)
    res.json({
        message:newBurger,
        burgers: burgers
    })
})

app.put("/",(req,res)=>{

})

app.delete("/",(req,res)=>{

})

app.listen(3000)