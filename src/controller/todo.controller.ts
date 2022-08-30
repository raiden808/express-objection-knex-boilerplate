
import status from 'http-status';
import { catchAsync } from '../utils/catchAsync';
import { Request, Response } from 'express';
import { todoServices } from '../services/todo.service';
import { Validator } from 'jsonschema';
import { todoSchema } from '../schema/todo.schema';

const v = new Validator();

const add = catchAsync(async (req: Request, res: Response) => {

    console.log('req body: ', req.body);

    const todoValidation = v.validate(req.body, todoSchema.add)
    const errors = todoValidation.errors.map(e => e.stack);

    if (errors.length != 0) {

        console.log(errors);

        res.status(status.BAD_REQUEST).send({ message: errors });
    } else {
        const data = await todoServices.add(req.body);
        res.status(status.CREATED).send({ message: data });
    }

});

const update = catchAsync(async (req: Request, res: Response) => {

    // extract it here
    // later on will be replace by as param instead
    const payload = req.body;

    const { id, ...partials } = payload

    const todoValidation = v.validate(req.body, todoSchema.update)
    const errors = todoValidation.errors.map(e => e.stack);

    if (errors.length != 0) {
        res.status(status.BAD_REQUEST).send({ message: errors });
    } else {

        const data = await todoServices.update(id, {id:id, ...partials});
        res.status(status.CREATED).send({ message: payload });
    }

});

const find = catchAsync(async (req: Request, res: Response) => {

    console.log(req.query)

    const data = await todoServices.findAll(req.query);

    res.status(status.CREATED).send(data);

});


export const todoController = {
    add,
    update,
    find
};