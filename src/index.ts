
import express from "express";
import todoRouter from  "./routes/todo.routes"
const app = express()


app.use('todo',todoRouter);

app.listen(3000, () => {
    console.log('Server is up on 3000')
})