const { defineConfig } = require("cypress");

module.exports = defineConfig({
  nodeVersion: "bundled",

  eslintConfig: {
    "extends": [
    "plugin:cypress/recommended"
    ]
    },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
