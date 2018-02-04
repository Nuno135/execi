var Shelli = require('../shelli');

Shelli.prototype.echo = function(data) {
  if (typeof data !== 'string')
            throw new Error('Invalid string');
            
  console.log(data);
}
