var Shelli = require('../shelli');
var path = require('path');

Shelli.prototype.pwd = function() {
    var path = path.resolve(process.cwd());
    return path;
}
