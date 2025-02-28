const chalk = require("yoctocolors-cjs")
const { version } = require("../../package.json");

module.exports = (args) => {
  console.log(`v${version}`)
}
