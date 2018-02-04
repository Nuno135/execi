var Execi = require('../execi');
var fs = require('fs');
var utils = require('../utils');

Execi.prototype.cat = function(data) {
    
    if (typeof data !== 'string')
        throw new Error('Invalid string');

    if (!fs.existsSync(data)) {
        
        err = 'cat: no such file: ' + data;
        
        console.log(err)
        
    } else {
        
        utils.spawn('cat', data);
        
    }
}
