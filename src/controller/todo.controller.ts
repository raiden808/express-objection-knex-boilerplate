
import status from 'http-status';
import { catchAsync } from '../utils/catchAsync';
import { Request, Response } from 'express';
import { todoServices } from '../services/todo.service';

const add = catchAsync(async (req:Request, res:Response) => {
    const test = await todoServices.add('test');
    // const tokens = await tokenService.generateAuthTokens(user);
    res.status(status.CREATED).send({ value: test });
});

export const todoController = {
    add
};