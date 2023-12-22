const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Configuraciones de Cypress
  // Otras configuraciones...
  chromeWebSecurity: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
