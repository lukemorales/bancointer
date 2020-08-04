/* eslint @typescript-eslint/no-var-requires: 0  */
/* eslint import/no-extraneous-dependencies: 0  */
const { override, addWebpackPlugin } = require('customize-cra');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = override(
  isDevelopment && addWebpackPlugin(new ReactRefreshPlugin()),
);
