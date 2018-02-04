var Execi = require('./src/execi');

module.exports = {
  // Methods
  exec: require('./src/methods/exec'),
  echo: require('./src/methods/echo'),
  ls: require('./src/methods/ls'),
  cd: require('./src/methods/cd')
};

module.exports = new Execi();
