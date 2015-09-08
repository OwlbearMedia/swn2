var db = require('../db');

exports.get = function(id, callback) {
    db.get(id, 'QUICK_CORP_NAME', function(err, corp) {
        callback(err, {
            corporation: corp
        });
    });
}

exports.getAll = function(callback) {
    db.getAll('QUICK_CORP_NAME', function(err, corps) {
        callback(err, {
            corporations: corps
        });
    });
}