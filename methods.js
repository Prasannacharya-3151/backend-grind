const express = requires("express")

const app = express()

const POST = 3000;

let items = [
    {id:1, name:"Burger"},
    {id:2, name:"Pizza"},
    {id:3, name:"Pasta"},
    {id:4, name:"Salad"}
]

app.get("/items", (req,res) => {
    res.json(items)
})

app.listen(POST, () => {
    console.log(`Server is running on http://localhost:${POST}`)
})