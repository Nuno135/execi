var Shelli = require('../shelli');
var fs = require('fs');

Shelli.prototype.exists = function(data) {
    let bool;

    if (fs.existsSync(data)) {

        bool = true;

    } else {

        bool = false;

    }
    return bool;
}
