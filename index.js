const express = require("express");
const app = express();

app.get("/multiply", (req,res)=>{
    const a = req.query.a
    const b = req.query.b
    res.json({
        result : a*b
    })
})

app.get("/sum", (req, res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
    result: `Result: ${a+b}`
    })
})

app.get("/divide", (req, res)=>{
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
     if(b==0){
        res.json({
            error: "not divided by 0"
        })
     }else{
    res.json({
        result: a / b
    })
}
})


app.get("/substract",(req, res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        result : a - b
    })
})

app.listen(3000);

