var Execi = require('../execi');
var shell = new Execi();
var fs = require('fs');

Execi.prototype.cat = function(data) {
    if (typeof data !== 'string')
        throw new Error('Invalid string');

    if (!fs.existsSync(data)) {
        err = 'cat: no such file: ' + data;
        console.log(err)
    } else {
        shell.exec('cat ' + data);
    }
}
