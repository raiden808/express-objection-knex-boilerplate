import express from "express";

import { todoController } from "../controller/todo.controller";

const router = express.Router();

router.post('/create', todoController.add);