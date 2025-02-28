const minimist = require("minimist");

module.exports = function () {
    const args = minimist(process.argv.slice(2));
    var cmd = args._[0] || 'help';

    if (args.version || args.v) {
        cmd = "version";
    }

    if (args.help || args.h) {
        cmd = "help";
    }
    if (args.location || args.l) {
        cmd = "location";
    }

    switch(cmd) {
        case 'today' : 
            require("../commands/weather.js")(args);
            break;
        case 'help' : 
            require("../commands/help.js")(args);
            break;
        case 'version' : 
            require("../commands/version.js")(args);
            break;       
        case 'location' : 
            require("../commands/weather.js")(args);
            break;
        default : 
            console.error(`${cmd} is not valid command!!`);
            require("../commands/help.js")(args);
            break;
    }
}

