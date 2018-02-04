var Shelli = require('../shelli');

Shelli.prototype.pwd = function() {
    var path = process.pwd();
    return path;
}
