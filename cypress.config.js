const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    specPattern: '**/*.cy.js',
    setupNodeEvents(on, config) {


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


  },
});
