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
        user: newUser   // we are declaring a property(property decalration)
    })
})

// app.listen(PORT,()=>{
//     comnsole.log(`server running on http://localhost:${PORT}`)
// })

app.listen(3000);




// const input  = [1, 2, 3, 4, 5];

// constArray = [];

// for (i=0; i<=input.length; i++){
//     newArray.push(input[i]*2)
// }
// console.log(newArray);


// const input = [1, 2, 3 , 4 ,5]

// function transform(i){
//     return i * 2
// }

// const ans = input.map(transform)
// console.log(ans)