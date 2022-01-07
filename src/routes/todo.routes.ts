import express from "express";

import { todoController } from "../controller/todo.controller";

const todoRouter = express.Router();

todoRouter.post('/create', todoController.add);
todoRouter.put('/update', todoController.update);
todoRouter.get('/find', todoController.find);


export default todoRouter;