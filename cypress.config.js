const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: '**/*.cy.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-email-results')(on, config, {
        email: ['sudhadmurthy@gmail.com'],
      })
      
    },


  },
});
