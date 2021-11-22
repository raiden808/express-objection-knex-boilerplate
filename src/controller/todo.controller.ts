
import status from 'http-status';
import { catchAsync } from '../utils/catchAsync';
import { Request, Response } from 'express';
import { todoServices } from '../services/todo.service';

const add = catchAsync(async (req: Request, res: Response) => {

    console.log('rquest body', req.body);

    const test = await todoServices.add(req.body);

    // const tokens = await tokenService.generateAuthTokens(user);
    res.status(status.CREATED).send({ value: test });
});


export const todoController = {
    add
};