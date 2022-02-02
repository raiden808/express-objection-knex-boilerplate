
const properties = {
    "id": { "type": "number" },
    "task": { "type": "string" },
    "status": {"type": "string"}
}


const add = {
    "type": "object",
    properties,
    "required": ["task", "status"]
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