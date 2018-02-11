var Shelli = require('../shelli');
var utils = require('../utils');

Shelli.prototype.find = function(data) {
    if (!data) return console.log('Invalid arguments.');

    utils.find(data);
}
