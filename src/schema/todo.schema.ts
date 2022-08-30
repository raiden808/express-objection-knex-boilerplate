
const properties = {
    "id": { "type": "number" },
    "title": { "type": "string" },
    "details": { "type": "string" },
    "status": {"type": "string"}
}


const add = {
    "type": "object",
    properties,
    "required": ["title","details", "status"]
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