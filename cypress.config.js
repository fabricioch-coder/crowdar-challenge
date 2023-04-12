const { defineConfig } = require("cypress");

/*
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
*/

module.exports = defineConfig({

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },
  screenshotsFolder: "mochawesome-report/assets",
  reporter: 'mochawesome',
  screenshotOnRunFailure: true,
  screenshotOnHeadlessFailure: true,
  reporterOptions: {
    reportDir: 'cypress/reports',
    embeddedScreenshots: true,
    charts: true,
    overwrite: false,
    html: false,
    json: true,
  }
})

