
const properties = {
    "id": { "type": "number" },
    "name": { "type": "string" },
    "task": { "type": "string" },
}


const add = {
    "type": "object",
    properties,
    "required": ["name", "task"]
};

const update = {
    "type": "object",
    properties,
    "required": ["id"]
};


export const todoSchema =  {
    add,
    update
};