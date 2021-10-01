import { Model } from 'objection';
import { knex } from '../database';

Model.knex(knex)

class Todo extends Model {
  static get tableName() {
    return 'todo';
  }
}

export default Todo;