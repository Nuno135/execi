var Execi = require('../execi');
var os = require('os');

Execi.prototype.cd = function(dir) {
    if (dir && typeof dir !== 'string')
            throw new Error('Invalid string');

    if (!dir) dir = os.homedir();

    try {
  process.chdir('src');
    } catch (err) {
  console.error(`chdir: ${err}`);
    }
}
