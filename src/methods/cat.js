var Execi = require('../execi');
var fs = require('fs');
var spawn = require('../utils/spawn');

Execi.prototype.cat = function(data) {
    if (typeof data !== 'string')
        throw new Error('Invalid string');

    if (!fs.existsSync(data)) {
        err = 'cat: no such file: ' + data;
        console.log(err)
    } else {
        spawn('cat', data);
    }
}
