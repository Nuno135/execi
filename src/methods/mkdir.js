var Shelli = require('../shelli');
var utils = require('../utils');
var fs = require('fs');
var mkdir = require('mkdirp');

Shelli.prototype.mkdir = async function(data) {

    var msg;

    if (!fs.existsSync(data)) {

        var dir = data.split('/');

        if (dir.length > 1) {

            mkdir(data, function(err) {

            });

        } else {

            utils.exec('mkdir ' + data);

        }
    } else {

        msg = 'mkdir: ' + data + ': File exists';
        
        console.log(msg);

    }
}
