var Execi = require('../exec');
var fs = require('fs');

Execi.prototype.ls = function() {
  fs.readdir('./', function(err, items) {
    console.log(items);
 
    for (var i=0; i<items.length; i++) {
        console.log(items[i]);
    }
});
}
