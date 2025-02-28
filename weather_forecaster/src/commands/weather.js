const ora = require('ora').default
const chalk = require("yoctocolors-cjs");
const getWeather = require("../utils/weatherUtil.js");
const ipLocation = require("../utils/ipLocation.js");


module.exports = async(args) => {

    const spinner = ora().start();
    try {
        const location = args.location || args.l || await ipLocation();

        const weatherUpdate = await getWeather(location);

        spinner.stop();
        console.log(chalk.magenta(`Current conditions in ${location} is`));
        console.log(chalk.cyan(`${weatherUpdate}`));
    } catch (e) {
        spinner.stop();
        console.error(e);
    }
}
