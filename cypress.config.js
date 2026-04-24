const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: true,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    trashAssetsBeforeRuns: true,
    specPattern: "cypress/**/*.cy.js",
  },
});
