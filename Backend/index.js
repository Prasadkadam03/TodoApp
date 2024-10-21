// basic express boiler plate code 

const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();

app.use(express.json());
app.post("/todo", (req , res) => {
    const  createPayLoad = req.body;
    const parsePayLoad = createTodo.safeParse(createPayLoad);
    if(!parsePayLoad.success ) {
        res.status(411).json({
            msg : "You sent a wrong input"
        })
        return;
    }

})

app.get("/todo", (req , res) => {
   
})

app.put("/completed", (req , res) => {
    const  updatePayLoad = req.body;
    const parsePayLoad = updateTodo.safeParse(updatePayLoad);
    if(!parsePayLoad.success) {
        res.status(411).json({
            msg : "You sent a wrong input"
        })
        return;
    }
})
