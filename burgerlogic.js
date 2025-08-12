const express = require("express")
const app = express();

app.use(express.json());

let burgers = ["cheesBurger"];

app.get("/",(req,res)=>{
    
    res.json({
        message:burgers
    })
})

app.post("/",(req,res)=>{
    const newBurger = req.body.burger;
    burgers.push(newBurger)
    
    res.json({
        message:newBurger,
        burgers: burgers
    })
})

app.put("/",(req,res)=>{
    const updateBurger = req.body.burgers
    burgers[0] = updateBurger

    res.json({
        msg: "burger upadted",
        burgers: burgers
        })

})

app.delete("/", (req,res)=>{
    burgers.shift()

    res.json({
        msg:"burger deleted",
       
    })

})

app.listen(3000)