var fs = require('fs');
var path = require('path');
var extend = require('util')._extend

var argv = require('optimist').argv;

var configName = 'config.json';

delete argv.$0;
delete argv._;

function writeConfig(config) {
    fs.writeFile(configName, JSON.stringify(config, null, 4), function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("config saved to " + configName);
            console.log(config);
        }
    });
}

function readConfig() {
    var oldConfig;

    try {
        oldConfig = fs.readFileSync(path.join(process.cwd(), configName), 'utf-8');
        oldConfig = JSON.parse(oldConfig);
    } catch (e) {
        return {};
        console.error(e)
    }
    return oldConfig;
}

var oldConfig = readConfig();

var config = extend(oldConfig, argv);

writeConfig(config);