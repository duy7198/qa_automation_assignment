import {Then} from "cypress-cucumber-preprocessor/steps"
import Account from './../pages/account-page'

Then('Account - Verify page is displayed with title {string}', (title) => {
    Account.isPageDisplayedWithTitle(title)
})