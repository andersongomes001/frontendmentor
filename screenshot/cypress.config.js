const { defineConfig } = require("cypress");

module.exports = defineConfig({
  screenshotsFolder: "../assets/images",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
