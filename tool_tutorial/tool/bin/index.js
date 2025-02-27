#! /usr/bin/env node
const arg = require("arg");
const path = require("path");
const pkgUp = require("package-up");
const chalk = require("yoctocolors-cjs");
const ajv = require("ajv");
const getConfig = require("../src/config/config-mgr.js"); 
const start = require("../src/commands/start.js"); 
const logger = require("../src/config/lodger.js")("bin");
try {
    const args = arg({
        '--start' : Boolean,
        '--stop' : Boolean,
    });


    if (args['--start']) {
        const config = getConfig();
        start(config);
    }
    if (args['--stop']) {
        logger.log("Tool Stopped");
    }
}
catch (e) {
    logger.warning(e.message);
    usage();
}
function usage() {
    logger.warning(`tool[CMD] 
        --start\t start the tool
        --stop\t stop the tool\n
        `)
}
