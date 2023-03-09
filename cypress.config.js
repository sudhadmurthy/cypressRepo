const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {


    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reporterEnabled: "mochawesome",
      mochawesomeReporterOptions: {
        overwrite: false,
        reportDir: "results/reports/mocha",
        reportFilename: "report",
        reportTitle: "Test Automation Report",
        showPassed: true,
        showFailed: true,
        showSkipped: false,
        reportPageTitle: "Automation Report",
        inline: true,
        code: false,
        charts: true,
        html: true      
      },
      video: false},
  

    specPattern: '**/*.cy.js',
    setupNodeEvents(on, config) {

      require('cypress-mochawesome-reporter/plugin')(on);

      // implement node event listeners here
      // require('cypress-email-results')(on, config, {
      //   email: ['sudhadmurthy@gmail.com'],
      //   transport,
      // })

      allureWriter(on, config);
      return config;
  },
  env: {
      allureReuseAfterSpec: true
  }
  }
});
