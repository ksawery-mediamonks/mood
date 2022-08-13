const path = require("path");
const process = require("process");

const defaultSassOptions = {
  includePaths: [path.join(__dirname, "styles")],
  prependData: `
        @import "styles/core/functions.scss";
        @import "styles/core/mixins.scss";
        @import "styles/core/variables.scss";
    `,
};

const defaultEslintConfig = {
  ignoreDuringBuilds: true,
};

const language = {
  locales: ["en"],
  defaultLocale: "en",
};

const defaultWebpackConfig = (config) => {
  config.resolve.modules.push(path.resolve("./src"));
  config.module.rules.push({
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ["@svgr/webpack"],
  });
  return config;
};

function getConfig(options) {
  return Object.assign(options, {
    basePath: process.env.BASE_PATH,
    trailingSlash: true,
  });
}

// module.exports = {
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/i,
//       issuer: /\.[jt]sx?$/,
//       use: ["@svgr/webpack"],
//     });

//     return config;
//   },
// };

module.exports = (phase) => {
  return getConfig({
    sassOptions: defaultSassOptions,
    webpack: defaultWebpackConfig,
    eslint: defaultEslintConfig,
    images: {
      domains: ["images.ctfassets.net"],
    },
    poweredByHeader: false,
    i18n: language,
  });
};
