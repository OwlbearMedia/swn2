var sqlite3 = require('sqlite3').verbose();
var fs = require('fs');
var swnDB = './swn.sqlite';

exports.get = function(id, table, callback) {
    fs.exists(swnDB, function(exists) {
        if(exists) {
            var db = new sqlite3.Database(swnDB);
            var statement = 'SELECT * FROM ' + table + ' WHERE id = ?';

            db.serialize(function() {
                db.get(statement, id, callback);
            });

            db.close();
        }
    });

}

exports.getAll = function(table, callback) {
    fs.exists(swnDB, function(exists) {
        if(exists) {
            var db = new sqlite3.Database(swnDB);
            var statement = 'SELECT * FROM ' + table;

            db.serialize(function() {
                db.all(statement, callback);
            });

            db.close();
        }
    });
};