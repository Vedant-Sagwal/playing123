const chalk = require("yoctocolors-cjs");
const logger = require("../config/lodger.js")("config:start");

module.exports = function start(config) {
    logger.highlight("Starting the App!!");
    logger.debug(("Received config in start"), config);
}
