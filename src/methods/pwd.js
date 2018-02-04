var Shelli = require('../shelli');

Shelli.prototype.pwd = function() {
    var path = process.env.PWD;
    console.log(path);
}
