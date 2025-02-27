const chalk = require("yoctocolors-cjs");

module.exports = function lodger(name) {
    return {
        log : (...args) => console.log(chalk.gray(...args)),
        warning : (...args) => console.log(chalk.yellow(...args)),
        highlight : (...args) => console.log(chalk.bgCyanBright(...args)),
        debug : console.log
    }
}
