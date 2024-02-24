const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cypress/cucumber-json",
  reportPath: "./cypress/cucumber-reports",
  metadata: {
    browser: {
      name: "chrome",
      version: "122",
    },
    device: "Local test machine",
    platform: {
      name: "ubuntu",
      version: "16.04",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Cypress framework" },
      { label: "Release", value: "1.0.0" }
    ],
  },
});