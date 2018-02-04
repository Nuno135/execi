var Shelli = require('../shelli');

Shelli.prototype.clear = function() {
    return process.stdout.write('\033c');
}
