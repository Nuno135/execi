var Execi = require('../execi');
var get = require('is-reachable');
var utils = require('../utils');

Execi.prototype.wget = function(url) {
    if (url && typeof url !== 'string')
        throw new TypeError('Invalid String.');

    if (!url) throw new Error('Invalid argument.');
    var err;

    get(url).then(reachable => {
        if (reachable === false) {
            err = 'err: website is down or does not exist.';
            console.log(err)
        } else {
            utils.spawn('wget', url);
        }
    })
}
