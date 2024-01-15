const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //increased page load timeout to give more time for the webpage to load
    pageLoadTimeout: 100000,
    baseUrl: 'https://www.shipserv.com/'
  },
});
