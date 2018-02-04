var Shelli = require('../shelli');
var os = require('os');
var fs = require('fs');

Shelli.prototype.cd = function(dir) {
    if (dir && typeof dir !== 'string')
            throw new Error('Invalid string');

    if (!dir) dir = os.homedir();

    var err;

    if (!fs.existsSync(dir)) {
      err = 'cd: no such file or directory: ' + dir;
      console.log(err)
    } else {
      process.chdir(dir);
    }
  return '';
}
