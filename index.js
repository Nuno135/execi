var Execi = require('./src/execi');

module.exports = {
  // Methods
  exec: require('./src/methods/exec'),
  echo: require('./src/methods/echo')
};

module.exports = new Execi();
