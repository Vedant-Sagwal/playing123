const pkgUp = require("package-up");
const Ajv = require("ajv");
const ajv = new Ajv();
const schema = require("./schema.json");
const logger = require("./lodger.js")("config:mgr");


module.exports = function getConfig() {
    const pkgPath = pkgUp.packageUpSync({cwd : process.cwd()});
    const pkg = require(pkgPath);
    if (pkg) {
        const isValid = ajv.validate(schema, pkg)
        if (!isValid) {
            logger.highlight("tool config found");
        }
        else {
            logger.warning("Invalid Configuration")
            logger.warning(ajv.errors);
            process.exit(1);
        }
        return pkg;
    }
    else {
        logger.warning("No Configuration found")
        return {"port" : 1234};
    }

} 
