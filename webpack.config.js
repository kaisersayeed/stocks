const webpackMerge = require('webpack-merge');
const commonConfig = require('./config/webpack.common.config');

module.exports = (env) => {
    const envConfig = require(`./config/webpack.${env.env}.config`);
    return webpackMerge(commonConfig, envConfig);
};