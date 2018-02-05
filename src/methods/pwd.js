var Shelli = require('../shelli');
var path = require('path');

Shelli.prototype.pwd = function() {
    var path = process.cwd();
    return path;
}
