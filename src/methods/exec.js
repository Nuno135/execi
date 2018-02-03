var Execi = require('../execi');
var { exec } = require('child_process');

Execi.prototype.exec = function(data) {
  if (typeof data !== 'string')
            throw new Error('Invalid string');
        exec(data, (err, stdout, stderr) => {
            if (err) {
              // Failed to execute command
              return;
            }
            console.log(stdout);
          }); 
}
