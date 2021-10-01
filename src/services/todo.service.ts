import Todo from "../models/todo";

const add = async (payload:string) => {


    return await Todo.query()
    .where('name', 'testerman')
    // .withGraphFetched('children')
    .orderBy('id');;
};


export const todoServices = {
    add,
}