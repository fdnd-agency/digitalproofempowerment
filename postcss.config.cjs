const autoprefixer = require("autoprefixer");
const postcssPresetEnv = require("postcss-preset-env");
const csso = require("postcss-csso");
const postcssGlobalData = require("@csstools/postcss-global-data");

const config = {
  plugins: [
    postcssPresetEnv({
      stage: 3,
      features: {
        "nesting-rules": true,
      },
    }),
    autoprefixer(),
    csso(),
  ],
};

module.exports = config;
