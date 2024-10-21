// basic express boiler plate code 

const express = require("express");
const app = express();
const types = require("types.js")

app.use(express.json());
app.post("/todo", (req , res) => {

})
app.get("/todo", (req , res) => {
    
})
app.put("/completed", (req , res) => {
    
})
