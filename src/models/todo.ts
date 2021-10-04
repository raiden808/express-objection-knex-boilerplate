import { Model } from 'objection';
import { knex } from '../database';

// Give the knex instance to objection.
// Model.knex(knex);
Model.knex(knex)

class Todo extends Model {
  static get tableName() {
    return 'todo';
  }
}

export default Todo;