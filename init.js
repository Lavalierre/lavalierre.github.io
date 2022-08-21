const { execSync } = require("child_process");

const main = () => {
    try {
        // clone fork
        execSync('git clone https://github.com/SnosMe/awakened-poe-trade.git')

        // build app and move it to page root
        execSync('cd awakened-poe-trade/renderer && npm install && npm run make-index-files && npm run build');
        execSync('cp -r awakened-poe-trade/renderer/dist/. .');
    } finally {
        // cleanup
        execSync('rm -rf awakened-poe-trade-web-version')
    }
};

process.on('SIGTERM', () => {
    // cleanup in case of app termination
    execSync('rm -rf awakened-poe-trade')
});

main();