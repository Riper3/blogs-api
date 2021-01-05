const db = require('../config/db.js');

db.queryPlain = (sql) => {
    return new Promise((resolve, reject) => {
      db.query(sql, (err, result, fields) => {
        if (err) reject(err);
        resolve(result);
      });
    });
};

db.queryWhere = (sql, values) => {
    return new Promise((resolve, reject) => {
      db.query(sql, values, (err, result, fields) => {
        if (err) reject(err);
        resolve(result);
      });
    });
};

module.exports = db;
