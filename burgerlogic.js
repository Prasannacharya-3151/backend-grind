const express = require("express")
const app = express();

app.use(express.json());

let burgers = ["Chees Burger"];

app.get("/", (req,res)=>{
    
    res.json({
        availableBurgers:burgers
    })
})

app.post("/", (req,res)=>{
    const newBurger = req.body.burger;
    burgers.push(newBurger)
    
    res.json({
        message:"Burger added",
        burgers: burgers
    })
})

app.put("/",(req,res)=>{
    const updateBurger = req.body.burger;
    burgers[0] = updateBurger;

    res.json({
        msg: "burger upadted",
        burgers: burgers
        })

})

app.delete("/", (req,res)=>{
    burgers.shift()

    res.json({
        msg:"burger deleted",
        burgers : burgers
       
    })

})

app.listen(3000)