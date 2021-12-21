import express from "express";

import { todoController } from "../controller/todo.controller";

const todoRouter = express.Router();

todoRouter.post('/create', todoController.add);
todoRouter.post('/update', todoController.update);


export default todoRouter;