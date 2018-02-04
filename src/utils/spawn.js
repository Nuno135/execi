function Spawn(method, args) {
    var spawn = require('child_process').spawn;
    var ls = spawn(method, [args]);

            ls.stderr.on('data', function(data) {
                console.log(data.toString());
            });

            ls.stdout.on('data', function (data) {
                console.log(data.toString());
              });
};

module.exports = Spawn;
