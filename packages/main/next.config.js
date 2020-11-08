/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const withLess = require('@zeit/next-less');
const lessToJS = require('less-vars-to-js');
const withTM = require('next-transpile-modules')(['core']);

const fs = require('fs');
const path = require('path');

const env = require(`dotenv-defaults`).config({
  path: './.env',
  encoding: 'utf8',
  defaults: './.env.defaults',
});
// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './src/assets/antd-custom.less'), 'utf8'),
);

module.exports = withTM(
  withLess({
    lessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars: themeVariables, // make your antd custom effective
    },
    webpack: (config, { isServer }) => {
      if (isServer) {
        const antStyles = /(antd\/.*?\/style).*(?<![.]js)$/;
        const origExternals = [...config.externals];
        config.externals = [
          (context, request, callback) => {
            if (request.match(antStyles)) return callback();
            if (typeof origExternals[0] === 'function') {
              origExternals[0](context, request, callback);
            } else {
              callback();
            }
          },
          ...(typeof origExternals[0] === 'function' ? [] : origExternals),
        ];

        config.module.rules.unshift({
          test: antStyles,
          use: 'null-loader',
        });
      }
      config.module.rules.unshift({
        test: /\.css$/,
        use: 'css-loader',
      });

      return config;
    },

    resolve: {
      modules: ['node_modules'],
    },
    env: env.parsed,
  }),
);
