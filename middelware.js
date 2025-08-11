const express = require("express");

const app = express();

app.use(express.json());

function checkTicket(req,res,next){
    const hasTicket = req.query.ticket;
    if(hasTicket==="true"){
        next()
    }else{
       
            res.send("u dont have ticket pls go back and take a ticket")
        
    }
}

function checkAge(req,res,next){
    const age = parseInt(req.query.age);
    if(age>=10){
        next()
    }else{
        
           res.json("your age ia atleast more then 10")
      
    }
}

function checkVIP(req, res, next){
    const isVIP = req.query.VIP==="true"
    if(isVIP){
        
            console.log("VIP has granted to your ticket")
       
    }else{
        next()
    }
}

app.get("/wonderla/ride", checkTicket, checkAge, checkVIP, (req, res)=>{
    res.json({
        message :"welcome to the wonderla riding"
    })
})

app.listen(3000);