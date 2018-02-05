var Shelli = require('../shelli');

Shelli.prototype.pwd = function() {
    var path = process.cwd();
    return path;
}
