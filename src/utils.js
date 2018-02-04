class Utils {
    static spawn(method, args) {
        var spawn = require('child_process').spawn;
        var ls = spawn(method, [args]);

            ls.stderr.on('data', function(data) {
                console.log(data.toString());
            });

            ls.stdout.on('data', function (data) {
                console.log(data.toString());
              });
    }

    static exec(data) {
        var { exec } = require('child_process');
        exec(data, (err, stdout, stderr) => {
            if (err) {
              // Failed to execute command
              return;
            }
            console.log(stdout);
          }); 
    }
}

module.exports = Utils;
