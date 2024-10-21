// basic express boiler plate code

const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();

app.use(express.json());
app.post("/todo", async (req , res) => {
    const  createPayLoad = req.body;
    const parsePayLoad = createTodo.safeParse(createPayLoad);
    if(!parsePayLoad.success ) {
        res.status(411).json({
            msg : "You sent a wrong input"
        })
        return;
    }

    await todo.create({
        title : createPayLoad.title,
        description : createPayLoad.description,
        completed: false,
    })
    res.json({
        msg : "todo created successfully"
    })

})

app.get("/todo", async (req , res) => {
   const todos = await todo.find({});
   console.log(todos);

   res.json({
    todos
   })

})

app.put("/completed",async (req , res) => {
    const  updatePayLoad = req.body;
    const parsePayLoad = updateTodo.safeParse(updatePayLoad);
    if(!parsePayLoad.success) {
        res.status(411).json({
            msg : "You sent a wrong input"
        })
        return;
    }

    await todo.udate ({
        _id: req.body._id
    },{
        completed: true
    })
    res.json({
        msg:"Todo mafrk as completed"
    })

})


app.listen(3000);
