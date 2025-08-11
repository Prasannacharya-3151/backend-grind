const express = require("express");

const app = express();

app.use(express.json());

function checkTicket(re,res,next){
    const hasTicket = req.query.ticket;
    if(hasTicket==="true"){
        next()
    }else{
        res.json({
            message:"ticket is not there pls go back and take a ticket"
        })
    }
}

function checkAge(req,res,next){
    const age = parseInt(req.query.age);
    if(age>=10){
        next()
    }else{
        res.json({
            message:"your age ia atleast more then 10"
        })
    }
}

function checkVIP(req, res, next){
    const checkVIP = req.query.checkVIP==="true"
    if(ischeckVIP){
        res.json({
            message:"VIP has granted to your ticket"
        })
    }else{
        next()
    }
}

app.get("/wonderla/ride", checkTicket, checkAge, checkVIP, (req, res)=>{
    res.json({
        message :"welcome to the wondela riding"
    })
})

app.listen(3000);