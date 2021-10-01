const { Model } = require('objection');
const Knex = require('knex');
const dotenv = require('dotenv');
dotenv.config();

// Initialize knex.
export const knex = Knex({
    client: 'mysql',
    connection: {
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        port: process.env.PORT
    }
});

// Give the knex instance to objection.
// Model.knex(knex);