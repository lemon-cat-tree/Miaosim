const path = require('path');

module.exports = {
    target: 'Weapp',
    output: 'dist',
    entry: 'src/app.wpy',
    wpyExt: '.wpy',
    eslint: false,
    cliLogs: true,
    compilers: {
        less: {
            compress: false
        },
        babel: {
            sourceMap: true,
            presets: ['env'],
            plugins: [
                'transform-class-properties',
                'transform-decorators-legacy',
                'transform-object-rest-spread',
                'transform-export-extensions'
            ]
        }
    }
};