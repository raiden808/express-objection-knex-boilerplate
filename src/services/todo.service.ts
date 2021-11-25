import Todo from "../models/todo";

// working, but just a basic version of create
// const add = async (payload: any) => {

//     return await Todo.query()
//         .insert(payload);
// };


const add = async (payload: any) => {

    try {
        const returnValue = await Todo.transaction(async trx => {
            // Here you can use the transaction.

            const data = await Todo.query(trx).insert(
                payload
            );

            // Whatever you return from the transaction callback gets returned
            // from the `transaction` function.
            return data;
        });

        return returnValue
        // Here the transaction has been committed.
    } catch (err) {
        console.log(err)
        return err
        // Here the transaction has been rolled back.
    }
};

export const todoServices = {
    add,
}