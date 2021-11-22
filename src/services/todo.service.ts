import Todo from "../models/todo";

const add = async (payload: any) => {

    return await Todo.query()
        .insert(payload);
};


export const todoServices = {
    add,
}