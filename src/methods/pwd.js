var Execi = require('../execi');

Execi.prototype.pwd = function() {
    var path = process.pwd();
    return path;
}
