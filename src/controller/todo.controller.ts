
import status from 'http-status';
import { catchAsync } from '../utils/catchAsync';
const todoService = require('../services/todo.service')
import { Request, Response } from 'express';

const add = catchAsync(async (req:Request, res:Response) => {
    const test = await todoService.create();
    // const tokens = await tokenService.generateAuthTokens(user);
    res.status(status.CREATED).send({ add: test });
});

export const todoController = {
    add
};