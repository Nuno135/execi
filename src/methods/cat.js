var Shelli = require('../shelli');
var fs = require('fs');
var utils = require('../utils');

Shelli.prototype.cat = function(data) {
    
    if (typeof data !== 'string')
        throw new Error('Invalid string');

    if (!fs.existsSync(data)) {
        
        err = 'cat: no such file: ' + data;
        
        console.log(err)
        
    } else {
        
        utils.spawn('cat', data);
        
    }
}
