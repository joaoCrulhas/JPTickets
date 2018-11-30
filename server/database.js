/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import mongoose from 'mongoose';

require('dotenv-safe').config();

const driver = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds119304.mlab.com:19304/jptickets`;

class Database {
  constructor() {
    this._connect();
  }
  _connect() {
    console.log(driver);
    mongoose.connect(driver)
      .then(() => {
        console.log('Database connection successful');
      })
      .catch((err) => {
        console.error(`Database connection error ${err}`);
      });
  }
}
module.exports = new Database()
;
