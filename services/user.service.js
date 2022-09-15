const boom = require('@hapi/boom');
const { response } = require('express');
//const getConnection = require('../libs/postgres');
//const pool = require('../libs/postgres_pool');
//const sequelize = require('../libs/sequelize');
const { models } = require('./../libs/sequelize')

class UserService {
  constructor() {}

  async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
  }

  async find() {
    //const client = await getConnection();
    //const responseDB = await client.query('SELECT * FROM tasks');
    //const query = "SELECT * FROM users" ;
    //const responseDB = await pool.query(query);
    //const [data] = await sequelize.query(client);
    const data = await models.User.findAll();
    
    
    return data;

  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if(!user){
      throw boom.notFound('user not found');
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const response = user.update(changes);
    return response;
  }

  async delete(id) {

    const user = await this.findOne(id);
    await user.destroy();
    return {id};
  }
}

module.exports = UserService;
