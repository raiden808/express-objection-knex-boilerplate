import { development } from "../../knexfile";
const Knex = require('knex');


// Initialize knex.
export const knex = Knex(development);