var Execi = require('../execi');

Execi.prototype.echo = function(data) {
  if (typeof data !== 'string')
            throw new Error('Invalid string');
            
  console.log(data);
}
