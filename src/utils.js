var mkdir = require('mkdirp');
var fs = require('fs');

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

    static mkdir(data) {
        mkdir(data, function(err) {

        });
    }

    static find(data) {
        let msg;
        let err;

        if (fs.existsSync(data)) {

            msg = 'find: this file exists';
            console.log(msg);

        } else {

        err = 'find: this file does not exist';
        console.log(err);

        }
    }
}

module.exports = Utils;
