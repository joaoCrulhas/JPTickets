/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import mongoose from 'mongoose';

const driver = 'mongodb://root:root123@ds119304.mlab.com:19304/jptickets';

class Database {
  constructor() {
    this._connect();
  }
  _connect() {
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
