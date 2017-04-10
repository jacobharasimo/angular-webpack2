const helpers = require('./helpers');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const PUBLIC = helpers.hasProcessFlag('public');
const PORT = process.env.PORT || 8000;
const HMR = helpers.hasProcessFlag('hot');


var METADATA = {
    title: 'Angular Webpack',
    baseUrl: '/',
    isDevServer: helpers.isWebpackDevServer(),
    host: HOST,
    port: PORT,
    ENV: ENV,
    HMR: HMR,
    public: PUBLIC
};

module.exports = METADATA;
