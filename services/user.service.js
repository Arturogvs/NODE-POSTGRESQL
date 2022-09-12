const boom = require('@hapi/boom');
const { response } = require('express');
//const getConnection = require('../libs/postgres');
const pool = require('../libs/postgres_pool');

class UserService {
  constructor() {}

  async create(data) {
    return data;
  }

  async find() {
    //const client = await getConnection();
    //const responseDB = await client.query('SELECT * FROM tasks');
    const query = "SELECT * FROM tasks" ;
    const responseDB = await pool.query(query);
    console.log(responseDB);
    return responseDB.rows;

  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;
