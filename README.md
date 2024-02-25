# **Web automation test using Cypress framework**

## **Requirements**

### NodeJS: 
Refer this link to install: https://nodejs.org/en/ (prefer version 20.11.0)

### Cypress:
Refer this link to install: https://docs.cypress.io/guides/getting-started/installing-cypress (prefer version 13.6.5)

```
cd /your/project/path
npm install cypress --save-dev
```

### Cucumber plugin:
Refer this link to install: https://www.npmjs.com/package/cypress-cucumber-preprocessor (prefer version 4.3.1)

```
npm i cypress-cucumber-preprocessor --save-dev
```

### Cucumber report plugin:
Refer this link to install: https://www.npmjs.com/package/multiple-cucumber-html-reporter (prefer version 3.6.2)

```
npm i multiple-cucumber-html-reporter --save-dev
```

(*) Add `--save-dev` flag to install locally as a dev dependency for your project.

## **Get started**

### Run test:
- Headed with dev tool
    ```
    npm run open
    ```
- Headless with Electron (default browser)
    ```
    npm run test
    ```
- Headless with Chrome
    ```
    npm run chrome
    ```

### Report:
Generate and open report after the test is finished

```
npm run report
```