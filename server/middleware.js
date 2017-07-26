const db = require('./db/models/index');

const addDatabase = (req, res, next) => {
  req.db = db;
  next();
}

module.exports = {
  addDatabase
}
