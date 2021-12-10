
import status from 'http-status';
import { catchAsync } from '../utils/catchAsync';
import { Request, Response } from 'express';
import { todoServices } from '../services/todo.service';
import { Validator } from 'jsonschema';
import todoSchema from '../schema/todo.schema';

const v = new Validator();

const add = catchAsync(async (req: Request, res: Response) => {

    console.log(v.validate(req.body, todoSchema));
    // const data = await todoServices.add(req.body);
    // res.status(status.CREATED).send({ message: data });
});


export const todoController = {
    add
};