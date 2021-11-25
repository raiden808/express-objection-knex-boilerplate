
import status from 'http-status';
import { catchAsync } from '../utils/catchAsync';
import { Request, Response } from 'express';
import { todoServices } from '../services/todo.service';

const add = catchAsync(async (req: Request, res: Response) => {

    const data = await todoServices.add(req.body);
    res.status(status.CREATED).send({ message: data });
});


export const todoController = {
    add
};