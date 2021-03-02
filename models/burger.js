const orm = require('../config/orm.js');

const burger = {
    all(cb) {
      orm.selectAll((res) => cb(res));
    },
    create(name, cb) {
      orm.insertOne(name, (res) => cb(res));
    },
    update(id, cb) {
      orm.updateOne(id, (res) => cb(res));
    },
  };


  module.exports = burger;